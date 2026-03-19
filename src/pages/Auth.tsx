import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { auth, useAuth } from "@/lib/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Eye, EyeOff, Loader2, Plane } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { z } from "zod";
import heroImage from "@/assets/auth-water-adventure.jpg";

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
  const { user } = useAuth();

  useEffect(() => {
    if (user) navigate("/");
  }, [user, navigate]);

  const clearErrors = () => setErrors({});

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    clearErrors();
    const validation = loginSchema.safeParse({ email, password });
    if (!validation.success) {
      const fieldErrors: Record<string, string> = {};
      validation.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setIsLoading(true);
    try {
      await auth.signInWithPassword(email.trim(), password);
      toast({ title: "Welcome back! ✈️", description: "Ready for your next adventure?" });
      navigate("/");
    } catch (error: any) {
      toast({ title: "Login Failed", description: error.message || "Invalid credentials", variant: "destructive" });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    clearErrors();
    const validation = signupSchema.safeParse({ fullName, email, password, acceptTerms });
    if (!validation.success) {
      const fieldErrors: Record<string, string> = {};
      validation.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setIsLoading(true);
    try {
      await auth.signUp(email.trim(), password, fullName.trim());
      toast({ title: "Bon Voyage! 🌴", description: "Account created successfully!" });
      navigate("/");
    } catch (error: any) {
      toast({ title: "Signup Failed", description: error.message, variant: "destructive" });
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setIsGoogleLoading(true);
    await auth.signInWithGoogle();
    setIsGoogleLoading(false);
    toast({ title: "Google Login", description: "Google OAuth is not yet connected to a backend.", variant: "destructive" });
  };

  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    clearErrors();
    const emailValidation = z.string().trim().email().safeParse(email);
    if (!emailValidation.success) {
      setErrors({ email: "Invalid email address" });
      return;
    }
    setIsLoading(true);
    await auth.resetPassword(email.trim());
    setIsLoading(false);
    toast({ title: "Reset Link Sent 📧", description: "Check your email for a password reset link." });
    setIsForgotPassword(false);
  };

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setIsForgotPassword(false);
    clearErrors();
    setEmail(""); setPassword(""); setFullName(""); setAcceptTerms(false); setRememberMe(false);
  };

  const renderForm = () => {
    if (isForgotPassword) {
      return (
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-foreground">Reset Password</h1>
            <p className="mt-2 text-muted-foreground">Enter your email and we'll send you a reset link</p>
          </div>
          <form onSubmit={handleForgotPassword} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="reset-email" className="text-sm font-medium text-foreground">Email address</Label>
              <Input id="reset-email" type="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} className={`h-12 text-base ${errors.email ? "border-destructive" : ""}`} />
              {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
            </div>
            <Button type="submit" className="w-full h-12 text-base font-semibold" disabled={isLoading}>
              {isLoading ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...</> : "Send reset link"}
            </Button>
          </form>
          <div className="text-center text-sm">
            <button type="button" onClick={() => { setIsForgotPassword(false); clearErrors(); }} className="text-primary hover:underline font-medium">← Back to sign in</button>
          </div>
        </div>
      );
    }

    return (
      <div className="space-y-6">
        {/* Toggle link at the top */}
        <div className="text-center text-sm">
          <span className="text-muted-foreground">{isLogin ? "New to Yellodae? " : "Already a traveler? "}</span>
          <button type="button" onClick={toggleMode} className="text-primary hover:underline font-medium inline-flex items-center gap-1">
            {isLogin ? <>Sign Up <Plane className="w-3 h-3" /></> : "Sign in"}
          </button>
        </div>
        {/* Google sign-in at the top */}
        <Button variant="outline" className="w-full h-12 text-base font-medium" onClick={handleGoogleLogin} disabled={isLoading || isGoogleLoading}>
          {isGoogleLoading ? <Loader2 className="mr-2 h-5 w-5 animate-spin" /> : (
            <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
            </svg>
          )}
          Continue with Google
        </Button>
        <div className="relative">
          <Separator />
          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-background px-3 text-sm text-muted-foreground">or continue with</span>
        </div>
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            {isLogin ? "Welcome Back, Explorer! 🌍" : "Join Our Travel Community"}
          </h1>
          <p className="mt-2 text-muted-foreground">
            {isLogin ? "Ready to continue your journey?" : "Create your account and unlock amazing destinations"}
          </p>
        </div>
        <form onSubmit={isLogin ? handleLogin : handleSignup} className="space-y-5">
          {!isLogin && (
            <div className="space-y-2">
              <Label htmlFor="fullName" className="text-sm font-medium text-foreground">Full name</Label>
              <Input id="fullName" type="text" placeholder="John Doe" value={fullName} onChange={(e) => setFullName(e.target.value)} className={`h-12 text-base ${errors.fullName ? "border-destructive" : ""}`} />
              {errors.fullName && <p className="text-sm text-destructive">{errors.fullName}</p>}
            </div>
          )}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium text-foreground">Email address</Label>
            <Input id="email" type="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} className={`h-12 text-base ${errors.email ? "border-destructive" : ""}`} />
            {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="password" className="text-sm font-medium text-foreground">Password</Label>
            <div className="relative">
              <Input id="password" type={showPassword ? "text" : "password"} placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} className={`h-12 text-base pr-12 ${errors.password ? "border-destructive" : ""}`} />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors">
                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>
            {errors.password && <p className="text-sm text-destructive">{errors.password}</p>}
          </div>
          {isLogin && (
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox id="rememberMe" checked={rememberMe} onCheckedChange={(checked) => setRememberMe(checked === true)} />
                <Label htmlFor="rememberMe" className="text-sm cursor-pointer text-muted-foreground">Remember me</Label>
              </div>
              <button type="button" onClick={() => { setIsForgotPassword(true); clearErrors(); }} className="text-sm text-primary hover:underline font-medium">Forgot your password?</button>
            </div>
          )}
          {!isLogin && (
            <div className="space-y-2">
              <div className="flex items-start space-x-2">
                <Checkbox id="terms" checked={acceptTerms} onCheckedChange={(checked) => setAcceptTerms(checked === true)} className={`mt-0.5 ${errors.acceptTerms ? "border-destructive" : ""}`} />
                <Label htmlFor="terms" className="text-sm leading-relaxed cursor-pointer text-muted-foreground">
                  I accept the <Link to="/terms-of-service" className="text-primary hover:underline" target="_blank">Terms</Link> and <Link to="/privacy-policy" className="text-primary hover:underline" target="_blank">Privacy Policy</Link>
                </Label>
              </div>
              {errors.acceptTerms && <p className="text-sm text-destructive">{errors.acceptTerms}</p>}
            </div>
          )}
          <Button type="submit" className="w-full h-12 text-base font-semibold group" disabled={isLoading || isGoogleLoading}>
            {isLoading ? (
              <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> {isLogin ? "Signing in..." : "Creating account..."}</>
            ) : (
              <>{isLogin ? "Start Exploring" : "Begin Your Journey"}<Plane className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>
            )}
          </Button>
        </form>
        {!isLogin && <p className="text-center text-xs text-muted-foreground">Join 10,000+ travelers exploring the world</p>}
      </div>
    );
  };

  return (
    <div className="min-h-screen flex">
      <div className="w-full lg:w-1/2 flex flex-col">
        <div className="p-6 lg:p-10">
          <Link to="/" className="inline-flex items-center gap-2 text-xl font-bold text-primary hover:opacity-80 transition-opacity">
            <Plane className="w-5 h-5" />
            Yellodae
          </Link>
        </div>
        <div className="flex-1 flex items-center justify-center px-6 pb-12 lg:px-16 xl:px-24">
          <div className="w-full max-w-md">{renderForm()}</div>
        </div>
      </div>
      <div className="hidden lg:block lg:w-1/2 relative">
        <img src={heroImage} alt="Adventurous water snorkeling activity" className="absolute inset-0 w-full h-full object-cover" loading="eager" decoding="async" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        <div className="absolute bottom-12 left-12 right-12 text-white">
          <p className="text-2xl font-bold leading-snug">Discover breathtaking destinations across Asia</p>
          <p className="mt-2 text-white/80 text-sm">Thailand · Singapore · Dubai · and more</p>
        </div>
      </div>
    </div>
  );
};

export default Auth;
