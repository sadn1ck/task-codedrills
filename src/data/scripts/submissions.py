import json
import random
import uuid
data = {}
with open('names.json') as file:
    data = json.load(file)

submissions = []

for d in data:
    subm = {}
    subm['id'] = str(uuid.uuid4())
    subm['submitted_by'] = d['name']
    subm['time'] = str(random.randint(0, 1000)) + 'ms'
    subm['memory'] = str(random.randint(0, 5000)) + 'KB'
    subm['title'] = 'This is the way'
    subm['language'] = 'C++'
    submissions.append(subm)

print(submissions)
with open('submissionData.json', 'w') as outfile:
    json.dump(submissions, outfile)