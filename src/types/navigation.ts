import { LucideIcon } from 'lucide-react';

export interface NavigationItem {
  label: string;
  path: string;
  icon?: LucideIcon;
  children?: NavigationItem[];
}