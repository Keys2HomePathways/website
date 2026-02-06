import { CtaSection } from "@/components/CtaSection";
import { Button } from "@/components/ui/button";
import { SEO, getOrganizationStructuredData, getServiceStructuredData } from "@/components/SEO";
import { CheckCircle, ClipboardCheck, Users, Heart, ArrowRight, Target, CreditCard, MapPin, TrendingUp } from "lucide-react";

const APP_URL = "https://link.apisystem.tech/widget/form/NuDLvjpzzljLuHBYhm0A";

export default function Home() {
  const homeStructuredData = {
    ...getOrganizationStructuredData(),
    ...getServiceStructuredData()
  };

  return (
    <div className="bg-background">
      <SEO
        title="Keys2Home - A Clear Pathway to Homeownership Starts Here"
        description="Keys2Home replaces confusion with a structured, step-by-step pathway toward homeownership for hardworking people who have been told 'you don't qualify' without being shown what to do next."
        keywords="homeownership pathway, first-time homebuyer, structured homeownership program, mortgage readiness, credit support, realtor assignment"
        url="/"
        structuredData={homeStructuredData}
      />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 md:pt-32 md:pb-48 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-100 via-background to-background" />
        
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Text Content */}
            <div className="w-full lg:w-1/2 space-y-8 fade-in-up">
              <div className="text-lg md:text-xl font-semibold text-primary mb-4">
                Keys2Home Pathway Program™
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-slate-900 leading-[1.1]">
                A Clear Pathway to <span className="text-gradient">Homeownership</span> Starts Here
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                Keys2Home was created for hardworking people who have been told "you don't qualify" — without being shown what to do next. We replace confusion with a structured, step-by-step pathway toward homeownership.
              </p>

              <div className="flex flex-col sm:flex-row items-start gap-4 pt-4">
                <Button 
                  onClick={() => window.open(APP_URL, '_blank')}
                  size="lg" 
                  className="w-full sm:w-auto text-lg h-14 px-8 rounded-full shadow-lg shadow-primary/25 bg-primary hover:bg-primary/90"
                >
                  Start Your Quick Eligibility Check
                </Button>
                <div className="text-sm text-muted-foreground mt-2 sm:mt-4">
                  Not a loan application. Does not impact your credit score.
                </div>
              </div>
            </div>
            
            {/* Hero Image */}
            <div className="w-full lg:w-1/2 relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-purple-200 to-indigo-200 rounded-3xl blur-2xl opacity-50" />
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Professional team photo of Nikki Hawkins and Holly Forde - Keys2Home founders"
                className="relative rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Keys2Home Exists Section */}
      <section className="py-24 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Nikki's Image */}
            <div className="w-full lg:w-1/2 relative order-2 lg:order-1">
              <div className="absolute -inset-4 bg-gradient-to-tr from-purple-200 to-indigo-200 rounded-3xl blur-2xl opacity-50" />
              <img
                src="/Nikki_Headshot_Updated.png"
                alt="Nikki Hawkins - Keys2Home Founder"
                className="relative rounded-2xl shadow-2xl w-full object-cover object-[center_30%] aspect-[4/3]"
                loading="lazy"
              />
            </div>
            
            {/* Text Content */}
            <div className="w-full lg:w-1/2 space-y-6 order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900">
                Why Keys2Home Exists
              </h2>
              <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
                <p>
                  I started Keys2Home because I know how it feels to want to buy a home and be told "you don't qualify" — without being given a clear pathway forward.
                </p>
                <p>
                  You think you know what to do, but you don't — because everything is fragmented. A seminar here. A lender conversation there. A checklist with no guidance. Too many capable people stop trying, not because they can't succeed, but because they don't know what step comes next.
                </p>
                <p className="font-semibold text-slate-900">
                  Keys2Home brings the pieces together into one clear, structured pathway so people can move forward with clarity, confidence, and support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Keys2Home Pathway Section */}
      <section className="py-24 bg-slate-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">
              The Keys2Home Pathway
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From Eligibility to Ownership - Guiding You Step-by-Step to Homeownership Success
            </p>
          </div>

          {/* Pathway Graphic */}
          <div className="mb-16 text-center">
            <img
              src="/Keys2Home_Process.png"
              alt="The Keys2Home Pathway - 8 Step Process from Eligibility to Ownership"
              className="mx-auto rounded-2xl shadow-2xl max-w-full h-auto"
              loading="lazy"
            />
          </div>

          {/* 8-Step Process Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Step 1 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-purple-100">
              <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-lg mb-4">
                1
              </div>
              <h3 className="font-semibold text-lg mb-2 text-slate-900">Quick Eligibility Check (QEC)</h3>
              <p className="text-sm text-slate-600">Simple, non-binding check. Does not impact your credit.</p>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-purple-100">
              <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-lg mb-4">
                2
              </div>
              <h3 className="font-semibold text-lg mb-2 text-slate-900">Orientation & Onboarding</h3>
              <p className="text-sm text-slate-600">Learn the process & meet your team.</p>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-purple-100">
              <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-lg mb-4">
                3
              </div>
              <h3 className="font-semibold text-lg mb-2 text-slate-900">Readiness Assessment</h3>
              <p className="text-sm text-slate-600">Review your readiness & goals.</p>
            </div>

            {/* Step 4 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-purple-100">
              <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-lg mb-4">
                4
              </div>
              <h3 className="font-semibold text-lg mb-2 text-slate-900">Lender Guidance</h3>
              <p className="text-sm text-slate-600">Connect with qualified lenders.</p>
            </div>

            {/* Step 5 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-purple-100">
              <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-lg mb-4">
                5
              </div>
              <h3 className="font-semibold text-lg mb-2 text-slate-900">Credit & Financial Support</h3>
              <p className="text-sm text-slate-600">Improve credit & budgeting (as needed).</p>
            </div>

            {/* Step 6 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-purple-100">
              <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-lg mb-4">
                6
              </div>
              <h3 className="font-semibold text-lg mb-2 text-slate-900">Personalized Action Plan</h3>
              <p className="text-sm text-slate-600">Step-by-step plan to reach your goals.</p>
            </div>

            {/* Step 7 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-purple-100">
              <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-lg mb-4">
                7
              </div>
              <h3 className="font-semibold text-lg mb-2 text-slate-900">Realtor Assignment</h3>
              <p className="text-sm text-slate-600">Agent assigned early in the process.</p>
            </div>

            {/* Step 8 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-purple-100">
              <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-lg mb-4">
                8
              </div>
              <h3 className="font-semibold text-lg mb-2 text-slate-900">Ongoing Program Support</h3>
              <p className="text-sm text-slate-600">Support through to homeownership.</p>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="text-center text-sm text-slate-500 max-w-2xl mx-auto">
            <p>Participation does not guarantee mortgage approval or home availability.</p>
          </div>
        </div>
      </section>

      {/* What Makes Keys2Home Different */}
      <section className="py-24 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">
              What Makes Keys2Home Different
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-slate-50 rounded-2xl p-8 text-center">
              <Target className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2 text-slate-900">Structure, not fragments</h3>
              <p className="text-slate-600">One cohesive pathway instead of scattered resources.</p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-8 text-center">
              <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2 text-slate-900">Realtor assigned at orientation</h3>
              <p className="text-slate-600">Early agent assignment for seamless transition to home search.</p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-8 text-center">
              <ClipboardCheck className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2 text-slate-900">Personalized action plan</h3>
              <p className="text-slate-600">Customized roadmap based on your unique situation.</p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-8 text-center">
              <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2 text-slate-900">Ongoing support</h3>
              <p className="text-slate-600">Continuous guidance throughout your journey.</p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-8 text-center lg:col-span-2">
              <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2 text-slate-900">Keys2Home developments in progress</h3>
              <p className="text-slate-600">Details shared as milestones are reached.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Homepage Closing CTA */}
      <section className="py-24 bg-gradient-to-br from-purple-600 to-purple-700 text-white">
        <div className="container px-4 md:px-6 mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Ready to see where you stand?
          </h2>
          
          <div className="flex flex-col items-center gap-6">
            <Button 
              onClick={() => window.open(APP_URL, '_blank')}
              size="lg" 
              className="text-lg h-14 px-8 rounded-full bg-white text-purple-600 hover:bg-gray-50 shadow-lg"
            >
              Start Your Quick Eligibility Check
            </Button>
            
            <p className="text-purple-100 text-sm">
              Not a loan application. No credit impact.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
