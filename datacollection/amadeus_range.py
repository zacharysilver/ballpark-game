import time
import requests
import pandas as pd
from datetime import datetime, timedelta
import os
import json
from tqdm import tqdm

# Amadeus API credentials

# Amadeus API endpoints
TOKEN_URL = "https://test.api.amadeus.com/v1/security/oauth2/token"
FLIGHT_SEARCH_URL = "https://test.api.amadeus.com/v2/shopping/flight-offers"

def get_access_token():
    response = requests.post(
        TOKEN_URL,
        headers={"Content-Type": "application/x-www-form-urlencoded"},
        data={
            "grant_type": "client_credentials",
            "client_id": API_KEY,
            "client_secret": API_SECRET,
        },
    )
    return response.json()["access_token"]

def search_flights(origin, destination, departure_date):
    access_token = get_access_token()
    
    headers = {
        "Authorization": f"Bearer {access_token}",
    }
    
    params = {
        "originLocationCode": origin,
        "destinationLocationCode": destination,
        "departureDate": departure_date,
        "adults": 1
        # "max": 20,  # Limit to 10 results for simplicity
    }
    
    response = requests.get(FLIGHT_SEARCH_URL, headers=headers, params=params)
    return response.json()

timestamp = datetime.now().strftime("%Y-%m-%d_%H-%M-%S")
log_id = 0

def create_dataframe(flights_data):
    # log the json
    global log_id, timestamp
    json.dump(flights_data, open(f'logs/flights_{timestamp}_{log_id}.json', 'w'))
    log_id += 1
    if "data" not in flights_data:
        print("No flights found or an error occurred.")
        return pd.DataFrame()
    
    # save the dictionary
    # "dictionaries": {"locations": {"ORD": {"cityCode": "CHI", "countryCode": "US"}, "IAH": {"cityCode": "HOU", "countryCode": "US"}, "PHX": {"cityCode": "PHX", "countryCode": "US"}, "LAX": {"cityCode": "LAX", "countryCode": "US"}, "DFW": {"cityCode": "DFW", "countryCode": "US"}, "PDX": {"cityCode": "PDX", "countryCode": "US"}, "DTW": {"cityCode": "DTT", "countryCode": "US"}, "ATL": {"cityCode": "ATL", "countryCode": "US"}, "DEN": {"cityCode": "DEN", "countryCode": "US"}, "SEA": {"cityCode": "SEA", "countryCode": "US"}, "LAS": {"cityCode": "LAS", "countryCode": "US"}}, "aircraft": {"321": "AIRBUS A321", "32Q": "AIRBUS A321NEO", "32A": "AIRBUS A320 (SHARKLETS)", "32B": "AIRBUS A321 (SHARKLETS)", "73H": "BOEING 737-800 (WINGLETS)", "73J": "BOEING 737-900", "32N": "AIRBUS A320NEO"}, "currencies": {"EUR": "EURO"}, "carriers": {"AS": "ALASKA AIRLINES", "F9": "FRONTIER AIRLINES", "NK": "SPIRIT AIRLINES"}}
    if "dictionaries" in flights_data:
        json.dump(flights_data["dictionaries"], open(f'dictionaries/{timestamp}_{log_id}.json', 'w'))
        log_id += 1
        
    flight_list = []
    for offer in flights_data["data"]:
        itinerary = offer["itineraries"][0]
        # segment = itinerary["segments"][0]
        first_segment = itinerary["segments"][0]
        last_segment = itinerary["segments"][-1]
        
        # 'segments': [{'departure': {'iataCode': 'ORD', 'terminal': '5', 'at': '2024-09-29T09:39:00'}, 'arrival': {'iataCode': 'DEN', 'at': '2024-09-29T11:28:00'}, 'carrierCode': 'F9', 'number': '3173', 'aircraft': {'code': '321'}, 'operating': {'carrierCode': 'F9'}, 'duration': 'PT2H49M', 'id': '29', 'numberOfStops': 0, 'blacklistedInEU': False}, {'departure': {'iataCode': 'DEN', 'at': '2024-09-29T13:55:00'}, 'arrival': {'iataCode': 'LAX', 'terminal': '1', 'at': '2024-09-29T15:27:00'}, 'carrierCode': 'F9', 'number': '3155', 'aircraft': {'code': '321'}, 'operating': {'carrierCode': 'F9'}, 'duration': 'PT2H32M', 'id': '30', 'numberOfStops': 0, 'blacklistedInEU': False}]
        flight_info = {
            "Airline": first_segment["carrierCode"],
            "Departure Time": first_segment["departure"]["at"],
            "Arrival Time": last_segment["arrival"]["at"],
            "Price": float(offer["price"]["total"]),
            "Currency": offer["price"]["currency"],
            "Layovers": [segment["arrival"]["iataCode"] for segment in itinerary["segments"][:-1]]
        }
        flight_list.append(flight_info)

    return pd.DataFrame(flight_list)

def save_dataframe(df, origin, destination, departure_date):
    os.makedirs("./dataframes", exist_ok=True)
    filename = f"./dataframes/flights_{origin}_to_{destination}_{departure_date}.csv"
    df.to_csv(filename, index=False)
    print(f"Flight data saved to {filename}")

def date_range(start_date, end_date):
    for n in range(int((end_date - start_date).days) + 1):
        yield start_date + timedelta(n)

def load_dictionaries():
    builder = {
        "locations": {},
        "aircraft": {},
        "currencies": {},
        "carriers": {}
    }
    for filename in os.listdir('dictionaries'):
        if filename.endswith('.json'):
            with open(f'dictionaries/{filename}') as f:
                data = json.load(f)
                for key in builder:
                    builder[key].update(data[key])
    return builder
                



def try_out(origin, destination):
    out = load_dictionaries()
    with open('dictionaries.json', 'w') as f:
        json.dump(out, f)
    exit(0)
    # origin = input("Enter origin city code (e.g., NYC for New York): ").upper()
    # destination = input("Enter destination city code (e.g., PAR for Paris): ").upper()
    
    # start_date_str = input("Enter start date (YYYY-MM-DD): ")
    start_date_str = '2024-10-05'
    # end_date_str = input("Enter end date (YYYY-MM-DD): ")
    
    # start_date = datetime.strptime(start_date_str, "%Y-%m-%d")
    # end_date = datetime.strptime(end_date_str, "%Y-%m-%d")
    # emd date is one day after
    # end_date = start_date + timedelta(days=1)
    # only search start_date
    # end_date_str = end_date.strftime("%Y-%m-%d")
    
    all_flights = pd.DataFrame()
    
    # for single_date in date_range(start_date, end_date):
    # departure_date = start_date # single_date.strftime("%Y-%m-%d")
    departure_date = start_date_str
    # print(f"Searching flights for {departure_date}...")
    
    flights_data = search_flights(origin, destination, departure_date)
    df = create_dataframe(flights_data)
    
    if not df.empty:
        df['Departure Date'] = departure_date
        all_flights = pd.concat([all_flights, df], ignore_index=True)
    
    if not all_flights.empty:
        # print(all_flights)
        save_dataframe(all_flights, origin, destination, f"{start_date_str}") # _to_{end_date_str}")
    else:
        print("No flights found for the given date range.")

if __name__ == "__main__":
    # ORD, LAX
    # 2024-09-29 to 2024-10-06
    codes = ['SNA', 'ONT', 'PHX', 'ATL', 'BWI', 'BOS', 'ORD', 'MDW', 'CVG', 'CLE', 'DEN', 'DTW',
        'MIA', 'FLL', 'IAH', 'HOU', 'MCI', 'LAX', 'MKE', 'MSP', 'IAD', 'DCA', 'JFK', 'EWR',
        'LGA', 'SFO', 'OAK', 'SJC', 'PHL', 'PIT', 'STL', 'BLV', 'SAN', 'SEA', 'TPA',
        'SRQ', 'DFW', 'DAL']

    # exclude BFI because it has hardly any passenger flights
    
    # get all possible pairs
    pairs = []
    for i in range(len(codes)):
        for j in range(len(codes)):
            if i != j:
                pairs.append((codes[i], codes[j]))
    
    # get index of LGA, DTW
    
    # needed = ('LGA', 'DTW')
    # idx = pairs.index(needed)
    # print("index of ", needed, " is ", idx)
    # exit(0)
    
    start_at = 985
    end_at = 2000 # len(pairs)
    for i, pair in enumerate(pairs):
        if i >= end_at:
            break
        if not (start_at <= i < end_at):
            continue
        print("at index ", i)
        try_out(pair[0], pair[1])
        # don't stress the api
        time.sleep(0.7)
    
    # print(pairs)
                       
    
    # https://developers.amadeus.com/my-apps/ballpark-game?userId=galen.wei@vanderbilt.edu