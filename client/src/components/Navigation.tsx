import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "@assets/keys2home_logo_1769583407258.png";
import { Button } from "@/components/ui/button";

const APP_URL = "https://link.apisystem.tech/widget/form/NuDLvjpzzljLuHBYhm0A";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/participants", label: "Who It's For" },
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => location === path;

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-20 items-center justify-between">
          <Link href="/">
            <div className="flex items-center gap-3 cursor-pointer">
              <img src={logo} alt="Keys2Home Logo" className="h-10 w-auto" />
              <span className="hidden font-display text-xl font-bold text-primary md:inline-block">
                Keys2Home™
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex gap-6">
              {links.map((link) => (
                <Link key={link.href} href={link.href}>
                  <div className={`cursor-pointer text-sm font-medium transition-colors hover:text-primary ${
                    isActive(link.href) ? "text-primary" : "text-muted-foreground"
                  }`}>
                    {link.label}
                  </div>
                </Link>
              ))}
            </div>
            <Button 
              onClick={() => window.open(APP_URL, '_blank')}
              className="bg-primary hover:bg-primary/90 text-white font-semibold shadow-lg shadow-primary/20"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t bg-background p-4 shadow-lg">
          <div className="flex flex-col space-y-4">
            {links.map((link) => (
              <Link key={link.href} href={link.href}>
                <div 
                  className={`block px-2 py-1 text-base font-medium ${
                    isActive(link.href) ? "text-primary" : "text-muted-foreground"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </div>
              </Link>
            ))}
            <Button 
              className="w-full mt-4 bg-primary hover:bg-primary/90"
              onClick={() => {
                window.open(APP_URL, '_blank');
                setIsOpen(false);
              }}
            >
              Start Eligibility Check
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
