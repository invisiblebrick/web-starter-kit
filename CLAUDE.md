# CLAUDE.md

이 파일은 이 저장소에서 작업할 때 Claude Code(claude.ai/code)에 지침을 제공합니다.

## 개발 명령어

- `npm run dev` - 개발 서버 시작 (http://localhost:3000)
- `npm run build` - 프로덕션 애플리케이션 빌드
- `npm start` - 프로덕션 서버 시작 (빌드 필요)
- `npm run lint` - ESLint 실행 (Next.js 설정)

## 기술 스택

- **Next.js 16** - App Router 사용
- **React 19**
- **TypeScript 5**
- **TailwindCSS v4** - CSS 기반 설정 (tailwind.config.ts 없음)
- **shadcn/ui** - New York 스타일의 컴포넌트 라이브러리
- **lucide-react** - 아이콘 라이브러리

## 아키텍처 참고사항

### TailwindCSS v4 설정

v3와 다르게 TailwindCSS v4는 CSS 기반 설정을 사용합니다. 설정은 `src/app/globals.css`에서 이루어집니다:
- 테마 커스터마이징은 `@theme inline` 블록에서 CSS 변수를 사용하여 설정
- 색상은 CSS 변수를 참조함 (예: `--color-primary: var(--primary)`)
- `:root`와 `.dark` 선택자가 CSS 변수 값을 정의
- `tailwind.config.ts` 파일이 없음

### 경로 별칭

프로젝트는 `@/` 접두사를 사용한 소스 임포트를 사용합니다:
- `@/components` → `src/components`
- `@/lib` → `src/lib`
- `@/hooks` → `src/hooks`

### shadcn/ui 컴포넌트

컴포넌트는 `src/components/ui/`에 저장됩니다. 새 컴포넌트를 추가하려면:

```bash
npx shadcn@latest add [컴포넌트-이름]
```

사용 가능한 컴포넌트: button, card, input, label, badge, separator, sheet, dialog, dropdown-menu

### 유틸리티 함수

`src/lib/utils.ts`의 `cn()` 유틸리티는 `clsx`와 `tailwind-merge`를 사용하여 Tailwind 클래스를 병합합니다.

### 폰트

`next/font/google`의 Geist Sans와 Geist Mono를 CSS 변수와 함께 사용합니다:
- `--font-geist-sans`
- `--font-geist-mono`
