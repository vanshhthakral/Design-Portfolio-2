# Premium MERN Portfolio

A modern, minimal, high-end MERN stack portfolio featuring smooth animations and a premium UI/UX.

## Tech Stack
- **Frontend**: React.js, Vite, Tailwind CSS, Framer Motion, Lucide React
- **Backend**: Node.js, Express.js, MongoDB
- **Animations**: Framer Motion

## Folder Structure
- `/client` - Contains the React frontend application
- `/server` - Contains the Express backend API and MongoDB models

## Getting Started

### 1. Backend Setup
1. Open a terminal and navigate to the server folder:
   ```bash
   cd server
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Update the `.env` file in the `server` directory with your MongoDB connection string and email credentials.
4. Start the server (development mode):
   ```bash
   npm run dev
   ```
   *Note: Ensure MongoDB is running locally or provide a valid MongoDB Atlas URI in `.env`.*

### 2. Frontend Setup
1. Open a new terminal and navigate to the client folder:
   ```bash
   cd client
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open the provided localhost URL in your browser.

## Customization
- **Images**: Update the `src` attributes in `Hero.jsx` and `Projects.jsx` to use your own images.
- **Content**: Update the JSON data arrays in `Skills.jsx`, `Projects.jsx`, and `Timeline.jsx`.
- **Colors**: The theme uses a minimal black and white palette. You can modify this in `tailwind.config.js` and `index.css`.
