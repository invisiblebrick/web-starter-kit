"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Rocket,
  Zap,
  Shield,
  Code2,
  Palette,
  Smartphone,
  ArrowRight,
  Github,
} from "lucide-react";

const features = [
  {
    icon: <Rocket className="h-6 w-6" />,
    title: "Next.js 15",
    description: "App Router 기반의 최신 Next.js",
  },
  {
    icon: <Palette className="h-6 w-6" />,
    title: "TailwindCSS v4",
    description: "CSS 기반 설정, config 파일 없음",
  },
  {
    icon: <Code2 className="h-6 w-6" />,
    title: "TypeScript",
    description: "타입 안전한 개발 환경",
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "shadcn/ui",
    description: "재사용 가능한 UI 컴포넌트",
  },
  {
    icon: <Smartphone className="h-6 w-6" />,
    title: "반응형 디자인",
    description: "모든 디바이스에서 완벽하게",
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "ESLint",
    description: "코드 품질 유지",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-24 md:py-32">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="space-y-4">
            <Badge variant="secondary" className="text-sm">
              v1.0.0
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Next.js Starter Kit
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Next.js v15 + TailwindCSS v4 + shadcn/ui + TypeScript
              <br />
              빠른 웹 개발을 위한 스타터킷
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="gap-2"
              onClick={() => {
                document.getElementById("showcase")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              시작하기
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="gap-2"
              onClick={() => {
                window.open("https://github.com", "_blank", "noopener,noreferrer");
              }}
            >
              <Github className="h-4 w-4" />
              GitHub
            </Button>
          </div>
        </div>
      </section>

      <Separator />

      {/* Features Section */}
      <section className="container mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">기술 스택</h2>
          <p className="text-muted-foreground">
            현대적인 웹 개발을 위한 최고의 도구들
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* Component Showcase */}
      <section id="showcase" className="container mx-auto px-4 py-24 bg-muted/50">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">컴포넌트 예시</h2>
          <p className="text-muted-foreground">
            shadcn/ui 컴포넌트 사용 예시
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Button Variants</CardTitle>
              <CardDescription>다양한 버튼 스타일</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              <Button>Default</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="destructive">Destructive</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Badge Variants</CardTitle>
              <CardDescription>다양한 배지 스타일</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              <Badge>Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="outline">Outline</Badge>
              <Badge variant="destructive">Destructive</Badge>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 text-center text-muted-foreground">
        <p>© 2025 Next.js Starter Kit. Built with Next.js + TailwindCSS + shadcn/ui</p>
      </footer>
    </div>
  );
}
