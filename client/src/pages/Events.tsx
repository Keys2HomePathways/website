import { useEffect, useState } from "react";
import { CtaSection } from "@/components/CtaSection";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import { Calendar, Clock, MapPin, Users, Video, BookOpen, UserCheck, ExternalLink } from "lucide-react";
import { 
  getEventsGrouped, 
  getEventsPageContent, 
  type Event, 
  type EventsPageContent 
} from "@/sanity";

const APP_URL = "https://link.apisystem.tech/widget/form/NuDLvjpzzljLuHBYhm0A";

export default function Events() {
  const [events, setEvents] = useState<{
    info: Event[];
    workshop: Event[];
    orientation: Event[];
  }>({ info: [], workshop: [], orientation: [] });
  
  const [pageContent, setPageContent] = useState<EventsPageContent | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [eventsData, contentData] = await Promise.all([
          getEventsGrouped(),
          getEventsPageContent()
        ]);
        
        setEvents(eventsData);
        setPageContent(contentData);
      } catch (error) {
        console.error('Error fetching events data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Default content fallbacks
  const defaultContent = {
    title: "Events & Calendar",
    subtitle: "Join our orientation sessions, educational workshops, and information sessions to support your homeownership journey.",
    infoSectionTitle: "Information Sessions",
    infoSectionDescription: "Learn about Keys2Home and ask questions before you apply.",
    workshopSectionTitle: "Educational Workshops",
    workshopSectionDescription: "Specialized workshops focusing on key aspects of homeownership preparation.",
    orientationSectionTitle: "Program Orientations",
    orientationSectionDescription: "Required orientation sessions for all new Keys2Home participants. Choose from upcoming dates.",
    orientationNote: "Orientations are required for all new participants. You must complete the Quick Eligibility Check before attending orientation.",
    guidelinesTitle: "Event Guidelines",
    beforeAttendingTitle: "Before Attending",
    beforeAttendingItems: [
      "Complete your Quick Eligibility Check (for orientations)",
      "Test your technology for virtual events", 
      "Prepare questions you'd like to ask",
      "Have a notebook ready for taking notes"
    ],
    whatToExpectTitle: "What to Expect",
    whatToExpectItems: [
      "Interactive presentations and Q&A",
      "Opportunities to connect with other participants",
      "Resource materials and next steps", 
      "Access to program specialists"
    ],
    noEventsMessage: "No upcoming events are currently scheduled in this category. Please check back soon for new dates.",
    registrationUrl: undefined
  };

  const content = pageContent || defaultContent;

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getEventIcon = (eventType: string) => {
    switch (eventType) {
      case 'info': return Users;
      case 'workshop': return BookOpen;
      case 'orientation': return Calendar;
      default: return Users;
    }
  };

  const getEventColor = (eventType: string) => {
    switch (eventType) {
      case 'info': return 'blue-500';
      case 'workshop': return 'green-500';
      case 'orientation': return 'primary';
      default: return 'blue-500';
    }
  };

  const renderEventCard = (event: Event, colorScheme: string, displayType: string) => {
    const Icon = getEventIcon(event.eventType);
    const handleButtonClick = () => {
      if (event.registrationUrl) {
        window.open(event.registrationUrl, '_blank');
      } else if (pageContent?.registrationUrl) {
        window.open(pageContent.registrationUrl, '_blank');
      } else {
        window.open(APP_URL, '_blank');
      }
    };

    return (
      <Card key={event._id} className={`border-l-4 border-l-${colorScheme} hover:shadow-lg transition-shadow`}>
        <CardHeader>
          <div className={`flex items-center gap-2 mb-2 ${
            colorScheme === 'primary' ? 'text-primary' :
            colorScheme === 'green-500' ? 'text-green-600' :
            'text-blue-600'
          }`}>
            <Icon className="w-5 h-5" />
            <span className="text-sm font-medium">{displayType}</span>
            {event.isFeatured && (
              <span className="ml-auto bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">
                Featured
              </span>
            )}
          </div>
          <CardTitle className="text-lg text-slate-900">{event.title}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center gap-2 text-slate-600">
            <Calendar className="w-4 h-4" />
            <span className="text-sm">{formatDate(event.date)}</span>
          </div>
          <div className="flex items-center gap-2 text-slate-600">
            <Clock className="w-4 h-4" />
            <span className="text-sm">{event.startTime} - {event.endTime}</span>
          </div>
          <div className="flex items-center gap-2 text-slate-600">
            {event.format === 'Virtual' ? (
              <Video className="w-4 h-4" />
            ) : (
              <MapPin className="w-4 h-4" />
            )}
            <span className="text-sm">
              {event.format === 'Virtual' ? event.format : event.location || event.format}
            </span>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">{event.description}</p>
          
          <Button
            onClick={handleButtonClick}
            variant="outline"
            className={`w-full mt-4 ${
              colorScheme === 'primary' ? 'border-primary text-primary hover:bg-primary/5' :
              colorScheme === 'green-500' ? 'border-green-500 text-green-600 hover:bg-green-50' :
              'border-blue-500 text-blue-600 hover:bg-blue-50'
            }`}
            size="sm"
          >
            {event.eventType === 'orientation' ? 'Register Now' : 
             event.eventType === 'workshop' ? 'Learn More' :
             'Join Session'}
            {(event.registrationUrl || pageContent?.registrationUrl) && (
              <ExternalLink className="w-4 h-4 ml-2" />
            )}
          </Button>

          {event.maxCapacity && (
            <p className="text-xs text-slate-500 text-center">
              Limited to {event.maxCapacity} participants
            </p>
          )}
        </CardContent>
      </Card>
    );
  };

  if (loading) {
    return (
      <div className="bg-background">
        <section className="bg-slate-50 py-20 border-b">
          <div className="container px-4 md:px-6 mx-auto text-center max-w-4xl">
            <div className="animate-pulse">
              <div className="h-12 bg-slate-300 rounded mb-6 mx-auto max-w-md"></div>
              <div className="h-6 bg-slate-200 rounded mx-auto max-w-2xl"></div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="bg-background">
      <SEO
        title={`${content.title} - Keys2Home Program Sessions`}
        description="Join our orientation sessions, workshops, and information sessions. Learn about homeownership, meet our specialists, and connect with other program participants."
        keywords="homeownership workshops, program orientation, info sessions, mortgage education, credit building workshops"
        url="/events"
      />
      
      {/* Header */}
      <section className="bg-slate-50 py-20 border-b">
        <div className="container px-4 md:px-6 mx-auto text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">
            {content.title}
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            {content.subtitle}
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
              {content.infoSectionTitle}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {content.infoSectionDescription}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {events.info.length > 0 ? (
              events.info.map((event) => renderEventCard(event, 'blue-500', 'Info Session'))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-muted-foreground text-lg">{content.noEventsMessage}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Educational Workshops */}
      <section className="py-20 bg-slate-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">
              {content.workshopSectionTitle}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {content.workshopSectionDescription}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {events.workshop.length > 0 ? (
              events.workshop.map((event) => renderEventCard(event, 'green-500', 'Workshop'))
            ) : (
              <div className="col-span-full text-center py-12">
                <div className="bg-white rounded-lg p-8">
                  <p className="text-muted-foreground text-lg">{content.noEventsMessage}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Program Orientations */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">
              {content.orientationSectionTitle}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {content.orientationSectionDescription}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {events.orientation.length > 0 ? (
              events.orientation.map((event) => renderEventCard(event, 'primary', 'Program Orientation'))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-muted-foreground text-lg">{content.noEventsMessage}</p>
              </div>
            )}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-slate-600 max-w-2xl mx-auto">
              {content.orientationNote}
            </p>
          </div>
        </div>
      </section>

      {/* Event Guidelines */}
      <section className="py-16 bg-slate-50">
        <div className="container px-4 md:px-6 mx-auto max-w-4xl">
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-display font-bold text-slate-900 mb-6 text-center">
              {content.guidelinesTitle}
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-lg text-slate-900 mb-3">{content.beforeAttendingTitle}</h4>
                <ul className="space-y-2 text-slate-600">
                  {(content.beforeAttendingItems || []).map((item, index) => (
                    <li key={index}>• {item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-lg text-slate-900 mb-3">{content.whatToExpectTitle}</h4>
                <ul className="space-y-2 text-slate-600">
                  {(content.whatToExpectItems || []).map((item, index) => (
                    <li key={index}>• {item}</li>
                  ))}
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