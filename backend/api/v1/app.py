#!/usr/bin/python3
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

# Initialize SQLAlchemy globally
db = SQLAlchemy()

def create_app():
    """Application factory"""
    app = Flask(__name__)
    CORS(app)

    # --- Database configuration ---
    app.config["SQLALCHEMY_DATABASE_URI"] = "mysql+pymysql://booking_user:Adm1ntest@192.168.1.232/hotel_booking"
    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

    # Initialize extensions
    db.init_app(app)

    # Import blueprints **AFTER** db initialization to avoid circular import
    from api.v1.views.rooms import rooms_bp
    app.register_blueprint(rooms_bp)

    # ✅ Create all tables automatically
    with app.app_context():
        db.create_all()

    return app


if __name__ == "__main__":
    app = create_app()
    print("🚀 Starting Flask server on port 5000...")
    app.run(debug=True, host="0.0.0.0", port=5000)