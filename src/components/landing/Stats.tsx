
import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const Stats = () => {
  const { t, language } = useLanguage();
  const target = 8_000_000_000;
  const initialCells = 123_456_789;
  const [currentCells, setCurrentCells] = useState(initialCells);

  useEffect(() => {
    const increment = Math.floor(Math.random() * 50) + 10;
    const interval = setInterval(() => {
      setCurrentCells(prev => prev + increment);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  const progressPercentage = (currentCells / target) * 100;

  return (
    <section id="stats" className="py-20 sm:py-32">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4">{t('stats_title')}</h2>
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          {t('stats_subtitle')}
        </p>
        <div className="max-w-4xl mx-auto bg-secondary/50 p-8 rounded-2xl border border-border shadow-2xl">
          <h3 className="text-2xl font-semibold text-primary">{t('stats_active_cells')}</h3>
          <p className="text-6xl sm:text-7xl font-mono font-bold my-4 tracking-wider">
            {currentCells.toLocaleString(language === 'ar' ? 'ar-EG' : 'en-US')}
          </p>
          <div className="w-full bg-border rounded-full h-4 my-4 overflow-hidden">
            <div 
              className="bg-gradient-to-r from-accent to-primary h-4 rounded-full transition-all duration-1000 ease-out"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
          <p className="text-muted-foreground">
            {progressPercentage.toFixed(4)}% {t('stats_target_progress')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Stats;
