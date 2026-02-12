import { Navigation } from '@/components/navigation'

export default function About() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <section className="pt-28 pb-20 px-6 md:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16">
            <p className="text-sm font-medium text-primary/70 mb-4 tracking-widest uppercase">
              Profil académique
            </p>
            <h1 className="serif-title text-6xl font-bold text-foreground mb-4">
              À propos
            </h1>
          </div>

          <div className="space-y-16">
            {/* Academic Background */}
            <div className="space-y-4">
              <h2 className="serif-title text-3xl font-bold text-foreground">
                Formation académique
              </h2>
              <p className="text-lg leading-relaxed text-foreground/80">
                Dr. Sofien Jaballah est titulaire d'un doctorat en sciences sociales et religieuses avec une formation spécialisée en méthodologies de recherche sociologique et en analyse qualitative. Sa recherche doctorale a porté sur les mouvements religieux émergents et leurs contextes sociaux en Afrique du Nord.
              </p>
              <p className="text-lg leading-relaxed text-foreground/80">
                Actuellement, Dr. Jaballah est affilié à l'Université de Sfax où il enseigne la sociologie et supervise des recherches de troisième cycle. Son enseignement comprend des cours en sociologie de la religion, théorie sociale, méthodes de recherche et société tunisienne contemporaine.
              </p>
            </div>

            {/* Research Philosophy */}
            <div className="space-y-4">
              <h2 className="serif-title text-3xl font-bold text-foreground">
                Philosophie de recherche
              </h2>
              <p className="text-lg leading-relaxed text-foreground/80">
                La recherche de Dr. Jaballah s'appuie sur une enquête empirique rigoureuse combinée à une sophistication théorique. Il croit que la sociologie doit s'engager directement avec les expériences vécues tout en maintenant une distance analytique. Son travail souligne la compréhension des phénomènes sociaux complexes sans jugement, en mettant l'accent sur les facteurs structurels et culturels qui façonnent le comportement et les croyances humaines.
              </p>
              <p className="text-lg leading-relaxed text-foreground/80">
                Une préoccupation centrale de sa recherche est l'intersection entre l'agentivité individuelle et les structures sociales, particulièrement dans les contextes de changement social rapide, de transformation religieuse et de vulnérabilité économique.
              </p>
            </div>

            {/* Civil Society Engagement */}
            <div className="space-y-4">
              <h2 className="serif-title text-3xl font-bold text-foreground">
                Engagement sociétal
              </h2>
              <p className="text-lg leading-relaxed text-foreground/80">
                Au-delà de la recherche académique, Dr. Jaballah s'engage à traduire les connaissances érudites en savoir pratique pour les organisations de la société civile, les décideurs politiques et les communautés. Il participe régulièrement à des séminaires publics, contribue aux discussions politiques et collabore avec des organisations non gouvernementales axées sur le développement social et l'engagement des jeunes.
              </p>
              <p className="text-lg leading-relaxed text-foreground/80">
                Son engagement reflète la conviction que l'expertise académique doit servir à une meilleure compréhension sociale et contribuer à un discours public éclairé sur les questions sociales pressantes.
              </p>
            </div>

            {/* University of Sfax */}
            <div className="bg-primary/5 border border-border rounded-xl p-8 space-y-4">
              <h3 className="serif-title text-2xl font-bold text-foreground">
                Université de Sfax
              </h3>
              <p className="text-foreground/80 leading-relaxed">
                L'Université de Sfax, située dans la région sud de la Tunisie, est une institution majeure de recherche et d'enseignement. La position de Dr. Jaballah le place au cœur de l'érudition académique tunisienne, où il contribue au développement des sciences sociales et à la formation de la prochaine génération de chercheurs.
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
