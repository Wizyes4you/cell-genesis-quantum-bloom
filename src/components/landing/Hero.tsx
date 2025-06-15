
import React from 'react';
import { Button } from "@/components/ui/button";
import { useLanguage } from '@/contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center text-center overflow-hidden px-4">
       <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
       <div className="absolute top-0 left-0 -z-10 h-full w-full bg-[radial-gradient(circle_500px_at_50%_200px,hsl(var(--primary),0.15),transparent)]"></div>
       <div className="absolute bottom-0 right-0 -z-10 h-full w-full bg-[radial-gradient(circle_500px_at_50%_80%,hsl(var(--accent),0.15),transparent)]"></div>
      
      <div 
        className="relative w-48 h-48 sm:w-64 sm:h-64 rounded-full bg-background flex items-center justify-center animate-pulse-deep"
      >
        <div className="w-full h-full rounded-full border-2 border-primary/50 absolute top-0 left-0 animate-spin" style={{ animationDuration: '20s' }}></div>
        <div className="w-3/4 h-3/4 rounded-full border border-accent/50 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
      </div>

      <h1 className="mt-12 text-5xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-foreground to-muted-foreground">
        {t('hero_title')}
      </h1>
      <p className="mt-4 text-xl md:text-2xl text-muted-foreground max-w-3xl">
        {t('hero_subtitle')}
      </p>
      <div className="mt-8 flex gap-4">
        <Button size="lg" className="bg-primary/90 hover:bg-primary text-primary-foreground font-bold text-xl px-8 py-6 rounded-full shadow-lg shadow-primary/20">
          {t('hero_button_start')}
        </Button>
        <Button size="lg" variant="outline" className="font-bold text-xl px-8 py-6 rounded-full border-2 bg-transparent">
          {t('hero_button_whitepaper')}
        </Button>
      </div>
    </section>
  );
};

export default Hero;
