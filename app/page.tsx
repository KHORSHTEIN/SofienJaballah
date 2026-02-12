import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import Sofien from "../public/sofien.jpeg"
import Image from 'next/image'

export default function Home() {
  const researchThemes = [
    'Transformations sociales en Tunisie',
    'Sociologie de la religion',
    'Processus de radicalisation',
    'Économie informelle',
    'Migration et identité',
  ]

  const highlights = [
    {
      icon: 'M13 10V3L4 14h7v7l9-11h-7z',
      title: 'Excellence Académique',
      description: 'Recherche rigoureuse dans les transformations sociales et religieuses contemporaines.',
    },
    {
      icon: 'M12 6.253v13m0-13C6.5 6.253 2 10.998 2 17s4.5 10.747 10 10.747m0-13c5.5 0 10 4.745 10 10.747',
      title: 'Impact Social',
      description: 'Engagement civil et dialogue politique ancré dans la connaissance universitaire.',
    },
    {
      icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012-2v-1a2 2 0 012-2h1.055M8 16H6a2 2 0 01-2-2v-1a2 2 0 00-2-2h-.5a.5.5 0 00-.5.5v.5a.5.5 0 01-.5.5H1a.5.5 0 00-.5.5v2a.5.5 0 00.5.5h1.07a.5.5 0 01.5.5v.5a.5.5 0 01-.5.5H3a.5.5 0 00-.5.5v1a2 2 0 01-2-2m6-6a2 2 0 11-4 0 2 2 0 014 0z',
      title: 'Réseau International',
      description: 'Collaboration avec des institutions académiques et organisations de recherche mondiales.',
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section - Improved Design */}
      <section className="pt-28 pb-16 px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <p className="text-sm font-medium text-primary/70 mb-4 tracking-widest uppercase">
                  Professeur-Chercheur
                </p>
                <h1 className="serif-title text-6xl md:text-7xl font-bold text-foreground leading-tight mb-6">
                  Dr. Sofien <br />
                  Jaballah
                </h1>
                <p className="text-2xl text-muted-foreground font-light">
                  Professeur-Chercheur
                </p>
              </div>

              <p className="text-lg leading-relaxed text-foreground/80 max-w-xl">
                Professeur à l'Université de Sfax, je me consacre à comprendre les dynamiques complexes de la transformation sociale, des mouvements religieux et de l'identité en Tunisie contemporaine. Mes recherches explorent les vulnérabilités des jeunes, l'économie informelle et les processus de radicalisation.
              </p>

              <div className="space-y-4 pt-4">
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Thèmes de recherche</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {researchThemes.map((theme) => (
                    <div
                      key={theme}
                      className="flex items-center gap-3 text-foreground/90"
                    >
                      <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                      <span className="text-base">{theme}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-8">
                <Link
                  href="/research"
                  className="px-8 py-4 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-colors text-center"
                >
                  Explorer la recherche
                </Link>
                <Link
                  href="/publications"
                  className="px-8 py-4 border-2 border-primary text-primary font-medium rounded-md hover:bg-primary/5 transition-colors text-center"
                >
                  Voir les publications
                </Link>
              </div>
            </div>

            {/* Right - Visual Element */}
            <div>
              <Image src={Sofien} alt="sofien" className='rounded-sm'/>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* Highlights Section */}
      <section className="py-24 px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <p className="text-sm font-medium text-primary/70 mb-3 tracking-widest uppercase">
              Forces
            </p>
            <h2 className="serif-title text-4xl md:text-5xl font-bold text-foreground">
              Une approche pluridisciplinaire de la sociologie
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((item, idx) => (
              <div key={idx} className="group">
                <div className="mb-6 h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <svg
                    className="w-6 h-6 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d={item.icon}
                    />
                  </svg>
                </div>
                <h3 className="serif-title text-2xl font-bold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed text-lg">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 md:px-8 bg-primary/5 border-t border-b border-border">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div>
            <h2 className="serif-title text-4xl md:text-5xl font-bold text-foreground mb-4">
              Découvrez mes travaux de recherche
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Explorez mes publications, mes thèmes de recherche et mes contributions à la compréhension des enjeux sociaux contemporains en Tunisie et au-delà.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/research"
              className="px-8 py-4 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-colors"
            >
              Consulter la recherche
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 border-2 border-primary text-primary font-medium rounded-md hover:bg-primary/5 transition-colors"
            >
              Me contacter
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-16 px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 pb-12 border-b border-primary-foreground/10">
            <div>
              <h3 className="serif-title text-xl font-bold mb-3">Dr. Sofien Jaballah</h3>
              <p className="text-primary-foreground/80 text-sm leading-relaxed max-w-sm">
                Professeur-chercheur à l'Université de Sfax, spécialisé en sociologie des transformations sociales et des mouvements religieux.
              </p>
            </div>
            <div className="flex flex-col justify-end gap-4">
              <div className="flex gap-4">
                <a href="mailto:contact@example.com" className="text-sm hover:text-primary-foreground/70 transition">
                  Email
                </a>
                <a href="#" className="text-sm hover:text-primary-foreground/70 transition">
                  LinkedIn
                </a>
                <a href="#" className="text-sm hover:text-primary-foreground/70 transition">
                  ResearchGate
                </a>
              </div>
            </div>
          </div>
          <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-primary-foreground/60">
              © 2026 Dr. Sofien Jaballah. Tous droits réservés.
            </p>
            <div className="flex gap-6 text-xs text-primary-foreground/60">
              <a href="#" className="hover:text-primary-foreground/90 transition">Mentions légales</a>
              <a href="#" className="hover:text-primary-foreground/90 transition">Confidentialité</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
