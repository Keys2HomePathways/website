import { CtaSection } from "@/components/CtaSection";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Heart, GraduationCap, Shield } from "lucide-react";

export default function Participants() {
  const benefits = [
    "Personalized Homeownership Action Plan",
    "Direct Lender Guidance & Introduction",
    "Credit Repair Support & Counseling",
    "Designated Program Specialist",
    "Realtor Selection & Guidance",
    "Down Payment Assistance Education"
  ];

  return (
    <div className="bg-background">
      {/* Header */}
      <section className="bg-gradient-to-b from-purple-50 to-white py-20 border-b">
        <div className="container px-4 md:px-6 mx-auto text-center max-w-4xl">
          <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20 text-sm px-4 py-1">
            Audience Focus
          </Badge>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">
            Who Is This Program For?
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Designed specifically for the "Missing Middle"—hardworking individuals who are often overqualified for traditional aid but priced out of the current market.
          </p>
        </div>
      </section>

      {/* Target Roles Grid */}
      <section className="py-20">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 text-center hover:-translate-y-1 transition-transform">
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <GraduationCap className="h-8 w-8" />
              </div>
              <h3 className="font-display font-bold text-lg mb-2">Educators</h3>
              <p className="text-sm text-slate-500">Teachers, administrators, and school staff shaping our future.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 text-center hover:-translate-y-1 transition-transform">
              <div className="w-16 h-16 bg-red-50 text-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8" />
              </div>
              <h3 className="font-display font-bold text-lg mb-2">Healthcare</h3>
              <p className="text-sm text-slate-500">Nurses, technicians, and medical support professionals.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 text-center hover:-translate-y-1 transition-transform">
              <div className="w-16 h-16 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="font-display font-bold text-lg mb-2">Public Service</h3>
              <p className="text-sm text-slate-500">First responders, police, fire, and municipal employees.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 text-center hover:-translate-y-1 transition-transform">
              <div className="w-16 h-16 bg-purple-50 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Briefcase className="h-8 w-8" />
              </div>
              <h3 className="font-display font-bold text-lg mb-2">Essential Workers</h3>
              <p className="text-sm text-slate-500">The backbone of our local economy and infrastructure.</p>
            </div>
          </div>
        </div>
      </section>

      {/* What You Receive */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
         {/* Abstract background shapes */}
         <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl" />
         <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl" />

        <div className="container px-4 md:px-6 mx-auto relative z-10">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="w-full md:w-1/2">
               {/* Unsplash image: Person holding house keys, smiling, success */}
              {/* <!-- person holding house keys closeup --> */}
              <img 
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Keys to a new home" 
                className="rounded-2xl shadow-2xl border-4 border-white/10"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-display font-bold mb-8">What Participants Receive</h2>
              <div className="grid gap-4">
                {benefits.map((benefit, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
                    <div className="h-2 w-2 rounded-full bg-purple-400 shadow-[0_0_10px_rgba(192,132,252,0.8)]" />
                    <span className="font-medium text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaSection />
    </div>
  );
}
