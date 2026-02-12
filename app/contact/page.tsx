'use client'

import React from "react"

import { useState } from 'react'
import { Navigation } from '@/components/navigation'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 3000)
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <section className="pt-28 pb-20 px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <p className="text-sm font-medium text-primary/70 mb-4 tracking-widest uppercase">
              Coordonnées
            </p>
            <h1 className="serif-title text-6xl font-bold text-foreground mb-4">
              Contact
            </h1>
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="serif-title text-2xl font-bold text-foreground mb-4">
                  Nous contacter
                </h2>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  Pour les demandes concernant la collaboration de recherche, les engagements de conférence, les interviews médiatiques ou les questions académiques, veuillez utiliser les informations ci-dessous.
                </p>
              </div>

              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="font-bold text-primary text-sm uppercase tracking-wide">
                    Courrier électronique professionnel
                  </h3>
                  <a
                    href="mailto:s.jaballah@univ-sfax.tn"
                    className="text-lg text-foreground hover:text-primary transition"
                  >
                    s.jaballah@univ-sfax.tn
                  </a>
                </div>

                <div className="space-y-2">
                  <h3 className="font-bold text-primary text-sm uppercase tracking-wide">
                    Affiliation universitaire
                  </h3>
                  <p className="text-foreground/80">
                    Université de Sfax
                    <br />
                    Faculté des Lettres et Sciences Humaines
                    <br />
                    Département de Sociologie
                    <br />
                    Sfax, Tunisie
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="font-bold text-primary text-sm uppercase tracking-wide">
                    Réseaux professionnels
                  </h3>
                  <div className="flex gap-4">
                    <a
                      href="#"
                      className="text-foreground hover:text-primary transition font-medium"
                    >
                      LinkedIn
                    </a>
                    <a
                      href="#"
                      className="text-foreground hover:text-primary transition font-medium"
                    >
                      ResearchGate
                    </a>
                  </div>
                </div>

                <div className="pt-8 border-t border-border space-y-3">
                  <p className="text-sm text-foreground/60">
                    Pour les demandes médiatiques ou les apparitions publiques, veuillez prévoir un délai de 2 à 3 semaines pour une réponse.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card border border-border rounded-lg p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block font-medium text-foreground">
                    Nom
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:border-primary transition"
                    placeholder="Votre nom"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="block font-medium text-foreground">
                    Courrier électronique
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:border-primary transition"
                    placeholder="votre.email@exemple.com"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="block font-medium text-foreground">
                    Sujet
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:border-primary transition"
                    placeholder="Sujet de votre message"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="block font-medium text-foreground">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:border-primary transition resize-none"
                    placeholder="Votre message"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:opacity-90 transition"
                >
                  Envoyer le message
                </button>

                {submitted && (
                  <div className="p-4 bg-primary/10 border border-primary rounded-lg text-center">
                    <p className="text-foreground font-medium">
                      Merci pour votre message. Nous vous répondrons bientôt.
                    </p>
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Collaboration Info */}
          <div className="mt-20 bg-primary/5 border border-border rounded-xl p-8 space-y-4">
            <h2 className="serif-title text-2xl font-bold text-foreground">
              Collaboration de recherche
            </h2>
            <p className="text-foreground/80 leading-relaxed">
              Dr. Jaballah accueille favorablement les opportunités de recherche collaborative avec des institutions et des chercheurs travaillant sur la transformation sociale, le développement institutionnel et les enjeux sociologiques contemporains. Les demandes concernant les projets de recherche conjoints, les postes de visite ou les partenariats académiques sont encouragées.
            </p>
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
