'use client';

import ThreeCarousel from '@/components/ThreeCarousel';

export default function Home() {
  return (
    <main style={{ height: '200vh', background: '#111' }}>
      <h1 style={{ color: '#fff', textAlign: 'center', padding: '50px 0' }}>
        Tujyro Portfolio
      </h1>
      <ThreeCarousel />
    </main>
  );
}
