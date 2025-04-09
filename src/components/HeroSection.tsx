
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden py-12 md:py-20 lg:py-24">
      {/* Background pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute right-0 bottom-0 -mb-48 -mr-48 h-96 w-96 rounded-full bg-culinary-cream opacity-50 blur-3xl"></div>
        <div className="absolute left-0 top-0 -ml-48 -mt-48 h-96 w-96 rounded-full bg-culinary-orange opacity-10 blur-3xl"></div>
      </div>
      
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-6">
            <div>
              <h1 className="font-display inline-block bg-gradient-to-r from-culinary-orange to-culinary-brown bg-clip-text text-transparent text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight animate-fade-in">
                Share Your Culinary Journey
              </h1>
              <p className="mt-4 text-muted-foreground text-lg md:text-xl lg:text-2xl max-w-[600px]">
                Connect with fellow food enthusiasts, share recipes, and master your cooking skills in a supportive community.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group">
                Start Cooking
                <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline">
                Explore Recipes
              </Button>
            </div>
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <div className="flex -space-x-2">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100&h=100"
                  className="rounded-full border-2 border-background w-8 h-8 object-cover"
                  alt="User"
                />
                <img
                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=100&h=100"
                  className="rounded-full border-2 border-background w-8 h-8 object-cover"
                  alt="User"
                />
                <img
                  src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=100&h=100"
                  className="rounded-full border-2 border-background w-8 h-8 object-cover"
                  alt="User"
                />
              </div>
              <div>Joined by 10,000+ foodies</div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square overflow-hidden rounded-2xl">
              <img 
                src="https://images.unsplash.com/photo-1565299507177-b0ac66763828?auto=format&fit=crop&q=80&w=2000&h=2000" 
                alt="Hero image"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 md:-left-10 lg:-left-16 rounded-xl bg-white/90 backdrop-blur p-4 shadow-lg border border-border max-w-xs">
              <div className="flex items-center space-x-3">
                <div className="h-10 w-10 rounded-full bg-culinary-orange/20 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-culinary-orange">
                    <path d="m12 15 2 2 4-4" />
                    <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                    <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-medium text-muted-foreground">Time-limited Challenges</p>
                  <p className="text-sm font-semibold">Create recipes under constraints</p>
                </div>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 md:-right-10 lg:-right-16 rounded-xl bg-white/90 backdrop-blur p-4 shadow-lg border border-border max-w-xs">
              <div className="flex items-center space-x-3">
                <div className="h-10 w-10 rounded-full bg-culinary-green/20 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-culinary-green">
                    <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                    <path d="M11 2a2 2 0 0 0 2 2v4" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-medium text-muted-foreground">Step-by-Step Learning</p>
                  <p className="text-sm font-semibold">Create structured cooking plans</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
