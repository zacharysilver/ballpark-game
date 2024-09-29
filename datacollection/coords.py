cities = """Milwaukee, Wisconsin
Anaheim, California
St. Louis, Missouri
Phoenix, Arizona
Queens, New York
Philadelphia, Pennsylvania
Detroit, Michigan
Denver, Colorado
Los Angeles, California
Boston, Massachusetts
Arlington, Texas
Cincinnati, Ohio
Chicago, Illinois
Kansas City, Missouri
Miami, Florida
Houston, Texas
Washington, D.C.
Oakland, California
San Francisco, California
Baltimore, Maryland
San Diego, California
Pittsburgh, Pennsylvania
Cleveland, Ohio
Toronto, Ontario
Seattle, Washington
Minneapolis, Minnesota
St. Petersburg, Florida
Cumberland, Georgia
Chicago, Illinois
Bronx, New York"""

import geopy.geocoders

# Initialize geocoder
geolocator = geopy.geocoders.Nominatim(user_agent="city_coordinates")

# Split the cities string into a list
city_list = cities.strip().split("\n")

# Create a dictionary to store city coordinates
city_coordinates = {}

# Iterate through the list of cities
for city in city_list:
    # Split city and state/province
    city_name, state_province = city.split(", ")

    # Geocode the city and state/province
    location = geolocator.geocode(f"{city_name}, {state_province}")

    # If location is found, store the coordinates
    if location:
        city_coordinates[city_name] = (location.latitude, location.longitude)
    else:
        print(f"Could not find coordinates for: {city_name}, {state_province}")

# Print the city coordinates
for city, coordinates in city_coordinates.items():
    print(f"{city}: {coordinates}")