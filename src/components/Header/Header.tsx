import React from 'react';
import { Heart } from 'lucide-react';
import { CountdownTimer } from '../CountdownTimer/CountdownTimer';

interface HeaderProps {
  eventDate: Date;
  couple: {
    partner1: string;
    partner2: string;
  };
}

export const Header: React.FC<HeaderProps> = ({ eventDate, couple }) => {
  return (
    <div className="text-center text-white mb-16">
      <div className="flex justify-center mb-4">
        <Heart className="w-12 h-12 text-rose-400" />
      </div>
      <h1 className="text-5xl md:text-6xl font-serif mb-4">
        25th Wedding Anniversary
      </h1>
      <h2 className="text-3xl font-serif text-center mb-8 text-gold-500">
        {couple.partner1} & {couple.partner2}
      </h2>
      <CountdownTimer targetDate={eventDate} />
    </div>
  );
};