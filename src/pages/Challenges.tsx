
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Award, Clock, Calendar, Users, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const challengesData = [
  {
    id: '1',
    title: '5 Ingredients Challenge',
    description: 'Create a delicious dish using only 5 ingredients or less. Challenge your creativity with limited resources!',
    difficulty: 'Medium',
    participants: 348,
    daysLeft: 3,
    category: 'active',
    image: 'https://images.unsplash.com/photo-1495521821757-a1efb6729352?q=80&w=800'
  },
  {
    id: '2',
    title: '30-Minute Meals',
    description: 'Prepare a complete meal in under 30 minutes. Perfect for busy weeknights!',
    difficulty: 'Easy',
    participants: 512,
    daysLeft: 5,
    category: 'active',
    image: 'https://images.unsplash.com/photo-1564834951135-e2a61accolade3?q=80&w=800'
  },
  {
    id: '3',
    title: 'Global Cuisine Week',
    description: 'Cook dishes from 7 different countries in 7 days. Explore international flavors!',
    difficulty: 'Hard',
    participants: 176,
    daysLeft: 12,
    category: 'active',
    image: 'https://images.unsplash.com/photo-1534939561126-855b8675edd7?q=80&w=800'
  },
  {
    id: '4',
    title: 'Dessert Championship',
    description: 'Showcase your best dessert recipe and compete for the title of Dessert Champion!',
    difficulty: 'Medium',
    participants: 429,
    daysLeft: 8,
    category: 'active',
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=800'
  },
  {
    id: '5',
    title: 'Plant-Based Challenge',
    description: 'Create delicious vegan dishes that will impress even non-vegans!',
    difficulty: 'Medium',
    participants: 256,
    category: 'upcoming',
    startDate: 'Apr 15',
    image: 'https://images.unsplash.com/photo-1603048719539-9ecb4aa395e3?q=80&w=800'
  },
  {
    id: '6',
    title: 'Zero-Waste Cooking',
    description: 'Create recipes that minimize food waste by using every part of the ingredients.',
    difficulty: 'Hard',
    participants: 0,
    category: 'upcoming',
    startDate: 'Apr 22',
    image: 'https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=800'
  },
  {
    id: '7',
    title: 'Breakfast Revolution',
    description: 'Contestants submitted their most innovative breakfast recipes.',
    difficulty: 'Easy',
    participants: 387,
    winners: ['@chef_maria', '@breakfastking', '@morningdelight'],
    category: 'past',
    image: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?q=80&w=800'
  },
  {
    id: '8',
    title: 'Spicy Food Challenge',
    description: 'Who could create the most flavorful dish while bringing the heat?',
    difficulty: 'Hard',
    participants: 215,
    winners: ['@spicylife', '@hotpepperlover'],
    category: 'past',
    image: 'https://images.unsplash.com/photo-1574689049597-7314b64fd335?q=80&w=800'
  }
];

const ChallengeCard = ({ challenge }: { challenge: any }) => {
  const isActive = challenge.category === 'active';
  const isUpcoming = challenge.category === 'upcoming';
  const isPast = challenge.category === 'past';
  
  return (
    <Card className="h-full overflow-hidden flex flex-col">
      <div className="aspect-video w-full overflow-hidden">
        <img 
          src={challenge.image} 
          alt={challenge.title}
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
        />
      </div>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between mb-1">
          <Badge variant={isActive ? "default" : isUpcoming ? "secondary" : "outline"}>
            {isActive ? "Active" : isUpcoming ? "Upcoming" : "Completed"}
          </Badge>
          <Badge variant="outline">{challenge.difficulty}</Badge>
        </div>
        <CardTitle className="text-xl">{challenge.title}</CardTitle>
      </CardHeader>
      <CardContent className="pb-2 flex-grow">
        <p className="text-muted-foreground text-sm">{challenge.description}</p>
      </CardContent>
      <CardFooter className="flex flex-col items-start pt-0 space-y-2">
        {isActive && (
          <>
            <div className="flex justify-between w-full text-sm">
              <div className="flex items-center">
                <Users className="h-4 w-4 mr-1 text-muted-foreground" />
                <span className="text-muted-foreground">{challenge.participants} joined</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1 text-muted-foreground" />
                <span className="text-muted-foreground">{challenge.daysLeft} days left</span>
              </div>
            </div>
            <Button className="w-full mt-2">Join Challenge</Button>
          </>
        )}
        
        {isUpcoming && (
          <>
            <div className="flex items-center w-full text-sm">
              <Calendar className="h-4 w-4 mr-1 text-muted-foreground" />
              <span className="text-muted-foreground">Starts {challenge.startDate}</span>
            </div>
            <Button variant="outline" className="w-full mt-2">Remind Me</Button>
          </>
        )}
        
        {isPast && (
          <>
            <div className="flex items-center w-full text-sm">
              <Users className="h-4 w-4 mr-1 text-muted-foreground" />
              <span className="text-muted-foreground">{challenge.participants} participated</span>
            </div>
            <div className="w-full mt-1">
              <span className="text-sm font-medium">Winners:</span>
              <div className="flex flex-wrap gap-1 mt-1">
                {challenge.winners.map((winner: string) => (
                  <Badge key={winner} variant="secondary" className="text-xs">{winner}</Badge>
                ))}
              </div>
            </div>
            <Button variant="outline" className="w-full mt-2">View Gallery</Button>
          </>
        )}
      </CardFooter>
    </Card>
  );
};

const Challenges = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto py-8 px-4">
        <div className="text-center mb-12">
          <div className="inline-block p-3 bg-primary/10 rounded-full mb-4">
            <Trophy className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-3xl md:text-4xl font-display font-bold mb-2">Cooking Challenges</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Test your cooking skills, learn new techniques, and compete with other food enthusiasts in our 
            time-limited challenges.
          </p>
        </div>
        
        <Tabs defaultValue="active" className="mb-8">
          <div className="flex justify-center mb-6">
            <TabsList>
              <TabsTrigger value="active">Active Challenges</TabsTrigger>
              <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
              <TabsTrigger value="past">Past Challenges</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="active">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {challengesData.filter(c => c.category === 'active').map(challenge => (
                <ChallengeCard key={challenge.id} challenge={challenge} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="upcoming">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {challengesData.filter(c => c.category === 'upcoming').map(challenge => (
                <ChallengeCard key={challenge.id} challenge={challenge} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="past">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {challengesData.filter(c => c.category === 'past').map(challenge => (
                <ChallengeCard key={challenge.id} challenge={challenge} />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="bg-muted rounded-lg p-6 md:p-8 mt-12">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold mb-2">Create Your Own Challenge</h2>
              <p className="text-muted-foreground mb-4">
                Have a unique cooking challenge idea? Submit your proposal and engage with the community!
              </p>
              <Button className="w-full md:w-auto">Submit a Challenge</Button>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <Award className="h-32 w-32 text-muted-foreground/30" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Challenges;
