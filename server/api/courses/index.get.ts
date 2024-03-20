import { getCourses } from '~/server/models/courses';

export default defineEventHandler(() => {
  const courses = getCourses();
  return courses;
});
