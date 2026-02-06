import { CtaSection } from "@/components/CtaSection";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import { Heart, AlertTriangle, Building, DollarSign, FileText, Mail, Phone } from "lucide-react";

export default function Support() {
  const supportOptions = [
    {
      title: "Program Support",
      description: "Help fund scholarships and program enhancements for future participants.",
      icon: Heart,
      type: "Program Enhancement"
    },
    {
      title: "Educational Resources",
      description: "Support the development of new workshops and educational materials.",
      icon: FileText,
      type: "Educational Support"
    },
    {
      title: "Technology Platform",
      description: "Help improve and maintain our digital tools and participant portal.",
      icon: Building,
      type: "Platform Development"
    }
  ];

  return (
    <div className="bg-background">
      <SEO
        title="Support - Keys2Home Program Support"
        description="Learn about supporting the Keys2Home program. Important disclosure: Keys2Home is a for-profit organization. Contributions are not tax-deductible."
        keywords="program support, for-profit organization, educational support, homeownership program funding"
        url="/resources/support"
      />
      
      {/* Header */}
      <section className="bg-slate-50 py-20 border-b">
        <div className="container px-4 md:px-6 mx-auto text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">
            Support Keys2Home
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Help us expand access to structured homeownership education and support for essential workers.
          </p>
        </div>
      </section>

      {/* Important Disclaimer - Prominent Placement */}
      <section className="py-16 bg-red-50">
        <div className="container px-4 md:px-6 mx-auto max-w-4xl">
          <div className="bg-white border-l-4 border-red-500 p-8 rounded-r-lg shadow-lg">
            <div className="flex gap-4">
              <AlertTriangle className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="font-bold text-red-900 mb-4 text-2xl">Important Disclosure</h2>
                <div className="space-y-3 text-red-800 text-lg leading-relaxed">
                  <p className="font-semibold">
                    Keys2Home is a for-profit organization.
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li>• <strong>Contributions are not tax-deductible</strong></li>
                    <li>• <strong>Contributions do not confer ownership or investment interest</strong></li>  
                    <li>• <strong>Contributions do not guarantee any financial return</strong></li>
                    <li>• <strong>All contributions support program operations and expansion</strong></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Impact */}
      <section className="py-20">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900">
                Our Mission
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Keys2Home exists to provide clear, structured pathways to homeownership for essential workers who have been underserved by traditional approaches.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Your support helps us enhance our program offerings, develop new resources, and reach more hardworking individuals who deserve clarity in their homeownership journey.
              </p>
            </div>
            <div className="relative">
              <img
                src="/Keys2Home_support.png"
                alt="Keys2Home support and collaboration"
                className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Support Areas */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">
              How Your Support Helps
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Your contributions support various aspects of program development and delivery.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {supportOptions.map((option, index) => {
              const IconComponent = option.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow h-full">
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl text-slate-900">{option.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <span className="inline-block text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                        {option.type}
                      </span>
                      <p className="text-slate-600">{option.description}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Support Guidelines */}
      <section className="py-20 bg-slate-50">
        <div className="container px-4 md:px-6 mx-auto max-w-4xl">
          <h2 className="text-3xl font-display font-bold text-slate-900 mb-8 text-center">
            Support Guidelines
          </h2>
          
          <div className="space-y-6">
            <Card className="border-l-4 border-l-blue-500">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg text-slate-900 mb-3">Transparency</h3>
                <p className="text-slate-600 leading-relaxed">
                  All contributions are used to support program operations, technology development, educational resource creation, 
                  and program expansion efforts. We maintain transparent operations as a for-profit educational service.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-green-500">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg text-slate-900 mb-3">Impact Focus</h3>
                <p className="text-slate-600 leading-relaxed">
                  Your support directly enhances our ability to serve more essential workers, develop better resources, 
                  and improve the overall participant experience in the Keys2Home pathway.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-purple-500">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg text-slate-900 mb-3">No Financial Returns</h3>
                <p className="text-slate-600 leading-relaxed">
                  Support is provided as a contribution to our educational mission. Contributors receive no ownership, 
                  investment interest, or expectation of financial return from Keys2Home operations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact for Support */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6 mx-auto max-w-4xl">
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-3xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-display font-bold text-slate-900 mb-6">
              Interested in Supporting Our Mission?
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Contact us to learn more about how your support can help expand access to structured homeownership education.
            </p>
            
            <div className="flex justify-center max-w-md mx-auto">
              <Card className="border-0 shadow-lg w-full">
                <CardContent className="p-6 text-center">
                  <Mail className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold text-slate-900 mb-2">Email</h3>
                  <a
                    href="mailto:Keys@keys2homepathway.com"
                    className="text-primary hover:text-primary/80 transition-colors"
                  >
                    Keys@keys2homepathway.com
                  </a>
                </CardContent>
              </Card>
            </div>
            
            <div className="mt-8">
              <Button 
                className="bg-primary hover:bg-primary/90 text-white px-8"
                onClick={() => window.location.href = "/contact"}
              >
                Contact Us About Support
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Notice */}
      <section className="py-16 bg-slate-50">
        <div className="container px-4 md:px-6 mx-auto max-w-4xl">
          <div className="bg-gray-100 border border-gray-300 rounded-lg p-6">
            <div className="flex gap-3">
              <Building className="w-5 h-5 text-gray-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-2 text-sm">Legal Notice</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Keys2Home operates as a for-profit educational service. This page is not a solicitation for investment 
                  or business partnership. All contributions are voluntary and support our educational mission. 
                  Contributors should consult with their own advisors regarding any financial decisions.
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