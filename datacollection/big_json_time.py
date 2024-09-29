# depends on big_csv_time.py

import pandas as pd


df = pd.read_csv('combined_flights_data.csv')

# columns synonyms
renames = {
    "Airline": "A",
    "Departure Time": "DT",
    "Arrival Time": "AT",
    "Price": "P",
    "Currency": "C",
    "Layovers": "L",
    "Departure Date": "DD",
    "Source Airport": "SA",
    "Destination Airport": "DA"
}

df = df.rename(columns=renames)

# df.to_json('combined_flights_data.json', orient='records')

print(df['DA'].unique())

# ['BOS' 'BWI' 'CLE' 'CVG' 'DCA' 'DEN' 'DFW' 'DTW' 'EWR' 'FLL' 'HOU' 'IAD'
#  'IAH' 'JFK' 'LAX' 'LGA' 'MCI' 'MDW' 'MIA' 'MKE' 'MSP' 'OAK' 'ONT' 'ORD'
#  'PHL' 'PHX' 'PIT' 'SAN' 'SEA' 'SFO' 'SJC' 'SNA' 'SRQ' 'STL' 'TPA' 'ATL'
#  'DAL']