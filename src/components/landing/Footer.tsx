
import React from 'react';
import Logo from './Logo';
import { Github, Twitter, Send } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 bg-secondary/30 border-t border-border">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-center md:text-right gap-8">
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center gap-4 mb-4">
            <Logo />
            <h2 className="text-xl font-bold">الخلية الكمومية</h2>
          </div>
          <p className="text-muted-foreground">بناء مستقبل لامركزي، خلية واحدة في كل مرة.</p>
        </div>
        <div className="flex items-center gap-6">
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Github /></a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Twitter /></a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Send /></a>
        </div>
      </div>
      <div className="container mx-auto mt-8 pt-8 border-t border-border text-center text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} الخلية الكمومية. جميع الحقوق محفوظة.</p>
      </div>
    </footer>
  );
};

export default Footer;
