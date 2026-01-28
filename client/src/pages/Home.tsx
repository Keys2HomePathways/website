import { CtaSection } from "@/components/CtaSection";
import { ValuePropCard } from "@/components/ValuePropCard";
import { Button } from "@/components/ui/button";
import { ClipboardCheck, Handshake, BookOpen, Key, Users } from "lucide-react";

const APP_URL = "https://link.apisystem.tech/widget/form/NuDLvjpzzljLuHBYhm0A";

export default function Home() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 md:pt-32 md:pb-48 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-100 via-background to-background" />
        
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-4xl mx-auto text-center space-y-8 fade-in-up">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-purple-50 border border-purple-100 text-primary text-sm font-medium mb-4">
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
              Workforce Housing Initiative
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-slate-900 leading-[1.1]">
              <span className="text-gradient">Keys2Home™</span> <br /> 
              Pathway Program
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              A structured, supportive homeownership readiness program designed specifically for the dedicated workforce.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button 
                onClick={() => window.open(APP_URL, '_blank')}
                size="lg" 
                className="w-full sm:w-auto text-lg h-14 px-8 rounded-full shadow-lg shadow-primary/25 bg-primary hover:bg-primary/90"
              >
                Start Your Quick Eligibility Check
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="w-full sm:w-auto text-lg h-14 px-8 rounded-full border-2"
                onClick={() => window.location.href = "/about"}
              >
                Learn How It Works
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Grid */}
      <section className="py-24 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">
              Why Choose Keys2Home™?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We bridge the gap between earning a living and building a life, offering more than just education.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ValuePropCard
              icon={ClipboardCheck}
              title="Personalized Roadmap"
              description="Receive a tailored Homeownership Action Plan designed around your unique financial situation and goals."
            />
            <ValuePropCard
              icon={Handshake}
              title="Dedicated Support"
              description="Work with a designated Program Specialist who guides you through every step of the process."
            />
            <ValuePropCard
              icon={BookOpen}
              title="Structured Education"
              description="Access comprehensive resources that demystify the mortgage process, credit, and home buying."
            />
            <ValuePropCard
              icon={Users}
              title="Professional Network"
              description="Connect with vetted lenders, realtors, and housing counselors committed to your success."
            />
            <ValuePropCard
              icon={Key}
              title="Workforce Focused"
              description="Built specifically for educators, healthcare workers, public servants, and essential personnel."
            />
            <ValuePropCard
              icon={ClipboardCheck}
              title="Readiness First"
              description="We focus on true preparation, ensuring you are confident and qualified before you make an offer."
            />
          </div>
        </div>
      </section>

      {/* Image Split Section */}
      <section className="py-24 bg-slate-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2 relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-purple-200 to-indigo-200 rounded-3xl blur-2xl opacity-50" />
              {/* Unsplash image: Diverse family moving into new home, happy, keys */}
              {/* <!-- happy family moving into home with boxes --> */}
              <img 
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Happy couple moving into their new home" 
                className="relative rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
              />
            </div>
            <div className="w-full lg:w-1/2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900">
                More than just a program.<br/>A partnership.
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                The path to homeownership can feel overwhelming, especially for the workforce that powers our communities. You may earn too much for traditional assistance but find market prices just out of reach.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Keys2Home™ provides the structure, guidance, and professional support network you need to navigate this journey with confidence. We don't just hand you a pamphlet; we walk the path with you.
              </p>
              <div className="pt-4">
                <Button 
                  variant="link" 
                  className="text-primary font-semibold text-lg p-0 h-auto hover:no-underline hover:opacity-80"
                  onClick={() => window.location.href = "/participants"}
                >
                  See who the program is for &rarr;
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaSection />
    </div>
  );
}
