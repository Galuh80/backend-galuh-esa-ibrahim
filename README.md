<!-- ABOUT THE PROJECT -->
## About The Project

The online shopping application aims to provide a convenient platform for users to browse, select, and purchase products. It focuses on delivering a seamless shopping experience through intuitive user interfaces and robust backend functionalities.

### Solution Design

1. Modular Architecture:
    * Separation of Concerns: The application is designed with a clear separation between different layers such as configurations, models, views, controllers, and routes. This modular approach improves maintainability.
    * Reusable Components: Common functionalities, like user authentication and middleware, are implemented as reusable components, making it easier to extend the application with new features.
2. RESTful API:
    * ExpressJS: Utilized to create a RESTful API for managing products, orders and authentications. This allows for easy integration with front-end applications and other external services.
    * Standard HTTP Methods: Followed REST conventions using standard HTTP methods (GET, POST, PUT, DELETE) for CRUD operations, ensuring a consistent and intuitive API design.
3. Database Schema Design:
    * Normalized Database: The database schema is normalized to minimize redundancy and ensure data integrity. Tables for products, orders, users, and roles related using foreign keys.

### Built With

The library application created with some technologies, such as:

* [![NodeJS][NodeJS]][NodeJS-url]
* [![ExpressJS][ExpressJS]][ExpressJS-url]
* [![Mysql][Mysql]][Mysql-url]
* [![Swagger][Swagger]][Swagger-url]


<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

Before running the library management application, make sure you have installed some of the tools below, because I use the Linux operating system, I will give an example using Linux.
* Node v20.11.1
  ```sh
  nvm install v20.11.1
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/Galuh80/backend-galuh-esa-ibrahim.git
   ```
2. Move to directory
   ```sh
   cd backend-galuh-esa-ibrahim
   ```
3. Install packages
   ```sh
   npm install
   ```
4. Copy .env.example to .env and configure it
   ```sh
   DB_HOST=your-host
   DB_NAME=your-database
   DB_USER=your-database-user
   DB_PASSWORD=your-database-password
   DB_PORT=your-database-port

   ACCESS_TOKEN_SECRET=your-secret
   ```
6. Configure database.json
   ```sh
   {
      "dev": {
          "driver": "your driver",
          "host": "your host",
          "user": "your database user ",
          "password": "your database password",
          "database": "your database",
          "port": "your database port"
      }
   }
   ```

<!-- USAGE EXAMPLES -->
## Usage

1. Database migrate
   ```sh
   db-migrate up
   ```
2. Run application
   ```sh
   node index.js
   ```

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[NodeJS]: https://img.shields.io/node/v/package-name.svg
[NodeJS-url]: https://nodejs.org/en
[Mysql]: https://shields.io/badge/MySQL-lightgrey?logo=mysql&style=plastic&logoColor=white&labelColor=blue
[Mysql-url]: https://www.mysql.com/
[ExpressJS]: https://img.shields.io/badge/Express%20js-000000?style=for-the-badge&logo=express&logoColor=white
[ExpressJS-url]: https://expressjs.com/
[Swagger]: https://img.shields.io/badge/-Swagger-%23Clojure?style=for-the-badge&logo=swagger&logoColor=white
[Swagger-url]: https://swagger.io/
