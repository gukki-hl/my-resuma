import AnimatedFeature from "./client/AnimatedFeature";
import ScrollBackground from "./client/ScrollBackground";
import { Sparkles, ArrowRight, Play } from "lucide-react";
import { Button } from "../ui/Button";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden bg-background">
      <ScrollBackground />

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full -z-10 opacity-30 pointer-events-none">
        <div className="absolute top-20 left-10 w-96 bg-primary/10 rounded-b-full blur-[120px] animate-blob" />
        <div className="absolute bottom-40 right-10 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] animate-blob animation-delay-2000" />
      </div>

      <div className="container relative z-10 mx-auto px-6 text-center max-w-4xl">
        <AnimatedFeature>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-primary mb-10 backdrop-blur-sm">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium tracking-wide italic">
              免费简历制作
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-serif font-semibold tracking-tight leading-[1.1] mb-8 text-foreground/90">
            让简历制作变得简单而智能
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed font-light">
            模仿简历利用AI技术,帮助你快速简历专业的简历,无需注册,免费使用,数据安全存储
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <Button
              size="lg"
              className="rounded-2xl h-14 px-10 text-lg font-medium shadow-xl shadow-primary/20 hover:shadow-primary/30 active:scale-95 transition-all group"
            >
              立即开始
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="rounded-2xl h-14 px-10 text-lg font-medium border-border/60 hover:bg-secondary/80 active:scale-95 transition-all"
            >
              <Play className="w-4 h-4 mr-2 fill-current" />
              浏览模板
            </Button>
          </div>
        </AnimatedFeature>

        <AnimatedFeature delay={0.3}>
          <div className="mt-20 relative px-4 sm:px-0">
            <div className="absolute -inset-4 bg-linear-to-b from-primary/5 to-transparent rounded-[3rem] blur-2xl -z-10" />
            <div className="relative rounded-3xl border border-border/50 bg-secondary/30 p-2 sm:p-4 backdrop-blur-sm shadow-2xl overflow-hidden group">
              <Image
                src="/web-shot.png"
                alt="Resume Editor Preview"
                width={1200}
                height={800}
                className="rounded-2xl shadow-sm group-hover:scale-[1.01] transition-transform duration-700"
                priority
              />
            </div>
          </div>
        </AnimatedFeature>
      </div>
    </section>
  );
};

export default HeroSection;
