from flask import Flask
from flask_cors import CORS
from .db import get_insurance_amount

app = Flask(__name__)

# Load configuration from config.py
app.config.from_object('config')

# Enable CORS for your Flask app
CORS(app)

from app import routes
