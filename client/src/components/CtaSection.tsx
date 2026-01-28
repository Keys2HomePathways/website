import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const APP_URL = "https://link.apisystem.tech/widget/form/NuDLvjpzzljLuHBYhm0A";

export function CtaSection() {
  return (
    <section className="py-20 md:py-32 bg-primary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-800 to-indigo-900 opacity-90" />
      <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay" />
      
      <div className="container relative z-10 px-4 md:px-6 mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
          Ready to take the first step?
        </h2>
        <p className="text-lg md:text-xl text-purple-100 mb-10 max-w-2xl mx-auto leading-relaxed">
          Find out if the Keys2Home™ Pathway Program is the right fit for your homeownership journey. It takes less than 2 minutes.
        </p>
        <Button 
          onClick={() => window.open(APP_URL, '_blank')}
          size="lg" 
          className="bg-white text-primary hover:bg-white/90 font-bold text-lg h-14 px-8 rounded-full shadow-2xl hover:scale-105 transition-all duration-200"
        >
          Start Your Quick Eligibility Check <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </section>
  );
}
