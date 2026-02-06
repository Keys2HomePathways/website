import { CtaSection } from "@/components/CtaSection";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SEO, getOrganizationStructuredData } from "@/components/SEO";

const APP_URL = "https://link.apisystem.tech/widget/form/NuDLvjpzzljLuHBYhm0A";

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
      <SEO
        title="About Keys2Home - Comprehensive Homeownership Readiness Program"
        description="Learn about Keys2Home's structured homeownership program. We provide personalized guidance, professional connections, and ongoing support for essential workers pursuing homeownership."
        keywords="homeownership readiness program, mortgage preparation, home buying process, workforce housing program, professional guidance, structured support"
        url="/about"
        structuredData={getOrganizationStructuredData()}
      />
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
                alt="Professional consultation meeting for Keys2Home homeownership program guidance"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-purple-600 to-purple-700 text-white">
        <div className="container px-4 md:px-6 mx-auto text-center">
          <div className="flex flex-col items-center gap-6">
            <Button 
              onClick={() => window.open(APP_URL, '_blank')}
              size="lg" 
              className="text-lg h-14 px-8 rounded-full bg-white text-purple-600 hover:bg-gray-50 shadow-lg"
            >
              Start Your Quick Eligibility Check
            </Button>
            
            <p className="text-purple-100 text-sm">
              Not a loan application. Does not impact your credit score.
            </p>
          </div>
        </div>
      </section>

      {/* Team Bios */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experienced professionals dedicated to your homeownership success
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Nikki Hawkins - Founder Bio */}
            <div className="space-y-6">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-tr from-purple-200 to-indigo-200 rounded-3xl blur-2xl opacity-50" />
                <img
                  src="/Nikki_Headshot_Updated.png"
                  alt="Nikki Hawkins - Keys2Home Founder and Real Estate Developer"
                  className="relative rounded-2xl shadow-2xl w-full object-cover object-[center_30%] aspect-[4/3]"
                  loading="lazy"
                />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-display font-bold text-slate-900">
                  Nikki Hawkins
                </h3>
                <p className="text-lg font-semibold text-primary">
                  Founder & Real Estate Developer
                </p>
                <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
                  <p>
                    Nikki Hawkins is a real estate developer and licensed real estate broker with a Master's degree in Real Estate Development.
                  </p>
                  <p>
                    She founded the Keys2Home Pathway Program after witnessing how many capable, hardworking individuals are told they do not qualify to buy a home without being given a clear, structured path forward.
                  </p>
                  <p>
                    With experience in both real estate development and brokerage, Nikki understands buyer readiness and housing delivery. Keys2Home was created to bridge that gap by providing structure, guidance, and ongoing support.
                  </p>
                  <p className="font-semibold text-slate-900">
                    Her work centers on preparation before opportunity, clarity over confusion, and long-term housing stability.
                  </p>
                </div>
              </div>
            </div>

            {/* Holly Forde - Program Specialist */}
            <div className="space-y-6">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-tr from-purple-200 to-indigo-200 rounded-3xl blur-2xl opacity-50" />
                <img
                  src="/Holly_Headshot.png"
                  alt="Holly Forde - Keys2Home Program Specialist"
                  className="relative rounded-2xl shadow-2xl w-full object-cover object-top aspect-[4/3]"
                  loading="lazy"
                />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-display font-bold text-slate-900">
                  Holly Forde
                </h3>
                <p className="text-lg font-semibold text-primary">
                  Program Specialist
                </p>
                <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
                  <p>
                    Holly Forde serves as a Program Specialist for Keys2Home, supporting participants from onboarding through next steps.
                  </p>
                  <p>
                    She helps ensure documentation readiness, clear communication, and ongoing support so participants feel confident and informed throughout the process.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-slate-50">
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
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6 mx-auto max-w-4xl">
          <div className="bg-slate-50 rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100">
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
