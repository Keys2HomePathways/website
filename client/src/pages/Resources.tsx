import { CtaSection } from "@/components/CtaSection";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SEO } from "@/components/SEO";
import { BookOpen, CreditCard, Home, AlertTriangle, CheckCircle, TrendingUp, DollarSign, FileText } from "lucide-react";

export default function Resources() {
  const creditTips = [
    {
      title: "Check Your Credit Report",
      description: "Get free annual reports from all three bureaus and review for errors."
    },
    {
      title: "Pay Bills on Time",
      description: "Payment history is 35% of your credit score. Set up automatic payments."
    },
    {
      title: "Lower Credit Utilization",
      description: "Keep credit card balances below 30% of available limits, ideally under 10%."
    },
    {
      title: "Don't Close Old Accounts",
      description: "Length of credit history matters. Keep older accounts open."
    },
    {
      title: "Limit New Credit Inquiries",
      description: "Too many new accounts can lower your score temporarily."
    }
  ];

  const mortgageReadySteps = [
    {
      title: "Stable Employment",
      description: "2+ years of steady employment history in the same field."
    },
    {
      title: "Down Payment Savings",
      description: "3-20% of home price, depending on loan type and programs available."
    },
    {
      title: "Emergency Fund",
      description: "3-6 months of expenses saved beyond your down payment."
    },
    {
      title: "Debt-to-Income Ratio",
      description: "Total monthly debt payments should be less than 43% of gross income."
    },
    {
      title: "Pre-approval Letter",
      description: "Get pre-approved to understand your budget and show sellers you're serious."
    }
  ];

  const pathwaySteps = [
    {
      step: "1",
      title: "Quick Eligibility Check",
      description: "Complete our online assessment to determine if Keys2Home is right for you."
    },
    {
      step: "2",
      title: "Orientation & Onboarding",
      description: "Meet your program specialist and learn about the complete pathway process."
    },
    {
      step: "3",
      title: "Readiness Assessment",
      description: "Comprehensive review of your financial situation and homeownership goals."
    },
    {
      step: "4",
      title: "Lender Guidance",
      description: "Connect with vetted mortgage professionals who understand your needs."
    },
    {
      step: "5",
      title: "Credit & Financial Support",
      description: "Get personalized guidance to improve credit and financial readiness."
    },
    {
      step: "6",
      title: "Action Plan Development",
      description: "Receive a customized roadmap with specific steps and timelines."
    },
    {
      step: "7",
      title: "Realtor Assignment",
      description: "Work with a qualified agent who understands workforce housing needs."
    },
    {
      step: "8",
      title: "Ongoing Support",
      description: "Continue receiving guidance and support until you reach homeownership."
    }
  ];

  return (
    <div className="bg-background">
      <SEO
        title="Resources - Keys2Home Homeownership Education"
        description="Educational resources for building credit, getting mortgage-ready, and understanding the Keys2Home pathway to homeownership. Free guidance for essential workers."
        keywords="homeownership resources, credit building, mortgage readiness, home buying education, workforce housing"
        url="/resources"
      />
      
      {/* Header */}
      <section className="bg-slate-50 py-20 border-b">
        <div className="container px-4 md:px-6 mx-auto text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">
            Resources
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Educational resources to help you understand the path to homeownership and prepare for success.
          </p>
        </div>
      </section>

      {/* Overview Cards */}
      <section className="py-20">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center h-full">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CreditCard className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl text-slate-900">Building Credit</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">Learn strategies to improve your credit score and establish strong financial habits.</p>
              </CardContent>
            </Card>

            <Card className="text-center h-full">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Home className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl text-slate-900">Mortgage Readiness</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">Understand what lenders look for and prepare your finances for mortgage approval.</p>
              </CardContent>
            </Card>

            <Card className="text-center h-full">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl text-slate-900">Keys2Home Process</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">Get an overview of our structured pathway from eligibility to homeownership.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Building Credit Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">
              Building Credit
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Your credit score is one of the most important factors in mortgage approval. Here are key strategies to improve it.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {creditTips.map((tip, index) => (
              <Card key={index} className="border-l-4 border-l-green-500 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <h3 className="font-semibold text-lg text-slate-900">{tip.title}</h3>
                  </div>
                  <p className="text-slate-600">{tip.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-6 max-w-4xl mx-auto">
            <div className="flex gap-3">
              <TrendingUp className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-blue-900 mb-2">Credit Score Ranges</h3>
                <ul className="space-y-1 text-sm text-blue-800">
                  <li><strong>Excellent:</strong> 750+ (best rates available)</li>
                  <li><strong>Good:</strong> 700-749 (favorable rates)</li>
                  <li><strong>Fair:</strong> 650-699 (higher rates, still qualify)</li>
                  <li><strong>Poor:</strong> Below 650 (may need additional support)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Getting Mortgage-Ready */}
      <section className="py-20 bg-slate-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">
              Getting Mortgage-Ready
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Beyond credit score, lenders evaluate several factors when considering your mortgage application.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {mortgageReadySteps.map((step, index) => (
              <Card key={index} className="border-l-4 border-l-primary hover:shadow-lg transition-shadow bg-white">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <DollarSign className="w-5 h-5 text-primary" />
                    <h3 className="font-semibold text-lg text-slate-900">{step.title}</h3>
                  </div>
                  <p className="text-slate-600">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 bg-yellow-50 border border-yellow-200 rounded-lg p-6 max-w-4xl mx-auto">
            <div className="flex gap-3">
              <FileText className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-yellow-900 mb-2">Documents You'll Need</h3>
                <ul className="space-y-1 text-sm text-yellow-800">
                  <li>• Pay stubs (last 2-3 months)</li>
                  <li>• Tax returns (last 2 years)</li>
                  <li>• Bank statements (2-3 months)</li>
                  <li>• Employment verification letter</li>
                  <li>• Investment account statements</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Keys2Home Works */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">
              How Keys2Home Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our structured 8-step pathway guides you from initial assessment to homeownership.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {pathwaySteps.map((item, index) => (
              <Card key={index} className="border-l-4 border-l-primary hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex gap-6 items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-slate-600">{item.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Each step is designed to build upon the previous one, creating a clear pathway from where you are today to successful homeownership.
            </p>
          </div>
        </div>
      </section>

      {/* Educational Disclaimer */}
      <section className="py-16 bg-slate-50">
        <div className="container px-4 md:px-6 mx-auto max-w-4xl">
          <div className="bg-amber-50 border-l-4 border-amber-400 p-8 rounded-r-lg">
            <div className="flex gap-4">
              <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-amber-900 mb-3 text-lg">Educational Disclaimer</h3>
                <p className="text-amber-800 leading-relaxed">
                  The information provided on this page is for educational purposes only and should not be considered legal or financial advice. 
                  Always consult with qualified financial professionals, credit counselors, or legal advisors for advice specific to your situation. 
                  Keys2Home provides guidance and education but does not provide professional financial or legal advice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaSection />
    </div>
  );
}