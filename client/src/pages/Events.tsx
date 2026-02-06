import { CtaSection } from "@/components/CtaSection";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import { Calendar, Clock, MapPin, Users, Video, BookOpen, UserCheck } from "lucide-react";

const APP_URL = "https://link.apisystem.tech/widget/form/NuDLvjpzzljLuHBYhm0A";

export default function Events() {
  const orientationDates = [
    {
      date: "March 15, 2024",
      time: "6:00 PM - 8:00 PM EST", 
      format: "Virtual",
      type: "Program Orientation",
      description: "Introduction to the Keys2Home pathway, meet your program specialist, and understand next steps."
    },
    {
      date: "March 29, 2024",
      time: "6:00 PM - 8:00 PM EST",
      format: "Virtual", 
      type: "Program Orientation",
      description: "Introduction to the Keys2Home pathway, meet your program specialist, and understand next steps."
    },
    {
      date: "April 12, 2024",
      time: "6:00 PM - 8:00 PM EST",
      format: "Virtual",
      type: "Program Orientation", 
      description: "Introduction to the Keys2Home pathway, meet your program specialist, and understand next steps."
    }
  ];

  const workshops = [
    {
      title: "Credit Building Workshop",
      date: "March 22, 2024",
      time: "7:00 PM - 8:30 PM EST",
      format: "Virtual",
      description: "Learn strategies to improve your credit score, understand credit reports, and establish healthy financial habits."
    },
    {
      title: "Mortgage Basics Info Session", 
      date: "April 5, 2024",
      time: "7:00 PM - 8:30 PM EST",
      format: "Virtual",
      description: "Understanding different loan types, down payment requirements, and what lenders look for in applicants."
    },
    {
      title: "Budgeting for Homeownership",
      date: "April 19, 2024", 
      time: "7:00 PM - 8:30 PM EST",
      format: "Virtual",
      description: "Learn to budget for down payments, closing costs, and ongoing homeownership expenses."
    },
    {
      title: "First-Time Buyer Programs",
      date: "May 3, 2024",
      time: "7:00 PM - 8:30 PM EST", 
      format: "Virtual",
      description: "Explore local and national programs offering down payment assistance and favorable terms."
    }
  ];

  const upcomingInfoSessions = [
    {
      title: "Keys2Home Program Overview",
      date: "March 8, 2024", 
      time: "12:00 PM - 1:00 PM EST",
      format: "Virtual",
      description: "Learn about the program structure, requirements, and how to get started."
    },
    {
      title: "Q&A with Program Specialists",
      date: "March 20, 2024",
      time: "7:00 PM - 8:00 PM EST", 
      format: "Virtual", 
      description: "Ask questions about the program, eligibility, and next steps."
    },
    {
      title: "Success Stories Panel",
      date: "April 10, 2024",
      time: "6:30 PM - 7:30 PM EST",
      format: "Virtual",
      description: "Hear from recent program graduates about their homeownership journey."
    }
  ];

  return (
    <div className="bg-background">
      <SEO
        title="Events & Calendar - Keys2Home Program Sessions"
        description="Join our orientation sessions, workshops, and information sessions. Learn about homeownership, meet our specialists, and connect with other program participants."
        keywords="homeownership workshops, program orientation, info sessions, mortgage education, credit building workshops"
        url="/events"
      />
      
      {/* Header */}
      <section className="bg-slate-50 py-20 border-b">
        <div className="container px-4 md:px-6 mx-auto text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">
            Events & Calendar
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Join our orientation sessions, educational workshops, and information sessions to support your homeownership journey.
          </p>
        </div>
      </section>

      {/* Quick Info */}
      <section className="py-16">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center max-w-4xl mx-auto">
            <div>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg text-slate-900 mb-2">Information Sessions</h3>
              <p className="text-slate-600">Learn about the program and ask questions before applying.</p>
            </div>
            
            <div>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg text-slate-900 mb-2">Educational Workshops</h3>
              <p className="text-slate-600">Deep-dive sessions on credit, budgeting, and mortgage preparation.</p>
            </div>
            
            <div>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <UserCheck className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg text-slate-900 mb-2">Program Orientations</h3>
              <p className="text-slate-600">Required for all new participants to begin the pathway process.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Information Sessions */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">
              Information Sessions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Learn about Keys2Home and ask questions before you apply.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {upcomingInfoSessions.map((session, index) => (
              <Card key={index} className="border-l-4 border-l-blue-500 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-2 text-blue-600 mb-2">
                    <Users className="w-5 h-5" />
                    <span className="text-sm font-medium">Info Session</span>
                  </div>
                  <CardTitle className="text-lg text-slate-900">{session.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2 text-slate-600">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{session.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">{session.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600">
                    <Video className="w-4 h-4" />
                    <span className="text-sm">{session.format}</span>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">{session.description}</p>
                  <Button
                    variant="outline"
                    className="w-full mt-4 border-blue-500 text-blue-600 hover:bg-blue-50"
                    size="sm"
                  >
                    Join Session
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Educational Workshops */}
      <section className="py-20 bg-slate-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">
              Educational Workshops
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Specialized workshops focusing on key aspects of homeownership preparation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {workshops.map((workshop, index) => (
              <Card key={index} className="border-l-4 border-l-green-500 hover:shadow-lg transition-shadow bg-white">
                <CardHeader>
                  <div className="flex items-center gap-2 text-green-600 mb-2">
                    <BookOpen className="w-5 h-5" />
                    <span className="text-sm font-medium">Workshop</span>
                  </div>
                  <CardTitle className="text-xl text-slate-900">{workshop.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2 text-slate-600">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{workshop.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">{workshop.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600">
                    <Video className="w-4 h-4" />
                    <span className="text-sm">{workshop.format}</span>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">{workshop.description}</p>
                  <Button
                    variant="outline"
                    className="w-full mt-4 border-green-500 text-green-600 hover:bg-green-50"
                    size="sm"
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Program Orientations */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">
              Program Orientations
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Required orientation sessions for all new Keys2Home participants. Choose from upcoming dates.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {orientationDates.map((event, index) => (
              <Card key={index} className="border-l-4 border-l-primary hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-2 text-primary mb-2">
                    <Calendar className="w-5 h-5" />
                    <span className="font-semibold">{event.type}</span>
                  </div>
                  <CardTitle className="text-xl text-slate-900">{event.date}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2 text-slate-600">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600">
                    <Video className="w-4 h-4" />
                    <span className="text-sm">{event.format}</span>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">{event.description}</p>
                  <Button
                    onClick={() => window.open(APP_URL, '_blank')}
                    className="w-full mt-4 bg-primary hover:bg-primary/90"
                    size="sm"
                  >
                    Register Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-slate-600 max-w-2xl mx-auto">
              Orientations are required for all new participants. You must complete the Quick Eligibility Check before attending orientation.
            </p>
          </div>
        </div>
      </section>

      {/* Event Guidelines */}
      <section className="py-16 bg-slate-50">
        <div className="container px-4 md:px-6 mx-auto max-w-4xl">
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-display font-bold text-slate-900 mb-6 text-center">
              Event Guidelines
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-lg text-slate-900 mb-3">Before Attending</h4>
                <ul className="space-y-2 text-slate-600">
                  <li>• Complete your Quick Eligibility Check (for orientations)</li>
                  <li>• Test your technology for virtual events</li>
                  <li>• Prepare questions you'd like to ask</li>
                  <li>• Have a notebook ready for taking notes</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-lg text-slate-900 mb-3">What to Expect</h4>
                <ul className="space-y-2 text-slate-600">
                  <li>• Interactive presentations and Q&A</li>
                  <li>• Opportunities to connect with other participants</li>
                  <li>• Resource materials and next steps</li>
                  <li>• Access to program specialists</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaSection />
    </div>
  );
}