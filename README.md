### **Project Description: Product Management System**

This project is part of the **Trends in Technology** course that I lectured in 2025 at **Lasalle College in Montreal**. It was designed as a hands-on activity to introduce students to modern software development practices, tools, and collaboration techniques. Over the course of the semester, students actively contributed to the development of this project, which eventually became their final project. The goal was to provide a real-world experience in building a full-stack application, from planning to deployment.

The **Product Management System** is a web application that allows users to manage their products and inventory efficiently. It was built using a **VueJS** frontend and a **.NET Core** backend, with **PostgreSQL** as the production database and **SQLite** for development. The application was containerized using **Docker Compose** for seamless deployment and scalability.

---

### **Extra Documents**

- [Coding](README.code.md)
- [Information](README.info.md)
- [Colaboration](README.colab.md)
- [VueJS](README.vuejs.md)

### **Project Overview**

#### **Frontend: VueJS**
The frontend of the application is built using **VueJS**, a progressive JavaScript framework for building user interfaces. Vue was chosen for its simplicity, flexibility, and performance. Key features of the frontend include:
- **Product and Inventory Management**: Users can create, update, delete, and view products and inventory.
- **Filtering and Sorting**: Products can be filtered by category, availability, and sorted by price or date added.
- **User Authentication**: A login and registration system ensures secure access to the application.
- **Responsive Design**: The application is fully responsive, providing a seamless experience across devices.

#### **Backend: .NET Core**
The backend is built using **.NET Core**, a cross-platform framework for building modern, high-performance web applications. The backend provides a RESTful API that the frontend interacts with. Key features include:
- **JWT Authentication**: Secure user authentication and authorization using JSON Web Tokens (JWT).
- **Role-Based Access Control**: Different user roles (e.g., Admin, User) have access to specific features.
- **CRUD Operations**: Full support for creating, reading, updating, and deleting products and inventory.
- **Database Integration**: Seamless integration with **PostgreSQL** for production and **SQLite** for development.

#### **Database**
- **Production**: **PostgreSQL** is used as the primary database for its robustness, scalability, and support for advanced features like transactions and indexing.
- **Development**: **SQLite** is used during development for its simplicity and ease of setup.

#### **Deployment: Docker Compose**
The application is deployed using **Docker Compose**, which simplifies the process of managing multiple services (API, App, and DB) in a production environment. The `docker-compose.yml` file defines the services and their configurations, ensuring consistency across environments.

---

### **Key Features**
1. **User Authentication and Authorization**:
   - Secure login and registration system.
   - Role-based access control (Admin, User).

2. **Product Management**:
   - Create, update, delete, and view products.
   - Filter products by category, availability, and sort by price or date added.

3. **Inventory Management**:
   - Create, update, delete, and view inventory.
   - Associate inventory with specific products.

4. **Responsive UI**:
   - Built with VueJS for a modern and intuitive user experience.
   - Fully responsive design for use on desktops, tablets, and mobile devices.

5. **Containerized Deployment**:
   - Docker Compose is used to manage the API, frontend app, and database services.
   - Ensures consistency and scalability in production.

---

### **Technologies Used**
- **Frontend**: VueJS, Axios (for API calls), Vue Router (for navigation), Vuetify (for styling).
- **Backend**: .NET Core, Entity Framework Core (for database operations), JWT (for authentication).
- **Database**: PostgreSQL (production), SQLite (development).
- **Deployment**: Docker, Docker Compose.
- **Version Control**: GitHub (for collaboration and version control).

---

### **Collaboration and Learning Outcomes**
This project was a collaborative effort among students, providing them with hands-on experience in:
- **Agile Development**: Students worked in sprints, using tools like GitHub Projects to manage tasks and track progress.
- **Full-Stack Development**: Students gained experience in both frontend (VueJS) and backend (.NET Core) development.
- **Database Management**: Students learned to work with relational databases (PostgreSQL and SQLite) and integrate them with the backend.
- **DevOps Practices**: Students were introduced to containerization and deployment using Docker Compose.
- **Team Collaboration**: Students collaborated on GitHub, using pull requests, code reviews, and issue tracking to manage the project.

---

### **Conclusion**
The **Product Management System** project was a valuable learning experience for the students, allowing them to apply theoretical knowledge to a real-world application. By the end of the course, students had not only built a functional application but also gained practical skills in modern software development practices. This project exemplifies the importance of collaboration, continuous learning, and adaptability in the ever-evolving field of technology.