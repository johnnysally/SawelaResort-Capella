#!/usr/bin/python3
from flask import Flask
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from api.v1.views.rooms import rooms_bp

app = Flask(__name__)
CORS(app)

# --- Database Configuration ---
# Using MySQL with PyMySQL driver
app.config['SQLALCHEMY_DATABASE_URI'] = (
    "mysql+pymysql://booking_user:Adm1ntest@192.168.1.232/hotel_booking"
)
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Initialize DB
db = SQLAlchemy(app)

# register routes
app.register_blueprint(rooms_bp)

if __name__ == "__main__":
    print("Starting Flask server...")

    try:
        app.run(debug=True, host="0.0.0.0", port=5000)
    except Exception as e:
        print("Flask failed to start:", e)