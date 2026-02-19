# Next.js Starter Kit

빠른 웹 개발을 위한 Next.js 스타터킷

## 기술 스택

- **Next.js v15** - App Router 기반의 최신 Next.js
- **TypeScript** - 타입 안전한 개발 환경
- **TailwindCSS v4** - CSS 기반 설정 (tailwind.config 없음)
- **shadcn/ui** - 재사용 가능한 UI 컴포넌트
- **lucide-react** - 아이콘 라이브러리

## 시작하기

### 설치

```bash
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

브라우저에서 `http://localhost:3000` 열기

### 빌드

```bash
npm run build
```

### 프로덕션 서버 실행

```bash
npm start
```

## 프로젝트 구조

```
├── src/
│   ├── app/              # Next.js App Router
│   │   ├── globals.css   # TailwindCSS v4 설정
│   │   ├── layout.tsx    # 루트 레이아웃
│   │   └── page.tsx      # 홈페이지
│   ├── components/
│   │   └── ui/           # shadcn/ui 컴포넌트
│   └── lib/
│       └── utils.ts      # 유틸리티 함수
├── public/               # 정적 파일
├── components.json       # shadcn 설정
└── package.json
```

## shadcn/ui 컴포넌트 추가

```bash
npx shadcn@latest add [component-name]
```

예시:
```bash
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add dialog
```

## TailwindCSS v4 특징

- `tailwind.config.ts` 파일 없이 CSS 기반 설정
- `@theme` 블록으로 테마 커스터마이징
- CSS 변수를 통한 다크모드 지원

## 라이선스

MIT
