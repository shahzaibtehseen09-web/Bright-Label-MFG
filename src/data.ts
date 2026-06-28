import { StatItem, ServiceItem, CategoryItem, ProcessStep, TrustPoint } from './types';

export const HERO_STATS: StatItem[] = [
  { number: '6+', label: 'Garment Categories Manufactured' },
  { number: '100%', label: 'Brand Confidentiality Guaranteed' },
  { number: 'End-to-End', label: 'From concept to delivery' }
];

export const ABOUT_CARDS = [
  { number: '6+', label: 'Garment Categories' },
  { number: '100%', label: 'Confidentiality' },
  { number: 'End-to-End', label: 'Concept → Sample → Production → Delivery', isFullWidth: true }
];

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'mfg',
    num: '01',
    title: 'Manufacturing Solutions',
    description: 'Full garment production from cutting to finishing — handled with precision and care at every stage.'
  },
  {
    id: 'sourcing',
    num: '02',
    title: 'Fabric & Trim Sourcing',
    description: "Premium quality fabrics sourced directly from Pakistan's finest mills — best materials at competitive rates."
  },
  {
    id: 'dev',
    num: '03',
    title: 'Product Development',
    description: 'From your sketch or reference to a production-ready sample — we make your vision real before scaling.'
  },
  {
    id: 'qa',
    num: '04',
    title: 'Quality Assurance',
    description: 'Multi-stage inspection on every single order. Zero defects, zero compromise. What we promise, you receive.'
  },
  {
    id: 'delivery',
    num: '05',
    title: 'Reliable Delivery',
    description: 'On-time delivery to the USA and globally — professionally packed, safely shipped, always on schedule.'
  }
];

export const CATEGORIES_LIST: CategoryItem[] = [
  {
    id: 'tops',
    num: '01',
    name: 'Tops',
    items: ['T-Shirts', 'Polos', 'Tank Tops', 'Custom Printed Tops']
  },
  {
    id: 'outerwear',
    num: '02',
    name: 'Outerwear',
    items: ['Hoodies', 'Sweatshirts', 'Jackets', 'Windbreakers']
  },
  {
    id: 'bottoms',
    num: '03',
    name: 'Bottoms',
    items: ['Joggers', 'Shorts', 'Cargo Pants', 'Trousers']
  },
  {
    id: 'denim',
    num: '04',
    name: 'Denim',
    items: ['Jeans', 'Denim Jackets', 'Denim Shorts', 'Custom Denim']
  },
  {
    id: 'activewear',
    num: '05',
    name: 'Activewear',
    items: ['Performance Tops', 'Training Shorts', 'Compression Wear', 'Sports Hoodies']
  },
  {
    id: 'accessories',
    num: '06',
    name: 'Accessories',
    items: ['Caps & Hats', 'Bags', 'Beanies', 'Custom Accessories']
  }
];

export const TRUST_POINTS: TrustPoint[] = [
  {
    title: 'Complete Confidentiality',
    description: 'Your brand identity is never disclosed to third parties — ever. Full discretion from sampling to final delivery.'
  },
  {
    title: 'Flexible MOQs',
    description: 'Built for startups, scalable for established brands. We work with your numbers, not against them.'
  },
  {
    title: 'Direct Factory Access',
    description: 'No middlemen. No markups. Just manufacturing. You get direct access to Pakistan\'s best production facilities.'
  },
  {
    title: 'End-to-End Service',
    description: 'From concept to delivery, we handle everything. You focus on your brand — we handle the rest.'
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    num: '01',
    title: 'Consultation',
    description: 'You share your vision — collection type, quantities, quality level, timeline. We listen, plan, and align before a single thread is sourced.'
  },
  {
    num: '02',
    title: 'Fabric & Trim Sourcing',
    description: "We source the best fabrics and trims from Pakistan's top mills — matching your quality standards and price targets precisely."
  },
  {
    num: '03',
    title: 'Sampling',
    description: 'We produce a physical sample for your approval before any full production begins. You see it, approve it, then we scale.'
  },
  {
    num: '04',
    title: 'Production & QC',
    description: 'Full production with strict quality checks at every stage — cutting, stitching, finishing, and final inspection. Zero defects policy.'
  },
  {
    num: '05',
    title: 'Delivery to Your Door',
    description: 'Professionally packed with your brand labels. Shipped directly to the USA or wherever your brand is. On time, every time.'
  }
];
