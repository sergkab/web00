from pymongo import MongoClient
from pprint import pprint

MONGO_URL = "mongodb://mongo:27017"
client = MongoClient (MONGO_URL)
db = client.admim
dbs_list = db.command("listDatabases")
pprint(dbs_list)


