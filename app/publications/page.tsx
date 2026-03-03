'use client'

import { useEffect, useState } from 'react'
import { Navigation } from '@/components/navigation'

export default function Publications() {
  // 1. Change state to an object to track multiple counts
  const [views, setViews] = useState<{ [key: string]: number }>({})

  // 2. Load all views from localStorage on mount
  useEffect(() => {
    const allViews: { [key: string]: number } = {}
    publications.forEach(pub => {
      if (pub.file) {
        const stored = Number(localStorage.getItem(`views-${pub.file}`) || 0)
        allViews[pub.file] = stored
      }
    })
    setViews(allViews)
  }, [])

  // 3. Update only the specific publication's count
  const incrementViews = (file: string) => {
    const currentViews = Number(localStorage.getItem(`views-${file}`) || 0)
    const newViews = currentViews + 1
    localStorage.setItem(`views-${file}`, newViews.toString())
    
    setViews(prev => ({
      ...prev,
      [file]: newViews
    }))
  }

  const publications = [
    {
      type: 'Livre',
      title: 'Barbecha : Re-penser les politiques de gestion des déchets en Tunisie',
      description: 'Une analyse approfondie de l’économie informelle de la gestion des déchets à Tunis, explorant les enjeux sociaux, environnementaux et politiques liés aux collecteurs de déchets (Barbecha).',
      year: 2024,
      file: '/version-web-livre-barbecha (1).pdf',
      image: '/barbecha.png',
    },
    {
      type: 'Working Paper',
      title: 'Living, Breathing, Resisting: Gabès and the New Political Landscape in Tunisia',
      description: 'Study examining environmental politics and social transformation in Gabès, Tunisia.',
      year: 2024,
      file: '/ENGLISH-Gabes-and-the-New-Political-Landscape-in-Tunisia.pdf',
      image: '/thubn.PNG',
    },
    {
      type: 'MECAM Paper',
      title: 'The "Success Story" and its Margins: Environment, Development, and Resistance in Gabès',
      description: 'This paper explores the environmental and social consequences of industrial development in the Gabès region of Tunisia, focusing on local resistance and the concept of "environmental marginalization."',
      year: 2024,
      file: '/MECAM-Paper-16-Digital-Web-Version.pdf',
      image: '/thubn2.PNG',
    },
    {
      type: 'Case Study',
      title: 'Young People: A Case Study of Ettadhamen, Douar Hicher, Fouchana, and Sidi Hassine',
      description: 'A detailed sociological study focusing on youth in the marginalized peri-urban areas of Greater Tunis, examining their socio-economic conditions and relationship with local institutions.',
      year: 2024,
      file: '/Young-people.A-case-study-of-Ettadhamen-Douar-Hicher-Fouchana-and-Sidi-Hassine(1)(1).pdf',
      image: '/thubn4.PNG',
    },
    {
      type: 'Étude Sociologique Qualitative',
      title: 'Étude Sociologique Qualitative : Ettadhamen, Douar Hicher, Fouchana et Sidi Hassine',
      description: 'Une analyse approfondie des perceptions socio-économiques et politiques des habitants des quartiers populaires du Grand Tunis, mettant en lumière les défis de l’intégration urbaine et sociale.',
      year: 2024,
      file: '/Etude Sociologique qualitatives - FR(1).pdf',
      image: '/thubn5.PNG',
    },
    {
      type: 'Rapport de recherche',
      title: 'Les « Néo-Exclus » : Les jeunes et l’État en Tunisie',
      description: 'Une étude approfondie sur les dynamiques de marginalisation des jeunes en Tunisie, analysant les tensions entre les attentes citoyennes et les réponses institutionnelles dans un contexte post-révolutionnaire.',
      year: 2024,
      file: '/dri LES NÉO EXCLUS.pdf',
      image: '/thubn3.PNG',
    },
    {
      type: 'Rapport de recherche',
      title: 'Jeunes, Application et client : Une sociologie de la livraison de repas en Tunisie',
      description: 'Une exploration sociologique du secteur de la livraison de repas par plateforme, analysant les conditions de travail des livreurs, les rapports de force algorithmiques et les nouvelles habitudes de consommation.',
      year: 2024,
      file: '/Etude_Jeunes, Application et client - Une sociologie de la livraison de repas en Tunisie font update.pdf',
      image: '/thubn6.PNG',
    },
    {
      type: 'Étude Socio-anthropologique',
      title: 'Le marché de la rue d’Espagne, ou le fonctionnement de l’économie de rue à Tunis',
      description: 'Une étude approfondie explorant les dynamiques sociales et économiques du commerce informel à Tunis, analysant les réseaux de solidarité, les stratégies de survie et le rapport à l’espace urbain.',
      year: 2024,
      file: '/Street economy in Tunis Soufiane Jaballah.pdf',
      image: '/thubn7.png',
    },
    {
      type: 'Étude de recherche',
      title: 'De la rue à la mer : Les nouvelles politiques de l’informel en Tunisie',
      description: 'Une analyse critique des politiques de lutte contre l’économie informelle et l’émigration, examinant leur impact sur la classe du « précariat » et les dynamiques de l’économie souterraine.',
      year: 2024,
      file: '/Economie informelle et migration.pdf',
      image: '/thubn8.png',
    }
  ]

 
  

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <section className="pt-28 pb-20 px-6 md:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16">
            <p className="text-sm font-medium text-primary/70 mb-4 tracking-widest uppercase">
              Travaux académiques
            </p>
            <h1 className="serif-title text-6xl font-bold text-foreground mb-4">
              Publications
            </h1>
          </div>

          <div className="mb-20 space-y-12">
            <h2 className="serif-title text-3xl font-bold text-foreground">
              Livres et articles
            </h2>

            <div className="space-y-10">
              {publications.map((pub, idx) => (
                <div key={idx} className="group border-l-4 border-primary pl-6 py-2">
                  <div className="flex flex-col md:flex-row gap-8">
                    {pub.image && (
                      <div className="w-full md:w-40 lg:w-48 flex-shrink-0">
                        <img 
                          src={pub.image} 
                          alt={`Cover of ${pub.title}`} 
                          className="w-full h-auto rounded-md border border-border shadow-md group-hover:shadow-lg transition-shadow duration-300"
                        />
                      </div>
                    )}

                    <div className="flex-1 flex flex-col justify-between">
                      <div className="space-y-3">
                        <div className="flex justify-between items-start gap-4">
                          <div>
                            <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1">
                              {pub.type}
                            </p>
                            <h3 className="serif-title text-2xl font-bold text-foreground leading-tight">
                              {pub.title}
                            </h3>
                          </div>
                          <span className="text-primary font-bold text-lg">
                            {pub.year}
                          </span>
                        </div>

                        <p className="text-muted-foreground leading-relaxed max-w-2xl">
                          {pub.description}
                        </p>
                      </div>

                      {pub.file && (
                        <div className="mt-8 pt-6 border-t border-border/50">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                            <span className="opacity-70">👁️ Lectures :</span>
                            <span className="font-mono font-medium text-foreground">
                              {/* Display specific view count for this file */}
                              {views[pub.file] || 0}
                            </span>
                          </div>

                          <div className="flex gap-3 flex-wrap">
                            <a
                              href={pub.file}
                              download
                              onClick={() => incrementViews(pub.file)}
                              className="px-5 py-2 bg-primary text-primary-foreground rounded-md text-sm font-semibold hover:brightness-110 transition shadow-sm"
                            >
                              📥 Télécharger
                            </a>

                            <a
                              href={pub.file}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={() => incrementViews(pub.file)}
                              className="px-5 py-2 border border-input bg-background rounded-md text-sm font-semibold hover:bg-accent hover:text-accent-foreground transition"
                            >
                              📖 Lire le document
                            </a>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

       
        </div>
      </section>
    </main>
  )
}