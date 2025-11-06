import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import { Link } from "react-router-dom";
import { AlertCircle, ArrowRight, Flag, TrendingUp, Users, Vote } from "lucide-react";
import heroImage from "@/assets/hero-civic.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-civic-saffron/10 via-transparent to-civic-blue/10" />
        <div className="container mx-auto px-4 py-16 md:py-24 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                <Flag className="h-4 w-4" />
                Empowering Citizens
              </div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Transparent Civic{" "}
                <span className="bg-gradient-to-r from-civic-saffron via-civic-blue to-civic-green bg-clip-text text-transparent">
                  Problem-Solving
                </span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Report civic issues, track their progress, and hold local authorities accountable. 
                Together, we build better communities through transparency and action.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/report">
                  <Button variant="hero" size="lg" className="w-full sm:w-auto">
                    Report a Problem
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/issues">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    Browse Issues
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src={heroImage}
                alt="Citizens collaborating for civic improvement"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-xl shadow-lg border">
                <div className="flex items-center gap-3">
                  <div className="bg-civic-success/10 p-3 rounded-lg">
                    <TrendingUp className="h-6 w-6 text-civic-success" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">2,847</p>
                    <p className="text-sm text-muted-foreground">Issues Resolved</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How CivicLink Works</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A simple, transparent process to ensure every civic problem gets the attention it deserves
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: AlertCircle,
                title: "Report Issue",
                description: "Citizens report problems with photos and location tags",
                color: "civic-saffron",
              },
              {
                icon: Vote,
                title: "Community Validates",
                description: "Local residents upvote to validate the issue's importance",
                color: "civic-blue",
              },
              {
                icon: TrendingUp,
                title: "Auto-Escalation",
                description: "Unresolved issues automatically escalate to higher authorities",
                color: "civic-warning",
              },
              {
                icon: Users,
                title: "Track Progress",
                description: "Real-time updates on issue status and resolution timeline",
                color: "civic-success",
              },
            ].map((step, index) => (
              <Card key={index} className="relative overflow-hidden group hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className={`bg-${step.color}/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <step.icon className={`h-6 w-6 text-${step.color}`} />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                  <div className="absolute top-4 right-4 text-3xl font-bold text-muted/10">
                    {index + 1}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "12,458", label: "Issues Reported" },
              { value: "2,847", label: "Problems Resolved" },
              { value: "45,892", label: "Active Citizens" },
              { value: "127", label: "Participating Cities" },
            ].map((stat, index) => (
              <div key={index}>
                <p className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</p>
                <p className="text-primary-foreground/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Make a Difference?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of citizens working together to improve their communities
          </p>
          <Link to="/report">
            <Button variant="hero" size="lg">
              Report Your First Issue
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
