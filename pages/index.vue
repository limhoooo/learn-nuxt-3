<template>
  <q-page padding>
    <div class="q-may-xl tex-center">
      <div class="text-h4">All Courses</div>
      <p class="q-mt-sm text-grey-8">웹 개발 입문부터 실전까지 학습해보세요!</p>
    </div>
    <div class="row q-col-gutter-lg">
      <div
        v-for="{ courseSlug, title, subtitle, thumbnail, path } in courses"
        :key="courseSlug"
        class="col-12 col-md-4 col-sm-6"
      >
        <NuxtLink :to="path">
          <CouresCard
            :title="title"
            :subtitle="subtitle"
            :thumbnail="thumbnail"
          />
        </NuxtLink>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
// Lists api
const { courses } = useCourses();
</script>

<style lang="scss" scoped></style>
