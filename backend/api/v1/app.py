from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

db = SQLAlchemy()

def create_app():
    app = Flask(__name__)
    CORS(app)

    # ✅ configure database
    app.config['SQLALCHEMY_DATABASE_URI'] = "mysql+mysqldb://ventman_dev:ventman_dev_pwd@localhost/ventman_dev_db"
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

    db.init_app(app)

    # ✅ import routes
    from api.v1.views import app_views
    app.register_blueprint(app_views, url_prefix="/api/v1")

    return app

if __name__ == "__main__":
    app = create_app()
    print("Starting Flask server...")
    try:
        app.run(debug=True, host="0.0.0.0", port=5000)
    except Exception as e:
        print("Flask failed to start:", e)