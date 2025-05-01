import boto3

dynamodb = boto3.resource('dynamodb')
users_db = dynamodb.Table('twine-users')

users_db.put_item(
    Item = {
        'user_id'   : '2121313',
        'user_name' : 'Keren',
        'user_psswd': '12345678',
        'fav_snack' : 'Cheetos'
    }
)