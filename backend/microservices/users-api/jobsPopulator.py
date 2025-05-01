import uuid
import boto3
import random

dynamodb = boto3.resource('dynamodb')
jobs_table = dynamodb.Table('twine-jobs')

companies = ['Amazon', 'Apple', 'Google', 'Samsung', 'Nvidia', 'IBM',
             'Philips', 'Qualcom', 'Wix', 'Mobileye', 'Waze', 'Microsoft']

fields    = ['Sowtware', 'Backend', 'Frontend', 'Full Stack', 'Cloud',
             'Graphics', 'Data', 'Research']

expertise = ['Junior', 'Student', 'Intern', 'Mid-level', 'Senior', 'Specialist']

positions = ['Engineer', 'Analyst', 'Designer', 'Programmer']


with jobs_table.batch_writer() as writer:
    for i in range(100):
        writer.put_item(
            Item = {
                'job_id' : str(uuid.uuid4()),
                'company': companies[random.randrange(0, len(companies))],
                'expertise': expertise[random.randrange(0, len(expertise))],
                'field': fields[random.randrange(0, len(fields))],
                'position': positions[random.randrange(0, len(positions))]
            }
        )