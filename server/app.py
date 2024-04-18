from flask import Flask, request, make_response, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from models import db, User, Property, Review
# from flask_cors import CORS
from flask_cors import CORS


app = Flask(__name__)
# app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URI')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.json.compact = False

migrate = Migrate(app, db)
db.init_app(app)
CORS(app)


@app.route('/signup', methods=['POST'])
def signup():
    data = request.get_json()
    # hashed_password = bcrypt.hashpw(data['password'].encode('utf-8'), bcrypt.gensalt())

    new_user = User(
        first_name=data['firstName'],
        last_name=data['lastName'],
        email=data['email'],
        password=hashed_password.decode('utf-8')  # Store hashed password as string
    )
    db.session.add(new_user)
    db.session.commit()
    return jsonify({'message': 'User registered successfully'}), 201

@app.route("/submit_form", methods=['POST'])
def submit_form():
    # try:
        form_data = request.get_json()
        user_name = form_data.get('fullName')
        user_phone = form_data.get('phone')
        user_message = form_data.get('message')

        new_user = User(
            name=user_name,
            phone_number=user_phone,
            message=user_message
        )

        db.session.add(new_user)
        db.session.commit()

        return jsonify({'message': 'Form submitted'}), 200
# CRUD operations for User
@app.route('/users', methods=['POST'])
def create_user():
    data = request.get_json()
    user = User(name=data['name'], email=data['email'], phone_number=data['phone_number'], message=data['message'])
    db.session.add(user)
    db.session.commit()
    return jsonify({'message': 'User created successfully'}), 201

@app.route('/users', methods=['GET'])
def get_users():
    users = User.query.all()
    return jsonify([{'id': user.id, 'name': user.name, 'email': user.email, 'phone_number': user.phone_number, 'message' : user.message} for user in users])

@app.route('/users/<int:id>', methods=['GET'])
def get_user(id):
    user = User.query.get(id)
    if user:
        return jsonify({'id': user.id, 'name': user.name, 'email': user.email, 'phone_number': user.phone_number, 'message' : user.message})
    else:
        return jsonify({'message': 'User not found'}), 404

@app.route('/users/<int:id>', methods=['PUT'])
def update_user(id):
    user = User.query.get(id)
    if user:
        data = request.get_json()
        user.name = data.get('name', user.name)
        user.email = data.get('email', user.email)
        user.phone_number = data.get('phone_number', user.phone_number)
        user.message = data.get('message', user.message)
        db.session.commit()
        return jsonify({'message': 'User updated successfully'})
    else:
        return jsonify({'message': 'User not found'}), 404

@app.route('/users/<int:id>', methods=['DELETE'])
def delete_user(id):
    user = User.query.get(id)
    if user:
        db.session.delete(user)
        db.session.commit()
        return jsonify({'message': 'User deleted successfully'})
    else:
        return jsonify({'message': 'User not found'}), 404

# CRUD operations for Property
@app.route('/properties', methods=['POST'])
def create_property():
    data = request.get_json()
    property = Property(title=data['title'], image_url=data['image_url'], description=data['description'], location=data['location'], property_type=data['property_type'], price=data['price'])
    db.session.add(property)
    db.session.commit()
    return jsonify({'message': 'Property created successfully'}), 201

@app.route('/properties', methods=['GET'])
def get_properties():
    properties = Property.query.all()
    return jsonify([{'id': property.id, 'title': property.title, 'image_url': property.image_url, 'description': property.description, 'location': property.location, 'property_type': property.property_type, 'price': property.price} for property in properties])

@app.route('/properties/<int:id>', methods=['GET'])
def get_property(id):
    property = Property.query.get(id)
    if property:
        return jsonify({'id': property.id, 'title': property.title, 'image_url': property.image_url, 'description': property.description, 'location': property.location, 'property_type': property.property_type, 'price': property.price})
    else:
        return jsonify({'message': 'Property not found'}), 404

@app.route('/properties/<int:id>', methods=['PUT'])
def update_property(id):
    property = Property.query.get(id)
    if property:
        data = request.get_json()
        property.title = data.get('title', property.title)
        property.image_url = data.get('image_url', property.image_url)
        property.description = data.get('description', property.description)
        property.location = data.get('location', property.location)
        property.property_type = data.get('property_type', property.property_type)
        property.price = data.get('price', property.price)
        db.session.commit()
        return jsonify({'message': 'Property updated successfully'})
    else:
        return jsonify({'message': 'Property not found'}), 404

@app.route('/properties/<int:id>', methods=['DELETE'])
def delete_property(id):
    property = Property.query.get(id)
    if property:
        db.session.delete(property)
        db.session.commit()
        return jsonify({'message': 'Property deleted successfully'})
    else:
        return jsonify({'message': 'Property not found'}), 404

# CRUD operations for Review
@app.route('/reviews', methods=['POST'])
def create_review():
    data = request.get_json()
    review = Review(property_id=data['property_id'], user_id=data['user_id'], rating=data['rating'], comment=data['comment'])
    db.session.add(review)
    db.session.commit()
    return jsonify({'message': 'Review created successfully'}), 201

@app.route('/reviews', methods=['GET'])
def get_reviews():
    reviews = Review.query.all()
    return jsonify([{'id': review.id, 'property_id': review.property_id, 'user_id': review.user_id, 'rating': review.rating, 'comment': review.comment} for review in reviews])

@app.route('/reviews/<int:id>', methods=['GET'])
def get_review(id):
    review = Review.query.get(id)
    if review:
        return jsonify({'id': review.id, 'property_id': review.property_id, 'user_id': review.user_id, 'rating': review.rating, 'comment': review.comment})
    else:
        return jsonify({'message': 'Review not found'}), 404

@app.route('/reviews/<int:id>', methods=['PUT'])
def update_review(id):
    review = Review.query.get(id)
    if review:
        data = request.get_json()
        review.property_id = data.get('property_id', review.property_id)
        review.user_id = data.get('user_id', review.user_id)
        review.rating = data.get('rating', review.rating)
        review.comment = data.get('comment', review.comment)
        db.session.commit()
        return jsonify({'message': 'Review updated successfully'})
    else:
        return jsonify({'message': 'Review not found'}), 404

@app.route('/reviews/<int:id>', methods=['DELETE'])
def delete_review(id):
    review = Review.query.get(id)
    if review:
        db.session.delete(review)
        db.session.commit()
        return jsonify({'message': 'Review deleted successfully'})
    else:
        return jsonify({'message': 'Review not found'}), 404

@app.route('/')
def index():
    return 'Welcome to Prop_Listing'

if __name__ == "__main__":
    app.run(port=5555, debug=True)