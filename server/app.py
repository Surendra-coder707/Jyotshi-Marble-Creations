from flask import Flask, request, jsonify
from flask_cors import CORS
import mysql.connector

import os

app = Flask(__name__)
CORS(app)


# ==============================
# MYSQL DATABASE CONNECTION
# ==============================

def get_db_connection():

    # Render PostgreSQL
    database_url = os.getenv("DATABASE_URL")

    if database_url:
        import psycopg2
        return psycopg2.connect(database_url)

    # Local MySQL
    return mysql.connector.connect(
        host=os.getenv("DB_HOST", "localhost"),
        user=os.getenv("DB_USER", "root"),
        password=os.getenv("DB_PASSWORD"),
        database=os.getenv("DB_NAME", "jyotshi_marble")
    )
# ==============================
# TEST ROUTE
# ==============================

@app.route("/", methods=["GET"])
def home():
    return jsonify({
        "message": "Jyotshi Marble Creations API is running!"
    })


# ==============================
# SUBMIT INQUIRY
# ==============================

@app.route("/api/inquiries", methods=["POST"])
def create_inquiry():

    try:

        data = request.get_json()

        name = data.get("name")
        phone = data.get("phone")
        email = data.get("email")
        requirement = data.get("requirement")
        location = data.get("location")
        message = data.get("message")

        # Required fields
        if not name or not phone or not message:
            return jsonify({
                "success": False,
                "message": "Name, phone and requirement are required."
            }), 400

        connection = get_db_connection()
        cursor = connection.cursor()

        query = """
            INSERT INTO inquiries
            (name, phone, email, requirement, location, message)
            VALUES (%s, %s, %s, %s, %s, %s)
        """

        values = (
            name,
            phone,
            email,
            requirement,
            location,
            message
        )

        cursor.execute(query, values)

        connection.commit()

        cursor.close()
        connection.close()

        return jsonify({
            "success": True,
            "message": "Inquiry submitted successfully!"
        }), 201

    except Exception as error:

        print("Database Error:", error)

        return jsonify({
            "success": False,
            "message": "Something went wrong. Please try again."
        }), 500


# ==============================
# RUN SERVER
# ==============================

if __name__ == "__main__":
    app.run(
        host="127.0.0.1",
        port=5000,
        debug=True
    )