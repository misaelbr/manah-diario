export default function StructuredData() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Manah Diário',
    applicationCategory: 'LifestyleApplication',
    description:
      'Caixinha de promessas virtual com versículos bíblicos diários.',
    url: 'https://manah.misael.dev.br',
    image: 'https://manah.misael.dev.br/card.png',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'BRL',
    },
    inLanguage: 'pt-BR',
    browserRequirements: 'Requires JavaScript. Requires HTML5.',
    featureList: [
      'Versículos bíblicos aleatórios',
      'Caixinha de promessas virtual',
      'Compartilhamento de versículos',
    ],
    author: {
      '@type': 'Person',
      name: 'Misael',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
