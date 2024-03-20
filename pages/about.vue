<template>
  <q-page padding>
    <div class="q-my-xl text-center">
      <PageTitle :title="'All Courses'" />
      <PageDescription
        :description="'Vue & Nuxt Mastery Class 웹은 Nuxt3로 만들어졌습니다.'"
      />
      <div class="column">
        <RouterLink to="/">RouterLink Home</RouterLink>
        <RouterLink to="https://www.naver.com">RouterLink Naver</RouterLink>
        <br />
        <NuxtLink no-prefetch to="/">NuxtLink Home</NuxtLink>
        <NuxtLink to="https://www.naver.com" target="_blank"
          >NuxtLink Naver</NuxtLink
        >
        <div class="q-gutter-y-sm q-mt-md">
          <div class="text-subtitle1 text-weight-bold">useState('counter')</div>
          <div>
            counter: {{ counter }}
            <q-btn
              label="counter"
              color="primary"
              dense
              no-caps
              @click="counter++"
            />
          </div>
          <div>
            sameCounter: {{ sameCounter }}
            <q-btn
              label="counter"
              color="primary"
              dense
              no-caps
              @click="sameCounter++"
            />
          </div>
          <div>
            <q-btn label="clear" @click="clearNuxtState('counter')" />
          </div>
          <div class="q-gutter-y-sm q-mt-md">
            <div class="text-subtitle1 text-weight-bold">
              useCounterStore('counter')
            </div>
            <div>
              count: {{ count }} doubleCount: {{ doubleCount }}
              <q-btn
                label="increment"
                color="primary"
                dense
                no-caps
                @click="counterStore.increment()"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
const counter = useState<number>('counter', () => 1);
const sameCounter = useState<number>('counter');

const counterStore = useCounterStore();
const { count, doubleCount } = storeToRefs(counterStore);
</script>
