# dependencies: get_airports.py
import csv
import json

import pandas as pd

df = pd.read_csv('nearest_airports.csv')

# drop columns team,lat,lng
df = df.drop(columns=['team', 'lat', 'lng', 'nearest_airport.distance'])
# drop duplicates
df = df.drop_duplicates()
df.to_csv('nearest_airports_cur.csv', index=False)