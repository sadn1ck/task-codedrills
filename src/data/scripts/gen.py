import json
import random

data = {}
with open('names.json') as file:
    data = json.load(file)

unsortedOutdata = []

for d in data:
    rank = {}
    rank['name'] = d['name']
    rank['A'] = random.randint(0, 100)
    rank['B'] = random.randint(0, 100)
    rank['C'] = random.randint(0, 100)
    rank['D'] = random.randint(0, 100)
    rank['E'] = random.randint(0, 100)
    rank['score'] = rank['A'] + rank['B'] + rank['C'] + rank['D'] + rank['E']
    unsortedOutdata.append(rank)

outRankData = []
for i, singleOutData in enumerate(sorted(unsortedOutdata, reverse=True, key=lambda d:d['score'])):
    singleOutData['rank'] = i+1
    outRankData.append(singleOutData)

print(outRankData)
with open('rankData.json', 'w') as outfile:
    json.dump(outRankData, outfile)