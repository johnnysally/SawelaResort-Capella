from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

db = SQLAlchemy()

def create_app():
    app = Flask(__name__)
    CORS(app)

    # ✅ Configure database (your correct remote MySQL DB)
    app.config['SQLALCHEMY_DATABASE_URI'] = (
        "mysql+pymysql://booking_user:Adm1ntest@192.168.1.232/hotel_booking"
    )
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

    db.init_app(app)

    # ✅ Import and register blueprints *AFTER* db.init_app
    from api.v1.views.rooms import rooms_bp
    app.register_blueprint(rooms_bp, url_prefix="/api/bookings")

    return app


if __name__ == "__main__":
    app = create_app()
    print("🚀 Starting Flask server on port 5000...")
    with app.app_context():
        db.create_all()  # ✅ Create all tables
    app.run(debug=True, host="0.0.0.0", port=5000)