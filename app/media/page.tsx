'use client'

import { useState } from 'react'
import { Navigation } from '@/components/navigation'

export default function Media() {
  const [activeVideo, setActiveVideo] = useState(null)

  const mediaItems = [
    
      {
    title: "Sofien Jaballah | 7 octobre : l'Occident et le monde ont changé, et voici le chemin suivi par la Tunisie sur le dossier de l'immigration",
    source: 'YouTube',
    date: '7 Octobre 2023',
    youtubeId: 'hQCbNu1fE5Y',
    thumbnail: 'https://img.youtube.com/vi/hQCbNu1fE5Y/hqdefault.jpg',
    description: "Interview et analyse par Dr. Sofien Jaballah sur la politique migratoire de la Tunisie et son impact international.",
  },
  {
  title: "Sofien Jaballah, chercheur en sociologie : Les quartiers populaires : comment l'insuffisance de l'État reflète la réalité de notre jeunesse ?",
  source: "YouTube",
  date: "2023",
  youtubeId: "UjUwH19eSaQ",
  thumbnail: "https://img.youtube.com/vi/UjUwH19eSaQ/hqdefault.jpg",
  description: "Analyse de Dr. Sofien Jaballah sur les quartiers populaires et l'impact des insuffisances étatiques sur la jeunesse tunisienne.",
},
{
  title: "Pour chaque article, un dialogue | Épisode 2 : Le curriculum de l’économie charaïque avec Sofien Jaballah",
  source: "YouTube",
  date: "2023",
  youtubeId: "MQjk4POHpyY",
  thumbnail: "https://img.youtube.com/vi/MQjk4POHpyY/hqdefault.jpg",
  description: "Discussion approfondie sur l’économie charaïque avec Sofien Jaballah dans l’émission Pour chaque article, un dialogue — Épisode 2.",
},
{
  title: "Sofien Jaballah : Économie informelle — Économie de rue",
  source: "YouTube",
  date: "2023",
  youtubeId: "SLJjyOSK8eU",
  thumbnail: "https://img.youtube.com/vi/SLJjyOSK8eU/hqdefault.jpg",
  description: "Discussion avec Sofien Jaballah sur l’économie informelle et l’économie de rue.",
},
{
  title: "Intervention du chercheur Sofien Jaballah",
  source: "YouTube",
  date: "2023",
  youtubeId: "ZMEfjaXCPLI",
  thumbnail: "https://img.youtube.com/vi/ZMEfjaXCPLI/hqdefault.jpg",
  description: "Intervention vidéo de Sofien Jaballah sur des enjeux sociétaux contemporains.",
},
{
  title: "Interview avec Soufiane Jaballah sur la situation en Palestine et la position occidentale",
  source: "YouTube",
  date: "2023",
  youtubeId: "76jpBIXwyS0",
  thumbnail: "https://img.youtube.com/vi/76jpBIXwyS0/hqdefault.jpg",
  description: "Discussion de Soufiane Jaballah sur la situation en Palestine et la position des pays occidentaux.",
},
{
  title: "Interview de Sofiane Jaballah avec Ilyes Gharbi — Mosaïque FM : L’étude du DRI sur les jeunes tunisiens",
  source: "YouTube",
  date: "2023",
  youtubeId: "CrhIjjOu1og",
  thumbnail: "https://img.youtube.com/vi/CrhIjjOu1og/hqdefault.jpg",
  description: "Discussion sur Mosaïque FM entre Sofiane Jaballah et Ilyes Gharbi autour de l’étude du DRI concernant les jeunes tunisiens.",
},
{
  title: "Le marché de l’avenue d’Espagne ou le curriculum de l’économie charaïque en Tunisie — Sofien Jaballah dans le Midi Show de Mosaïque FM",
  source: "YouTube",
  date: "2023",
  youtubeId: "EDuEcUzBx28",
  thumbnail: "https://img.youtube.com/vi/EDuEcUzBx28/hqdefault.jpg",
  description: "Sofien Jaballah discute du marché de l’avenue d’Espagne et de l’économie charaïque tunisienne dans l’émission Midi Show sur Mosaïque FM.",
},
{
  title: "Sofien Jaballah, chercheur en sociologie : Les quartiers populaires : comment l’insuffisance de l’État reflète la réalité de notre jeunesse ?",
  source: "YouTube",
  date: "2023",
  youtubeId: "UjUwH19eSaQ",
  thumbnail: "https://img.youtube.com/vi/UjUwH19eSaQ/hqdefault.jpg",
  description: "Analyse de Sofien Jaballah sur la façon dont le manque d’action de l’État dans les quartiers populaires affecte la situation des jeunes.",
},
{
  title: "Sofien Jaballah : « Voici la différence entre salafisme et extrémisme religieux »",
  source: "YouTube",
  date: "2023",
  youtubeId: "2sFAoTYw8vU",
  thumbnail: "https://img.youtube.com/vi/2sFAoTYw8vU/hqdefault.jpg",
  description: "Explication de Sofien Jaballah sur la distinction entre salafisme et extrémisme religieux.",
},
{
  title: "Sofien Jaballah : Voici pourquoi Bouazizi n’a pas fait de plainte sur l’avenue d’Espagne !",
  source: "YouTube",
  date: "2023",
  youtubeId: "DQFaViEbI5E",
  thumbnail: "https://img.youtube.com/vi/DQFaViEbI5E/hqdefault.jpg",
  description: "Discussion de Sofien Jaballah expliquant pourquoi Bouazizi n’a pas porté plainte à l’avenue d’Espagne.",
},
{
  title: "Sofien Jaballah : La gestion des autorités à Gabès a déçu même leurs partisans",
  source: "YouTube",
  date: "2025",
  youtubeId: "_3LFoaTwn20",
  thumbnail: "https://img.youtube.com/vi/_3LFoaTwn20/hqdefault.jpg",
  description: "Analyse vidéo par Sofien Jaballah sur la manière dont les autorités ont géré la situation à Gabès et la déception suscitée même parmi leurs soutiens.",
},
{
  title: "Entretien exclusif avec le Dr et chercheur en sociologie Sofien Jaballah sur son nouveau livre au Salon International du Livre",
  source: "YouTube",
  date: "2023",
  youtubeId: "q_uXVzA_tsY",
  thumbnail: "https://img.youtube.com/vi/q_uXVzA_tsY/hqdefault.jpg",
  description: "Interview spéciale avec Sofien Jaballah à propos de son nouveau livre lors du Salon International du Livre.",
}





  ]

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <section className="pt-28 pb-20 px-6 md:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16">
            <p className="text-sm font-medium text-primary/70 mb-4 tracking-widest uppercase">
              Visibilité publique
            </p>
            <h1 className="serif-title text-6xl font-bold text-foreground mb-4">
              Médias et interviews
            </h1>
            <p className="text-xl text-foreground/70">
              Contributions publiques et commentaires érudits sur les enjeux sociaux contemporains
            </p>
          </div>

          {/* Media Items */}
          <div className="space-y-8 mb-20">
            {mediaItems.map((item, idx) => (
              <div
                key={idx}
                onClick={() => item.youtubeId && setActiveVideo(item.youtubeId)}
                className="cursor-pointer bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition group"
              >
                <div className="grid md:grid-cols-3 gap-6">

                  {/* Thumbnail */}
                  {item.thumbnail ? (
                    <div className="relative">
                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                      {item.youtubeId && (
                        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                          <div className="bg-white/90 rounded-full p-4 text-black text-xl">
                            ▶
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="bg-muted h-full w-full flex items-center justify-center text-sm text-muted-foreground">
                      No thumbnail
                    </div>
                  )}

                  {/* Content */}
                  <div className="md:col-span-2 p-6 space-y-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-sm font-medium text-primary uppercase tracking-wide">
                          {item.source}
                        </p>
                        <h3 className="serif-title text-2xl font-bold text-foreground">
                          {item.title}
                        </h3>
                      </div>
                      <span className="text-muted-foreground text-sm whitespace-nowrap">
                        {item.date}
                      </span>
                    </div>
                    <p className="text-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {activeVideo && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-6"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="bg-background rounded-xl w-full max-w-4xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-4 right-4 text-foreground text-xl z-10"
            >
              ✕
            </button>

            {/* Video */}
            <div className="aspect-video">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
                title="YouTube video"
                frameBorder="0"
                allow="autoplay; encrypted-media; fullscreen"
                allowFullScreen
                className="rounded-xl"
              ></iframe>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-16 px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 pb-12 border-b border-primary-foreground/10">
            <div>
              <h3 className="serif-title text-xl font-bold mb-3">
                Dr. Sofien Jaballah
              </h3>
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
              <a href="#" className="hover:text-primary-foreground/90 transition">
                Mentions légales
              </a>
              <a href="#" className="hover:text-primary-foreground/90 transition">
                Confidentialité
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
