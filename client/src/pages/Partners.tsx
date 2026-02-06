import { CtaSection } from "@/components/CtaSection";
import { Card, CardContent } from "@/components/ui/card";
import { SEO } from "@/components/SEO";
import { Building2, CreditCard, Users, Handshake } from "lucide-react";

export default function Partners() {
  const lenderPartners = [
    {
      name: "Community Bank Partners",
      description: "Local and regional banks committed to homeownership in our communities.",
      category: "Lender"
    },
    {
      name: "Credit Union Network",
      description: "Member-focused financial institutions with competitive mortgage products.",
      category: "Lender"
    },
    {
      name: "Preferred Mortgage Lenders",
      description: "Vetted mortgage professionals with experience in workforce housing.",
      category: "Lender"
    }
  ];

  const creditPartners = [
    {
      name: "Credit Counseling Services",
      description: "HUD-approved credit counseling agencies providing financial education.",
      category: "Credit Support"
    },
    {
      name: "Credit Repair Specialists",
      description: "Professional credit restoration services for program participants.",
      category: "Credit Support"
    },
    {
      name: "Financial Planning Partners",
      description: "Certified financial planners specializing in homeownership preparation.",
      category: "Credit Support"
    }
  ];

  const communityPartners = [
    {
      name: "Workforce Development Organizations",
      description: "Organizations supporting essential workers and professional development.",
      category: "Community"
    },
    {
      name: "Local Housing Authorities",
      description: "Public agencies providing housing resources and assistance programs.",
      category: "Community"
    },
    {
      name: "Professional Associations",
      description: "Teacher unions, nursing associations, and public service organizations.",
      category: "Community"
    }
  ];

  return (
    <div className="bg-background">
      <SEO
        title="Partners - Keys2Home Professional Network"
        description="Meet our trusted network of lenders, credit partners, and community organizations committed to supporting your homeownership journey through Keys2Home."
        keywords="mortgage lenders, credit counseling, community partners, homeownership network, professional partnerships"
        url="/partners"
      />
      
      {/* Header */}
      <section className="bg-slate-50 py-20 border-b">
        <div className="container px-4 md:px-6 mx-auto text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">
            Our Partners
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We work with a carefully vetted network of professional partners committed to your homeownership success.
          </p>
        </div>
      </section>

      {/* Partner Network Overview */}
      <section className="py-20">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">
              Professional Network
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Keys2Home partners with established professionals across the housing industry to ensure you have access to quality resources and guidance.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Lender Partners</h3>
              <p className="text-slate-600">Trusted mortgage lenders with competitive rates and workforce-friendly programs.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCard className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Credit Partners</h3>
              <p className="text-slate-600">Professional credit counseling and financial planning services.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Community Partners</h3>
              <p className="text-slate-600">Organizations supporting essential workers and community development.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Lender Partners */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-slate-900 mb-4">
              Lender Partners
            </h2>
            <p className="text-lg text-muted-foreground">
              Mortgage professionals committed to workforce homeownership
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {lenderPartners.map((partner, index) => (
              <Card key={index} className="border-l-4 border-l-primary hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Building2 className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                      {partner.category}
                    </span>
                  </div>
                  <h3 className="font-semibold text-lg text-slate-900 mb-2">{partner.name}</h3>
                  <p className="text-slate-600 text-sm">{partner.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Credit Partners */}
      <section className="py-20 bg-slate-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-slate-900 mb-4">
              Credit & Financial Partners
            </h2>
            <p className="text-lg text-muted-foreground">
              Professional support for credit improvement and financial readiness
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {creditPartners.map((partner, index) => (
              <Card key={index} className="border-l-4 border-l-green-500 hover:shadow-lg transition-shadow bg-white">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <CreditCard className="w-5 h-5 text-green-500" />
                    <span className="text-sm font-medium text-green-700 bg-green-50 px-2 py-1 rounded-full">
                      {partner.category}
                    </span>
                  </div>
                  <h3 className="font-semibold text-lg text-slate-900 mb-2">{partner.name}</h3>
                  <p className="text-slate-600 text-sm">{partner.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Community Partners */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-slate-900 mb-4">
              Community Partners
            </h2>
            <p className="text-lg text-muted-foreground">
              Organizations supporting essential workers and community development
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {communityPartners.map((partner, index) => (
              <Card key={index} className="border-l-4 border-l-blue-500 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Users className="w-5 h-5 text-blue-500" />
                    <span className="text-sm font-medium text-blue-700 bg-blue-50 px-2 py-1 rounded-full">
                      {partner.category}
                    </span>
                  </div>
                  <h3 className="font-semibold text-lg text-slate-900 mb-2">{partner.name}</h3>
                  <p className="text-slate-600 text-sm">{partner.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Information */}
      <section className="py-20 bg-slate-50">
        <div className="container px-4 md:px-6 mx-auto max-w-4xl">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100 text-center">
            <Handshake className="w-12 h-12 text-primary mx-auto mb-6" />
            <h2 className="text-2xl md:text-3xl font-display font-bold text-slate-900 mb-6">
              Partnership Standards
            </h2>
            <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
              <p>
                All Keys2Home partners are carefully vetted professionals committed to supporting workforce homeownership goals.
              </p>
              <p>
                Our partners agree to transparent communication, competitive terms, and a shared commitment to participant success.
              </p>
              <p className="font-semibold text-slate-900">
                Partner relationships are established to benefit program participants, not generate referral fees for Keys2Home.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaSection />
    </div>
  );
}