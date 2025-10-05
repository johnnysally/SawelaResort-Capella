#!/usr/bin/python3
from flask import Flask
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
CORS(app)

# ✅ Connect to your MySQL database
app.config['SQLALCHEMY_DATABASE_URI'] = (
    "mysql+pymysql://booking_user:Adm1ntest@192.168.1.232/hotel_booking"
)
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Initialize DB
db = SQLAlchemy(app)

# ✅ Import and register routes
from api.v1.views.rooms import rooms_bp
app.register_blueprint(rooms_bp)

if __name__ == "__main__":
    from models.Room_booking import Booking, RoomBooking  # import models
    with app.app_context():
        db.create_all()  # ✅ creates tables if they don’t exist

    print("🚀 Flask backend running on http://0.0.0.0:5000")
    app.run(debug=True, host="0.0.0.0", port=5000)