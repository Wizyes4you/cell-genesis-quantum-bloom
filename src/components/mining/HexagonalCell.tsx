
import React from 'react';
import { Hexagon, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const HexagonalCell = () => {
    const { t } = useLanguage();
    return (
        <div className="relative flex items-center justify-center w-[350px] h-[400px]">
            {/* The deep pulse glow */}
            <Hexagon 
                className="absolute w-full h-full text-primary/50 animate-pulse-deep"
                strokeWidth={0.5}
            />

            {/* The main cell body */}
            <div className="relative w-full h-full flex items-center justify-center">
                 <Hexagon 
                    className="absolute w-[80%] h-[80%] text-primary/30 animate-[spin_30s_linear_infinite]"
                    strokeWidth={1}
                />
                 <Hexagon 
                    className="absolute w-[80%] h-[80%] text-accent/30 animate-[spin_25s_linear_infinite_reverse]"
                    strokeWidth={1}
                />
                 <Hexagon 
                    className="absolute w-[78%] h-[78%] text-primary"
                    fill="hsl(var(--background))"
                    strokeWidth={1}
                />
            </div>

            <div className="absolute z-10 flex flex-col items-center justify-center gap-8">
                <Zap className="w-24 h-24 text-primary drop-shadow-[0_0_15px_hsl(var(--primary))]" />
                <Button disabled size="lg" className="text-lg px-8 py-6 rounded-full animate-pulse">
                    <Zap className="mr-2 h-5 w-5" />
                    {t('start_mining_button')}
                </Button>
            </div>
        </div>
    );
};

export default HexagonalCell;
