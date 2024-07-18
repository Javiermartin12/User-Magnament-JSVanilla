import { getTrainingNameToPopulate } from "./dinamicForm/getTrainingNameToPopulate.js"
import { getUnitServiceToPopulate } from "./dinamicForm/getUnitServiceToPopulate.js"
export const postCourseCall = () => {
    getTrainingNameToPopulate()
    getUnitServiceToPopulate()
}