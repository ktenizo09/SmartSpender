from flask import Flask,jsonify, make_response, request
from bs4 import BeautifulSoup
from pymongo import MongoClient
from bson import ObjectId
import uuid, random
import jwt
import datetime
from functools import wraps
from flask_cors import CORS
import bcrypt
import requests

client = MongoClient("mongodb://127.0.0.1:27017")
db = client.smartSpender   
forumdb = client.smartSpender_forum
users = db.details
blacklist = db.blacklist


app = Flask(__name__)
CORS(app)
app.config['SECRET_KEY'] = 'mysecret'
