
import React from 'react';
import Logo from './Logo';
import { Button } from "@/components/ui/button";
import { useLanguage } from '@/contexts/LanguageContext';
import { Languages } from 'lucide-react';

const Header = () => {
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'ar' ? 'en' : 'ar');
  };

  return (
    <header className="absolute top-0 left-0 right-0 z-10 py-6 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Logo />
          <h1 className="text-2xl font-bold text-foreground">{t('header_title')}</h1>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-lg">
          <a href="#manifesto" className="hover:text-primary transition-colors">{t('nav_manifesto')}</a>
          <a href="#roadmap" className="hover:text-primary transition-colors">{t('nav_roadmap')}</a>
          <a href="#stats" className="hover:text-primary transition-colors">{t('nav_stats')}</a>
        </nav>
        <div className="flex items-center gap-4">
          <Button className="bg-primary/90 hover:bg-primary text-primary-foreground font-bold text-lg px-6 py-3 rounded-full">
            {t('join_button')}
          </Button>
          <Button variant="outline" size="icon" onClick={toggleLanguage} aria-label="Toggle Language">
            <Languages className="h-[1.2rem] w-[1.2rem]" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
