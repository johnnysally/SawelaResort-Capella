#!/usr/bin/python3
from flask import Flask
from flask_cors import CORS
from api.v1.extensions import db  # ✅ import the single shared db instance

def create_app():
    app = Flask(__name__)
    CORS(app)

    # ✅ Database configuration
    app.config['SQLALCHEMY_DATABASE_URI'] = (
        "mysql+pymysql://booking_user:Adm1ntest@192.168.1.232/hotel_booking"
    )
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

    # ✅ Initialize extensions
    db.init_app(app)

    # ✅ Import routes *after* db.init_app
    from api.v1.views.rooms import rooms_bp
    app.register_blueprint(rooms_bp)

    # ✅ Create tables
    with app.app_context():
        db.create_all()

    return app


if __name__ == "__main__":
    app = create_app()
    print("🚀 Starting Flask server on port 5000...")
    app.run(debug=True, host="0.0.0.0", port=5000)