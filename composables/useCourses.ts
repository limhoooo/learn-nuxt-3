// import coursesData from './coursesData';
import type { CoursewithPath } from '~/types/course';

interface CoursesReturn {
  courses: Maybe<CoursewithPath[]>;
}

export const useCourses = async (): Promise<CoursesReturn> => {
  // const courses = coursesData.map((item) => ({
  //   ...item,
  //   rating: item.rating.toFixed(1),
  //   reviewsCount: item.reviewsCount.toLocaleString(),
  //   studentCount: item.studentCount.toLocaleString(),
  //   path: `/course/${item.courseSlug}`,
  // }));

  const { data, error } = await useFetch<CoursewithPath[]>('/api/courses');
  if (error.value) {
    throw createError({
      ...error.value,
    });
  }
  return {
    courses: data.value,
  };
};
