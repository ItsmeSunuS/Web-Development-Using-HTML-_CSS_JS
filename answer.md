The Frontend (FE) of a web application is the part that users directly see and interact with in their browser. It acts as the bridge between the user and the backend system.

1. User Interface (UI)

The frontend is responsible for presenting the visual layout of the application.It includes elements such as buttons, forms, menus, text, images, and animations.ensures the application is visually appealing, responsive, and accessible across devices (desktop, tablet, mobile).

Technologies commonly used: HTML (structure), CSS (styling), and JavaScript (behavior), along with frameworks like React, Angular, or Vue.

2. User Interaction

The frontend handles user actions such as clicks, typing, scrolling, and form submissions.It provides real-time feedback (e.g., form validation messages, loading indicators, error alerts).
FE manages client-side logic, like input validation and dynamic updates without reloading the page.,this improves usability and performance, creating a smooth user experience.

3. Communication with Backend

The frontend communicates with the backend via HTTP/HTTPS requests (e.g., REST APIs or GraphQL).It sends user data (login details, form inputs) to the backend for processing.

FE receives responses (data, success/failure messages) and updates the UI accordingly.It often handles authentication tokens, error handling, and data rendering based on backend responses.
 

     Role of Backend (BE)  

The   Backend (BE)   is the part of a web application that runs on the server and handles data processing, business rules, and system security. It works behind the scenes and supports the frontend.

    1. Server-Side Processing

  Handles   requests from the frontend   and processes them on the server.
  Executes   business rules and logic   (e.g., calculating prices, validating transactions).
  Manages workflows like user registration, order processing, and notifications.
  Ensures heavy processing is done on the server rather than the client.

    2. Database Handling

  Responsible for   creating, reading, updating, and deleting (CRUD)   data.
  Interacts with databases such as   MySQL, PostgreSQL, MongoDB, or Oracle  .
  Ensures   data consistency, integrity, and backup  .
  Performs queries and returns processed data to the frontend.

    3. Security and Authentication

  Manages   user authentication   (login, logout, token handling).
  Controls   authorization  , ensuring users can access only permitted resources.
  Protects against threats like   SQL injection, XSS, and CSRF attacks  .
  Handles encryption, password hashing, and secure communication.

 

  3. Business Logic  


  Business Logic   refers to the set of rules and operations that define   how a business operates   and how data is processed according to those rules. It sits between the user interface and the database.

      Examples 

1.   E-commerce Website  

     Calculating total price after discounts, taxes, and shipping.
     Checking product availability before confirming an order.

2.   Banking Application  

     Verifying sufficient balance before allowing a fund transfer.
     Applying transaction limits and service charges.

3.   Online Learning Platform  

     Allowing access to courses only after payment.
     Tracking course progress and issuing certificates upon completion.

 

     4. Client–Server Model  


The   Client–Server Model   is an architecture where tasks are divided between   service providers (servers)   and   service requesters (clients)  .

      Who is the Client  

  The   client   is the user-facing application (web browser, mobile app).
  It sends requests and displays responses.
  Examples: Chrome browser, mobile apps, desktop applications.

      Who is the Server  

  The   server   is a system that processes requests and provides services.
  It handles business logic, database access, and security.
  Examples: Web servers, application servers, cloud servers.

      How Communication Happens  

  Communication occurs over   HTTP/HTTPS  .
  The client sends a request → server processes it → server sends a response.
  Data is commonly exchanged in   JSON or XML   format.

 

     5. Three-Tier Architecture  


  Three-Tier Architecture   divides a web application into three independent layers to improve scalability, security, and maintainability.

      Layers Explained  

     1. Presentation Layer

  The   user interface   layer.
  Includes frontend technologies like HTML, CSS, JavaScript.
  Responsible for displaying data and collecting user input.

     2. Application (Business) Layer

  Contains   business logic and rules  .
  Processes requests from the presentation layer.
  Communicates with the data layer.

     3. Data Layer

  Manages   data storage and retrieval  .
  Includes databases and data access logic.
  Ensures data integrity and security.

      Why 3-Tier Architecture is Used  

  Improves   scalability   and   performance  .
  Makes applications   easier to maintain and extend  .
  Enhances   security   by isolating data access.
  Allows independent development of each layer.

 

     6. JavaScript as a Backend Language  

JavaScript is widely used as a backend language due to its efficiency and strong ecosystem.

    1. Performance

  Uses   non-blocking, event-driven architecture  .
  Efficient for handling multiple concurrent requests.
  Powered by   Google’s V8 engine  .

    2. Ecosystem

  Large ecosystem with   NPM (Node Package Manager)  .
  Thousands of reusable libraries and tools.
  Strong community support and continuous development.

    3. Popular Backend Frameworks

    Node.js   – Runtime environment for executing JavaScript on the server.
    Express.js   – Lightweight and fast web framework.
    NestJS   – Structured, scalable framework for enterprise apps.
    Fastify   – High-performance, low-overhead framework.
