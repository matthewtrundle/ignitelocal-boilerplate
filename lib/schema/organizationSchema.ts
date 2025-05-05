import { Organization, WithContext } from 'schema-dts';

export function generateOrganizationSchema(): WithContext<Organization> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'LocalIgnite.ai',
    url: 'https://localignite.ai',
    logo: 'https://localignite.ai/images/LocalIgnite.ai Logo Design.png',
    description: 'AI-powered website generation, chatbots, workflow automation, analytics, and more for local businesses.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Austin',
      addressRegion: 'TX',
      postalCode: '78704',
      addressCountry: 'US'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-512-555-0123',
      contactType: 'customer service',
      email: 'info@localignite.ai'
    },
    sameAs: [
      'https://www.linkedin.com/in/allanhenslee/'
    ]
  };
}
