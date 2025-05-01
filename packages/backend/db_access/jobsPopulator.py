import uuid
import boto3
import random

import boto3.resources
import boto3.resources.factory

COMPANIES = ['Amazon', 'Apple', 'Google', 'Samsung', 'Nvidia', 'IBM',
             'Philips', 'Qualcom', 'Wix', 'Mobileye', 'Waze', 'Microsoft']

FIELDS    = ['Sowtware', 'Backend', 'Frontend', 'Full Stack', 'Cloud',
             'Graphics', 'Data', 'Research']

EXPERTISE = ['Junior', 'Student', 'Intern', 'Mid-level', 'Senior', 'Specialist']

POSITIONS = ['Engineer', 'Analyst', 'Designer', 'Programmer']

def writeJobs(table , amount:int):
    with table.batch_writer() as writer:
        for i in range(amount):
            writer.put_item(
                Item = {
                    'job_id' : str(uuid.uuid4()),
                    'company': COMPANIES[random.randrange(0, len(COMPANIES))],
                    'expertise': EXPERTISE[random.randrange(0, len(EXPERTISE))],
                    'field': FIELDS[random.randrange(0, len(FIELDS))],
                    'position': POSITIONS[random.randrange(0, len(POSITIONS))]
                }
            )

dynamodb = boto3.resource('dynamodb')
jobs_table = dynamodb.Table('twine-jobs')

writeJobs(jobs_table, 100)