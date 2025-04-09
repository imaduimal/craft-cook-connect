
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { BookOpen, Clock, Check, Calendar, Award, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const plansData = [
  {
    id: '1',
    title: 'Fundamentals of Baking',
    description: 'Master the essential techniques of baking, from bread to pastries.',
    level: 'Beginner',
    duration: '4 weeks',
    completed: 15,
    total: 24,
    category: 'enrolled',
    image: 'https://images.unsplash.com/photo-1612203985729-70726954388c?q=80&w=800'
  },
  {
    id: '2',
    title: 'Knife Skills Masterclass',
    description: 'Learn professional cutting techniques to improve your speed and precision.',
    level: 'Intermediate',
    duration: '2 weeks',
    completed: 6,
    total: 12,
    category: 'enrolled',
    image: 'https://images.unsplash.com/photo-1584947897878-55e7a3bf5a1d?q=80&w=800'
  },
  {
    id: '3',
    title: 'Plant-Based Cooking',
    description: 'Explore the world of plant-based cuisine with creative and nutritious recipes.',
    level: 'Beginner',
    duration: '3 weeks',
    category: 'discover',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800'
  },
  {
    id: '4',
    title: 'Asian Cuisine Essentials',
    description: 'Discover the key techniques and ingredients of Chinese, Japanese, and Thai cooking.',
    level: 'Intermediate',
    duration: '5 weeks',
    category: 'discover',
    image: 'https://images.unsplash.com/photo-1498654896293-37aacf113fd9?q=80&w=800'
  },
  {
    id: '5',
    title: 'Advanced Pastry Techniques',
    description: 'Take your dessert skills to the next level with professional pastry methods.',
    level: 'Advanced',
    duration: '6 weeks',
    category: 'discover',
    image: 'https://images.unsplash.com/photo-1612203985729-70726954388c?q=80&w=800'
  },
  {
    id: '6',
    title: 'Soups & Stews from Around the World',
    description: 'Learn to create hearty and flavorful soups from different culinary traditions.',
    level: 'Beginner',
    duration: '3 weeks',
    category: 'discover',
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=800'
  },
  {
    id: '7',
    title: 'French Cooking Basics',
    description: 'Master the fundamental techniques of classic French cuisine.',
    level: 'Intermediate',
    duration: '4 weeks',
    completed: 24,
    total: 24,
    category: 'completed',
    image: 'https://images.unsplash.com/photo-1541795795328-f073b763494e?q=80&w=800'
  },
  {
    id: '8',
    title: 'Introduction to Spices',
    description: 'Learn to identify, combine and use spices to enhance any dish.',
    level: 'Beginner',
    duration: '2 weeks',
    completed: 10,
    total: 10,
    category: 'completed',
    image: 'https://images.unsplash.com/photo-1532336414038-cf19250c5757?q=80&w=800'
  }
];

const PlanCard = ({ plan }: { plan: any }) => {
  const isEnrolled = plan.category === 'enrolled';
  const isDiscover = plan.category === 'discover';
  const isCompleted = plan.category === 'completed';
  const progress = isEnrolled ? Math.round((plan.completed / plan.total) * 100) : 0;
  
  return (
    <Card className="h-full overflow-hidden flex flex-col">
      <div className="aspect-video w-full overflow-hidden">
        <img 
          src={plan.image} 
          alt={plan.title}
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
        />
      </div>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between mb-1">
          <Badge variant={isEnrolled ? "default" : isCompleted ? "success" : "outline"}>
            {isEnrolled ? "In Progress" : isCompleted ? "Completed" : plan.level}
          </Badge>
          <span className="text-xs text-muted-foreground">{plan.duration}</span>
        </div>
        <CardTitle className="text-xl">{plan.title}</CardTitle>
      </CardHeader>
      <CardContent className="pb-2 flex-grow">
        <p className="text-muted-foreground text-sm">{plan.description}</p>
        
        {isEnrolled && (
          <div className="mt-4">
            <div className="flex justify-between text-sm mb-1">
              <span>Progress</span>
              <span>{plan.completed}/{plan.total} lessons</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        )}
      </CardContent>
      <CardFooter className="pt-0">
        {isEnrolled && (
          <Button className="w-full">
            Continue Learning
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        )}
        
        {isDiscover && (
          <Button variant="outline" className="w-full">View Curriculum</Button>
        )}
        
        {isCompleted && (
          <Button variant="outline" className="w-full">View Certificate</Button>
        )}
      </CardFooter>
    </Card>
  );
};

const Plans = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto py-8 px-4">
        <div className="text-center mb-12">
          <div className="inline-block p-3 bg-primary/10 rounded-full mb-4">
            <BookOpen className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-3xl md:text-4xl font-display font-bold mb-2">Learning Plans</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Structured learning paths to help you master culinary skills at your own pace
            with expert-created content and hands-on projects.
          </p>
        </div>
        
        <Tabs defaultValue="enrolled" className="mb-8">
          <div className="flex justify-center mb-6">
            <TabsList>
              <TabsTrigger value="enrolled">My Learning</TabsTrigger>
              <TabsTrigger value="discover">Discover</TabsTrigger>
              <TabsTrigger value="completed">Completed</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="enrolled">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {plansData.filter(p => p.category === 'enrolled').map(plan => (
                <PlanCard key={plan.id} plan={plan} />
              ))}
            </div>
            
            <div className="mt-8 p-6 bg-muted rounded-lg flex flex-col md:flex-row items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold">Ready to learn more?</h3>
                <p className="text-muted-foreground">Discover new learning plans tailored to your interests.</p>
              </div>
              <Button className="mt-4 md:mt-0" variant="outline">Browse All Plans</Button>
            </div>
          </TabsContent>
          
          <TabsContent value="discover">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {plansData.filter(p => p.category === 'discover').map(plan => (
                <PlanCard key={plan.id} plan={plan} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="completed">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {plansData.filter(p => p.category === 'completed').map(plan => (
                <PlanCard key={plan.id} plan={plan} />
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <div className="inline-block p-3 bg-green-100 rounded-full mb-4">
                <Award className="h-8 w-8 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold mb-2">Well done!</h2>
              <p className="text-muted-foreground max-w-md mx-auto mb-6">
                You've completed {plansData.filter(p => p.category === 'completed').length} learning plans. 
                Keep up the great work!
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
      <Footer />
    </>
  );
};

export default Plans;
