import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Clock, Star, Lock, CheckCircle, Upload, FileText, Calendar } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

const RoadmapDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [roadmap, setRoadmap] = useState(null);
  const [isSubmitDialogOpen, setIsSubmitDialogOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [submission, setSubmission] = useState({
    text: "",
    file: null
  });

  // Sample roadmap data - replace with actual API call
  const sampleRoadmap = {
    id: 1,
    title: "Web Development Fundamentals",
    description: "Master the core technologies of web development including HTML, CSS, JavaScript, and modern frameworks. This comprehensive roadmap will take you from beginner to proficient in front-end development.",
    start_date: "2024-08-01 10:00:00",
    end_date: "2024-09-01 18:00:00",
    roadmap_status: "active",
    events: [
      {
        id: 101,
        title: "HTML Fundamentals",
        description: "Learn the basic structure and semantic elements of HTML5. Create your first web page and understand proper document structure.",
        points: 100,
        submission_status: "approved",
        unlocked: true,
        can_submit: false,
        is_completed: true,
        deadline: "2024-08-03 23:59:59",
        status_text: "Completed",
        status_color: "green",
        duration_hours: 24
      },
      {
        id: 102,
        title: "CSS Styling and Layout",
        description: "Master CSS selectors, properties, flexbox, and grid. Style your HTML pages and create responsive layouts.",
        points: 150,
        submission_status: "pending",
        unlocked: true,
        can_submit: true,
        is_completed: false,
        deadline: "2024-08-10 23:59:59",
        status_text: "In Progress",
        status_color: "blue",
        duration_hours: 48
      },
      {
        id: 103,
        title: "JavaScript Basics",
        description: "Learn JavaScript fundamentals including variables, functions, events, and DOM manipulation.",
        points: 200,
        submission_status: null,
        unlocked: false,
        can_submit: false,
        is_completed: false,
        deadline: "2024-08-17 23:59:59",
        status_text: "Locked",
        status_color: "gray",
        duration_hours: 72
      },
      {
        id: 104,
        title: "React Introduction",
        description: "Build interactive UIs with React. Learn components, props, state, and hooks.",
        points: 250,
        submission_status: null,
        unlocked: false,
        can_submit: false,
        is_completed: false,
        deadline: "2024-08-24 23:59:59",
        status_text: "Locked",
        status_color: "gray",
        duration_hours: 96
      }
    ]
  };

  useEffect(() => {
    // Simulate API call
    setRoadmap(sampleRoadmap);
  }, [id]);

  const handleSubmit = () => {
    // API call to submit work
    console.log("Submitting for event:", selectedEvent.id, submission);
    setIsSubmitDialogOpen(false);
    setSubmission({ text: "", file: null });
  };

  const openSubmitDialog = (event) => {
    setSelectedEvent(event);
    setIsSubmitDialogOpen(true);
  };

  const getStatusIcon = (event) => {
    if (event.is_completed) return <CheckCircle className="h-5 w-5 text-accent" />;
    if (!event.unlocked) return <Lock className="h-5 w-5 text-muted-foreground" />;
    return <Clock className="h-5 w-5 text-warning" />;
  };

  const getStatusBadge = (event) => {
    if (event.is_completed) return <Badge className="progress-complete">Completed</Badge>;
    if (event.submission_status === "pending") return <Badge className="progress-pending">Under Review</Badge>;
    if (!event.unlocked) return <Badge className="progress-locked">Locked</Badge>;
    return <Badge variant="outline">Available</Badge>;
  };

  if (!roadmap) {
    return <div className="min-h-screen bg-background flex items-center justify-center">Loading...</div>;
  }

  const completedEvents = roadmap.events.filter(event => event.is_completed).length;
  const totalEvents = roadmap.events.length;
  const progressPercentage = (completedEvents / totalEvents) * 100;

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex items-center space-x-4">
          <Button variant="outline" size="sm" onClick={() => navigate('/dashboard')}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Dashboard
          </Button>
        </div>

        {/* Roadmap Info */}
        <Card className="card-glow">
          <CardHeader>
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <CardTitle className="text-3xl text-gradient-primary mb-2">
                  {roadmap.title}
                </CardTitle>
                <CardDescription className="text-lg">
                  {roadmap.description}
                </CardDescription>
              </div>
              <Badge variant="secondary" className="px-4 py-2">
                {roadmap.roadmap_status}
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Progress */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="font-medium">Overall Progress</span>
                <span>{Math.round(progressPercentage)}% Complete</span>
              </div>
              <Progress value={progressPercentage} className="h-3" />
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>{completedEvents} of {totalEvents} tasks completed</span>
                <span>Due: {new Date(roadmap.end_date).toLocaleDateString()}</span>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 py-4 border-t">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">
                  {roadmap.events.reduce((sum, event) => sum + (event.is_completed ? event.points : 0), 0)}
                </div>
                <div className="text-sm text-muted-foreground">Points Earned</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">
                  {roadmap.events.reduce((sum, event) => sum + event.duration_hours, 0)}h
                </div>
                <div className="text-sm text-muted-foreground">Total Duration</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">
                  {completedEvents}
                </div>
                <div className="text-sm text-muted-foreground">Tasks Done</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Events List */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Learning Path</h2>
          <div className="space-y-4">
            {roadmap.events.map((event, index) => (
              <Card key={event.id} className={`card-hover ${!event.unlocked ? 'opacity-75' : ''}`}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4 flex-1">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-primary/10 to-accent/10">
                        {getStatusIcon(event)}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-xl font-semibold">{event.title}</h3>
                          {getStatusBadge(event)}
                        </div>
                        <p className="text-muted-foreground mb-4">{event.description}</p>
                        
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                          <div className="flex items-center space-x-2">
                            <Star className="h-4 w-4 text-warning" />
                            <span>{event.points} points</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Clock className="h-4 w-4 text-muted-foreground" />
                            <span>{event.duration_hours}h duration</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Calendar className="h-4 w-4 text-muted-foreground" />
                            <span>Due: {new Date(event.deadline).toLocaleDateString()}</span>
                          </div>
                          <div className="text-muted-foreground">
                            Task #{index + 1}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col space-y-2 ml-4">
                      {event.can_submit && (
                        <Button 
                          size="sm" 
                          className="btn-hero"
                          onClick={() => openSubmitDialog(event)}
                        >
                          <Upload className="h-4 w-4 mr-2" />
                          Submit Work
                        </Button>
                      )}
                      {event.is_completed && (
                        <Button size="sm" variant="outline">
                          <FileText className="h-4 w-4 mr-2" />
                          View Submission
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Submit Dialog */}
        <Dialog open={isSubmitDialogOpen} onOpenChange={setIsSubmitDialogOpen}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Submit Your Work</DialogTitle>
              <DialogDescription>
                Submit your solution for "{selectedEvent?.title}"
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="submission-text">Description (Optional)</Label>
                <Textarea
                  id="submission-text"
                  placeholder="Describe your approach, challenges faced, or any notes..."
                  value={submission.text}
                  onChange={(e) => setSubmission({ ...submission, text: e.target.value })}
                  rows={4}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="submission-file">File Upload (Optional)</Label>
                <Input
                  id="submission-file"
                  type="file"
                  onChange={(e) => setSubmission({ ...submission, file: e.target.files[0] })}
                  className="h-12"
                />
                <p className="text-xs text-muted-foreground">
                  Upload your code files, screenshots, or documentation
                </p>
              </div>

              <div className="flex justify-end space-x-2 pt-4">
                <Button variant="outline" onClick={() => setIsSubmitDialogOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={handleSubmit} className="btn-hero">
                  Submit Work
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default RoadmapDetail;