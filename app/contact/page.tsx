'use client'

import React, { useState } from "react"
import { Navigation } from '@/components/navigation'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(false)

    try {
      const response = await fetch("https://formspree.io/f/xjgeygbq", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitted(true)
        setFormData({ name: '', email: '', subject: '', message: '' })
        // Success message stays for 5 seconds
        setTimeout(() => setSubmitted(false), 5000)
      } else {
        setError(true)
      }
    } catch (err) {
      setError(true)
    } finally {
      setIsSubmitting(false)
    }
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
                    <a href="#" className="text-foreground hover:text-primary transition font-medium">LinkedIn</a>
                    <a href="#" className="text-foreground hover:text-primary transition font-medium">ResearchGate</a>
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
                  <label htmlFor="name" className="block font-medium text-foreground">Nom</label>
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
                  <label htmlFor="email" className="block font-medium text-foreground">Courrier électronique</label>
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
                  <label htmlFor="subject" className="block font-medium text-foreground">Sujet</label>
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
                  <label htmlFor="message" className="block font-medium text-foreground">Message</label>
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
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:opacity-90 transition disabled:opacity-50"
                >
                  {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
                </button>

                {submitted && (
                  <div className="p-4 bg-green-500/10 border border-green-500 rounded-lg text-center text-green-600 font-medium">
                    Merci pour votre message. Nous vous répondrons bientôt.
                  </div>
                )}

                {error && (
                  <div className="p-4 bg-red-500/10 border border-red-500 rounded-lg text-center text-red-600 font-medium">
                    Une erreur est survenue. Veuillez réessayer plus tard.
                  </div>
                )}
              </form>
            </div>
          </div>

          <div className="mt-20 bg-primary/5 border border-border rounded-xl p-8 space-y-4">
            <h2 className="serif-title text-2xl font-bold text-foreground">Collaboration de recherche</h2>
            <p className="text-foreground/80 leading-relaxed">
              Dr. Jaballah accueille favorablement les opportunités de recherche collaborative avec des institutions et des chercheurs travaillant sur la transformation sociale...
            </p>
          </div>
        </div>
      </section>

      {/* Footer remains the same... */}
      <footer className="bg-primary text-primary-foreground py-16 px-6 md:px-8">
        {/* Footer content */}
      </footer>
    </main>
  )
}