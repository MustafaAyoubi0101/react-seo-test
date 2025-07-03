import React from "react";

interface ChallengeCardItem {
  sectionTitle: string;
  sectionEmoji: string;
  link: { href: string; text: string };
  image: any;
  description: string;
}

interface ChallengeCardProps {
  headerTitle: string;
  headerEmoji: string;
  items: ChallengeCardItem[];
  footer?: string;
}

const ChallengeCard: React.FC<ChallengeCardProps> = ({ headerTitle, headerEmoji, items, footer }) => (
  <div className="bg-white rounded-xl shadow p-3 max-w-md mx-auto mb-3 hidden lg:block">
    <div className="flex items-center gap-2 mb-2 text-gray-700 text-sm font-semibold">
      <span>{headerEmoji}</span>
      <span>{headerTitle}</span>
    </div>
    <h2 className="text-xl font-bold mb-2 flex items-center gap-1">Challenges <span>🤗</span></h2>
    <div className="rounded-lg mb-4 overflow-hidden">
      <div className="flex items-center gap-2 px-3 py-2 bg-gray-50 text-sm font-semibold">
        <span>Happening Now</span>
        <span>🌟</span>
      </div>
      <img src='./src/assets/robot-looking-files.jpg' alt="Challenge" width='100' height='100' className="w-full h-28 object-cover" />
      <div className="p-3">
        <a href="#" className="text-blue-700 font-bold hover:underline text-base" target="_blank" rel="noopener noreferrer">
          Runner H "AI Agent Prompting" Challenge
        </a>
        <div className="text-gray-600 text-sm italic mt-1">$10,000 in prizes for 20 winners!</div>
      </div>
    </div>
    <div className="rounded-lg mb-4 overflow-hidden">
      <div className="flex items-center gap-2 px-3 py-2 bg-gray-50 text-sm font-semibold">
        <span>Just Announced</span>
        <span>⚡</span>
      </div>
      <img src='./src/assets/success.jpg' alt="Challenge" width='100' height='100' className="w-full h-28 object-cover" />
      <div className="p-3">
        <a href="#" className="text-blue-700 font-bold hover:underline text-base" target="_blank" rel="noopener noreferrer">
          World's Largest Hackathon Writing Challenge
        </a>
        <div className="text-gray-600 text-sm italic mt-1">Reflect, share, and celebrate your journey!</div>
      </div>
    </div>
    {footer && <div className="text-sm font-semibold text-gray-700 mt-2 flex items-center gap-1">{footer} <span>❤️</span></div>}
  </div>
);

export default ChallengeCard; 