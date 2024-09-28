import { ExerciseType } from "@/types/types";
import { model, models, Schema } from "mongoose";

const exerciseSchema = new Schema<ExerciseType>({
    name: String,
    muscleGroup: String,
    equipment: String,
    difficulty: Number,
})

export const Exercise = models.Exercise || model<ExerciseType>("Exercise", exerciseSchema)