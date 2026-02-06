import logo from "@assets/keys2home_logo_1769583407258.png";
import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-slate-50 border-t mt-auto">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="Keys2Home Logo" className="h-8 w-auto" />
              <span className="font-display font-bold text-lg text-primary">Keys2Home™</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Empowering the workforce with structured guidance towards sustainable homeownership.
            </p>
          </div>
          
          <div className="md:col-span-1">
            <h4 className="font-display font-semibold mb-4 text-foreground">About</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/about"><span className="hover:text-primary cursor-pointer transition-colors">About</span></Link></li>
              <li><Link href="/partners"><span className="hover:text-primary cursor-pointer transition-colors">Partners</span></Link></li>
              <li><Link href="/participants"><span className="hover:text-primary cursor-pointer transition-colors">Who It's For</span></Link></li>
              <li><Link href="/faq"><span className="hover:text-primary cursor-pointer transition-colors">FAQ</span></Link></li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h4 className="font-display font-semibold mb-4 text-foreground">Resources</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/resources"><span className="hover:text-primary cursor-pointer transition-colors">Resources</span></Link></li>
              <li><Link href="/resources/support"><span className="hover:text-primary cursor-pointer transition-colors">Support</span></Link></li>
              <li><Link href="/events"><span className="hover:text-primary cursor-pointer transition-colors">Events</span></Link></li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h4 className="font-display font-semibold mb-4 text-foreground">Get Started</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="https://link.apisystem.tech/widget/form/NuDLvjpzzljLuHBYhm0A" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">Eligibility Check</a></li>
              <li><Link href="/contact"><span className="hover:text-primary cursor-pointer transition-colors">Contact Us</span></Link></li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h4 className="font-display font-semibold mb-4 text-foreground">Legal</h4>
            <div className="text-xs text-muted-foreground space-y-4">
              <p>
                Keys2Home™ Pathway Program is a for-profit program. Participation does not guarantee housing placement or mortgage approval. Program services include education, professional guidance, and readiness support only.
              </p>
              <p>
                Keys2Home™ Pathway Program, also known as Keys2Home™, is a proprietary program and trademark of its owner. Unauthorized use, reproduction, or distribution is prohibited.
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Keys2Home™. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
