import { LucideIcon } from 'lucide-react';

export type ScreenView = 'HOME' | 'MENU' | 'FIGHT' | 'TRAINING' | 'STATS';

export interface MenuItem {
  id: string;
  label: string;
  icon: LucideIcon;
  description?: string;
}

export interface GameStats {
  combo: number;
  score: number;
  strength: number;
}
