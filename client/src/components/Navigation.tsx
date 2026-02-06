import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import logo from "@assets/keys2home_logo_1769583407258.png";
import { Button } from "@/components/ui/button";

const APP_URL = "https://link.apisystem.tech/widget/form/NuDLvjpzzljLuHBYhm0A";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [location] = useLocation();

  // Check if device is mobile/tablet
  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest('.dropdown-container')) {
        setAboutDropdownOpen(false);
        setResourcesDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
    setAboutDropdownOpen(false);
    setResourcesDropdownOpen(false);
  }, [location]);

  const navigationItems = [
    { href: "/", label: "Home", type: "link" },
    {
      label: "About",
      type: "dropdown",
      items: [
        { href: "/about", label: "About" },
        { href: "/partners", label: "Partners" },
        { href: "/participants", label: "Who It's For" },
        { href: "/faq", label: "FAQ" }
      ]
    },
    {
      label: "Resources",
      type: "dropdown",
      items: [
        { href: "/resources", label: "Resources" },
        { href: "/resources/support", label: "Support" }
      ]
    },
    { href: "/events", label: "Events", type: "link" },
    { href: "/contact", label: "Contact", type: "link" }
  ];

  const isActive = (path: string) => location === path;
  
  const isDropdownActive = (items: any[]) => {
    return items.some(item => isActive(item.href));
  };

  const handleDropdownToggle = (dropdownName: string) => {
    if (dropdownName === "About") {
      setAboutDropdownOpen(prev => !prev);
      setResourcesDropdownOpen(false);
    } else if (dropdownName === "Resources") {
      setResourcesDropdownOpen(prev => !prev);
      setAboutDropdownOpen(false);
    }
  };

  const handleMouseEnter = (dropdownName: string) => {
    if (!isMobile) {
      if (dropdownName === "About") {
        setAboutDropdownOpen(true);
        setResourcesDropdownOpen(false);
      } else if (dropdownName === "Resources") {
        setResourcesDropdownOpen(true);
        setAboutDropdownOpen(false);
      }
    }
  };

  const handleMouseLeave = (dropdownName: string) => {
    if (!isMobile) {
      // Longer delay to allow users to move mouse to dropdown
      setTimeout(() => {
        if (dropdownName === "About") {
          setAboutDropdownOpen(false);
        } else if (dropdownName === "Resources") {
          setResourcesDropdownOpen(false);
        }
      }, 500);
    }
  };

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

          {/* Desktop Navigation - Centered */}
          <div className="hidden lg:flex items-center justify-center flex-1 gap-8">
            <div className="flex gap-8">
              {navigationItems.map((item, index) => (
                <div key={index} className="relative dropdown-container">
                  {item.type === "link" ? (
                    <Link href={item.href!}>
                      <div className={`cursor-pointer text-base font-medium transition-colors hover:text-primary ${
                        isActive(item.href!) ? "text-primary" : "text-slate-700"
                      }`}>
                        {item.label}
                      </div>
                    </Link>
                  ) : (
                    <div
                      className="relative"
                      onMouseEnter={() => handleMouseEnter(item.label)}
                      onMouseLeave={() => handleMouseLeave(item.label)}
                    >
                      <button
                        className={`flex items-center gap-1 text-base font-medium transition-colors hover:text-primary ${
                          isDropdownActive(item.items!) ? "text-primary" : "text-slate-700"
                        }`}
                        onClick={() => isMobile && handleDropdownToggle(item.label)}
                      >
                        {item.label}
                        <ChevronDown className={`h-4 w-4 transition-transform ${
                          ((item.label === "About" && aboutDropdownOpen) || 
                           (item.label === "Resources" && resourcesDropdownOpen)) ? "rotate-180" : ""
                        }`} />
                      </button>
                      
                      {/* Dropdown Menu */}
                      {((item.label === "About" && aboutDropdownOpen) ||
                        (item.label === "Resources" && resourcesDropdownOpen)) && (
                        <div
                          className="absolute top-full left-0 pt-1 min-w-[180px] z-50"
                          onMouseEnter={() => handleMouseEnter(item.label)}
                          onMouseLeave={() => handleMouseLeave(item.label)}
                        >
                          <div className="bg-white border border-gray-200 rounded-lg shadow-lg py-2">
                            {item.items!.map((subItem, subIndex) => (
                              <Link key={subIndex} href={subItem.href}>
                                <div className={`block px-4 py-3 text-sm font-medium hover:bg-gray-50 transition-colors ${
                                  isActive(subItem.href) ? "text-primary bg-purple-50" : "text-slate-700"
                                }`}>
                                  {subItem.label}
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Get Started Button */}
          <div className="hidden lg:flex">
            <Button 
              onClick={() => window.open(APP_URL, '_blank')}
              className="bg-primary hover:bg-primary/90 text-white font-semibold shadow-lg shadow-primary/20"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden border-t bg-background shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-2">
              {navigationItems.map((item, index) => (
                <div key={index}>
                  {item.type === "link" ? (
                    <Link href={item.href!}>
                      <div 
                        className={`block px-3 py-3 text-base font-medium rounded-lg transition-colors ${
                          isActive(item.href!) ? "text-primary bg-purple-50" : "text-slate-700 hover:bg-gray-50"
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </div>
                    </Link>
                  ) : (
                    <div>
                      <button
                        className={`w-full flex items-center justify-between px-3 py-3 text-base font-medium rounded-lg transition-colors ${
                          isDropdownActive(item.items!) ? "text-primary bg-purple-50" : "text-slate-700 hover:bg-gray-50"
                        }`}
                        onClick={() => handleDropdownToggle(item.label)}
                      >
                        <span>{item.label}</span>
                        <ChevronDown className={`h-4 w-4 transition-transform ${
                          ((item.label === "About" && aboutDropdownOpen) || 
                           (item.label === "Resources" && resourcesDropdownOpen)) ? "rotate-180" : ""
                        }`} />
                      </button>
                      
                      {/* Mobile Dropdown Items */}
                      {((item.label === "About" && aboutDropdownOpen) || 
                        (item.label === "Resources" && resourcesDropdownOpen)) && (
                        <div className="ml-4 mt-2 space-y-1">
                          {item.items!.map((subItem, subIndex) => (
                            <Link key={subIndex} href={subItem.href}>
                              <div 
                                className={`block px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                                  isActive(subItem.href) ? "text-primary bg-purple-50" : "text-slate-600 hover:bg-gray-50"
                                }`}
                                onClick={() => setIsOpen(false)}
                              >
                                {subItem.label}
                              </div>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
              
              <div className="pt-4 mt-4 border-t border-gray-200">
                <Button 
                  className="w-full bg-primary hover:bg-primary/90"
                  onClick={() => {
                    window.open(APP_URL, '_blank');
                    setIsOpen(false);
                  }}
                >
                  Start Eligibility Check
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
