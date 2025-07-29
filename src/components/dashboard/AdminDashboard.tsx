import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { 
  Plus, 
  Users, 
  BookOpen, 
  Clock, 
  TrendingUp, 
  Eye, 
  Edit, 
  Trash2, 
  CheckCircle, 
  XCircle,
  Calendar,
  Target,
  Star
} from "lucide-react";

const AdminDashboard = () => {
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [newRoadmap, setNewRoadmap] = useState({
    title: "",
    description: "",
    sig_id: "",
    sig_name: "",
    start_date: "",
    end_date: ""
  });

  // Sample data - replace with actual API calls
  const stats = {
    totalStudents: 342,
    activeRoadmaps: 12,
    pendingSubmissions: 28,
    totalPoints: 45600
  };

  const roadmaps = [
    {
      id: 1,
      title: "Web Development Fundamentals",
      description: "Complete introduction to web development",
      event_count: 12,
      created_by_name: "Dr. Smith",
      created_at: "2024-07-15",
      status: "active",
      enrolled: 45
    },
    {
      id: 2,
      title: "Data Structures & Algorithms",
      description: "Core programming concepts and problem solving",
      event_count: 20,
      created_by_name: "Prof. Johnson",
      created_at: "2024-07-20",
      status: "active",
      enrolled: 38
    }
  ];

  const pendingSubmissions = [
    {
      id: 1,
      roadmap_title: "Web Development Fundamentals",
      event_title: "JavaScript Functions",
      student_name: "Alice Johnson",
      submitted_at: "2024-08-15 14:30:00",
      points: 100,
      status: "pending"
    },
    {
      id: 2,
      roadmap_title: "Data Structures & Algorithms",
      event_title: "Binary Search Implementation",
      student_name: "Bob Wilson",
      submitted_at: "2024-08-15 16:45:00",
      points: 150,
      status: "pending"
    }
  ];

  const handleCreateRoadmap = () => {
    // API call to create roadmap
    console.log("Creating roadmap:", newRoadmap);
    setIsCreateDialogOpen(false);
    // Reset form
    setNewRoadmap({
      title: "",
      description: "",
      sig_id: "",
      sig_name: "",
      start_date: "",
      end_date: ""
    });
  };

  const handleReviewSubmission = (submissionId: number, status: "approved" | "rejected") => {
    // API call to review submission
    console.log(`Reviewing submission ${submissionId} with status: ${status}`);
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-4xl font-bold text-gradient-primary mb-2">
              Admin Dashboard
            </h1>
            <p className="text-muted-foreground text-lg">
              Manage roadmaps, review submissions, and track student progress
            </p>
          </div>
          <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
            <DialogTrigger asChild>
              <Button className="btn-hero">
                <Plus className="h-4 w-4 mr-2" />
                Create Roadmap
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>Create New Roadmap</DialogTitle>
                <DialogDescription>
                  Set up a new learning path for students
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="title">Title</Label>
                    <Input
                      id="title"
                      placeholder="e.g., React Fundamentals"
                      value={newRoadmap.title}
                      onChange={(e) => setNewRoadmap({ ...newRoadmap, title: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="sig">Special Interest Group</Label>
                    <Select value={newRoadmap.sig_id} onValueChange={(value) => setNewRoadmap({ ...newRoadmap, sig_id: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select SIG" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="webdev-01">Web Development</SelectItem>
                        <SelectItem value="ai-01">Artificial Intelligence</SelectItem>
                        <SelectItem value="mobile-01">Mobile Development</SelectItem>
                        <SelectItem value="backend-01">Backend Development</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Describe what students will learn in this roadmap..."
                    value={newRoadmap.description}
                    onChange={(e) => setNewRoadmap({ ...newRoadmap, description: e.target.value })}
                    rows={3}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="start_date">Start Date</Label>
                    <Input
                      id="start_date"
                      type="datetime-local"
                      value={newRoadmap.start_date}
                      onChange={(e) => setNewRoadmap({ ...newRoadmap, start_date: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="end_date">End Date</Label>
                    <Input
                      id="end_date"
                      type="datetime-local"
                      value={newRoadmap.end_date}
                      onChange={(e) => setNewRoadmap({ ...newRoadmap, end_date: e.target.value })}
                    />
                  </div>
                </div>

                <div className="flex justify-end space-x-2 pt-4">
                  <Button variant="outline" onClick={() => setIsCreateDialogOpen(false)}>
                    Cancel
                  </Button>
                  <Button onClick={handleCreateRoadmap} className="btn-hero">
                    Create Roadmap
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="card-glow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Students</p>
                  <p className="text-3xl font-bold">{stats.totalStudents}</p>
                </div>
                <div className="p-3 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg">
                  <Users className="h-6 w-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="card-glow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Active Roadmaps</p>
                  <p className="text-3xl font-bold">{stats.activeRoadmaps}</p>
                </div>
                <div className="p-3 bg-gradient-to-r from-accent/10 to-primary/10 rounded-lg">
                  <BookOpen className="h-6 w-6 text-accent" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="card-glow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Pending Reviews</p>
                  <p className="text-3xl font-bold text-warning">{stats.pendingSubmissions}</p>
                </div>
                <div className="p-3 bg-gradient-to-r from-warning/10 to-accent/10 rounded-lg">
                  <Clock className="h-6 w-6 text-warning" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="card-glow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Points Awarded</p>
                  <p className="text-3xl font-bold">{stats.totalPoints.toLocaleString()}</p>
                </div>
                <div className="p-3 bg-gradient-to-r from-primary/10 to-warning/10 rounded-lg">
                  <Star className="h-6 w-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="roadmaps" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="roadmaps">Roadmaps</TabsTrigger>
            <TabsTrigger value="submissions">
              Pending Submissions
              {stats.pendingSubmissions > 0 && (
                <Badge variant="destructive" className="ml-2 px-2 py-0 text-xs">
                  {stats.pendingSubmissions}
                </Badge>
              )}
            </TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="roadmaps" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {roadmaps.map((roadmap) => (
                <Card key={roadmap.id} className="card-hover">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl">{roadmap.title}</CardTitle>
                        <CardDescription className="mt-2">
                          {roadmap.description}
                        </CardDescription>
                      </div>
                      <Badge variant="secondary">
                        {roadmap.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div className="text-center">
                        <p className="font-medium">{roadmap.event_count}</p>
                        <p className="text-muted-foreground">Events</p>
                      </div>
                      <div className="text-center">
                        <p className="font-medium">{roadmap.enrolled}</p>
                        <p className="text-muted-foreground">Enrolled</p>
                      </div>
                      <div className="text-center">
                        <p className="font-medium">{new Date(roadmap.created_at).toLocaleDateString()}</p>
                        <p className="text-muted-foreground">Created</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <p className="text-sm text-muted-foreground">
                        Created by {roadmap.created_by_name}
                      </p>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">
                          <Eye className="h-4 w-4 mr-2" />
                          View
                        </Button>
                        <Button size="sm" variant="outline">
                          <Edit className="h-4 w-4 mr-2" />
                          Edit
                        </Button>
                        <Button size="sm" variant="outline" className="text-destructive hover:text-destructive">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="submissions" className="space-y-6">
            <Card className="card-glow">
              <CardHeader>
                <CardTitle>Pending Submissions</CardTitle>
                <CardDescription>Review student submissions for approval</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {pendingSubmissions.map((submission) => (
                    <div key={submission.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex-1">
                        <div className="flex items-center space-x-4">
                          <div>
                            <h4 className="font-medium">{submission.event_title}</h4>
                            <p className="text-sm text-muted-foreground">
                              {submission.roadmap_title} • by {submission.student_name}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              Submitted: {new Date(submission.submitted_at).toLocaleString()}
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-4">
                        <Badge variant="outline">
                          {submission.points} points
                        </Badge>
                        <div className="flex space-x-2">
                          <Button 
                            size="sm" 
                            variant="outline"
                            className="text-accent hover:bg-accent hover:text-accent-foreground"
                            onClick={() => handleReviewSubmission(submission.id, "approved")}
                          >
                            <CheckCircle className="h-4 w-4 mr-2" />
                            Approve
                          </Button>
                          <Button 
                            size="sm" 
                            variant="outline"
                            className="text-destructive hover:bg-destructive hover:text-destructive-foreground"
                            onClick={() => handleReviewSubmission(submission.id, "rejected")}
                          >
                            <XCircle className="h-4 w-4 mr-2" />
                            Reject
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="card-glow">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    <span>Enrollment Trends</span>
                  </CardTitle>
                  <CardDescription>Student enrollment over the past month</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-48 flex items-center justify-center text-muted-foreground">
                    Chart placeholder - integrate with your preferred charting library
                  </div>
                </CardContent>
              </Card>

              <Card className="card-glow">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Target className="h-5 w-5 text-accent" />
                    <span>Completion Rates</span>
                  </CardTitle>
                  <CardDescription>Average completion rates by roadmap</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-48 flex items-center justify-center text-muted-foreground">
                    Chart placeholder - integrate with your preferred charting library
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;