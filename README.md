# 📚 Library Management System API

Welcome to the Library Management System API! This RESTful web service allows you to manage books, members, and borrow records using CRUD operations.

## 🚀 Get Started Here

### Overview

This API supports the following operations:

- **Books:** Add, retrieve, update, delete books
- **Members:** Add, retrieve, update, delete members
- **Borrowing:** Borrow and return books

## 🔖 How to Use This API

### Step 1: Send Requests

RESTful APIs allow you to perform CRUD operations using the HTTP methods:

- **GET** to retrieve data
- **POST** to create new records
- **PUT** to update existing records
- **DELETE** to remove records

### Step 2: View Responses

After sending a request, observe the response tab for:

- **Status Code** (e.g., 200 OK, 201 Created)
- **Response Time**
- **Response Size**

### Step 3: Send New Body Data

When creating or updating data, include the required fields in the request body. Here's an example of the body data format Raw Json:

```json
{
  "name": "Add your name in the body"
}
```

## 📦 API Endpoints

### Authentication

- **POST** `/api/auth/register`  
  Register a new user.
- **POST** `/api/auth/login`  
  Login and receive a JWT token.

### Books

- **GET** `/api/books`  
  Retrieve all books.
- **POST** `/api/books`  
  Add a new book.
- **GET** `/api/books/:id`  
  Retrieve a book by ID.
- **PUT** `/api/books/:id`  
  Update a book by ID.
- **DELETE** `/api/books/:id`  
  Delete a book by ID.

### Members

- **GET** `/api/members`  
  Retrieve all members.
- **POST** `/api/members`  
  Add a new member.
- **GET** `/api/members/:id`  
  Retrieve a member by ID.
- **PUT** `/api/members/:id`  
  Update a member by ID.
- **DELETE** `/api/members/:id`  
  Delete a member by ID.

### Borrowing

- **POST** `/api/borrow`  
  Borrow a book.
- **PUT** `/api/borrow/return/:id`  
  Return a borrowed book by ID.

---

## 💪 Pro Tips

- Use folders to group related requests and organize your collection.
- Add more scripts to verify if the API works as expected and execute workflows.

## 💡 Related Resources

- [API Testing Basics](https://www.postman.com/api-testing-basics)
- [API Documentation](https://www.postman.com/api-documentation)
- [Authorization Methods](https://www.postman.com/authorization-methods)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

🤝 Contributing
We welcome contributions! Please feel free to submit a pull request or open an issue to discuss potential improvements.

### Catatan

- Pastikan untuk menyesuaikan endpoint sesuai dengan yang telah Anda buat dan tambahkan informasi lain yang relevan untuk proyek Anda.
- Anda bisa menambahkan badge atau gambar untuk mempercantik dokumentasi.
- Jika Anda memiliki instruksi khusus untuk instalasi atau penggunaan, tambahkan di bagian yang sesuai.
