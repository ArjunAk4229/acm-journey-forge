import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Users, Target, Zap, Code, Rocket } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();
  const features = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Structured Learning",
      description: "Follow carefully crafted roadmaps designed by ACM experts"
    },
    {
      icon: <Trophy className="h-8 w-8" />,
      title: "Gamified Progress",
      description: "Earn points, unlock achievements, and climb the leaderboards"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Community Driven",
      description: "Learn alongside fellow developers in our supportive community"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Real-time Feedback",
      description: "Get instant feedback on your submissions and progress"
    }
  ];

  const stats = [
    { number: "500+", label: "Students Enrolled" },
    { number: "50+", label: "Learning Paths" },
    { number: "95%", label: "Success Rate" },
    { number: "24/7", label: "Support" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-primary to-primary-glow rounded-lg flex items-center justify-center">
            <Code className="h-4 w-4 text-primary-foreground" />
          </div>
          <span className="text-2xl font-bold text-gradient-primary">ACM Learn</span>
        </div>
        <div className="flex space-x-4">
          <Button variant="ghost" className="hover:bg-primary/10" onClick={() => navigate('/login')}>
            Login
          </Button>
          <Button className="btn-hero" onClick={() => navigate('/signup')}>
            Get Started
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Level Up Your
            <span className="text-gradient-primary block">Coding Journey</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join ACM's gamified learning platform where every challenge completed brings you closer to becoming a tech expert. Start your adventure today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-hero" onClick={() => navigate('/signup')}>
              <Rocket className="mr-2 h-5 w-5" />
              Start Learning
            </Button>
            <Button variant="outline" className="btn-ghost-hero" onClick={() => navigate('/dashboard')}>
              Explore Roadmaps
            </Button>
          </div>
        </div>

        {/* Floating Cards Animation */}
        <div className="relative mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {stats.map((stat, index) => (
              <Card key={index} className="card-glow animate-float" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-gradient-primary mb-2">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Why Choose ACM Learn?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience learning like never before with our innovative approach to technical education
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="card-hover group">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl w-fit group-hover:scale-110 transition-transform duration-300">
                  <div className="text-primary">{feature.icon}</div>
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary via-primary-glow to-accent py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-primary-foreground mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Join thousands of students who are already mastering their skills through our interactive learning platform.
          </p>
          <Button size="lg" variant="secondary" className="font-semibold text-lg px-8 py-4" onClick={() => navigate('/signup')}>
            Join ACM Learn Today
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-6 h-6 bg-gradient-to-r from-primary to-primary-glow rounded flex items-center justify-center">
                <Code className="h-3 w-3 text-primary-foreground" />
              </div>
              <span className="text-lg font-semibold">ACM Learn</span>
            </div>
            <div className="text-sm text-secondary-foreground/80">
              © 2024 ACM Learn. Building the next generation of developers.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;