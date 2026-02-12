import { Navigation } from '@/components/navigation'

export default function Research() {
  const researchAreas = [
    {
      title: 'Sociologie de la religion',
      description:
        'Examen des institutions religieuses, des pratiques et des croyances dans leurs contextes sociaux. Accent sur la formation de l\'identité religieuse, le changement institutionnel et le rôle de la religion dans la cohésion sociale et le conflit.',
    },
    {
      title: 'Jeunesse et vulnérabilité',
      description:
        'Enquête sur les facteurs sociaux affectant les jeunes, y compris les trajectoires éducatives, les défis de l\'emploi et la susceptibilité à la radicalisation. Accent sur la compréhension des inégalités structurelles.',
    },
    {
      title: 'Radicalisation et identité',
      description:
        'Analyse des processus de transformation identitaire et de changement idéologique, particulièrement dans les contextes de marginalisation sociale et d\'instabilité politique. Examen critique des facteurs favorisant la radicalisation.',
    },
    {
      title: 'Économie informelle',
      description:
        'Étude des activités économiques non formelles et de leur importance dans les économies en développement. Exploration des stratégies de survie, de la dynamique du travail et des implications sociales de la participation au secteur informel.',
    },
    {
      title: 'Migration et transformation sociale',
      description:
        'Examen des modèles de migration et de leurs effets sur l\'identité, les structures communautaires et les relations sociales. Attention aux mouvements migratoires internes et internationaux.',
    },
    {
      title: 'Changement social en Tunisie',
      description:
        'Analyse complète de la transformation sociale tunisienne, y compris la réforme institutionnelle, le développement de la société civile, les changements générationnels et les réponses aux bouleversements politiques.',
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <section className="pt-28 pb-20 px-6 md:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16">
            <p className="text-sm font-medium text-primary/70 mb-4 tracking-widest uppercase">
              Domaines d'étude
            </p>
            <h1 className="serif-title text-6xl font-bold text-foreground mb-4">
              Recherche
            </h1>
            <p className="text-xl text-foreground/70">
              Exploration des dynamiques sociales par enquête empirique rigoureuse et analyse théorique
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {researchAreas.map((area) => (
              <div
                key={area.title}
                className="bg-card border border-border rounded-lg p-8 space-y-4 hover:border-primary/50 transition"
              >
                <h3 className="serif-title text-2xl font-bold text-primary">
                  {area.title}
                </h3>
                <p className="text-foreground leading-relaxed">
                  {area.description}
                </p>
              </div>
            ))}
          </div>

          {/* Research Methodology */}
          <div className="mt-20 space-y-8">
            <h2 className="serif-title text-3xl font-bold text-foreground">
              Méthodologie de recherche
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-3">
                <h3 className="font-bold text-lg text-foreground">
                  Méthodes qualitatives
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  Entretiens approfondis, observation ethnographique et analyse narrative pour capturer les expériences vécues et les sens sociaux.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="font-bold text-lg text-foreground">
                  Analyse quantitative
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  Enquête statistique des modèles et des tendances sociales utilisant des données d'enquête et une analyse démographique.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="font-bold text-lg text-foreground">
                  Recherche participative
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  Engagement collaboratif avec les communautés pour assurer que la recherche reflète les perspectives et préoccupations locales.
                </p>
              </div>
            </div>
          </div>

          {/* Collaborative Research */}
          <div className="mt-20 bg-primary/5 border border-border rounded-xl p-8 space-y-4">
            <h2 className="serif-title text-2xl font-bold text-foreground">
              Recherche collaborative
            </h2>
            <p className="text-foreground/80 leading-relaxed">
              Dr. Jaballah collabore avec des chercheurs et des institutions du Maghreb et d'Europe. Les partenariats actifs se concentrent sur des études comparatives du changement social et du développement institutionnel en Afrique du Nord.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12 px-6">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <p className="text-sm">
            © 2026 Dr. Sofien Jaballah. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="mailto:contact@example.com"
              className="text-sm hover:opacity-80 transition"
            >
              Email
            </a>
            <a href="#" className="text-sm hover:opacity-80 transition">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}
