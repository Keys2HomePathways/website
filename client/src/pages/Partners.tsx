import { useEffect, useState } from "react";
import { CtaSection } from "@/components/CtaSection";
import { Card, CardContent } from "@/components/ui/card";
import { SEO } from "@/components/SEO";
import { Building2, CreditCard, Users, Handshake, ExternalLink } from "lucide-react";
import { 
  getPartnersGrouped, 
  getPartnersPageContent, 
  type Partner, 
  type PartnersPageContent 
} from "@/sanity";

export default function Partners() {
  const [partners, setPartners] = useState<{
    lender: Partner[];
    credit: Partner[];
    community: Partner[];
  }>({ lender: [], credit: [], community: [] });
  
  const [pageContent, setPageContent] = useState<PartnersPageContent | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [partnersData, contentData] = await Promise.all([
          getPartnersGrouped(),
          getPartnersPageContent()
        ]);
        
        setPartners(partnersData);
        setPageContent(contentData);
      } catch (error) {
        console.error('Error fetching partners data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Default content fallbacks
  const defaultContent = {
    title: "Our Partners",
    subtitle: "We work with a carefully vetted network of professional partners committed to your homeownership success.",
    networkTitle: "Professional Network",
    networkDescription: "Keys2Home partners with established professionals across the housing industry to ensure you have access to quality resources and guidance.",
    lenderSectionTitle: "Lender Partners",
    lenderSectionDescription: "Mortgage professionals committed to workforce homeownership",
    creditSectionTitle: "Credit & Financial Partners", 
    creditSectionDescription: "Professional support for credit improvement and financial readiness",
    communitySectionTitle: "Community Partners",
    communitySectionDescription: "Organizations supporting essential workers and community development",
    partnershipStandardsTitle: "Partnership Standards",
    noPartnersMessage: "We are currently building our network of partners in this category. Please check back soon for updates."
  };

  const content = pageContent || defaultContent;

  const renderPartnerCard = (partner: Partner, colorScheme: string) => {
    const CardWrapper = partner.websiteUrl ? 'a' : 'div';
    const cardProps = partner.websiteUrl 
      ? { href: partner.websiteUrl, target: "_blank", rel: "noopener noreferrer", className: "block" }
      : {};

    return (
      <CardWrapper key={partner._id} {...cardProps}>
        <Card className={`border-l-4 border-l-${colorScheme} hover:shadow-lg transition-shadow ${partner.websiteUrl ? 'cursor-pointer' : ''}`}>
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-3">
              {colorScheme === 'primary' && <Building2 className={`w-5 h-5 text-${colorScheme}`} />}
              {colorScheme === 'green-500' && <CreditCard className="w-5 h-5 text-green-500" />}
              {colorScheme === 'blue-500' && <Users className="w-5 h-5 text-blue-500" />}
              <span className={`text-sm font-medium ${
                colorScheme === 'primary' ? 'text-primary bg-primary/10' :
                colorScheme === 'green-500' ? 'text-green-700 bg-green-50' :
                'text-blue-700 bg-blue-50'
              } px-2 py-1 rounded-full`}>
                {partner.category === 'lender' ? 'Lender' : 
                 partner.category === 'credit' ? 'Credit Support' : 'Community'}
              </span>
              {partner.websiteUrl && (
                <ExternalLink className={`w-4 h-4 ml-auto ${
                  colorScheme === 'primary' ? 'text-primary' :
                  colorScheme === 'green-500' ? 'text-green-500' :
                  'text-blue-500'
                }`} />
              )}
            </div>
            <h3 className="font-semibold text-lg text-slate-900 mb-2">{partner.name}</h3>
            <p className="text-slate-600 text-sm">{partner.description}</p>
          </CardContent>
        </Card>
      </CardWrapper>
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
        title={`${content.title} - Keys2Home Professional Network`}
        description="Meet our trusted network of lenders, credit partners, and community organizations committed to supporting your homeownership journey through Keys2Home."
        keywords="mortgage lenders, credit counseling, community partners, homeownership network, professional partnerships"
        url="/partners"
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

      {/* Partner Network Overview */}
      <section className="py-20">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">
              {content.networkTitle}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {content.networkDescription}
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
              {content.lenderSectionTitle}
            </h2>
            <p className="text-lg text-muted-foreground">
              {content.lenderSectionDescription}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {partners.lender.length > 0 ? (
              partners.lender.map((partner) => renderPartnerCard(partner, 'primary'))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-muted-foreground text-lg">{content.noPartnersMessage}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Credit Partners */}
      <section className="py-20 bg-slate-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-slate-900 mb-4">
              {content.creditSectionTitle}
            </h2>
            <p className="text-lg text-muted-foreground">
              {content.creditSectionDescription}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {partners.credit.length > 0 ? (
              partners.credit.map((partner) => renderPartnerCard(partner, 'green-500'))
            ) : (
              <div className="col-span-full text-center py-12">
                <div className="bg-white rounded-lg p-8">
                  <p className="text-muted-foreground text-lg">{content.noPartnersMessage}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Community Partners */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-slate-900 mb-4">
              {content.communitySectionTitle}
            </h2>
            <p className="text-lg text-muted-foreground">
              {content.communitySectionDescription}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {partners.community.length > 0 ? (
              partners.community.map((partner) => renderPartnerCard(partner, 'blue-500'))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-muted-foreground text-lg">{content.noPartnersMessage}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Partnership Information */}
      <section className="py-20 bg-slate-50">
        <div className="container px-4 md:px-6 mx-auto max-w-4xl">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100 text-center">
            <Handshake className="w-12 h-12 text-primary mx-auto mb-6" />
            <h2 className="text-2xl md:text-3xl font-display font-bold text-slate-900 mb-6">
              {content.partnershipStandardsTitle}
            </h2>
            <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
              {pageContent?.partnershipStandardsContent && pageContent.partnershipStandardsContent.length > 0 ? (
                pageContent.partnershipStandardsContent.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))
              ) : (
                <>
                  <p>
                    All Keys2Home partners are carefully vetted professionals committed to supporting workforce homeownership goals.
                  </p>
                  <p>
                    Our partners agree to transparent communication, competitive terms, and a shared commitment to participant success.
                  </p>
                  <p className="font-semibold text-slate-900">
                    Partner relationships are established to benefit program participants, not generate referral fees for Keys2Home.
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      <CtaSection />
    </div>
  );
}