
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ChefHat, Mail, Lock, Eye, EyeOff, GitHub } from 'lucide-react';
import { Link } from 'react-router-dom';

interface AuthFormProps {
  type: 'login' | 'register';
}

const AuthForm: React.FC<AuthFormProps> = ({ type }) => {
  const [showPassword, setShowPassword] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would handle form submission, connecting with your Spring Boot backend
    console.log('Form submitted');
  };

  return (
    <Card className="w-full max-w-md mx-auto shadow-lg">
      <CardHeader className="space-y-1">
        <div className="flex justify-center mb-4">
          <div className="h-16 w-16 rounded-full bg-culinary-cream flex items-center justify-center">
            <ChefHat className="h-8 w-8 text-culinary-orange" />
          </div>
        </div>
        <CardTitle className="text-2xl text-center font-display">
          {type === 'login' ? 'Welcome Back!' : 'Create an Account'}
        </CardTitle>
        <CardDescription className="text-center">
          {type === 'login'
            ? 'Enter your credentials to access your account'
            : 'Join our cooking community to share recipes and more'}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          {type === 'register' && (
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" placeholder="John Doe" required />
            </div>
          )}
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input id="email" type="email" placeholder="chef@example.com" className="pl-10" required />
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between">
              <Label htmlFor="password">Password</Label>
              {type === 'login' && (
                <Link to="/forgot-password" className="text-sm text-primary hover:underline">
                  Forgot password?
                </Link>
              )}
            </div>
            <div className="relative">
              <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                id="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="••••••••"
                className="pl-10"
                required
              />
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="absolute right-1 top-1"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </Button>
            </div>
          </div>
          {type === 'register' && (
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="confirmPassword"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  className="pl-10"
                  required
                />
              </div>
            </div>
          )}
          <Button type="submit" className="w-full">
            {type === 'login' ? 'Sign In' : 'Sign Up'}
          </Button>
        </form>

        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-border"></div>
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-card px-2 text-muted-foreground">Or continue with</span>
          </div>
        </div>

        <Button variant="outline" className="w-full">
          <svg className="mr-2 h-4 w-4" aria-hidden="true" focusable="false" viewBox="0 0 24 24">
            <path d="M12.0003 4.75C13.7703 4.75 15.3553 5.36002 16.6053 6.54998L20.0303 3.12C17.9502 1.19 15.2353 0 12.0003 0C7.31028 0 3.25527 2.69 1.28027 6.60998L5.27028 9.70999C6.21525 6.86002 8.87028 4.75 12.0003 4.75Z" fill="#EA4335"/>
            <path d="M23.49 12.275C23.49 11.49 23.415 10.73 23.3 10H12V14.51H18.47C18.18 15.99 17.34 17.25 16.08 18.1L19.945 21.1C22.2 19.01 23.49 15.92 23.49 12.275Z" fill="#4285F4"/>
            <path d="M5.26498 14.29C5.01498 13.57 4.88501 12.8 4.88501 12C4.88501 11.2 5.01498 10.43 5.26498 9.71L1.275 6.61C0.46502 8.19002 0 10.03 0 12C0 13.97 0.46502 15.81 1.275 17.39L5.26498 14.29Z" fill="#FBBC05"/>
            <path d="M12.0004 24C15.2404 24 17.9654 22.94 19.9454 21.095L16.0804 18.095C15.0054 18.82 13.6204 19.245 12.0004 19.245C8.8704 19.245 6.21537 17.135 5.2654 14.285L1.2754 17.385C3.2554 21.31 7.3104 24 12.0004 24Z" fill="#34A853"/>
          </svg>
          Continue with Google
        </Button>
      </CardContent>
      <CardFooter className="flex justify-center">
        <p className="text-sm text-muted-foreground">
          {type === 'login' ? "Don't have an account? " : "Already have an account? "}
          <Link
            to={type === 'login' ? '/register' : '/login'}
            className="text-primary hover:underline font-medium"
          >
            {type === 'login' ? 'Sign up' : 'Sign in'}
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
};

export default AuthForm;
