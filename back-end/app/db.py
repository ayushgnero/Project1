import pymongo

# Create a function to initialize and return a MongoDB client
def get_mongo_client():
    connection_url = "mongodb+srv://root:root@cluster1.bh8eniv.mongodb.net/?retryWrites=true&w=majority"
    client = pymongo.MongoClient(connection_url)
    Database = client.get_database('Project1')
    SampleTable = Database.Sample
    return SampleTable

# Function to get insurance amount from MongoDB
def get_insurance_amount(age_range, member_csv, insurance_amount_column):
    # Use PyMongo to query MongoDB and retrieve the insurance amount based on age_range and member_csv
    collection = get_mongo_client()  # Specify your database and collection names here
    insurance_amount_column = str(insurance_amount_column)

    # Construct the query based on age_range and member_csv
    query = {"age_range": age_range, "member_csv": member_csv}

    # Perform the MongoDB query and retrieve the specified insurance amount column
    result = collection.find_one(query, {insurance_amount_column: 1})

    if result and insurance_amount_column in result:
        return result[insurance_amount_column]
    else:
        return f"{insurance_amount_column} not found"

def get_range_string(age):
    if 18 <= age <= 24:
        return "18-24"
    elif 25 <= age <= 35:
        return "25-35"
    elif 36 <= age <= 40:
        return "36-40"
    elif 41 <= age <= 45:
        return "41-45"
    elif 46 <= age <= 50:
        return "46-50"
    elif 51 <= age <= 55:
        return "51-55"
    elif 56 <= age <= 60:
        return "56-60"
    elif 61 <= age <= 65:
        return "61-65"
    elif 66 <= age <= 70:
        return "66-70"
    elif 71 <= age <= 75:
        return "71-75"
    elif 76 <= age <= 99:
        return "76-99"
    else:
        return "Invalid age range"

def generate_booking_code(adultsValue, childrenValue):
    if adultsValue > 0:
        if childrenValue > 0:
            return f'{adultsValue}a,{childrenValue}c'
        else:
            return f'{adultsValue}a'
    else:
        return "No adults specified"
