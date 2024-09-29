import csv
import json
from math import radians, sin, cos, sqrt, atan2

def haversine_distance(lat1, lon1, lat2, lon2):
    R = 6371  # Earth's radius in kilometers

    lat1, lon1, lat2, lon2 = map(radians, [lat1, lon1, lat2, lon2])
    
    dlat = lat2 - lat1
    dlon = lon2 - lon1
    
    a = sin(dlat/2)**2 + cos(lat1) * cos(lat2) * sin(dlon/2)**2
    c = 2 * atan2(sqrt(a), sqrt(1-a))
    
    return R * c

def load_airports(filename):
    airports = []
    # remove non-passenger airports
    blacklist = ['Spirit of St Louis Airport', 'Boeing Field King County International Airport', 
                 'Fort Worth Meacham International Airport', 'Fort Worth Alliance Airport']
    with open(filename, 'r', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        for row in reader:
            if row['type'] not in ['large_airport']: # , 'medium_airport']:
                continue
            if 'Air Force Base' in row['name'] or 'Air Reserve Base' in row['name']:
                continue
            
            # i think these restrict to passenger airports
            if row['scheduled_service'] != '1':
                continue
            
            try:
                airports.append({
                    'name': row['name'],
                    'lat': float(row['latitude_deg']),
                    'lng': float(row['longitude_deg']),
                    'iata': row['iata_code']
                })
            except Exception:
                continue
    return airports

def find_nearest_airport(lat, lng, airports):
    nearest = min(airports, key=lambda x: haversine_distance(lat, lng, x['lat'], x['lng']))
    return nearest

def find_airports_within(lat, lng, airports, distance):
    results = []
    for airport in airports:
        if haversine_distance(lat, lng, airport['lat'], airport['lng']) <= distance:
            results.append(airport)
    return results

def process_teams(teams, airports):
    results = []
    for team in teams:
        # nearest = find_nearest_airport(team['lat'], team['lng'], airports)
        nearests = find_airports_within(team['lat'], team['lng'], airports, 50)
        for nearest in nearests:
            results.append({
                'team': team['team'],
                'lat': team['lat'],
                'lng': team['lng'],
                'nearest_airport': {
                    'name': nearest['name'],
                    'iata': nearest['iata'],
                    'distance': round(haversine_distance(team['lat'], team['lng'], nearest['lat'], nearest['lng']), 2)
                }
            })
    return results

# Example usage
airports = load_airports('list-of-airports-in-united-states-of-america-hxl-tags-1.csv')

teams = json.load(open('mlb_stadium.json'))

results = process_teams(teams, airports)

# for result in results:
#     print(f"Team: {result['team']}")
#     print(f"Nearest Airport: {result['nearest_airport']['name']} ({result['nearest_airport']['iata']})")
#     print(f"Distance: {result['nearest_airport']['distance']} km")
#     print()

# convert to csv via df
import pandas as pd
# flatten
df = pd.json_normalize(results)
df.to_csv('nearest_airports.csv', index=False)

print(df['nearest_airport.iata'].unique(), len(df['nearest_airport.iata'].unique()))