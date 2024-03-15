import type { CoursewithPath } from '~/types/course';

interface CoursesReturn {
  course: Maybe<CoursewithPath>;
}

export const useCourse = (courseSlug: string): CoursesReturn => {
  const { courses } = useCourses();
  const course = courses.find((course) => course.courseSlug === courseSlug);
  return { course };
};
