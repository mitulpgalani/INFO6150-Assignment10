# Job Portal

This project is a job portal application that connects job seekers with employers. It consists of two main parts: an API server and a React frontend.

## Project Structure

- Controllers: Manages controllers that handle incoming user requests.
- Models: Serves as the interface for interacting with the database.
- Routes: Specifies the application’s route structure.
- Services: Houses services that implement core business logic.
- Server.js: Acts as the main entry point for the Node.js server.

## API Server

The API server is built with Node.js and Express. It connects to a MongoDB database to manage user and company data.

Endpoints:
- User Routes (api/routes/userRoutes.js)
    1. POST /user/create: Create a new user
    2. PUT /user/edit: Edit an existing user
    3. DELETE /user/delete: Delete a user
    4. GET /user/getAll: Get all users
    5. POST /user/login: User login
    6. POST /user/uploadImage: Upload user image

- Company Routes (api/routes/companyRoutes.js)
    1. POST /company/createCompany: Create a new company
    2. GET /company/getAllCompanies: Get all companies


## React Frontend

The frontend is built with React and Material-UI. It provides a user interface for job seekers and employers to interact with the job portal.

The app will run on http://localhost:3000.

Pages:
- Login Page (job-portal/src/pages/loginPage.js): User login
- Home Page (job-portal/src/pages/home.js): Home page with highlights
- About Page (job-portal/src/pages/about.js): Information about the team
- Job Listings Page (job-portal/src/pages/jobListings.js): List of job postings
- Contact Page (job-portal/src/pages/contact.js): Contact form
- Company Showcase Page (job-portal/src/pages/companyShowcase.js): Showcase of companies

Testing
The project uses Jest and React Testing Library for testing.