// import { workouts } from "@/constants/fake-data";
import dbConnect from "@/lib/db-connect";
import {Workout} from "@/models/Workout";

export async function GET() {
  await dbConnect();
  
  const workouts = await Workout.find({}).populate("exercise").exec();
  return new Response(JSON.stringify(workouts), {
    headers: {
      "content-type": "application/json",
    },
  });
}

export async function POST(request: Request) {
  const body = await request.json();
  const doc = new Workout(body);
  const response = await doc.save();
  
  // console.log(body)
  return new Response(JSON.stringify(response));
}