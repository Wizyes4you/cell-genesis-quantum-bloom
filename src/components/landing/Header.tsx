
import React, { useState } from 'react';
import Logo from './Logo';
import { Button } from "@/components/ui/button";
import { useLanguage } from '@/contexts/LanguageContext';
import { useAuth } from '@/contexts/AuthContext';
import { Languages } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import AuthForm from '../auth/Auth';
import { UserNav } from '../auth/UserNav';

const Header = () => {
  const { language, setLanguage, t } = useLanguage();
  const { user, loading } = useAuth();
  const [isAuthModalOpen, setAuthModalOpen] = useState(false);

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
          <Link to="/#manifesto" className="hover:text-primary transition-colors">{t('nav_manifesto')}</Link>
          <Link to="/#roadmap" className="hover:text-primary transition-colors">{t('nav_roadmap')}</Link>
          <Link to="/#stats" className="hover:text-primary transition-colors">{t('nav_stats')}</Link>
          <Link to="/mining" className="hover:text-primary transition-colors">{t('nav_mining')}</Link>
          <Link to="/support" className="hover:text-primary transition-colors">{t('nav_support')}</Link>
        </nav>
        <div className="flex items-center gap-4">
          {loading ? (
            <div className="h-10 w-24 rounded-full bg-muted animate-pulse" />
          ) : user ? (
            <UserNav />
          ) : (
            <Dialog open={isAuthModalOpen} onOpenChange={setAuthModalOpen}>
              <DialogTrigger asChild>
                <Button className="font-bold text-lg px-6 py-3 rounded-full">
                  {t('login_button')}
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>{t('auth_modal_title')}</DialogTitle>
                  <DialogDescription>
                    {t('auth_modal_desc')}
                  </DialogDescription>
                </DialogHeader>
                <AuthForm setOpen={setAuthModalOpen} />
              </DialogContent>
            </Dialog>
          )}
          <Button variant="outline" size="icon" onClick={toggleLanguage} aria-label="Toggle Language">
            <Languages className="h-[1.2rem] w-[1.2rem]" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
