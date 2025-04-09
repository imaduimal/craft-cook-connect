
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Edit, Award, Clock, Calendar, MapPin, Mail, Phone, User } from 'lucide-react';

const mockUserData = {
  id: '1',
  name: 'Alex Johnson',
  username: 'alexchef',
  email: 'alex@example.com',
  phone: '+1 (555) 123-4567',
  location: 'San Francisco, CA',
  bio: 'Passionate home cook and baking enthusiast. I love experimenting with new flavors and techniques. Looking forward to sharing my culinary journey and learning from the community.',
  memberSince: 'January 2023',
  avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=250',
  badges: [
    { name: 'Master Baker', color: 'bg-amber-500' },
    { name: 'Recipe Creator', color: 'bg-emerald-500' },
    { name: 'Contest Winner', color: 'bg-purple-500' }
  ],
  stats: {
    recipes: 24,
    followers: 156,
    following: 89,
    likes: 483
  },
  achievements: [
    { name: 'Perfect Sourdough', date: 'March 12, 2023', description: 'Created a perfect sourdough bread with excellent crumb and crust.' },
    { name: 'Monthly Challenge Winner', date: 'June 5, 2023', description: 'Won the "Summer Desserts" monthly cooking challenge.' },
    { name: 'Featured Recipe', date: 'September 18, 2023', description: 'Had a recipe featured on the CulinaryCraft homepage.' }
  ]
};

const Profile: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-8 md:py-10 lg:py-12">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Profile Sidebar */}
            <div className="lg:col-span-1">
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="relative">
                      <Avatar className="h-32 w-32 border-4 border-background mb-4">
                        <AvatarImage src={mockUserData.avatarUrl} alt={mockUserData.name} />
                        <AvatarFallback className="text-2xl">{mockUserData.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <Link to="/profile/edit" className="absolute -right-2 bottom-3">
                        <Button size="icon" variant="outline" className="rounded-full">
                          <Edit className="h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                    <h2 className="text-2xl font-bold">{mockUserData.name}</h2>
                    <p className="text-muted-foreground mb-2">@{mockUserData.username}</p>
                    
                    <div className="flex gap-1 mt-2 mb-4 flex-wrap justify-center">
                      {mockUserData.badges.map((badge, index) => (
                        <Badge key={index} className={badge.color + " text-white"}>
                          {badge.name}
                        </Badge>
                      ))}
                    </div>
                    
                    <Link to="/profile/edit" className="w-full">
                      <Button variant="outline" className="w-full">
                        <Edit className="mr-2 h-4 w-4" />
                        Edit Profile
                      </Button>
                    </Link>
                    
                    <div className="w-full border-t border-border mt-6 pt-6">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center">
                          <p className="text-2xl font-bold">{mockUserData.stats.recipes}</p>
                          <p className="text-sm text-muted-foreground">Recipes</p>
                        </div>
                        <div className="text-center">
                          <p className="text-2xl font-bold">{mockUserData.stats.followers}</p>
                          <p className="text-sm text-muted-foreground">Followers</p>
                        </div>
                        <div className="text-center">
                          <p className="text-2xl font-bold">{mockUserData.stats.following}</p>
                          <p className="text-sm text-muted-foreground">Following</p>
                        </div>
                        <div className="text-center">
                          <p className="text-2xl font-bold">{mockUserData.stats.likes}</p>
                          <p className="text-sm text-muted-foreground">Likes</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="w-full border-t border-border mt-6 pt-6 space-y-3">
                      <div className="flex items-center">
                        <Mail className="h-4 w-4 mr-2 text-muted-foreground" />
                        <span className="text-sm">{mockUserData.email}</span>
                      </div>
                      <div className="flex items-center">
                        <Phone className="h-4 w-4 mr-2 text-muted-foreground" />
                        <span className="text-sm">{mockUserData.phone}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                        <span className="text-sm">{mockUserData.location}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                        <span className="text-sm">Member since {mockUserData.memberSince}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Bio */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>About Me</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{mockUserData.bio}</p>
                </CardContent>
              </Card>
              
              {/* Tabs */}
              <Tabs defaultValue="recipes">
                <TabsList className="grid grid-cols-3 mb-8">
                  <TabsTrigger value="recipes">My Recipes</TabsTrigger>
                  <TabsTrigger value="saved">Saved Recipes</TabsTrigger>
                  <TabsTrigger value="achievements">Achievements</TabsTrigger>
                </TabsList>
                
                <TabsContent value="recipes">
                  <div className="text-center py-12">
                    <User className="h-12 w-12 mx-auto text-muted-foreground" />
                    <h3 className="mt-4 text-xl font-medium">No recipes yet</h3>
                    <p className="text-muted-foreground mt-2">Start creating your own recipes to share with the community</p>
                    <Button className="mt-4">Create Recipe</Button>
                  </div>
                </TabsContent>
                
                <TabsContent value="saved">
                  <div className="text-center py-12">
                    <User className="h-12 w-12 mx-auto text-muted-foreground" />
                    <h3 className="mt-4 text-xl font-medium">No saved recipes</h3>
                    <p className="text-muted-foreground mt-2">Browse recipes and save your favorites</p>
                    <Link to="/recipes">
                      <Button className="mt-4">Explore Recipes</Button>
                    </Link>
                  </div>
                </TabsContent>
                
                <TabsContent value="achievements">
                  <div className="space-y-4">
                    {mockUserData.achievements.map((achievement, index) => (
                      <Card key={index} className="overflow-hidden">
                        <CardContent className="p-0">
                          <div className="flex items-center p-6">
                            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                              <Award className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                              <h4 className="font-medium">{achievement.name}</h4>
                              <div className="flex items-center text-sm text-muted-foreground mt-0.5">
                                <Clock className="h-3.5 w-3.5 mr-1" />
                                {achievement.date}
                              </div>
                              <p className="text-sm mt-2">{achievement.description}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Profile;
