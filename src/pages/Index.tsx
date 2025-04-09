
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeatureSection from '@/components/FeatureSection';
import RecipeCard from '@/components/RecipeCard';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

const dummyRecipes = [
  {
    id: '1',
    title: 'Homemade Margherita Pizza',
    description: 'A classic Italian pizza with fresh mozzarella, tomatoes, and basil on a crispy crust.',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=2000&h=1500',
    prepTime: '30 min',
    servings: 4,
    likes: 127,
    comments: 34,
    author: {
      name: 'Isabella Romano',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100'
    },
    liked: true
  },
  {
    id: '2',
    title: 'Thai Green Curry with Vegetables',
    description: 'A fragrant, spicy curry with coconut milk, fresh vegetables, and aromatic herbs.',
    image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&q=80&w=2000&h=1500',
    prepTime: '45 min',
    servings: 3,
    likes: 85,
    comments: 16,
    author: {
      name: 'Michael Chen',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100&h=100'
    }
  },
  {
    id: '3',
    title: 'Classic Tiramisu',
    description: 'Traditional Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cream.',
    image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&q=80&w=2000&h=1500',
    prepTime: '4 hrs',
    servings: 6,
    likes: 214,
    comments: 42,
    author: {
      name: 'Sofia Martinez',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=100&h=100'
    },
    saved: true
  },
];

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        
        <section className="py-16 container px-4 md:px-6">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-display font-bold">Popular Recipes</h2>
            <Button variant="ghost" className="group">
              View all
              <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dummyRecipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        </section>
        
        <FeatureSection />
        
        <section className="py-16 md:py-24 bg-culinary-cream">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto space-y-6">
              <h2 className="text-3xl md:text-4xl font-display font-bold">
                Ready to Start Your Culinary Adventure?
              </h2>
              <p className="text-lg text-muted-foreground">
                Join thousands of food enthusiasts sharing recipes, learning together, and celebrating the joy of cooking.
              </p>
              <div className="pt-4">
                <Button size="lg" className="group">
                  Join CulinaryCraft Today
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
