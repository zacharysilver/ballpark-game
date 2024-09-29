import pandas as pd
import os
import glob

# Specify the directory containing the CSV files
directory = './dataframes/'

# List to store DataFrames
dataframes = []

# Iterate through all CSV files in the directory
for file_path in glob.glob(os.path.join(directory, '*.csv')):
    # Extract filename
    filename = os.path.basename(file_path)
    
    # Extract source and destination airports from the filename
    parts = filename.split('_')
    source_airport = parts[1]  # SFO
    destination_airport = parts[3]  # JFK
    
    # Read the CSV file into a DataFrame
    df = pd.read_csv(file_path)
    
    # Add source and destination columns to the DataFrame
    df['Source Airport'] = source_airport
    df['Destination Airport'] = destination_airport
    
    # Append the DataFrame to the list
    dataframes.append(df)

# Concatenate all DataFrames into one
combined_df = pd.concat(dataframes, ignore_index=True)

# Specify the output file path
output_file_path = 'combined_flights_data.csv'

# Export the combined DataFrame to a CSV file
# combined_df.to_csv(output_file_path, index=False)
# need json records
combined_df.to_json('combined_flights_data.json', orient='records')

print(f'Combined data exported to {output_file_path}')
