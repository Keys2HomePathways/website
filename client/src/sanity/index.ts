// Export the Sanity client and utilities
export { client, imageUrlBuilder } from './client';

// Export all types
export type { 
  Partner, 
  Event, 
  PartnersPageContent, 
  EventsPageContent 
} from './types';

// Export all query functions
export {
  getPartnersByCategory,
  getAllActivePartners,
  getEventsByType,
  getAllUpcomingEvents,
  getFeaturedEvents,
  getPartnersPageContent,
  getEventsPageContent,
  getPartnersGrouped,
  getEventsGrouped
} from './queries';