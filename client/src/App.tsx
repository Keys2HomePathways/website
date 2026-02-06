import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Analytics, trackPageView } from "@/components/Analytics";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Partners from "@/pages/Partners";
import Participants from "@/pages/Participants";
import Faq from "@/pages/Faq";
import Resources from "@/pages/Resources";
import Support from "@/pages/Support";
import Events from "@/pages/Events";
import Contact from "@/pages/Contact";
import { useEffect } from "react";
import { useLocation } from "wouter";

// Scroll to top on route change
function ScrollToTop() {
  const [pathname] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    // Track page views for analytics
    trackPageView(pathname);
  }, [pathname]);

  return null;
}

function Router() {
  return (
    <div className="flex flex-col min-h-screen font-body">
      <ScrollToTop />
      <Navigation />
      <main className="flex-grow">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/partners" component={Partners} />
          <Route path="/participants" component={Participants} />
          <Route path="/faq" component={Faq} />
          <Route path="/resources" component={Resources} />
          <Route path="/resources/support" component={Support} />
          <Route path="/events" component={Events} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Analytics gtag={import.meta.env.VITE_GA_MEASUREMENT_ID} gtm={import.meta.env.VITE_GTM_ID} />
      <Toaster />
      <Router />
    </QueryClientProvider>
  );
}

export default App;
