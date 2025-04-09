
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Search, Menu, X, ChefHat, Bell, User } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="flex items-center space-x-2">
            <ChefHat className="h-8 w-8 text-culinary-orange" />
            <span className="text-xl font-display font-bold bg-gradient-to-r from-culinary-orange to-culinary-brown bg-clip-text text-transparent">
              CulinaryCraft
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <input
              type="text"
              placeholder="Search recipes..."
              className="pl-10 pr-4 py-2 bg-muted rounded-full text-sm w-64 focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>
          <div className="hidden md:flex space-x-1">
            <Link to="/" className="px-3 py-2 hover:text-primary font-medium transition-colors">Home</Link>
            <Link to="/recipes" className="px-3 py-2 hover:text-primary font-medium transition-colors">Recipes</Link>
            <Link to="/challenges" className="px-3 py-2 hover:text-primary font-medium transition-colors">Challenges</Link>
            <Link to="/plans" className="px-3 py-2 hover:text-primary font-medium transition-colors">Learning</Link>
          </div>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-destructive"></span>
          </Button>
          <Link to="/profile">
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
          </Link>
          <Link to="/login">
            <Button variant="outline">Login</Button>
          </Link>
          <Link to="/register">
            <Button>Sign Up</Button>
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden absolute top-full left-0 right-0 bg-background border-b border-border transition-all duration-300 ease-in-out",
          {
            "max-h-screen py-4": isMenuOpen,
            "max-h-0 py-0 overflow-hidden": !isMenuOpen,
          }
        )}
      >
        <div className="container px-4 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <input
              type="text"
              placeholder="Search recipes..."
              className="pl-10 pr-4 py-2 bg-muted rounded-full text-sm w-full focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>
          <div className="flex flex-col space-y-1">
            <Link to="/" className="px-3 py-2 hover:bg-accent rounded-md" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="/recipes" className="px-3 py-2 hover:bg-accent rounded-md" onClick={() => setIsMenuOpen(false)}>Recipes</Link>
            <Link to="/challenges" className="px-3 py-2 hover:bg-accent rounded-md" onClick={() => setIsMenuOpen(false)}>Challenges</Link>
            <Link to="/plans" className="px-3 py-2 hover:bg-accent rounded-md" onClick={() => setIsMenuOpen(false)}>Learning</Link>
            <Link to="/profile" className="px-3 py-2 hover:bg-accent rounded-md" onClick={() => setIsMenuOpen(false)}>Profile</Link>
          </div>
          <div className="pt-2 flex space-x-2">
            <Link to="/login" className="flex-1">
              <Button variant="outline" className="w-full" onClick={() => setIsMenuOpen(false)}>Login</Button>
            </Link>
            <Link to="/register" className="flex-1">
              <Button className="w-full" onClick={() => setIsMenuOpen(false)}>Sign Up</Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
