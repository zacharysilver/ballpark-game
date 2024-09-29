import Papa from 'papaparse';
import fs from 'fs';

import FlightsData from '@/constants/combined_flights_data.json';


export async function GET() {
  
  // Read the CSV file
  // const csvFile = fs.readFileSync(csvFilePath, 'utf8');

  
  // // await dbConnect();
  // // const exercises = await Exercise.find({});
  
  // return new Response(JSON.stringify(exercises), {
  //   headers: {
  //     "content-type": "application/json",
  //   },
  // });
  
  return new Response(JSON.stringify(FlightsData), {
    headers: {
      "content-type": "application/json",
    },
  });
}