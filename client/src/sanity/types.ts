// TypeScript interfaces for Sanity content

export interface Partner {
  _id: string;
  _type: 'partner';
  name: string;
  description: string;
  category: 'lender' | 'credit' | 'community';
  websiteUrl?: string;
  isActive: boolean;
  sortOrder: number;
}

export interface Event {
  _id: string;
  _type: 'event';
  title: string;
  description: string;
  eventType: 'info' | 'workshop' | 'orientation';
  date: string;
  startTime: string;
  endTime: string;
  format: 'Virtual' | 'In-Person' | 'Hybrid';
  registrationUrl?: string;
  meetingUrl?: string;
  location?: string;
  maxCapacity?: number;
  isPublished: boolean;
  isFeatured: boolean;
  sortOrder: number;
}

export interface PartnersPageContent {
  _id: string;
  _type: 'partnersPageContent';
  title: string;
  subtitle: string;
  networkTitle: string;
  networkDescription: string;
  lenderSectionTitle: string;
  lenderSectionDescription: string;
  creditSectionTitle: string;
  creditSectionDescription: string;
  communitySectionTitle: string;
  communitySectionDescription: string;
  partnershipStandardsTitle: string;
  partnershipStandardsContent: string[];
  noPartnersMessage: string;
}

export interface EventsPageContent {
  _id: string;
  _type: 'eventsPageContent';
  title: string;
  subtitle: string;
  infoSectionTitle: string;
  infoSectionDescription: string;
  workshopSectionTitle: string;
  workshopSectionDescription: string;
  orientationSectionTitle: string;
  orientationSectionDescription: string;
  orientationNote: string;
  guidelinesTitle: string;
  beforeAttendingTitle: string;
  beforeAttendingItems: string[];
  whatToExpectTitle: string;
  whatToExpectItems: string[];
  noEventsMessage: string;
  registrationUrl?: string;
}