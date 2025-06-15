import React, { useEffect } from 'react';
import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { useAuth } from '@/contexts/AuthContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Heart, DollarSign } from 'lucide-react';
import { toast } from 'sonner';
import { supabase } from '@/lib/supabase';

const SupportPage = () => {
    const { t } = useLanguage();
    const { user } = useAuth();
    const [donationAmount, setDonationAmount] = React.useState('');
    const [isLoading, setIsLoading] = React.useState(false);
    const [isSubscribing, setIsSubscribing] = React.useState(false);

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        if (params.get('payment_success')) {
            toast.success(t('donation_success_title'), {
                description: t('donation_success_desc'),
            });
        }
        if (params.get('payment_canceled')) {
            toast.error(t('donation_canceled_title'), {
                description: t('donation_canceled_desc'),
            });
        }
        if (params.get('subscription_success')) {
            toast.success(t('subscription_success_title'), {
                description: t('subscription_success_desc'),
            });
        }
        if (params.get('subscription_canceled')) {
            toast.error(t('subscription_canceled_title'), {
                description: t('subscription_canceled_desc'),
            });
        }
        // Clean the URL to avoid showing toasts on refresh
        if (params.toString() && window.history.replaceState) {
            const cleanUrl = window.location.protocol + "//" + window.location.host + window.location.pathname;
            window.history.replaceState({}, document.title, cleanUrl);
        }
    }, [t]);

    const handleDonate = async () => {
        const amount = parseFloat(donationAmount);
        if (isNaN(amount) || amount <= 0) {
            toast.error(t('invalid_amount_error'));
            return;
        }

        setIsLoading(true);
        toast.info(t('redirecting_to_payment'));

        try {
            const { data, error } = await supabase.functions.invoke('create-donation', {
                body: { amount },
            });

            if (error) throw error;

            if (data.url) {
                window.location.href = data.url;
            }
        } catch (error) {
            console.error('Donation Error:', error);
            toast.error(t('payment_error_desc'));
            setIsLoading(false);
        }
    };

    const handleSubscribe = async () => {
        if (!user) {
            toast.error(t('login_required_for_subscription'));
            return;
        }

        setIsSubscribing(true);
        toast.info(t('redirecting_to_payment'));

        try {
            const { data, error } = await supabase.functions.invoke('create-subscription');

            if (error) throw error;

            if (data.url) {
                window.location.href = data.url;
            } else {
                throw new Error("No URL returned from the function.");
            }
        } catch (error: any) {
            console.error('Subscription Error:', error);
            toast.error(t('payment_error_desc'), { description: error.message || "An unknown error occurred." });
            setIsSubscribing(false);
        }
    }

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
                            <Button 
                                size="lg" 
                                className="w-full" 
                                disabled={!user || isSubscribing}
                                onClick={handleSubscribe}
                            >
                                {isSubscribing ? t('processing') : t('subscribe_button')}
                            </Button>
                             <p className="text-xs text-muted-foreground mt-2 text-center">
                                {!user ? t('login_required_for_subscription') : `${t('subscription_price')}`}
                             </p>
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
                                        disabled={isLoading}
                                    />
                                </div>
                            </div>
                            <Button size="lg" className="w-full" onClick={handleDonate} disabled={isLoading}>
                                {isLoading ? t('processing_payment') : t('donate_button')}
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
