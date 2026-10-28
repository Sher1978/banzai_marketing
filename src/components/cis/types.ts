export interface CisCaseItem {
  id: string;
  category: 'web' | 'maps' | 'apps' | 'leads';
  label: string;
  title: string;
  description: string;
  image?: string;
  metric1: { value: string; label: string };
  metric2: { value: string; label: string };
  metricsDetail?: { label: string; value: string }[];
  note: string;
  tags: string[];
  externalUrl?: string;
  highlights: string[];
}

export interface CisServiceItem {
  id: string;
  badge: string;
  title: string;
  description: string;
  deliverables: string[];
  forWhom: string;
  timeline: string;
  popular?: boolean;
}

export interface CisPricingPlan {
  id: string;
  title: string;
  subtitle: string;
  tag?: string;
  priceKzt: string;
  priceRub: string;
  priceUsd: string;
  period?: string;
  features: string[];
  bestFor: string;
  recommended?: boolean;
}
