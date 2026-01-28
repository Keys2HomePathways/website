import { CtaSection } from "@/components/CtaSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Info } from "lucide-react";

export default function Faq() {
  const faqs = [
    {
      question: "What exactly is Keys2Home™?",
      answer: "Keys2Home™ is a comprehensive homeownership readiness program designed to help workforce individuals navigate the complex journey to buying a home. We provide education, structured guidance, and connections to professional resources."
    },
    {
      question: "Who is the program for?",
      answer: "It is designed for workforce professionals (teachers, nurses, first responders, etc.) who earn a steady income but may struggle with down payments, credit nuances, or simply navigating the market."
    },
    {
      question: "Is this a non-profit organization?",
      answer: "No, Keys2Home™ is a for-profit program offering specialized professional services. We are transparent about our structure and focus on delivering high-value results for our participants."
    },
    {
      question: "How is this different from a standard homebuyer class?",
      answer: "Most classes are one-time events. Keys2Home™ is an ongoing relationship. We provide a personalized roadmap and stick with you through the process, adapting as your situation evolves."
    },
    {
      question: "Does the program guarantee I will get a house?",
      answer: "No. Participation does NOT guarantee housing placement or mortgage approval. We provide the readiness support and guidance to put you in the best possible position to succeed, but market factors and lender decisions are outside our control."
    },
    {
      question: "Does the program help with credit issues?",
      answer: "Yes. While we are not a credit repair agency ourselves, we partner with credit specialists and provide guidance on how to improve your profile to meet lender standards."
    },
    {
      question: "How long does the program take?",
      answer: "It varies significantly based on your starting point. Some participants are ready in 3 months; others may need 12-18 months of preparation. The timeline is customized to your needs."
    }
  ];

  return (
    <div className="bg-background min-h-screen flex flex-col">
      <div className="container px-4 md:px-6 mx-auto py-16 md:py-24 max-w-4xl flex-grow">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-center mb-4 text-slate-900">
          Frequently Asked Questions
        </h1>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Clear answers for your important questions.
        </p>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border rounded-xl px-4 bg-white shadow-sm">
              <AccordionTrigger className="text-left font-semibold text-lg py-4 hover:text-primary transition-colors">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 text-base leading-relaxed pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-16 space-y-6">
          <Alert className="bg-purple-50 border-purple-100">
            <Info className="h-5 w-5 text-primary" />
            <AlertTitle className="text-primary font-bold ml-2">Important Disclosure</AlertTitle>
            <AlertDescription className="text-slate-700 ml-2 mt-2 leading-relaxed">
              Completion of the Keys2Home™ Quick Eligibility Check does NOT guarantee program acceptance.
              Credit is not impacted by the initial check. All mortgage and lending decisions are made by third-party licensed lenders, not Keys2Home™.
            </AlertDescription>
          </Alert>
        </div>
      </div>
      <CtaSection />
    </div>
  );
}
