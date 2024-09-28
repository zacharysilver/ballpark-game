import { WorkoutType } from "@/types/types";
import { model, models, Schema } from "mongoose";

const workoutSchema = new Schema<WorkoutType>({
    reps: Number,
    sets: Number,
    weight: Number,
    exercise: {
        type: Schema.Types.ObjectId,
        ref: "Exercise"
    }
})

export const Workout = models.Workout || model<WorkoutType>("Workout", workoutSchema)

// automatically creates a collection called "workouts" in the database