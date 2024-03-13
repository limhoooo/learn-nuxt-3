# nuxt3 부턴 nuxi 라는 nuxt3에 최적화된 명령어를 사용한다.
ex : nuxt dev -> nuxi dev

# 빌드 개발시 타입검사는 별도 설치 해야됨
npm i -D vue-tsc typescript
nuxt.config.ts 에서 설정해야함

# 린트 프리티어 설치
npm i -D eslint prettier eslint-config-prettier eslint-plugin-prettier eslint-plugin-vue eslint-plugin-nuxt @typescript-eslint/eslint-plugin @typescript-eslint/parser @nuxtjs/eslint-config-typescript

https://gymcoding.notion.site/ESLint-Prettier-b49386c0c1df4f67a73843f0bc1cbfd1

# pages 이동
pages 폴더 에 page 만든후 루트 컴포넌트에서 <NuxtPage /> 를 이용하여 라우팅

# layouts
 <NuxtLayout> 와 slot 을 이용함