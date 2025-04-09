
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Camera, BookOpen, Clock, Award, Users, MessageSquare } from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => {
  return (
    <Card className="border-none shadow-none bg-transparent">
      <CardContent className="p-6 space-y-4">
        <div className="h-12 w-12 rounded-lg bg-culinary-cream flex items-center justify-center">
          {icon}
        </div>
        <h3 className="text-lg font-display font-semibold">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
};

const FeatureSection: React.FC = () => {
  const features = [
    {
      icon: <Camera className="h-6 w-6 text-culinary-orange" />,
      title: "Share Your Recipes",
      description: "Upload your unique recipes with photos, videos, ingredients, and step-by-step instructions."
    },
    {
      icon: <BookOpen className="h-6 w-6 text-culinary-orange" />,
      title: "Learning Progress",
      description: "Document your cooking journey with updates, lessons learned, and milestones achieved."
    },
    {
      icon: <Clock className="h-6 w-6 text-culinary-orange" />,
      title: "Time-Limited Challenges",
      description: "Test your skills with constraints like using only 5 ingredients or cooking in 30 minutes."
    },
    {
      icon: <Award className="h-6 w-6 text-culinary-orange" />,
      title: "Cooking Plans",
      description: "Create structured learning paths to master specific cuisines or cooking techniques."
    },
    {
      icon: <Users className="h-6 w-6 text-culinary-orange" />,
      title: "Community",
      description: "Connect with fellow food enthusiasts, follow their journeys, and get inspired."
    },
    {
      icon: <MessageSquare className="h-6 w-6 text-culinary-orange" />,
      title: "Feedback & Support",
      description: "Get constructive feedback through comments and likes on your culinary creations."
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-background relative">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-display font-bold">
            Enhance Your Culinary Experience
          </h2>
          <p className="text-muted-foreground text-lg">
            CulinaryCraft provides all the tools you need to share, learn, and master the art of cooking.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <Feature key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
