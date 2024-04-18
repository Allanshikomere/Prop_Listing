# React + Vite

# Property Listing API

This Flask application provides a RESTful API for managing properties, users, and reviews.

## Features

- CRUD operations for users, properties, and reviews.
- Secure endpoints with error handling.
- CORS support for cross-origin requests.
- SQLAlchemy integration for database management.
- Flask-Migrate for database migrations.

## Setup

1. **Clone the repository:**

```bash
git clone <repository-url>
cd <repository-directory>

2. Install dependencies:

pip install -r requirements.txt

3. Database Setup

Ensure you have SQLite installed.
Run the following commands to set up the database and perform migrations:

flask db init
flask db migrate -m "Initial migration"
flask db upgrade

4. Run the application

flask run

By default the application will run on 'http://127.0.0.1:5174/'

## API Endpoints
Submit Form: POST /submit_form
Create User: POST /users
Get All Users: GET /users
Get User by ID: GET /users/<user_id>
Update User: PUT /users/<user_id>
Delete User: DELETE /users/<user_id>
Create Property: POST /properties
Get All Properties: GET /properties
Get Property by ID: GET /properties/<property_id>
Update Property: PUT /properties/<property_id>
Delete Property: DELETE /properties/<property_id>
Create Review: POST /reviews
Get All Reviews: GET /reviews
Get Review by ID: GET /reviews/<review_id>
Update Review: PUT /reviews/<review_id>
Delete Review: DELETE /reviews/<review_id>

## Usage
Make requests to the API endpoints using tools like Postman.
Ensure to include appropriate request bodies for POST and PUT requests.
All responses are returned in JSON format.

## Contributing
Contributions are welcome! Please follow below guidelines:

1. Fork the repository.
2. Create a new branch (git checkout -b feature/improvement)
3. Commit your changes (git commit -m 'Add new feature')
4. Push to the branch (git push origin feature/improvement)
5. Create a new Pull Request.

# License
This project is licensed under the MIT License. 

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

