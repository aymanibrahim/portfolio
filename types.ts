import { LucideIcon } from 'lucide-react';

export interface SectionProps {
  id: string;
  className?: string;
}

export interface FeatureCardProps {
  title: string;
  description: string;
  icon?: LucideIcon;
}

export interface ProblemSolution {
  problem: string;
  solution: string;
  icon: LucideIcon;
}

export interface Project {
  title: string;
  challenge: string;
  solution: string;
  techStack: string[];
  impact: string;
  githubLink: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
  type: 'current' | 'past';
}

export interface ServiceItem {
  title: string;
  points: string[];
  icon: LucideIcon;
}

export interface Certification {
  name: string;
  year: string;
  issuer?: string;
}

export interface Achievement {
  text: string;
  icon: LucideIcon;
}

export interface NavItem {
  label: string;
  href: string;
}
