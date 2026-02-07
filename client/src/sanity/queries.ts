import { client } from './client';
import type { Partner, Event, PartnersPageContent, EventsPageContent } from './types';

// Partner queries
export const getPartnersByCategory = async (category: 'lender' | 'credit' | 'community'): Promise<Partner[]> => {
  return client.fetch(`
    *[_type == "partner" && category == $category && isActive == true] | order(sortOrder asc, name asc)
  `, { category });
};

export const getAllActivePartners = async (): Promise<Partner[]> => {
  return client.fetch(`
    *[_type == "partner" && isActive == true] | order(category asc, sortOrder asc, name asc)
  `);
};

// Event queries
export const getEventsByType = async (eventType: 'info' | 'workshop' | 'orientation'): Promise<Event[]> => {
  return client.fetch(`
    *[_type == "event" && eventType == $eventType && isPublished == true && date >= now()] | order(isFeatured desc, date asc, sortOrder asc)
  `, { eventType });
};

export const getAllUpcomingEvents = async (): Promise<Event[]> => {
  return client.fetch(`
    *[_type == "event" && isPublished == true && date >= now()] | order(eventType asc, isFeatured desc, date asc)
  `);
};

export const getFeaturedEvents = async (): Promise<Event[]> => {
  return client.fetch(`
    *[_type == "event" && isPublished == true && isFeatured == true && date >= now()] | order(date asc)
  `);
};

// Page content queries
export const getPartnersPageContent = async (): Promise<PartnersPageContent | null> => {
  const content = await client.fetch(`
    *[_type == "partnersPageContent"][0]
  `);
  return content || null;
};

export const getEventsPageContent = async (): Promise<EventsPageContent | null> => {
  const content = await client.fetch(`
    *[_type == "eventsPageContent"][0]
  `);
  return content || null;
};

// Utility function to get partners grouped by category
export const getPartnersGrouped = async () => {
  const [lenderPartners, creditPartners, communityPartners] = await Promise.all([
    getPartnersByCategory('lender'),
    getPartnersByCategory('credit'),
    getPartnersByCategory('community')
  ]);

  return {
    lender: lenderPartners,
    credit: creditPartners,
    community: communityPartners
  };
};

// Utility function to get events grouped by type
export const getEventsGrouped = async () => {
  const [infoSessions, workshops, orientations] = await Promise.all([
    getEventsByType('info'),
    getEventsByType('workshop'),
    getEventsByType('orientation')
  ]);

  return {
    info: infoSessions,
    workshop: workshops,
    orientation: orientations
  };
};