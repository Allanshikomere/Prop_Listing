from app import app, db
from models import User, Property, Review

users_list = [
    {"name": "Juma Hassan", "email": "jumahassan@gmail.com", "phone_number": '0743269763', "message": "", "password": "password123"},
    {"name": "Mary Maina", "email": "marymaina@gmail.com", "phone_number": '0726378493', "message": "", "password": "password456"},
    {"name": "Abby Chito", "email": "abbychito@gmail.com", "phone_number": '0725673892', "message": "", "password": "password789"},
    {"name": "Lorna Wafula", "email": "lornawafula@gmail.com", "phone_number": '0716378493', "message": "", "password": "password012"},
    {"name": "James Mwendwa", "email": "jamesmwendwa@gmail.com", "phone_number": '0706378483', "message": "", "password": "password345"},
]
reviews = [
    {"property_id": 1, "user_id": 3, "rating": 4, "comment": "Beautiful home with a spacious garden."},
    {"property_id": 2, "user_id": 4, "rating": 5, "comment": "Stylish urban living in Kileleshwa."},
    {"property_id": 3, "user_id": 2, "rating": 4, "comment": "Serene retreat amidst lush greenery."},
    {"property_id": 4, "user_id": 1, "rating": 4.5, "comment": "Stunning beach house perfect for getaways."},
    {"property_id": 5, "user_id": 7, "rating": 5, "comment": "Contemporary living in a vibrant neighborhood."},
    {"property_id": 6, "user_id": 9, "rating": 4, "comment":  "Sleek and modern living space."},
    {"property_id": 7, "user_id": 5, "rating": 3, "comment": " Luxurious apartment with rooftop amenities."},
    {"property_id": 8, "user_id": 12, "rating": 4.5, "comment": "Cozy yet contemporary apartment in Westlands."},
    {"property_id": 9, "user_id": 10, "rating": 5, "comment": "Opportunity for development or investment"},
    {"property_id": 10, "user_id": 11, "rating": 4, "comment": "Expansive residential land in a sought-after neighborhood."},
    {"property_id": 11, "user_id": 8, "rating": 3.5, "comment": "Spacious commercial space in Syokimau."},
    {"property_id": 12, "user_id": 6, "rating": 5, "comment": "Prime office property in the heart of Westlands."},
]

properties = [
    {"title": "Charming bungalow", "description": "A charming bungalow with a spacious garden, offering tranquility and serenity.", "price": "35,000,000", "property_type": "house", "image_url":"https://mansiondeal.com/public/uploads/1hdsbkbfdcbvggbv-min%20(1).webp","location":"Karen"},
    {"title": "In the woods cottage", "description": "A cozy cottage nestled amidst lush greenery, perfect for nature lovers.","price": "23,000,000", "property_type": "house", "image_url":"https://w0.peakpx.com/wallpaper/716/731/HD-wallpaper-cottage-cozy-house-garden-nature.jpg","location":"Nakuru"},
    {"title": "Eden Green", "description": "An modern mansionette with great architecture and spacious backyard.","price": "75,000,000", "property_type": "house", "image_url":"https://lid.zoocdn.com/645/430/58098bee5cb06b7eed1077ddd5deb28431cb40ae.jpg","location":"Kitisuru"},
    {"title": "Elegant townhouse", "description": "An elegant townhouse with modern amenities, ideal for urban living.","price": "75,000,000", "property_type": "house", "image_url":"https://i.roamcdn.net/prop/brk/listing-thumb-376w/fbca8d8da3585bb34df626a5cf13f283/-/prod-property-core-backend-media-brk/6348710/0ed96705-bf61-459a-ad05-c048e3dedf71.jpg","location":"Lavington"},
    {"title": "La Casa", "description": "A modern townhouse with great finishes in a good neighbourhood.", "price": "35,000,000", "property_type": "house", "image_url":"https://edenheightsrealty.com/wp-content/uploads/2021/07/DSC_0054.jpg","location":"Karen"},
    {"title": "Alfajiri house", "description": "A quaint beach house with stunning ocean views, perfect for beach lovers.","price": "40,000,000", "property_type": "house", "image_url":"https://wilderness-bookings.b-cdn.net/ord-group-ltd/alfajiri-cliff-villa/photos/diani-beach-diani-diani-beach-view.jpeg","location":"Diani"},
    {"title": "Sky View", "description": "A contemporary apartment with an open-concept layout and sleek finishes, designed for modern living","price": "15,000,000", "property_type": "apartment", "image_url":"https://masterways.co.ke/storage/property/luxury-2-bedroom-apartment-to-let-in-westlands-2021-04-19-607d49273ecab.jpg","location":"Westlands"},
    {"title": "Escada", "description": "A cozy yet contemporary apartment with thoughtfully designed interiors","price": "5,000,000", "property_type": "apartment", "image_url":"https://cf.bstatic.com/xdata/images/hotel/max1024x768/526925774.jpg?k=1023a822bd30ade9af1feae6fea2544cf44e976986f351b40add338ac98de57d&o=&hp=1","location":"Westlands"},
    {"title": "skyhigh", "description": "An upscale apartment with designer finishes and luxury amenities, including a rooftop pool","price": "10,000,000", "property_type": "apartment", "image_url":"https://cf.bstatic.com/xdata/images/hotel/max1024x768/385494204.jpg?k=c9206212b8ec8f364b61824d9224e6c72c06165955641ce3234d53a5870cb5f1&o=&hp=1","location":"Riverside"},
    {"title": "Amani haven", "description": "A modern apartment in the coast,perfect weekend getaways, offering convenience and contemporary living","price": "8,000,000", "property_type": "apartment", "image_url":"https://amaniluxuryapartments.com/wp-content/uploads/2021/08/IMG_6332.jpg","location":"Diani"},
    {"title": "prime land", "description": "A 5 acre land brimming with potential, whether for farming, development, or simply as an investment opportunity.","price": "5,000,000", "property_type": "land", "image_url":"https://www.diamondafrikaholdings.com/wp-content/uploads/2019/05/5-Acre-Prime-plot-for-sale-Karen.jpg", "location":"Naivasha"},
    {"title": "premier land", "description": "An expansive parcel of residential land with in a good neighbourhood","price": "50,000,000", "property_type": "land", "image_url":"https://i.roamcdn.net/prop/brk/listing-full-1920w/26c8ce76aec17e392387956dd3d22c34/-/prod-property-core-backend-media-brk/6433378/886c4477-cde3-448e-9999-16a79cef608a.jpg","location": "Karen"},
    {"title": "The Cube", "description": "A prime office property located in the heart of a thriving business district.","price": "50,000,000 ksh", "property_type": "commercial", "image_url":"https://content.knightfrank.com/property/kecom282/images/bbd5727d-9177-4ff3-8ae4-1edc5d6725a6-0.jpg?cio=true&w=1200", "location": "Westlands"},
    {"title": "Coral warehouse", "description": "An expansive commercial space with lots of space","price": "150,000,000", "property_type": "commercial", "image_url":"https://coralpi.com/wp-content/uploads/2024/01/GW-1.jpg", "location":"Syokimau"},
]


# User model
def seed_users():
    users = [User(
        name=data['name'],
        email=data['email'],
        phone_number=data['phone_number'],
        message=data['message'],
        password=data['password']  # Include password
    ) for data in users_list]

    db.session.add_all(users)
    db.session.commit()

# Property model
def seed_properties():
        prop_data = [Property(title=data['title'], description=data['description'], price=data['price'], property_type=data['property_type'], image_url=data['image_url'],location=data['location']) for data in properties]

        db.session.add_all(prop_data)
        db.session.commit()

#Review model
def seed_reviews():
        reviews_data = [Review(property_id=data['property_id'], user_id=data['user_id'], rating=data['rating'], comment=data['comment']) for data in reviews]

        db.session.add_all(reviews_data)
        db.session.commit()

# Define a function to run all seeding functions
def seed_database():
    # Create tables if they don't exist
    User.query.delete()
    Property.query.delete()
    Review.query.delete()

    db.create_all()

    # Seed data
    seed_users()
    seed_properties()
    seed_reviews()

if __name__ == '__main__':
    # Run the seed function when the script is executed
    with app.app_context():
        seed_database()
        print("Database seeded successfully!")