import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  structuredData?: object;
}

export function SEO({
  title,
  description,
  keywords = 'homeownership, attainable housing, first-time homebuyer, down payment assistance, housing program, Keys2Home',
  image = '/keys2home_logo-icon.png',
  url = '',
  type = 'website',
  structuredData
}: SEOProps) {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Helper function to set or update meta tags
    const setMetaTag = (name: string, content: string, property?: boolean) => {
      const attribute = property ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
      
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, name);
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    // Basic meta tags
    setMetaTag('description', description);
    setMetaTag('keywords', keywords);
    
    // Open Graph tags
    setMetaTag('og:title', title, true);
    setMetaTag('og:description', description, true);
    setMetaTag('og:type', type, true);
    setMetaTag('og:image', `${window.location.origin}${image}`, true);
    setMetaTag('og:url', `${window.location.origin}${url}`, true);
    setMetaTag('og:site_name', 'Keys2Home', true);
    
    // Twitter Card tags
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', title);
    setMetaTag('twitter:description', description);
    setMetaTag('twitter:image', `${window.location.origin}${image}`);
    
    // Additional meta tags
    setMetaTag('robots', 'index, follow');
    setMetaTag('author', 'Keys2Home');
    setMetaTag('language', 'EN');
    
    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = `${window.location.origin}${url}`;

    // Structured Data (JSON-LD)
    if (structuredData) {
      let script = document.querySelector('script[type="application/ld+json"]') as HTMLScriptElement;
      if (!script) {
        script = document.createElement('script');
        script.type = 'application/ld+json';
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(structuredData);
    }

    // Cleanup function to remove SEO tags when component unmounts
    return () => {
      // Note: We don't clean up meta tags as they should persist
      // until the next page load in an SPA
    };
  }, [title, description, keywords, image, url, type, structuredData]);

  return null;
}

// Helper function to generate structured data for organization
export const getOrganizationStructuredData = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Keys2Home",
  "description": "Keys2Home helps make homeownership attainable and accessible through innovative programs designed for essential workers, educators, healthcare professionals, and public service workers.",
  "url": window.location.origin,
  "logo": `${window.location.origin}/keys2home_logo-icon.png`,
  "sameAs": [
    // Add social media URLs when available
  ],
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "US"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Customer Service",
    "url": `${window.location.origin}/contact`
  }
});

// Helper function to generate structured data for service
export const getServiceStructuredData = () => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Keys2Home Homeownership Program",
  "description": "Comprehensive homeownership assistance program for essential workers including personalized action plans, lender guidance, credit repair support, and down payment assistance education.",
  "provider": {
    "@type": "Organization",
    "name": "Keys2Home"
  },
  "areaServed": {
    "@type": "Country",
    "name": "United States"
  },
  "serviceType": "Homeownership Assistance",
  "audience": {
    "@type": "Audience",
    "audienceType": ["Educators", "Healthcare Workers", "Public Service Workers", "Essential Workers"]
  }
});

// Helper function to generate structured data for FAQ page
export const getFAQStructuredData = (faqs: Array<{question: string, answer: string}>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});