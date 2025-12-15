import { Swords, Dumbbell, Activity } from 'lucide-react';
import { MenuItem } from './types';

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'fight',
    label: 'FIGHT',
    icon: Swords,
    description: 'Start boxing session'
  },
  {
    id: 'training',
    label: 'TRAINING',
    icon: Dumbbell,
    description: 'Practice modes'
  },
  {
    id: 'stats',
    label: 'STATS',
    icon: Activity,
    description: 'View analytics'
  }
];