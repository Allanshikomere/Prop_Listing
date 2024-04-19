from flask_sqlalchemy import SQLAlchemy
import bcrypt

# from sqlalchemy import ForeignKey

db = SQLAlchemy()

# property has many reviews...ratings
# user has many reviews....in regards to the properties
# ('house',
# ('apartment'),
# ('land'),
# ('commercial'),

class User(db.Model):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    email = db.Column(db.String, nullable=True)
    phone_number = db.Column(db.Integer)
    message = db.Column(db.Text, nullable=True)
    password = db.Column(db.String(60), nullable=False)  # Field for storing the hashed password

    # Relationship with reviews
    reviews = db.relationship('Review', backref='user', cascade="all, delete-orphan")

    # Method to set the user's password
    def set_password(self, password):
        self.password = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt()).decode('utf-8')

    # Method to verify a provided password against the stored hashed password
    def verify_password(self, password):
        return bcrypt.checkpw(password.encode('utf-8'), self.password.encode('utf-8'))


class Property(db.Model):
    __tablename__ = 'properties'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String, nullable=False)
    image_url = db.Column(db.String, nullable=False)
    description = db.Column(db.Text)
    location = db.Column(db.String)
    property_type = db.Column(db.Text, nullable=False)
    price = db.Column(db.Integer, nullable=False)
    
    reviews = db.relationship('Review', backref='property')

    def to_dict(self):
        return {
            'id': self.id,
            'title': self.title,
            'image_url': self.image_url,
            'description': self.description,
            'location': self.location,
            'property_type': self.property_type,
            'price': self.price,
        }


   
class Review(db.Model):
    __tablename__ = 'reviews'

    id = db.Column(db.Integer, primary_key=True)
    property_id = db.Column(db.Integer, db.ForeignKey('properties.id'), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    rating = db.Column(db.Integer, nullable=False)  
    comment = db.Column(db.Text, nullable=True) 

    prop_review = db.relationship('Property', backref='property_reviews')
    usr_review = db.relationship('User', backref='user_reviews')