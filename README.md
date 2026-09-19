# Trade-Flow

Trade-Flow is a comprehensive trading application composed of three main components: a backend server, a client-facing frontend, and a user dashboard for analytics and management.

## Project Structure

This repository contains the following main directories:

- **`backend/`**: A Node.js and Express.js REST API providing authentication, data management, and business logic.
- **`frontend/`**: A React application serving as the primary client interface.
- **`dashboard/`**: A React application utilizing Material-UI and Chart.js for interactive data visualization and analytics.

## Technologies Used

### Backend
- **Node.js & Express.js**: Server framework.
- **MongoDB & Mongoose**: Database and object data modeling.
- **Passport.js & JWT**: User authentication and authorization.
- **Bcrypt.js**: Password hashing.

### Frontend
- **React**: UI library.
- **React Router**: Navigation.
- **Axios**: HTTP client.

### Dashboard
- **React**: UI library.
- **Material-UI (@mui/material)**: UI components.
- **Chart.js & react-chartjs-2**: Data visualization.

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB instance (local or Atlas)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/nik-prajapati-30/Trade-Flow.git
   cd Trade-Flow
   ```

2. **Install backend dependencies:**
   ```bash
   cd backend
   npm install
   ```

3. **Install frontend dependencies:**
   ```bash
   cd ../frontend
   npm install
   ```

4. **Install dashboard dependencies:**
   ```bash
   cd ../dashboard
   npm install
   ```

## Running the Application

You will need to run the three components simultaneously in separate terminal windows.

**1. Start the Backend Server**
```bash
cd backend
npm start
```
*(Runs on nodemon, typically on port 5001 or 3002 depending on configuration)*

**2. Start the Frontend Client**
```bash
cd frontend
npm run dev
```
*(Runs on Vite, configured for port 3000)*

**3. Start the Dashboard**
```bash
cd dashboard
npm run dev
```
*(Runs on Vite, configured for port 3001)*

## Environment Variables

Ensure you create a `.env` file in the `backend` directory containing necessary configurations such as your MongoDB connection string and JWT secret. Example:
```env
MONGO_URL=mongodb+srv://<username>:<password>@cluster.mongodb.net/tradeflow
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[ISC](https://choosealicense.com/licenses/isc/)
