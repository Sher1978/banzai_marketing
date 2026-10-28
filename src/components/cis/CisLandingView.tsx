"use client";

import React, { useState } from 'react';
import CisHeader from './CisHeader';
import CisHero from './CisHero';
import CisProofStrip from './CisProofStrip';
import CisProblemSection from './CisProblemSection';
import CisServicesSection from './CisServicesSection';
import CisProcessSection from './CisProcessSection';
import CisCasesSection from './CisCasesSection';
import CisPricingSection from './CisPricingSection';
import CisFaqSection from './CisFaqSection';
import CisLeadSection from './CisLeadSection';
import CisFooter from './CisFooter';
import CisAuditModal from './CisAuditModal';
import CisCaseDetailModal from './CisCaseDetailModal';
import CisQuickContact from './CisQuickContact';
import { CisCaseItem } from './types';

export default function CisLandingView() {
  const [auditOpen, setAuditOpen] = useState(false);
  const [auditSubject, setAuditSubject] = useState<string | undefined>(undefined);
  const [selectedCase, setSelectedCase] = useState<CisCaseItem | null>(null);

  const handleOpenAudit = (subject?: string) => {
    setAuditSubject(subject);
    setAuditOpen(true);
  };

  const handleCloseAudit = () => {
    setAuditOpen(false);
    setAuditSubject(undefined);
  };

  return (
    <div id="top" className="min-h-screen bg-[#080d12] text-[#f5f7fa] font-sans selection:bg-[#ffe500] selection:text-[#111820]">
      {/* Top Header */}
      <CisHeader onOpenAudit={() => handleOpenAudit()} />

      {/* Hero Section */}
      <CisHero onOpenAudit={() => handleOpenAudit()} />

      {/* Proof Strip */}
      <CisProofStrip />

      {/* Problem & Bridge Section */}
      <CisProblemSection onOpenAudit={() => handleOpenAudit()} />

      {/* Services Section for CIS */}
      <CisServicesSection onOpenAudit={(srv) => handleOpenAudit(srv)} />

      {/* Process 4 Steps */}
      <CisProcessSection />

      {/* Expertise & Cases Section (Partially using OutRich.Dubai case studies) */}
      <CisCasesSection
        onSelectCase={(item) => setSelectedCase(item)}
        onOpenAudit={() => handleOpenAudit()}
      />

      {/* Pricing & Packages */}
      <CisPricingSection onOpenAudit={(plan) => handleOpenAudit(plan)} />

      {/* FAQ */}
      <CisFaqSection />

      {/* First Step / Audit Lead Form */}
      <CisLeadSection initialSubject={auditSubject} />

      {/* Footer */}
      <CisFooter />

      {/* Audit Modal */}
      <CisAuditModal
        isOpen={auditOpen}
        onClose={handleCloseAudit}
        preselectedService={auditSubject}
      />

      {/* Case Details Modal */}
      <CisCaseDetailModal
        caseItem={selectedCase}
        onClose={() => setSelectedCase(null)}
        onOpenAudit={(subj) => handleOpenAudit(subj)}
      />

      {/* Quick Contact Floater */}
      <CisQuickContact onOpenAudit={() => handleOpenAudit()} />
    </div>
  );
}
