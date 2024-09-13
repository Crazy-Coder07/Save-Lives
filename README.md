## Blood Donation App
Overview

This Blood Donation App is a full-stack web application developed using the MERN stack (MongoDB, Express, React, Node.js). The app efficiently manages blood donation activities through different roles: Admin, Hospitals, Organizations, and Users. The application supports over 800+ roles to streamline blood donation processes, requests, and user management.
Features

   # User Role:
        Register as a user and donate blood to organizations.
        Track donation history.
   # Hospital Role:
        Hospitals can request blood from registered organizations.
        Manage blood request history.
   # Organization Role:
        Manage blood donations from users.
        Process blood requests from hospitals.
        Monitor and track blood stock levels.
   # Admin Role:
        Manage 800+ users, organizations, and hospitals.
        Handle administrative tasks and access reports.
   # Dashboard:
        Interactive bar-chart dashboard displaying blood group history and statistics.
        Visual representation of blood stock to help track blood group availability.

Technologies Used

    Frontend: React (with Hooks, React Router, Axios)
    Backend: Node.js, Express.js
    Database: MongoDB (Mongoose ODM)
    Authentication: JWT (JSON Web Tokens) for secure user authentication
    Charts: Chart.js/other library for visualizing blood group statistics
    CSS Framework: Tailwind CSS/Bootstrap (optional)
    State Management: React Context API/Redux (optional)

Roles and Responsibilities
1. Admin:

    Manage users, hospitals, and organizations.
    Monitor and generate reports on donations and requests.
    Visualize data using the dashboard.

2. Hospital:

    Request specific blood types from organizations.
    Track request status and history.

3. Organization:

    Manage users who donate blood.
    Approve/deny blood requests from hospitals.
    Track blood donations and blood stock levels.

4. User:

    Donate blood to organizations.
    View donation history and statistics.


