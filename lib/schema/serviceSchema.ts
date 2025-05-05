import { Service as SchemaService, WithContext } from 'schema-dts';
import type { Service } from '@/lib/data/services';

export function generateServiceSchema(service: Service): WithContext<SchemaService> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.description,
    provider: {
      '@type': 'Organization',
      name: 'LocalIgnite.ai',
      url: 'https://localignite.ai'
    },
    serviceType: service.title,
    areaServed: {
      '@type': 'Country',
      name: 'United States'
    },
  };
}
