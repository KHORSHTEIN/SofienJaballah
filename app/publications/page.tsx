import { Navigation } from '@/components/navigation'

export default function Publications() {
  const publications = [
    {
      type: 'Book',
      title: 'Devenir salafiste en Tunisie – Le comment du pourquoi',
      description:
        'A comprehensive examination of processes of Salafist identity formation in Tunisia, exploring the personal, social, and ideological dimensions of this religious transformation.',
      year: 2019,
    },
    {
      type: 'Journal Article',
      title: 'Religious Identity and Social Change in Contemporary Tunisia',
      description:
        'Analysis of the relationship between religious affiliation and social positioning in post-2011 Tunisia.',
      year: 2021,
    },
    {
      type: 'Journal Article',
      title:
        'Youth Vulnerability and Informal Economy Participation: Evidence from Urban Tunisia',
      description:
        'Empirical investigation of socioeconomic factors driving youth involvement in informal sector activities.',
      year: 2020,
    },
    {
      type: 'Book Chapter',
      title: 'Migration Patterns and Identity Formation in the Maghreb',
      description:
        'Contribution to edited volume on North African migration and its social consequences.',
      year: 2020,
    },
    {
      type: 'Journal Article',
      title: 'Radicalization Processes: A Sociological Framework',
      description:
        'Theoretical and empirical analysis of structural factors contributing to ideological radicalization.',
      year: 2022,
    },
    {
      type: 'Working Paper',
      title: 'Civil Society and Democratic Consolidation in Tunisia',
      description:
        'Analysis of civil society organizations\' role in post-transition institutional development.',
      year: 2023,
    },
  ]

  const conferences = [
    {
      title: 'International Conference on Middle Eastern Sociology',
      location: 'Beirut, Lebanon',
      year: 2023,
    },
    {
      title: 'North African Studies Association Annual Meeting',
      location: 'Tunis, Tunisia',
      year: 2022,
    },
    {
      title: 'European Sociological Association Conference',
      location: 'Athens, Greece',
      year: 2022,
    },
    {
      title: 'Maghreb Youth Studies Symposium',
      location: 'Rabat, Morocco',
      year: 2021,
    },
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

          {/* Books & Articles */}
          <div className="mb-20 space-y-8">
            <h2 className="serif-title text-3xl font-bold text-foreground">
              Livres et articles
            </h2>

            <div className="space-y-6">
              {publications.map((pub, idx) => (
                <div
                  key={idx}
                  className="border-l-4 border-primary pl-6 py-2 space-y-2"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 space-y-1">
                      <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                        {pub.type}
                      </p>
                      <h3 className="serif-title text-xl font-bold text-foreground">
                        {pub.title}
                      </h3>
                      <p className="text-foreground leading-relaxed">
                        {pub.description}
                      </p>
                    </div>
                    <span className="text-primary font-semibold whitespace-nowrap">
                      {pub.year}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <button className="flex items-center gap-2 text-primary hover:opacity-80 transition font-medium mt-4">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Télécharger le CV
            </button>
          </div>

          {/* Conferences & Talks */}
          <div className="space-y-8">
            <h2 className="serif-title text-3xl font-bold text-foreground">
              Conférences et présentations
            </h2>

            <div className="space-y-4">
              {conferences.map((conf, idx) => (
                <div
                  key={idx}
                  className="bg-card border border-border rounded-lg p-6 flex items-start justify-between gap-4"
                >
                  <div>
                    <h3 className="font-bold text-lg text-foreground mb-2">
                      {conf.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {conf.location}
                    </p>
                  </div>
                  <span className="text-primary font-semibold whitespace-nowrap">
                    {conf.year}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Media Appearances */}
          <div className="mt-20 space-y-8">
            <h2 className="serif-title text-3xl font-bold text-foreground">
              Apparitions médiatiques
            </h2>

            <div className="bg-primary/5 border border-border rounded-xl p-8 space-y-4">
              <p className="text-foreground/80 leading-relaxed">
                Dr. Jaballah contribue régulièrement aux discussions médiatiques publiques sur les enjeux sociaux contemporains en Tunisie et dans la région du Maghreb. Son expertise est recherchée sur des sujets incluant les mouvements religieux, l'engagement des jeunes, la politique sociale et le développement de la société civile.
              </p>
              <p className="text-foreground/60 text-sm">
                Les apparitions médiatiques récentes incluent des interviews avec des médias de presse internationaux et des médias locaux discutant de la transformation sociale tunisienne et du rôle de la société civile.
              </p>
            </div>
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
