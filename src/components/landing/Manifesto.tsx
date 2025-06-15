
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Calculator, Landmark, Users, Palette, ShieldCheck } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Manifesto = () => {
  const { t } = useLanguage();

  const principles = [
    {
      icon: <Calculator className="w-12 h-12 text-primary" />,
      title: t("manifesto_p1_title"),
      description: t("manifesto_p1_desc")
    },
    {
      icon: <Landmark className="w-12 h-12 text-primary" />,
      title: t("manifesto_p2_title"),
      description: t("manifesto_p2_desc")
    },
    {
      icon: <Users className="w-12 h-12 text-primary" />,
      title: t("manifesto_p3_title"),
      description: t("manifesto_p3_desc")
    },
    {
      icon: <Palette className="w-12 h-12 text-primary" />,
      title: t("manifesto_p4_title"),
      description: t("manifesto_p4_desc")
    },
    {
      icon: <ShieldCheck className="w-12 h-12 text-primary" />,
      title: t("manifesto_p5_title"),
      description: t("manifesto_p5_desc")
    }
  ];
  
  return (
    <section id="manifesto" className="py-20 sm:py-32 bg-secondary/20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4">{t('manifesto_title')}</h2>
        <p className="text-xl text-muted-foreground mb-16 max-w-3xl mx-auto">
          {t('manifesto_subtitle')}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {principles.map((p, index) => (
            <Card key={index} className="bg-background/70 border-border hover:border-primary hover:-translate-y-2 transition-all duration-300 shadow-xl backdrop-blur-sm">
              <CardHeader className="items-center">
                <div className="p-4 bg-secondary rounded-full mb-4">
                  {p.icon}
                </div>
                <CardTitle className="text-2xl">{p.title}</CardTitle>
                <CardDescription className="text-muted-foreground text-md pt-2">
                  {p.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Manifesto;
