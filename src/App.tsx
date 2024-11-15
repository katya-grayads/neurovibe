import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import Problems from './components/Problems';
import { Benefits } from './components/Benefits';
import { HowItWorks } from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import { AboutUs } from './components/AboutUs';
import FAQ from './components/FAQ';
import ContactForm from './components/ContactForm';
import { GridBackground } from './components/GridBackground';

export function App() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="fixed inset-0">
        <GridBackground />
      </div>
      <Header />
      <main className="relative z-10">
        <Hero />
        <Problems />
        <Benefits />
        <HowItWorks />
        <Testimonials />
        <AboutUs />
        <FAQ />
        <ContactForm />
      </main>
    </div>
  );
}