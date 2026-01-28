import { CtaSection } from "@/components/CtaSection";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  const steps = [
    {
      title: "Quick Eligibility Check (QEC)",
      description: "A fast, simple online assessment to determine basic program eligibility."
    },
    {
      title: "Holistic Review",
      description: "A deeper look at your financial picture to understand your starting point."
    },
    {
      title: "Pre-screening",
      description: "Initial verification to ensure you're matched with the right resources."
    },
    {
      title: "Orientation",
      description: "Welcome to the program! Meet your specialist and understand the road ahead."
    },
    {
      title: "Structured Guidance",
      description: "Ongoing education, credit support, and lender preparation until you are ready to buy."
    }
  ];

  return (
    <div className="bg-background">
      {/* Header */}
      <section className="bg-slate-50 py-20 border-b">
        <div className="container px-4 md:px-6 mx-auto text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">
            About the Program
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Keys2Home™ Pathway Program is a comprehensive, PAID homeownership readiness initiative designed to turn "aspiring" into "achieving."
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-display font-bold text-primary">Our Mission</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                We believe that the workforce—our teachers, nurses, first responders, and essential employees—deserves a clear path to stability.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                This is not a one-size-fits-all generic course. It is a proprietary, structured system that combines education with actionable professional guidance. We act as your quarterback, coordinating the pieces of the complex homebuying puzzle.
              </p>
            </div>
            <div className="relative h-full min-h-[400px] rounded-2xl overflow-hidden shadow-xl">
               {/* Unsplash image: Team meeting, collaboration, planning */}
              {/* <!-- professional meeting consulting --> */}
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Consultation meeting" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold text-slate-900">The Pathway Process</h2>
            <p className="text-muted-foreground mt-4">A proven sequence designed for your success</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {steps.map((step, index) => (
              <Card key={index} className="border-l-4 border-l-primary shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6 md:p-8 flex gap-6 items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-lg">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                    <p className="text-slate-600">{step.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What We Are Not */}
      <section className="py-20 bg-slate-50">
        <div className="container px-4 md:px-6 mx-auto max-w-4xl">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-slate-900 mb-8 text-center">
              Important Distinction
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-lg text-green-600 mb-4 flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5" /> What We Are
                </h3>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex gap-2"><ArrowRight className="h-4 w-4 mt-1 text-green-600 shrink-0"/> A structured readiness program</li>
                  <li className="flex gap-2"><ArrowRight className="h-4 w-4 mt-1 text-green-600 shrink-0"/> A source of professional guidance</li>
                  <li className="flex gap-2"><ArrowRight className="h-4 w-4 mt-1 text-green-600 shrink-0"/> A for-profit educational service</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg text-red-500 mb-4 flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 rotate-45" /> What We Are Not
                </h3>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex gap-2"><ArrowRight className="h-4 w-4 mt-1 text-red-500 shrink-0"/> A mortgage lender or bank</li>
                  <li className="flex gap-2"><ArrowRight className="h-4 w-4 mt-1 text-red-500 shrink-0"/> A guaranteed housing placement service</li>
                  <li className="flex gap-2"><ArrowRight className="h-4 w-4 mt-1 text-red-500 shrink-0"/> A non-profit organization</li>
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
