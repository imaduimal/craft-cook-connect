
import React from 'react';
import Navbar from '@/components/Navbar';
import { Card, CardContent } from '@/components/ui/card';
import RecipeCard from '@/components/RecipeCard';

const recipesData = [
  {
    id: '1',
    title: 'Creamy Garlic Pasta with Roasted Vegetables',
    description: 'A delicious pasta dish with a creamy garlic sauce and seasonal roasted vegetables.',
    image: 'https://images.unsplash.com/photo-1673165311491-fd2c785f53fd?q=80&w=1400',
    prepTime: '30 min',
    servings: 4,
    likes: 126,
    comments: 32,
    author: {
      name: 'Alex Chen',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    saved: true
  },
  {
    id: '2',
    title: 'Classic Margherita Pizza with Fresh Basil',
    description: 'A traditional Margherita pizza with San Marzano tomatoes, fresh mozzarella, and basil.',
    image: 'https://images.unsplash.com/photo-1604917877934-07d8d248d396?q=80&w=1400',
    prepTime: '45 min',
    servings: 2,
    likes: 89,
    comments: 14,
    author: {
      name: 'Maria Rossi',
      avatar: 'https://randomuser.me/api/portraits/women/68.jpg'
    }
  },
  {
    id: '3',
    title: 'Spicy Thai Coconut Soup (Tom Kha)',
    description: 'An aromatic and spicy Thai soup made with coconut milk, lemongrass, and lime.',
    image: 'https://images.unsplash.com/photo-1562967915-6ba607ff7d05?q=80&w=1400',
    prepTime: '35 min',
    servings: 3,
    likes: 75,
    comments: 21,
    author: {
      name: 'Sam Johnson',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
    }
  },
  {
    id: '4',
    title: 'Fluffy Japanese Pancakes',
    description: 'Extra thick and fluffy Japanese-style pancakes with maple syrup and fresh berries.',
    image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=1400',
    prepTime: '25 min',
    servings: 2,
    likes: 152,
    comments: 37,
    author: {
      name: 'Yuki Tanaka',
      avatar: 'https://randomuser.me/api/portraits/women/91.jpg'
    },
    liked: true
  },
  {
    id: '5',
    title: 'Grilled Salmon with Herb Butter',
    description: 'Perfect grilled salmon fillets topped with a melting herb and garlic butter.',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=1400',
    prepTime: '20 min',
    servings: 2,
    likes: 104,
    comments: 28,
    author: {
      name: 'David Wilson',
      avatar: 'https://randomuser.me/api/portraits/men/54.jpg'
    }
  },
  {
    id: '6',
    title: 'Homemade Chocolate Chip Cookies',
    description: 'Classic chewy chocolate chip cookies with crisp edges and soft centers.',
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=1400',
    prepTime: '40 min',
    servings: 24,
    likes: 217,
    comments: 42,
    author: {
      name: 'Emma Brown',
      avatar: 'https://randomuser.me/api/portraits/women/33.jpg'
    },
    saved: true
  }
];

const Recipes = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto py-8 px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-display font-bold mb-2">Discover Recipes</h1>
          <p className="text-muted-foreground">
            Explore our collection of delicious recipes from around the world
          </p>
        </div>
        
        <div className="flex justify-between items-center mb-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Search recipes..."
              className="pl-4 pr-10 py-2 bg-muted rounded-full text-sm w-64 focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>
          <div className="flex space-x-2">
            <select className="px-4 py-2 bg-background border border-border rounded-md text-sm">
              <option>All Categories</option>
              <option>Breakfast</option>
              <option>Main Course</option>
              <option>Dessert</option>
              <option>Vegetarian</option>
              <option>Vegan</option>
            </select>
            <select className="px-4 py-2 bg-background border border-border rounded-md text-sm">
              <option>Most Recent</option>
              <option>Most Popular</option>
              <option>Quick & Easy</option>
              <option>Beginner Friendly</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recipesData.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Recipes;
