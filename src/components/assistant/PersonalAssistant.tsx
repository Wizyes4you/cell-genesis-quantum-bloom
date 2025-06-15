
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Bot } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const PersonalAssistant = () => {
  const { t } = useLanguage();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="default"
          size="icon"
          className="fixed bottom-8 right-8 h-16 w-16 rounded-full shadow-lg z-50 animate-pulse"
          aria-label={t('personal_assistant_button')}
        >
          <Bot className="h-8 w-8" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{t('assistant_title')}</DialogTitle>
          <DialogDescription>
            {t('assistant_coming_soon')}
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-center p-4">
            <Bot className="w-24 h-24 text-primary" />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PersonalAssistant;
