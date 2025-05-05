import boto3
import botocore.exceptions as boto_exceptions
from db_access.models import JobProfile, UserProfile

JOBS_TABLE_NAME  = 'twine-jobs'
USERS_TABLE_NAME = 'twine-users'

JOBS_PARTITION_KEY  = 'job_id'
USERS_PARTITION_KEY = 'username'


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
    
    def get_user(self, username: str) -> tuple[bool,dict]:
        ''' input:  username string
            output: bool - true if successful
                    dict - user data from db'''
        try:
            response = self.table.get_item(Key = {USERS_PARTITION_KEY : username})
        except boto_exceptions.ClientError as err:
            return False, None
        
        return True, response.get("Item")