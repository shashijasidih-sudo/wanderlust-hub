import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Eye, EyeOff, Loader2, Plane, MapPin, Compass, Palmtree, Mountain, Waves, Sun, Camera, Luggage } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { z } from "zod";

const loginSchema = z.object({
  email: z.string().trim().email({ message: "Invalid email address" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
});

const signupSchema = z.object({
  fullName: z.string().trim().min(2, { message: "Full name must be at least 2 characters" }).max(100, { message: "Full name must be less than 100 characters" }),
  email: z.string().trim().email({ message: "Invalid email address" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
  acceptTerms: z.literal(true, { errorMap: () => ({ message: "You must accept the terms and conditions" }) }),
});

// Floating travel icons component
const FloatingIcons = () => {
  const icons = [
    { Icon: Plane, delay: "0s", duration: "20s", left: "5%", size: 24 },
    { Icon: MapPin, delay: "2s", duration: "18s", left: "15%", size: 20 },
    { Icon: Compass, delay: "4s", duration: "22s", left: "25%", size: 22 },
    { Icon: Palmtree, delay: "1s", duration: "19s", left: "75%", size: 26 },
    { Icon: Mountain, delay: "3s", duration: "21s", left: "85%", size: 24 },
    { Icon: Waves, delay: "5s", duration: "17s", left: "45%", size: 20 },
    { Icon: Sun, delay: "0.5s", duration: "23s", left: "55%", size: 28 },
    { Icon: Camera, delay: "2.5s", duration: "20s", left: "35%", size: 22 },
    { Icon: Luggage, delay: "4.5s", duration: "18s", left: "65%", size: 24 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {icons.map(({ Icon, delay, duration, left, size }, index) => (
        <div
          key={index}
          className="absolute animate-float text-primary/20"
          style={{
            left,
            animationDelay: delay,
            animationDuration: duration,
          }}
        >
          <Icon size={size} />
        </div>
      ))}
    </div>
  );
};

// Travel destinations badge
const DestinationBadge = ({ destination, className }: { destination: string; className?: string }) => (
  <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary ${className}`}>
    <MapPin className="w-3 h-3" />
    {destination}
  </span>
);

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (session?.user) {
          navigate("/");
        }
      }
    );

    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) {
        navigate("/");
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const clearErrors = () => setErrors({});

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    clearErrors();

    const validation = loginSchema.safeParse({ email, password });
    if (!validation.success) {
      const fieldErrors: Record<string, string> = {};
      validation.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as string] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setIsLoading(true);
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email.trim(),
      password,
    });

    setIsLoading(false);

    if (error) {
      toast({
        title: "Login Failed",
        description: error.message === "Invalid login credentials" 
          ? "Invalid email or password. Please try again." 
          : error.message,
        variant: "destructive",
      });
    } else if (data.session) {
      toast({
        title: "Welcome back, traveler! ✈️",
        description: "Ready for your next adventure?",
      });
      navigate("/");
    }
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    clearErrors();

    const validation = signupSchema.safeParse({ fullName, email, password, acceptTerms });
    if (!validation.success) {
      const fieldErrors: Record<string, string> = {};
      validation.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as string] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setIsLoading(true);
    const redirectUrl = `${window.location.origin}/`;

    const { error } = await supabase.auth.signUp({
      email: email.trim(),
      password,
      options: {
        emailRedirectTo: redirectUrl,
        data: {
          full_name: fullName.trim(),
        },
      },
    });

    setIsLoading(false);

    if (error) {
      if (error.message.includes("already registered")) {
        toast({
          title: "Account Exists",
          description: "This email is already registered. Please login instead.",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Signup Failed",
          description: error.message,
          variant: "destructive",
        });
      }
    } else {
      toast({
        title: "Bon Voyage! 🌴",
        description: "Check your email to verify your account and start exploring!",
      });
    }
  };

  const handleGoogleLogin = async () => {
    setIsGoogleLoading(true);
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/`,
      },
    });

    if (error) {
      setIsGoogleLoading(false);
      toast({
        title: "Google Login Failed",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    clearErrors();

    const emailValidation = z.string().trim().email({ message: "Invalid email address" }).safeParse(email);
    if (!emailValidation.success) {
      setErrors({ email: emailValidation.error.errors[0].message });
      return;
    }

    setIsLoading(true);
    const { error } = await supabase.auth.resetPasswordForEmail(email.trim(), {
      redirectTo: `${window.location.origin}/auth`,
    });

    setIsLoading(false);

    if (error) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } else {
      toast({
        title: "Reset Link Sent 📧",
        description: "Check your email for a password reset link.",
      });
      setIsForgotPassword(false);
    }
  };

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setIsForgotPassword(false);
    clearErrors();
    setEmail("");
    setPassword("");
    setFullName("");
    setAcceptTerms(false);
    setRememberMe(false);
  };

  // Forgot Password View
  if (isForgotPassword) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 via-background to-secondary/10 px-4 py-12 relative overflow-hidden">
        <FloatingIcons />
        <Card className="w-full max-w-md shadow-xl border-border/50 animate-fade-in relative z-10 backdrop-blur-sm bg-card/95">
          <CardHeader className="space-y-1 text-center">
            <Link to="/" className="text-2xl font-bold text-primary hover:opacity-80 transition-opacity flex items-center justify-center gap-2">
              <Plane className="w-6 h-6" />
              Yellodae
            </Link>
            <CardTitle className="text-2xl font-semibold mt-4">Reset Password</CardTitle>
            <CardDescription>
              Enter your email and we'll send you a reset link
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleForgotPassword} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="reset-email">Email</Label>
                <Input
                  id="reset-email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={errors.email ? "border-destructive" : ""}
                />
                {errors.email && (
                  <p className="text-sm text-destructive">{errors.email}</p>
                )}
              </div>

              <Button type="submit" className="w-full group" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Reset Link
                    <Plane className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>
            </form>

            <div className="mt-6 text-center text-sm">
              <button
                type="button"
                onClick={() => {
                  setIsForgotPassword(false);
                  clearErrors();
                }}
                className="text-primary hover:underline font-medium inline-flex items-center gap-1"
              >
                ← Back to Sign In
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 via-background to-secondary/10 px-4 py-12 relative overflow-hidden">
      <FloatingIcons />
      
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 hidden lg:block animate-fade-in">
        <div className="flex flex-col gap-2">
          <DestinationBadge destination="Thailand" />
          <DestinationBadge destination="Singapore" className="ml-4" />
          <DestinationBadge destination="Dubai" className="ml-2" />
        </div>
      </div>
      
      <div className="absolute bottom-10 right-10 hidden lg:block animate-fade-in">
        <div className="flex flex-col gap-2 items-end">
          <DestinationBadge destination="Phuket" />
          <DestinationBadge destination="Krabi" className="mr-4" />
          <DestinationBadge destination="Pattaya" className="mr-2" />
        </div>
      </div>

      <Card className="w-full max-w-md shadow-xl border-border/50 animate-fade-in relative z-10 backdrop-blur-sm bg-card/95">
        <CardHeader className="space-y-1 text-center pb-2">
          <Link to="/" className="text-2xl font-bold text-primary hover:opacity-80 transition-opacity flex items-center justify-center gap-2 group">
            <Plane className="w-6 h-6 group-hover:-rotate-12 transition-transform" />
            Yellodae
          </Link>
          
          {!isLogin && (
            <div className="pt-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 text-sm">
                <Sun className="w-4 h-4 text-primary animate-pulse" />
                <span className="font-medium">Your Adventure Awaits!</span>
                <Palmtree className="w-4 h-4 text-primary" />
              </div>
            </div>
          )}
          
          <CardTitle className="text-2xl font-semibold mt-4">
            {isLogin ? "Welcome Back, Explorer! 🌍" : "Join Our Travel Community"}
          </CardTitle>
          <CardDescription className="text-base">
            {isLogin
              ? "Ready to continue your journey?"
              : "Create your account and unlock amazing destinations"}
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          <form onSubmit={isLogin ? handleLogin : handleSignup} className="space-y-4">
            {!isLogin && (
              <div className="space-y-2 animate-fade-in">
                <Label htmlFor="fullName" className="flex items-center gap-2">
                  <span>Full Name</span>
                  <span className="text-xs text-muted-foreground">(as in passport)</span>
                </Label>
                <div className="relative">
                  <Input
                    id="fullName"
                    type="text"
                    placeholder="John Traveler"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className={`pl-10 ${errors.fullName ? "border-destructive" : ""}`}
                  />
                  <Luggage className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                </div>
                {errors.fullName && (
                  <p className="text-sm text-destructive">{errors.fullName}</p>
                )}
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Input
                  id="email"
                  type="email"
                  placeholder="explorer@adventure.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`pl-10 ${errors.email ? "border-destructive" : ""}`}
                />
                <Compass className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              </div>
              {errors.email && (
                <p className="text-sm text-destructive">{errors.email}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`pl-10 pr-10 ${errors.password ? "border-destructive" : ""}`}
                />
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
              {errors.password && (
                <p className="text-sm text-destructive">{errors.password}</p>
              )}
            </div>

            {isLogin && (
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="rememberMe"
                    checked={rememberMe}
                    onCheckedChange={(checked) => setRememberMe(checked === true)}
                  />
                  <Label htmlFor="rememberMe" className="text-sm cursor-pointer">
                    Remember me
                  </Label>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setIsForgotPassword(true);
                    clearErrors();
                  }}
                  className="text-sm text-primary hover:underline"
                >
                  Forgot password?
                </button>
              </div>
            )}

            {!isLogin && (
              <div className="space-y-2 animate-fade-in">
                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="terms"
                    checked={acceptTerms}
                    onCheckedChange={(checked) => setAcceptTerms(checked === true)}
                    className={errors.acceptTerms ? "border-destructive" : ""}
                  />
                  <Label htmlFor="terms" className="text-sm leading-relaxed cursor-pointer">
                    I accept the{" "}
                    <Link to="/terms-of-service" className="text-primary hover:underline" target="_blank">
                      Terms and Conditions
                    </Link>{" "}
                    and{" "}
                    <Link to="/privacy-policy" className="text-primary hover:underline" target="_blank">
                      Privacy Policy
                    </Link>
                  </Label>
                </div>
                {errors.acceptTerms && (
                  <p className="text-sm text-destructive">{errors.acceptTerms}</p>
                )}
              </div>
            )}

            <Button type="submit" className="w-full group" disabled={isLoading || isGoogleLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  {isLogin ? "Signing in..." : "Creating account..."}
                </>
              ) : (
                <>
                  {isLogin ? "Start Exploring" : "Begin Your Journey"}
                  <Plane className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </>
              )}
            </Button>
          </form>

          <div className="relative my-6">
            <Separator />
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-card px-2 text-xs text-muted-foreground">
              or continue with
            </span>
          </div>

          <Button 
            variant="outline" 
            className="w-full" 
            onClick={handleGoogleLogin}
            disabled={isLoading || isGoogleLoading}
          >
            {isGoogleLoading ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
            )}
            Continue with Google
          </Button>

          <div className="mt-6 text-center text-sm">
            <span className="text-muted-foreground">
              {isLogin ? "New to Yellodae? " : "Already a traveler? "}
            </span>
            <button
              type="button"
              onClick={toggleMode}
              className="text-primary hover:underline font-medium inline-flex items-center gap-1"
            >
              {isLogin ? (
                <>
                  Start your journey <Plane className="w-3 h-3" />
                </>
              ) : (
                "Sign in"
              )}
            </button>
          </div>
          
          {!isLogin && (
            <div className="mt-4 text-center animate-fade-in">
              <p className="text-xs text-muted-foreground flex items-center justify-center gap-1">
                <Camera className="w-3 h-3" />
                Join 10,000+ travelers exploring the world
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* CSS for floating animation */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(100vh) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100px) rotate(360deg);
            opacity: 0;
          }
        }
        .animate-float {
          animation: float linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Auth;
