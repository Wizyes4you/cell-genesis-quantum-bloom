
import React from 'react';
import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Zap, Atom } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import HexagonalCell from '@/components/mining/HexagonalCell';
import PersonalAssistant from '@/components/assistant/PersonalAssistant';

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
          <div className="space-y-16">
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
            
            <div className="flex flex-col items-center justify-center pt-8">
              <h2 className="text-3xl font-bold tracking-tight text-center mb-12 bg-clip-text text-transparent bg-gradient-to-b from-foreground to-muted-foreground">
                {t('mining_interface_title')}
              </h2>
              <HexagonalCell />
            </div>
          </div>
        </section>
      </main>
      <PersonalAssistant />
      <Footer />
    </div>
  );
};

export default MiningPage;
