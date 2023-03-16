import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

import { SampleForm } from './SampleForm';

export default function Home() {
  return (
    <main className="container mt-5">
      <SampleForm />
    </main>
  );
}
