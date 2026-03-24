import { useState, useEffect, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "@/lib/auth";
import { supabase } from "@/lib/supabaseClient";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Loader2, User as UserIcon, Mail, Save, Camera, CalendarDays, Settings } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const UserProfile = () => {
  const { user, isLoading } = useAuth();
  const [fullName, setFullName] = useState("");
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    if (isLoading) return;
    if (!user) {
      navigate("/auth");
      return;
    }
    setFullName(user.full_name || "");
    fetchProfile();
  }, [user, isLoading, navigate]);

  const fetchProfile = async () => {
    if (!user) return;
    const { data } = await supabase
      .from("profiles")
      .select("avatar_url, full_name")
      .eq("id", user.id)
      .single();
    if (data) {
      if (data.avatar_url) setAvatarUrl(data.avatar_url);
      if (data.full_name) setFullName(data.full_name);
    }
  };

  const handleAvatarUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !user) return;
    if (file.size > 2 * 1024 * 1024) {
      toast({ title: "File too large", description: "Please upload an image under 2MB.", variant: "destructive" });
      return;
    }
    setIsUploading(true);
    try {
      const ext = file.name.split(".").pop();
      const filePath = `${user.id}/avatar.${ext}`;
      const { error: uploadError } = await supabase.storage
        .from("avatars")
        .upload(filePath, file, { upsert: true });
      if (uploadError) throw uploadError;
      const { data: { publicUrl } } = supabase.storage
        .from("avatars")
        .getPublicUrl(filePath);
      const urlWithCacheBust = `${publicUrl}?t=${Date.now()}`;
      await supabase.from("profiles").update({ avatar_url: urlWithCacheBust }).eq("id", user.id);
      setAvatarUrl(urlWithCacheBust);
      toast({ title: "Photo Updated", description: "Your profile photo has been updated." });
    } catch (err: any) {
      toast({ title: "Upload Failed", description: err.message, variant: "destructive" });
    } finally {
      setIsUploading(false);
    }
  };

  const handleSave = async () => {
    if (!user) return;
    setIsSaving(true);
    try {
      const { error } = await supabase
        .from("profiles")
        .update({ full_name: fullName })
        .eq("id", user.id);
      if (error) throw error;
      await supabase.auth.updateUser({ data: { full_name: fullName } });
      toast({ title: "Profile Updated", description: "Your profile has been saved." });
    } catch (err: any) {
      toast({ title: "Error", description: err.message, variant: "destructive" });
    } finally {
      setIsSaving(false);
    }
  };

  if (!user) {
    return <div className="min-h-screen flex items-center justify-center"><Loader2 className="h-8 w-8 animate-spin text-primary" /></div>;
  }

  const initials = (fullName || user.email).slice(0, 2).toUpperCase();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container px-4 md:px-6 py-8 mt-16">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">My Account</h1>

          {/* Quick Navigation */}
          <div className="grid grid-cols-3 gap-3 mb-8">
            <Card className="bg-primary/5 border-primary/20 cursor-default">
              <CardContent className="p-4 flex flex-col items-center text-center gap-2">
                <UserIcon className="h-6 w-6 text-primary" />
                <span className="text-sm font-medium text-primary">Profile</span>
              </CardContent>
            </Card>
            <Link to="/user-bookings">
              <Card className="hover:bg-muted/50 transition-colors cursor-pointer">
                <CardContent className="p-4 flex flex-col items-center text-center gap-2">
                  <CalendarDays className="h-6 w-6 text-muted-foreground" />
                  <span className="text-sm font-medium text-muted-foreground">Bookings</span>
                </CardContent>
              </Card>
            </Link>
            <Link to="/settings">
              <Card className="hover:bg-muted/50 transition-colors cursor-pointer">
                <CardContent className="p-4 flex flex-col items-center text-center gap-2">
                  <Settings className="h-6 w-6 text-muted-foreground" />
                  <span className="text-sm font-medium text-muted-foreground">Settings</span>
                </CardContent>
              </Card>
            </Link>
          </div>

          {/* Avatar Section */}
          <Card className="mb-6">
            <CardContent className="p-6 flex flex-col items-center gap-4">
              <div className="relative group">
                <Avatar className="h-28 w-28 border-4 border-primary/20">
                  <AvatarImage src={avatarUrl || undefined} alt={fullName} />
                  <AvatarFallback className="text-2xl bg-primary/10 text-primary">{initials}</AvatarFallback>
                </Avatar>
                <button
                  onClick={() => fileInputRef.current?.click()}
                  disabled={isUploading}
                  className="absolute bottom-0 right-0 bg-primary text-primary-foreground rounded-full p-2 shadow-lg hover:opacity-90 transition-opacity"
                >
                  {isUploading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Camera className="h-4 w-4" />}
                </button>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleAvatarUpload}
                />
              </div>
              <div className="text-center">
                <h2 className="text-xl font-semibold">{fullName || "User"}</h2>
                <p className="text-sm text-muted-foreground">{user.email}</p>
              </div>
            </CardContent>
          </Card>

          {/* Profile Info */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><UserIcon className="h-5 w-5" />Account Information</CardTitle>
              <CardDescription>Manage your account details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email" className="flex items-center gap-2"><Mail className="h-4 w-4" />Email Address</Label>
                <Input id="email" type="email" value={user.email} disabled className="bg-muted" />
                <p className="text-xs text-muted-foreground">Email cannot be changed</p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name</Label>
                <Input id="fullName" type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="Enter your full name" />
              </div>
              <Button onClick={handleSave} disabled={isSaving} className="w-full sm:w-auto">
                {isSaving ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" />Saving...</> : <><Save className="mr-2 h-4 w-4" />Save Changes</>}
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default UserProfile;
