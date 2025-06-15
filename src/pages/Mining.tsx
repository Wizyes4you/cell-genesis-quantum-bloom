
import React from 'react';
import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Zap, Atom, Hourglass } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const MiningPage = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-background text-foreground font-sans">
      <Header />
      <main className="container mx-auto px-4 py-32 min-h-screen">
        <section className="text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-foreground to-muted-foreground">
            {t('mining_title')}
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            {t('mining_subtitle')}
          </p>
        </section>

        <section className="mt-24 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-secondary/30 border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Atom className="text-primary" />
                  {t('mining_principle_title')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{t('mining_principle_desc')}</p>
              </CardContent>
            </Card>
            <Card className="bg-secondary/30 border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Hourglass className="text-accent" />
                  {t('mining_coming_soon_title')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{t('mining_coming_soon_desc')}</p>
                <div className="mt-4 flex flex-col items-center justify-center p-8 border-2 border-dashed border-border rounded-lg bg-background/50">
                  <Zap className="w-16 h-16 text-primary animate-pulse" />
                  <p className="mt-4 font-semibold text-lg">{t('join_button')}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default MiningPage;
