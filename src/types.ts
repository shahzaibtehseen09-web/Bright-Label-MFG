export interface StatItem {
  number: string;
  label: string;
}

export interface ServiceItem {
  id: string;
  num: string;
  title: string;
  description: string;
}

export interface CategoryItem {
  id: string;
  num: string;
  name: string;
  items: string[];
}

export interface ProcessStep {
  num: string;
  title: string;
  description: string;
}

export interface TrustPoint {
  title: string;
  description: string;
}
