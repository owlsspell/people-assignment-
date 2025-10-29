'use client';
import { PeopleBoard } from '@/components/PeopleBoard';

export default function HomePage() {
  return (
    <main>
      <h1 className="text-lg font-semibold mb-4 py-3 px-6 bg-gray-300">People</h1>
      <PeopleBoard />
    </main>
  );
}