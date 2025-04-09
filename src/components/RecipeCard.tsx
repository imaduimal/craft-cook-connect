
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Heart, MessageSquare, Bookmark, Clock, Users, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface RecipeCardProps {
  recipe: {
    id: string;
    title: string;
    description: string;
    image: string;
    prepTime: string;
    servings: number;
    likes: number;
    comments: number;
    author: {
      name: string;
      avatar: string;
    };
    saved?: boolean;
    liked?: boolean;
  };
  className?: string;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe, className }) => {
  return (
    <Card className={cn("overflow-hidden transition-all hover:shadow-md", className)}>
      <div className="aspect-video relative overflow-hidden">
        <img 
          src={recipe.image} 
          alt={recipe.title}
          className="object-cover w-full h-full transition-transform hover:scale-105 duration-500"
        />
        <div className="absolute bottom-3 left-3 flex space-x-1">
          <div className="bg-background/80 backdrop-blur-sm text-xs font-medium px-2 py-1 rounded-full flex items-center">
            <Clock className="h-3 w-3 mr-1" />
            {recipe.prepTime}
          </div>
          <div className="bg-background/80 backdrop-blur-sm text-xs font-medium px-2 py-1 rounded-full flex items-center">
            <Users className="h-3 w-3 mr-1" />
            {recipe.servings} servings
          </div>
        </div>
      </div>
      <CardHeader className="p-4 pb-2">
        <div className="flex justify-between items-start">
          <h3 className="font-display font-medium text-lg line-clamp-2">{recipe.title}</h3>
          <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground">
            <Bookmark className="h-4 w-4" fill={recipe.saved ? "currentColor" : "none"} />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <p className="text-sm text-muted-foreground line-clamp-2">{recipe.description}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Avatar className="h-7 w-7">
            <AvatarImage src={recipe.author.avatar} alt={recipe.author.name} />
            <AvatarFallback>{recipe.author.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <span className="text-xs font-medium">{recipe.author.name}</span>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground">
            <Heart className="h-4 w-4" fill={recipe.liked ? "#ef4444" : "none"} stroke={recipe.liked ? "#ef4444" : "currentColor"} />
            <span className="sr-only">Like</span>
          </Button>
          <span className="text-xs text-muted-foreground">{recipe.likes}</span>
          <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground">
            <MessageSquare className="h-4 w-4" />
            <span className="sr-only">Comment</span>
          </Button>
          <span className="text-xs text-muted-foreground">{recipe.comments}</span>
        </div>
      </CardFooter>
    </Card>
  );
};

export default RecipeCard;
