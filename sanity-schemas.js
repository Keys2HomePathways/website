// Sanity CMS Schemas for Keys2Home Website
// Copy and paste this entire file into your Sanity project's schema files

// Partner Schema
export const partner = {
  name: 'partner',
  title: 'Partners',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Partner Name',
      type: 'string',
      description: 'Name of the partner organization',
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      title: 'Description', 
      type: 'text',
      description: 'Brief description of the partner and their role',
      validation: Rule => Rule.required()
    },
    {
      name: 'category',
      title: 'Partner Category',
      type: 'string',
      description: 'Type of partner - determines display section and styling',
      options: {
        list: [
          {title: 'Lender', value: 'lender'},
          {title: 'Credit Support', value: 'credit'},
          {title: 'Community', value: 'community'}
        ]
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'websiteUrl',
      title: 'Website URL',
      type: 'url',
      description: 'Partner website URL (optional - cards will be clickable if provided)',
      validation: Rule => Rule.uri({
        scheme: ['http', 'https']
      })
    },
    {
      name: 'isActive',
      title: 'Active Partner',
      type: 'boolean',
      description: 'Display this partner on the website',
      initialValue: true
    },
    {
      name: 'sortOrder',
      title: 'Sort Order',
      type: 'number',
      description: 'Order in which to display this partner (lower numbers first)',
      initialValue: 0
    }
  ],
  orderings: [
    {
      title: 'Sort Order',
      name: 'sortOrder',
      by: [
        {field: 'sortOrder', direction: 'asc'}
      ]
    },
    {
      title: 'Category, then Name',
      name: 'categoryName',
      by: [
        {field: 'category', direction: 'asc'},
        {field: 'name', direction: 'asc'}
      ]
    }
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'category',
      active: 'isActive'
    },
    prepare(selection) {
      const {title, subtitle, active} = selection
      return {
        title: title,
        subtitle: `${subtitle}${active ? '' : ' (Inactive)'}`
      }
    }
  }
}

// Event Schema
export const event = {
  name: 'event',
  title: 'Events',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Event Title',
      type: 'string',
      description: 'Name of the event',
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Brief description of what the event covers',
      validation: Rule => Rule.required()
    },
    {
      name: 'eventType',
      title: 'Event Type',
      type: 'string',
      description: 'Type of event - determines display section and styling',
      options: {
        list: [
          {title: 'Information Session', value: 'info'},
          {title: 'Educational Workshop', value: 'workshop'},
          {title: 'Program Orientation', value: 'orientation'}
        ]
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'date',
      title: 'Event Date',
      type: 'date',
      description: 'Date of the event',
      validation: Rule => Rule.required()
    },
    {
      name: 'startTime',
      title: 'Start Time',
      type: 'string',
      description: 'Event start time (e.g., "6:00 PM EST")',
      validation: Rule => Rule.required()
    },
    {
      name: 'endTime',
      title: 'End Time',
      type: 'string',
      description: 'Event end time (e.g., "8:00 PM EST")',
      validation: Rule => Rule.required()
    },
    {
      name: 'format',
      title: 'Event Format',
      type: 'string',
      description: 'How the event will be conducted',
      options: {
        list: [
          {title: 'Virtual', value: 'Virtual'},
          {title: 'In-Person', value: 'In-Person'},
          {title: 'Hybrid', value: 'Hybrid'}
        ]
      },
      initialValue: 'Virtual',
      validation: Rule => Rule.required()
    },
    {
      name: 'registrationUrl',
      title: 'Registration URL',
      type: 'url',
      description: 'Link for event registration (optional)',
      validation: Rule => Rule.uri({
        scheme: ['http', 'https']
      })
    },
    {
      name: 'meetingUrl',
      title: 'Meeting URL',
      type: 'url',
      description: 'Direct meeting link for virtual events (optional)',
      validation: Rule => Rule.uri({
        scheme: ['http', 'https']
      })
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
      description: 'Physical location for in-person events'
    },
    {
      name: 'maxCapacity',
      title: 'Maximum Capacity',
      type: 'number',
      description: 'Maximum number of attendees (optional)'
    },
    {
      name: 'isPublished',
      title: 'Published',
      type: 'boolean',
      description: 'Display this event on the website',
      initialValue: true
    },
    {
      name: 'isFeatured',
      title: 'Featured Event',
      type: 'boolean',
      description: 'Highlight this event (appears first in its category)',
      initialValue: false
    },
    {
      name: 'sortOrder',
      title: 'Sort Order',
      type: 'number',
      description: 'Custom sort order within event type (lower numbers first)',
      initialValue: 0
    }
  ],
  orderings: [
    {
      title: 'Event Date',
      name: 'date',
      by: [
        {field: 'date', direction: 'asc'}
      ]
    },
    {
      title: 'Event Type, then Date',
      name: 'typeDate',
      by: [
        {field: 'eventType', direction: 'asc'},
        {field: 'date', direction: 'asc'}
      ]
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'eventType',
      date: 'date',
      published: 'isPublished'
    },
    prepare(selection) {
      const {title, subtitle, date, published} = selection
      const formattedDate = new Date(date).toLocaleDateString()
      return {
        title: title,
        subtitle: `${subtitle} - ${formattedDate}${published ? '' : ' (Draft)'}`
      }
    }
  }
}

// Partners Page Content Schema
export const partnersPageContent = {
  name: 'partnersPageContent',
  title: 'Partners Page Content',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Page Title',
      type: 'string',
      description: 'Main page headline',
      initialValue: 'Our Partners'
    },
    {
      name: 'subtitle',
      title: 'Page Subtitle',
      type: 'text',
      description: 'Description under the main title',
      initialValue: 'We work with a carefully vetted network of professional partners committed to your homeownership success.'
    },
    {
      name: 'networkTitle',
      title: 'Network Section Title',
      type: 'string',
      description: 'Title for the network overview section',
      initialValue: 'Professional Network'
    },
    {
      name: 'networkDescription',
      title: 'Network Section Description',
      type: 'text',
      description: 'Description for the network overview section',
      initialValue: 'Keys2Home partners with established professionals across the housing industry to ensure you have access to quality resources and guidance.'
    },
    {
      name: 'lenderSectionTitle',
      title: 'Lender Section Title',
      type: 'string',
      initialValue: 'Lender Partners'
    },
    {
      name: 'lenderSectionDescription',
      title: 'Lender Section Description',
      type: 'text',
      initialValue: 'Mortgage professionals committed to workforce homeownership'
    },
    {
      name: 'creditSectionTitle',
      title: 'Credit Section Title',
      type: 'string',
      initialValue: 'Credit & Financial Partners'
    },
    {
      name: 'creditSectionDescription',
      title: 'Credit Section Description', 
      type: 'text',
      initialValue: 'Professional support for credit improvement and financial readiness'
    },
    {
      name: 'communitySectionTitle',
      title: 'Community Section Title',
      type: 'string',
      initialValue: 'Community Partners'
    },
    {
      name: 'communitySectionDescription',
      title: 'Community Section Description',
      type: 'text',
      initialValue: 'Organizations supporting essential workers and community development'
    },
    {
      name: 'partnershipStandardsTitle',
      title: 'Partnership Standards Title',
      type: 'string',
      initialValue: 'Partnership Standards'
    },
    {
      name: 'partnershipStandardsContent',
      title: 'Partnership Standards Content',
      type: 'array',
      of: [{type: 'text'}],
      description: 'Paragraphs describing partnership standards'
    },
    {
      name: 'noPartnersMessage',
      title: 'No Partners Message',
      type: 'text',
      description: 'Message to display when no partners are available in a category',
      initialValue: 'We are currently building our network of partners in this category. Please check back soon for updates.'
    }
  ],
  preview: {
    prepare() {
      return {
        title: 'Partners Page Content'
      }
    }
  }
}

// Events Page Content Schema
export const eventsPageContent = {
  name: 'eventsPageContent',
  title: 'Events Page Content',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Page Title',
      type: 'string',
      description: 'Main page headline',
      initialValue: 'Events & Calendar'
    },
    {
      name: 'subtitle',
      title: 'Page Subtitle',
      type: 'text',
      description: 'Description under the main title',
      initialValue: 'Join our orientation sessions, educational workshops, and information sessions to support your homeownership journey.'
    },
    {
      name: 'infoSectionTitle',
      title: 'Information Sessions Title',
      type: 'string',
      initialValue: 'Information Sessions'
    },
    {
      name: 'infoSectionDescription',
      title: 'Information Sessions Description',
      type: 'text',
      initialValue: 'Learn about Keys2Home and ask questions before you apply.'
    },
    {
      name: 'workshopSectionTitle',
      title: 'Workshops Section Title',
      type: 'string',
      initialValue: 'Educational Workshops'
    },
    {
      name: 'workshopSectionDescription',
      title: 'Workshops Section Description',
      type: 'text',
      initialValue: 'Specialized workshops focusing on key aspects of homeownership preparation.'
    },
    {
      name: 'orientationSectionTitle',
      title: 'Orientations Section Title',
      type: 'string',
      initialValue: 'Program Orientations'
    },
    {
      name: 'orientationSectionDescription',
      title: 'Orientations Section Description',
      type: 'text',
      initialValue: 'Required orientation sessions for all new Keys2Home participants. Choose from upcoming dates.'
    },
    {
      name: 'orientationNote',
      title: 'Orientation Note',
      type: 'text',
      description: 'Note displayed below orientations',
      initialValue: 'Orientations are required for all new participants. You must complete the Quick Eligibility Check before attending orientation.'
    },
    {
      name: 'guidelinesTitle',
      title: 'Guidelines Section Title',
      type: 'string',
      initialValue: 'Event Guidelines'
    },
    {
      name: 'beforeAttendingTitle',
      title: 'Before Attending Title',
      type: 'string',
      initialValue: 'Before Attending'
    },
    {
      name: 'beforeAttendingItems',
      title: 'Before Attending Items',
      type: 'array',
      of: [{type: 'string'}],
      description: 'List of items for before attending events'
    },
    {
      name: 'whatToExpectTitle',
      title: 'What to Expect Title',
      type: 'string',
      initialValue: 'What to Expect'
    },
    {
      name: 'whatToExpectItems',
      title: 'What to Expect Items',
      type: 'array',
      of: [{type: 'string'}],
      description: 'List of what to expect at events'
    },
    {
      name: 'noEventsMessage',
      title: 'No Events Message',
      type: 'text',
      description: 'Message to display when no events are available in a category',
      initialValue: 'No upcoming events are currently scheduled in this category. Please check back soon for new dates.'
    },
    {
      name: 'registrationUrl',
      title: 'Default Registration URL',
      type: 'url',
      description: 'Default registration URL for events (can be overridden per event)',
      validation: Rule => Rule.uri({
        scheme: ['http', 'https']
      })
    }
  ],
  preview: {
    prepare() {
      return {
        title: 'Events Page Content'
      }
    }
  }
}

// Main schema export - add this to your Sanity schema index
export const schemaTypes = [
  partner,
  event,
  partnersPageContent,
  eventsPageContent
]

// USAGE INSTRUCTIONS:
//
// 1. Copy this entire file into your Sanity project
// 2. Import the schemas in your main schema file:
//    import { schemaTypes } from './path-to-this-file'
// 3. Add schemaTypes to your Sanity config
//
// 4. Create single documents for page content:
//    - Go to Sanity Studio
//    - Create one partnersPageContent document
//    - Create one eventsPageContent document
//    - Fill in the content fields
//
// 5. Create partner and event documents as needed
//
// 6. In your React components, query the data using Sanity's client:
//
// Example queries:
//
// // Get all active partners by category
// const lenderPartners = await client.fetch(`
//   *[_type == "partner" && category == "lender" && isActive == true] | order(sortOrder asc)
// `)
//
// // Get all upcoming events by type
// const infoSessions = await client.fetch(`
//   *[_type == "event" && eventType == "info" && isPublished == true && date >= now()] | order(date asc)
// `)
//
// // Get page content
// const partnersContent = await client.fetch(`
//   *[_type == "partnersPageContent"][0]
// `)