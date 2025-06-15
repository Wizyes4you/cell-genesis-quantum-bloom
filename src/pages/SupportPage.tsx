
import React from 'react';
import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Heart, DollarSign } from 'lucide-react';

const SupportPage = () => {
    const { t } = useLanguage();
    const [donationAmount, setDonationAmount] = React.useState('');

    return (
        <div className="bg-background text-foreground font-sans">
            <Header />
            <main className="container mx-auto px-4 py-32 min-h-screen">
                <section className="text-center">
                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-foreground to-muted-foreground">
                        {t('support_title')}
                    </h1>
                    <p className="mt-4 text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
                        {t('support_subtitle')}
                    </p>
                </section>

                <section className="mt-24 max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
                    <Card className="bg-secondary/30 border-border flex flex-col">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Heart className="text-primary" />
                                {t('subscription_title')}
                            </CardTitle>
                            <CardDescription>{t('subscription_desc')}</CardDescription>
                        </CardHeader>
                        <CardContent className="flex-grow flex flex-col justify-end">
                            <Button size="lg" className="w-full">
                                {t('subscribe_button')}
                            </Button>
                        </CardContent>
                    </Card>

                    <Card className="bg-secondary/30 border-border flex flex-col">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <DollarSign className="text-primary" />
                                {t('donation_title')}
                            </CardTitle>
                            <CardDescription>{t('donation_desc')}</CardDescription>
                        </CardHeader>
                        <CardContent className="flex-grow flex flex-col justify-end gap-4">
                             <div className="space-y-2">
                                <Label htmlFor="donation-amount">{t('donation_amount')}</Label>
                                <div className="relative">
                                    <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                                    <Input
                                        id="donation-amount"
                                        type="number"
                                        placeholder={t('donation_placeholder')}
                                        value={donationAmount}
                                        onChange={(e) => setDonationAmount(e.target.value)}
                                        className="pl-10"
                                    />
                                </div>
                            </div>
                            <Button size="lg" className="w-full">
                                {t('donate_button')}
                            </Button>
                        </CardContent>
                    </Card>
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default SupportPage;
