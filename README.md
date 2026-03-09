# 📝 CRUD Operations in Postman using Node.js

This project demonstrates **CRUD (Create, Read, Update, Delete)** operations using **Node.js, Express, and MongoDB**, tested with **Postman**.  
It serves as a beginner-friendly example to understand how REST APIs work and how to interact with them via Postman.

---

## 🚀 Features
- Create new data (POST)
- Read all or specific data (GET)
- Update existing data (PUT/PATCH)
- Delete data (DELETE)
- Tested with Postman

---

## 🛠️ Tech Stack
- **Node.js** - JavaScript runtime  
- **Express.js** - Web framework for Node.js  
- **MongoDB / Mongoose** - Database & ODM  
- **Postman** - API testing tool  

---

## 📂 Project Structure
crud-node-postman/
│-- config/ # Database connection
│-- models/ # Mongoose models
│-- routes/ # API routes
│-- controllers/ # CRUD logic
│-- server.js # Entry point
│-- package.json # Dependencies

yaml
Copy code

---

## ⚙️ Installation & Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/nikhilkeshavmali/crud-node-postman.git
   cd crud-node-postman
Install dependencies:

bash
Copy code
npm install
Create .env file in the root folder:

env
Copy code
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/cruddb
Start the server:

bash
Copy code
npm start
Server will run on http://localhost:5000

📬 API Endpoints
Method	Endpoint	Description
POST	/api/items	Create new item
GET	/api/items	Get all items
GET	/api/items/:id	Get item by ID
PUT	/api/items/:id	Update item by ID
DELETE	/api/items/:id	Delete item by ID

🔎 Testing with Postman
Open Postman

Use the endpoints above

Send requests with JSON body for POST/PUT like:

json
Copy code
{
  "name": "Sample Item",
  "price": 200
}

✅ Create (POST)

📖 Read (GET)

✏️ Update (PUT)

❌ Delete (DELETE)

🤝 Contributing
Pull requests are welcome. For major changes, open an issue first to discuss what you would like to change.
