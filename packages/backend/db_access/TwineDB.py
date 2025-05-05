import boto3
from models import JobProfile, UserProfile

JOBS_TABLE_NAME  = 'twine-jobs'
USERS_TABLE_NAME = 'twine-users'


class JobsDB():
    '''
    Members:
        table : dynamodb table

    '''

    def __init__(self):
        self.table = boto3.resource('dynamodb').Table(JOBS_TABLE_NAME)


class UsersDB():
    '''
    Members:
        table : dynamodb table

    '''

    def __init__(self):
        self.table = boto3.resource('dynamodb').Table(USERS_TABLE_NAME)
