import bcrypt

ENCODING_FORMAT = 'utf-8'

def hash_password(password:str) -> str:
    # input:  password string
    # output: hash string
    byte_hash = bcrypt.hashpw(password.encode(ENCODING_FORMAT) , bcrypt.gensalt())
    return byte_hash.decode(ENCODING_FORMAT)

def validate_password(password:str, hashed:str) -> str:
    #input:  password str, and hash str
    #output: are they matching
    return bcrypt.checkpw(password.encode(ENCODING_FORMAT), 
                          hashed.encode(ENCODING_FORMAT))