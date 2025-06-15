
import React, { useState } from 'react';
import { Hexagon, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';

const HexagonalCell = () => {
    const { t } = useLanguage();
    const [isMining, setIsMining] = useState(false);

    const handleToggleMining = () => {
        setIsMining(prev => !prev);
    };

    return (
        <div className="relative flex items-center justify-center w-[350px] h-[400px]">
            {/* The deep pulse glow */}
            <Hexagon 
                className={cn(
                    "absolute w-full h-full text-primary/50",
                    isMining ? "animate-pulse-deep-fast" : "animate-pulse-deep"
                )}
                strokeWidth={0.5}
            />

            {/* The main cell body */}
            <div className="relative w-full h-full flex items-center justify-center">
                 <Hexagon 
                    className={cn(
                        "absolute w-[80%] h-[80%] text-primary/30",
                        isMining ? "animate-[spin_10s_linear_infinite]" : "animate-[spin_30s_linear_infinite]"
                    )}
                    strokeWidth={1}
                />
                 <Hexagon 
                    className={cn(
                        "absolute w-[80%] h-[80%] text-accent/30",
                        isMining ? "animate-[spin_8s_linear_infinite_reverse]" : "animate-[spin_25s_linear_infinite_reverse]"
                    )}
                    strokeWidth={1}
                />
                 <Hexagon 
                    className="absolute w-[78%] h-[78%] text-primary"
                    fill="hsl(var(--background))"
                    strokeWidth={1}
                />
            </div>

            <div className="absolute z-10 flex flex-col items-center justify-center gap-8">
                <Zap className={cn(
                    "w-24 h-24 text-primary drop-shadow-[0_0_15px_hsl(var(--primary))] transition-colors duration-500",
                    isMining && "text-accent animate-[pulse_1.5s_ease-in-out_infinite]"
                )} />
                <Button 
                    size="lg" 
                    className={cn(
                        "text-lg px-8 py-6 rounded-full transition-all duration-300",
                        !isMining && "animate-pulse",
                        isMining && "bg-destructive hover:bg-destructive/90"
                    )}
                    onClick={handleToggleMining}
                >
                    <Zap className="mr-2 h-5 w-5" />
                    {isMining ? t('stop_mining_button') : t('start_mining_button')}
                </Button>
            </div>
        </div>
    );
};

export default HexagonalCell;
