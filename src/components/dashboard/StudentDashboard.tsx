import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Trophy, Clock, Target, BookOpen, Star, Users, TrendingUp, Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";

const StudentDashboard = () => {
  const navigate = useNavigate();
  const [roadmaps, setRoadmaps] = useState([]);
  const [userProgress, setUserProgress] = useState({
    totalPoints: 1250,
    completedEvents: 15,
    currentRank: 5,
    streakDays: 7
  });

  // Sample data - replace with actual API calls
  const featuredRoadmaps = [
    {
      id: 1,
      title: "Web Development Fundamentals",
      description: "Master HTML, CSS, and JavaScript",
      progress: 65,
      totalEvents: 12,
      completedEvents: 8,
      points: 450,
      status: "in_progress",
      deadline: "2024-09-15"
    },
    {
      id: 2,
      title: "Data Structures & Algorithms",
      description: "Core programming concepts",
      progress: 30,
      totalEvents: 20,
      completedEvents: 6,
      points: 200,
      status: "in_progress",
      deadline: "2024-10-01"
    },
    {
      id: 3,
      title: "Python Programming",
      description: "From basics to advanced concepts",
      progress: 0,
      totalEvents: 15,
      completedEvents: 0,
      points: 0,
      status: "not_started",
      deadline: "2024-10-15"
    }
  ];

  const recentActivity = [
    { type: "completed", event: "CSS Flexbox Challenge", points: 50, time: "2 hours ago" },
    { type: "unlocked", event: "JavaScript Functions", points: 0, time: "1 day ago" },
    { type: "completed", event: "HTML Semantics", points: 75, time: "2 days ago" }
  ];

  const leaderboard = [
    { rank: 1, name: "Alex Chen", points: 2340, avatar: "AC" },
    { rank: 2, name: "Sarah Johnson", points: 2120, avatar: "SJ" },
    { rank: 3, name: "Mike Rodriguez", points: 1890, avatar: "MR" },
    { rank: 4, name: "Emily Davis", points: 1560, avatar: "ED" },
    { rank: 5, name: "You", points: 1250, avatar: "YU", isCurrentUser: true }
  ];

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-4xl font-bold text-gradient-primary mb-2">
              Welcome back, Student!
            </h1>
            <p className="text-muted-foreground text-lg">
              Continue your learning journey and reach new heights
            </p>
          </div>
          <div className="flex space-x-2">
            <Badge variant="secondary" className="px-4 py-2">
              <Trophy className="h-4 w-4 mr-2" />
              Rank #{userProgress.currentRank}
            </Badge>
            <Badge variant="outline" className="px-4 py-2">
              <Star className="h-4 w-4 mr-2" />
              {userProgress.totalPoints} Points
            </Badge>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="card-glow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Points</p>
                  <p className="text-3xl font-bold text-gradient-primary">{userProgress.totalPoints}</p>
                </div>
                <div className="p-3 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg">
                  <Star className="h-6 w-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="card-glow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Completed Tasks</p>
                  <p className="text-3xl font-bold">{userProgress.completedEvents}</p>
                </div>
                <div className="p-3 bg-gradient-to-r from-accent/10 to-primary/10 rounded-lg">
                  <Target className="h-6 w-6 text-accent" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="card-glow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Current Rank</p>
                  <p className="text-3xl font-bold">#{userProgress.currentRank}</p>
                </div>
                <div className="p-3 bg-gradient-to-r from-warning/10 to-accent/10 rounded-lg">
                  <Trophy className="h-6 w-6 text-warning" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="card-glow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Streak Days</p>
                  <p className="text-3xl font-bold">{userProgress.streakDays}</p>
                </div>
                <div className="p-3 bg-gradient-to-r from-primary/10 to-warning/10 rounded-lg">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="roadmaps" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="roadmaps">My Roadmaps</TabsTrigger>
            <TabsTrigger value="leaderboard">Leaderboard</TabsTrigger>
            <TabsTrigger value="activity">Recent Activity</TabsTrigger>
          </TabsList>

          <TabsContent value="roadmaps" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {featuredRoadmaps.map((roadmap) => (
                <Card key={roadmap.id} className="card-hover group">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-xl group-hover:text-primary transition-colors">
                          {roadmap.title}
                        </CardTitle>
                        <CardDescription className="mt-2">
                          {roadmap.description}
                        </CardDescription>
                      </div>
                      <Badge 
                        variant={roadmap.status === 'in_progress' ? 'default' : 'secondary'}
                        className="ml-2"
                      >
                        {roadmap.status === 'in_progress' ? 'In Progress' : 'Not Started'}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Progress</span>
                        <span>{roadmap.progress}%</span>
                      </div>
                      <Progress value={roadmap.progress} className="h-2" />
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center space-x-2">
                        <BookOpen className="h-4 w-4 text-muted-foreground" />
                        <span>{roadmap.completedEvents}/{roadmap.totalEvents} Tasks</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Star className="h-4 w-4 text-warning" />
                        <span>{roadmap.points} Points</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span>Due: {new Date(roadmap.deadline).toLocaleDateString()}</span>
                      </div>
                      <Button 
                        size="sm" 
                        className={roadmap.status === 'in_progress' ? '' : 'btn-hero'}
                        onClick={() => navigate(`/roadmap/${roadmap.id}`)}
                      >
                        {roadmap.status === 'in_progress' ? 'Continue' : 'Start'}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="leaderboard" className="space-y-6">
            <Card className="card-glow">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Trophy className="h-5 w-5 text-warning" />
                  <span>Global Leaderboard</span>
                </CardTitle>
                <CardDescription>See how you rank against other learners</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {leaderboard.map((user) => (
                    <div 
                      key={user.rank} 
                      className={`flex items-center justify-between p-4 rounded-lg transition-colors ${
                        user.isCurrentUser ? 'bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20' : 'hover:bg-muted/50'
                      }`}
                    >
                      <div className="flex items-center space-x-4">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                          user.rank <= 3 ? 'bg-gradient-to-r from-warning to-yellow-400 text-warning-foreground' : 'bg-muted'
                        }`}>
                          {user.rank <= 3 ? (
                            <Trophy className="h-4 w-4" />
                          ) : (
                            user.rank
                          )}
                        </div>
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center text-sm font-medium text-primary-foreground">
                          {user.avatar}
                        </div>
                        <div>
                          <p className={`font-medium ${user.isCurrentUser ? 'text-primary' : ''}`}>
                            {user.name}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {user.points} points
                          </p>
                        </div>
                      </div>
                      {user.isCurrentUser && (
                        <Badge variant="outline" className="border-primary text-primary">
                          You
                        </Badge>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="activity" className="space-y-6">
            <Card className="card-glow">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  <span>Recent Activity</span>
                </CardTitle>
                <CardDescription>Your learning progress over the past week</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-center justify-between p-4 rounded-lg border">
                      <div className="flex items-center space-x-4">
                        <div className={`w-2 h-2 rounded-full ${
                          activity.type === 'completed' ? 'bg-accent' : 'bg-primary'
                        }`} />
                        <div>
                          <p className="font-medium">{activity.event}</p>
                          <p className="text-sm text-muted-foreground">
                            {activity.type === 'completed' ? 'Completed' : 'Unlocked'} • {activity.time}
                          </p>
                        </div>
                      </div>
                      {activity.points > 0 && (
                        <Badge variant="secondary">
                          +{activity.points} points
                        </Badge>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default StudentDashboard;