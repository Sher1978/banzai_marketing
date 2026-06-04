'use client';

import React from 'react';

export default function PrintButton() {
  return (
    <button 
      className="print-btn no-print" 
      onClick={() => typeof window !== 'undefined' && window.print()}
    >
      ↓ Save as PDF
    </button>
  );
}
