import type { CoursesReturn } from '~/types/course';

export const useCourse = async (
  courseSlug: string,
): Promise<Maybe<CoursesReturn>> => {
  // const { courses } = await useCourses();
  // // const course = courses.find((course) => course.courseSlug === courseSlug);
  // const index = courses.findIndex((course) => course.courseSlug === courseSlug);
  // const course = courses[index];
  // const prevCourse = index <= 0 ? null : courses[index - 1];
  // const nextCourse = index >= courses.length - 1 ? null : courses[index + 1];
  // return { course, prevCourse, nextCourse };

  const { data, error } = await useFetch<CoursesReturn>(
    `/api/courses/${courseSlug}`,
  );
  if (error.value) {
    throw createError({
      ...error.value,
    });
  }
  return data.value;
};
