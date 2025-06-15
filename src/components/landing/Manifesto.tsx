
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Calculator, Landmark, Users, Palette, ShieldCheck } from 'lucide-react';

const principles = [
  {
    icon: <Calculator className="w-12 h-12 text-primary" />,
    title: "المعادلة الرياضية",
    description: "نظام قائم على نماذج رياضية متقدمة تضمن الندرة، التوزيع العادل، والنمو المستدام."
  },
  {
    icon: <Landmark className="w-12 h-12 text-primary" />,
    title: "المعادلة الاقتصادية",
    description: "اقتصاد رقمي لامركزي يحفز المشاركة، يكافئ على القيمة المضافة، ويخلق ثروة جماعية."
  },
  {
    icon: <Users className="w-12 h-12 text-primary" />,
    title: "المعادلة الاجتماعية",
    description: "شبكة عالمية تعزز التعاون والثقة، وتُمكّن الأفراد من تحقيق إمكاناتهم الكاملة."
  },
  {
    icon: <Palette className="w-12 h-12 text-primary" />,
    title: "المعادلة الثقافية",
    description: "منصة للتعبير الإبداعي وتبادل المعرفة، تحتفي بالتنوع وتثري التجربة الإنسانية."
  },
  {
    icon: <ShieldCheck className="w-12 h-12 text-primary" />,
    title: "المعادلة السياسية",
    description: "نموذج حوكمة شفاف وديمقراطي، يضع السلطة في يد المجتمع ويضمن سيادة الفرد."
  }
];

const Manifesto = () => {
  return (
    <section id="manifesto" className="py-20 sm:py-32 bg-secondary/20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4">أسس الخلية الكمومية</h2>
        <p className="text-xl text-muted-foreground mb-16 max-w-3xl mx-auto">
          مشروعنا ليس مجرد عملة، بل هو رؤية متكاملة لمستقبل البشرية مبنية على خمس معادلات أساسية.
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
