/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ProcessSection } from './components/ProcessSection';
import { ServiceAreaSection } from './components/ServiceAreaSection';
import { AboutSection } from './components/AboutSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MobileMenuDrawer } from './components/MobileMenuDrawer';
import { SeoAuditModal } from './components/SeoAuditModal';
import { CleaningServiceItem, SERVICES_LIST } from './data/servicesData';

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>('accueil');
  const [selectedService, setSelectedService] = useState<CleaningServiceItem | null>(null);
  const [quoteService, setQuoteService] = useState<CleaningServiceItem | null>(null);
  const [seoAuditOpen, setSeoAuditOpen] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  // Smooth scroll to contact devis section
  const handleOpenQuote = (service?: CleaningServiceItem) => {
    if (service) {
      setQuoteService(service);
    }
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    } else {
      setCurrentTab('accueil');
      setTimeout(() => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  const handleExploreServices = () => {
    const servicesElem = document.getElementById('services-section');
    if (servicesElem) {
      servicesElem.scrollIntoView({ behavior: 'smooth' });
    } else {
      setCurrentTab('services');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Background asset preloading for speed & instant section transitions
  useEffect(() => {
    // Warm browser image cache for critical section assets
    const preloadList = [
      '/assets/aistudio/logo_cleanzoe_transparent.webp',
      '/images/hero_cleaning_marrakech_1792769384949.webp',
      ...SERVICES_LIST.slice(0, 4).map((s: CleaningServiceItem) => s.image).filter(Boolean) as string[],
    ];

    if ('requestIdleCallback' in window) {
      window.requestIdleCallback(() => {
        preloadList.forEach((src) => {
          const img = new Image();
          img.src = src;
        });
      });
    } else {
      setTimeout(() => {
        preloadList.forEach((src) => {
          const img = new Image();
          img.src = src;
        });
      }, 200);
    }
  }, []);

  // Tab change effects
  useEffect(() => {
    if (currentTab === 'services') {
      document.getElementById('services-section')?.scrollIntoView({ behavior: 'smooth' });
    } else if (currentTab === 'about') {
      document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
    } else if (currentTab === 'zones') {
      document.getElementById('zones')?.scrollIntoView({ behavior: 'smooth' });
    } else if (currentTab === 'contact') {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [currentTab]);

  return (
    <div className="min-h-screen bg-[#FAFAFA] flex flex-col font-sans text-[#0F172A] selection:bg-[#0084F4] selection:text-white pb-14 md:pb-0">
      {/* Top Bar Navigation */}
      <Navbar
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        onOpenQuote={() => handleOpenQuote()}
        onOpenSeoAudit={() => setSeoAuditOpen(true)}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onOpenQuote={() => handleOpenQuote()}
          onExploreServices={handleExploreServices}
        />

        {/* Confirmed Services Section */}
        <ServicesSection
          onSelectService={(service) => setSelectedService(service)}
          onOpenQuoteWithService={(service) => handleOpenQuote(service)}
        />

        {/* 3 Real Client Feedbacks */}
        <TestimonialsSection />

        {/* Marrakech Geographic Service Area & NAP */}
        <ServiceAreaSection />

        {/* Process & Methodology */}
        <ProcessSection />

        {/* About CleanZoe Marrakech */}
        <AboutSection />

        {/* Local Intent FAQs */}
        <FaqSection />

        {/* Contact & Lead Capture */}
        <ContactSection initialService={quoteService} />
      </main>

      {/* Quiet Footer */}
      <Footer
        onSelectNav={(tab) => {
          setCurrentTab(tab);
        }}
        onOpenSeoAudit={() => setSeoAuditOpen(true)}
      />

      {/* Professional Mobile Menu Drawer adapted for phone UX */}
      <MobileMenuDrawer
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        currentTab={currentTab}
        onSelectTab={setCurrentTab}
        onOpenQuote={() => handleOpenQuote()}
        onOpenSeoAudit={() => setSeoAuditOpen(true)}
      />

      {/* Service In-Depth Modal */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onSelectForQuote={(srv) => handleOpenQuote(srv)}
      />

      {/* Comprehensive SEO Audit & Launch Checklist Modal */}
      <SeoAuditModal
        isOpen={seoAuditOpen}
        onClose={() => setSeoAuditOpen(false)}
      />
    </div>
  );
}
