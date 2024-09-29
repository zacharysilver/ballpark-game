export type ExerciseType = {
  name: string;
  muscleGroup: string;
  equipment: string;
  difficulty: number;
  _id?: string;
};

export type WorkoutType = {
  _id: string;
  exercise: ExerciseType;
  reps: number;
  sets: number;
  weight: number;
};

export type Stats = {
  totalWorkouts: number;
  totalReps: number;
  totalSets: number;
  totalLifted: number;
};


export type Stadium = {
  team: string;
  name: string;
  lat: number;
  lng: number;
}


export type ScheduleLocation = {
  // date: string;
  // time: string;
  datetime: Date;
  location: string;
}

export type ScheduleEntry = {
  from: ScheduleLocation;
  to: ScheduleLocation;
}

// { airline: 'Spirit Airlines', route: 'LAX to ORD', price: '$256' }
export type FlightType = {
  airline: string;
  from: ScheduleLocation;
  to: ScheduleLocation;
  price: number;
}