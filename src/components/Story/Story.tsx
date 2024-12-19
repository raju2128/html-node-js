import React from 'react';

interface StoryProps {
  content: string;
}

export const Story: React.FC<StoryProps> = ({ content }) => {
  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-8 mb-12 text-center">
      <h2 className="text-3xl font-serif mb-6">Our Story</h2>
      <p className="text-blue-900 leading-relaxed">{content}</p>
    </div>
  );
};