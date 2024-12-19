import React from 'react';

interface TimeDisplayProps {
  label: string;
  value: number;
}

export const TimeDisplay: React.FC<TimeDisplayProps> = ({ label, value }) => (
  <div className="text-center">
    <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 min-w-[80px]">
      <div className="text-3xl font-bold text-gray-800">{value}</div>
      <div className="text-sm text-gray-600 capitalize">{label}</div>
    </div>
  </div>
);