import { vi } from 'vitest';

export const mockPath = [
  { id: 0, label: 'Home', link: '/' },
  { id: 2, label: 'Profile', link: undefined },
  { id: 1, label: 'Dashboard', link: '/dashboard' },
] as { id: number; link: string; label: string }[];
