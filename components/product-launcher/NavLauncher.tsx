'use client';
import { useEffect, useState } from 'react';
import { useTheme } from '@/lib/theme';
import { ProductLauncher } from './ProductLauncher';

/** The nine-oval product switcher for the site header, following the page's light / dark mode. */
export function NavLauncher() {
  const pref = useTheme();
  const [systemDark, setSystemDark] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const sync = () => setSystemDark(mq.matches);
    sync();
    mq.addEventListener('change', sync);
    return () => mq.removeEventListener('change', sync);
  }, []);
  const dark = pref === 'dark' || (pref === 'system' && systemDark);
  return <ProductLauncher icon="/launcher/zodiacLogo.png" theme={dark ? 'dark' : 'light'} />;
}
