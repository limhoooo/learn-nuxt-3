https://gymcoding.notion.site/Nuxt-Framework-b7a2ca1c4c08456ebf77d0d1ffefda7a

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

# script setup 차이점
setup 은 컴포넌트내 라이프사이클 에 의존되는 setup 함수내에서 실행되는 script 이다.
```
<script lang="ts"> : script 는 일반 자바스크립트 script 처럼 타 컴포넌트에서 import 해올시 바로 실행
<script setup lang="ts"> : script 는 컴포넌트가 실행될때 호출된다.
```

# NuxtLink 
NuxtLink 로 사용하여 이동할 페이지를 지정하면 그 해당 페이지는 prefetching 처리되어
미리 로드해서 가져온다.
또한 보이는 viewport 에만 미리 로드를 해온다. 

# Layout 
여러 레이아웃을 사용해야할때
definePageMeta({
  layout: 'admin',
});
를 이용해서 페이지별 layout(layout/admin) 을 이용할수있다

# 중첩라우트
page 에 
<NuxtLayout name="custom"> 이렇게 사용하면
해당 page 에는
layout/custom 의 레이아웃을 사용할수있다