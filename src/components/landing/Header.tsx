
import React from 'react';
import Logo from './Logo';
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-10 py-6 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Logo />
          <h1 className="text-2xl font-bold text-foreground">الخلية الكمومية</h1>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-lg">
          <a href="#manifesto" className="hover:text-primary transition-colors">المبدأ</a>
          <a href="#roadmap" className="hover:text-primary transition-colors">خارطة الطريق</a>
          <a href="#stats" className="hover:text-primary transition-colors">الإحصائيات</a>
        </nav>
        <Button className="bg-primary/90 hover:bg-primary text-primary-foreground font-bold text-lg px-6 py-3 rounded-full">
          انضم للجيل الجديد
        </Button>
      </div>
    </header>
  );
};

export default Header;
