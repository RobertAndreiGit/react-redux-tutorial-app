import { CREATE_COURSE } from "../types/courseTypes";

export function createCourse(course) {
  return { type: CREATE_COURSE, payload: course };
}
