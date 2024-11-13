# Kalvium SWE Task: PDF Co-View Application

This repository provides a solution for the **Kalvium SWE Task**, an application designed to allow multiple users to view and interact with a **PDF document in real-time**. The goal of the task is to build a web-based platform where users can synchronize their actions (page navigation, zoom, and PDF file uploads) in real time. This solution integrates front-end and back-end technologies to deliver an interactive, seamless user experience.

---

### Key Features

The application offers several key features that enhance user interaction with PDF documents in real-time:

- **Real-time Page Navigation**: Users can navigate through pages of the PDF document, and their actions will be synchronized with other users viewing the same document.
- **Zoom Functionality**: Users can zoom in and out of the document to adjust the view of the content. The zoom state is synchronized across all connected users.
- **Real-time Synchronization**: WebSockets (via `Socket.io`) are used to ensure that changes made by one user, such as navigating to a specific page or adjusting the zoom level, are immediately reflected in the browsers of all other users.
- **PDF File Upload**: Users can upload their own PDF documents to view and interact with. The application supports dynamic loading of uploaded files, ensuring that all users can see the same document in real-time.

---

### Tech Stack

The project leverages a modern web development stack, ensuring performance, responsiveness, and scalability:

- **Frontend**:
  - **React.js**: A popular JavaScript library for building user interfaces, used to develop the dynamic, component-based frontend of the application.
  - **react-pdf**: A React component used to render PDF files in the application.
  - **Tailwind CSS**: A utility-first CSS framework used for styling the application, providing a responsive and modern UI without the need for custom CSS.
- **Backend**:
  - **Node.js**: A runtime environment for JavaScript that allows the application’s server-side code to run efficiently and asynchronously.
  - **Express.js**: A lightweight framework for building the server-side application, handling HTTP requests, and serving API endpoints.
  - **Socket.io**: A JavaScript library for real-time web applications. Socket.io enables bi-directional communication between the client and the server, allowing for real-time synchronization of the PDF content.
- **Other Libraries**:
  - **PDF.js**: A powerful library used for rendering PDF files in the browser, enabling PDF viewing and manipulation.

---

### How to Set Up and Run the Application

Follow these detailed steps to set up both the frontend and backend, and run the application on your local machine.

#### **Prerequisites**
Before you begin, make sure you have the following installed on your machine:

- **Node.js**: Download and install [Node.js](https://nodejs.org/), which comes with npm (Node Package Manager).
  - **Node.js version**: 14.x or higher
- **npm**: npm is bundled with Node.js, and is used to manage project dependencies.

#### **Step-by-Step Guide**

1. **Clone the Repository**

   Begin by cloning the repository to your local machine using the following command:

   ```bash
   git clone https://github.com/Anushdubey01/Kalvium-SWE-Task.git
   ```

   After cloning, navigate to the project directory:

   ```bash
   cd Kalvium-SWE-Task
   ```

2. **Set Up the Frontend**

   Navigate to the `frontend` directory and install the required dependencies using npm:

   ```bash
   cd frontend
   npm install
   ```

3. **Start the Frontend Development Server**

   Once the dependencies are installed, you can start the React development server:

   ```bash
   npm start
   ```

   The frontend should now be running at `http://localhost:3000` in your web browser.

4. **Set Up the Backend**

   After setting up the frontend, navigate to the `backend` directory:

   ```bash
   cd ../backend
   ```

   Then, install the required backend dependencies:

   ```bash
   npm install
   ```

5. **Start the Backend Server**

   Start the Node.js server to enable the backend:

   ```bash
   npm start
   ```

   The backend should now be running at `http://localhost:5000`, handling WebSocket connections and API requests.

6. **Sync Frontend and Backend**

   With both the frontend and backend running, the application is now live! The frontend will communicate with the backend to synchronize user interactions (like page navigation and zooming) in real-time.

---

### Future Enhancements

Some ideas for future enhancements to the application:

- **User Authentication**: Implement user authentication to allow users to save their session and resume from where they left off.
- **Multiple Document Support**: Allow users to load and switch between multiple PDF documents in a single session.
- **Annotation Tools**: Provide tools for users to highlight or annotate the PDF content, and sync these annotations with other users in real time.
- **Mobile Responsiveness**: Ensure the application is fully responsive and usable on mobile devices.
- **Dark Mode**: Implement dark mode for a better viewing experience in low-light environments.

---


### Contact

If you have any questions, suggestions, or issues with the project, please feel free to reach out. You can open an issue on the GitHub repository or contact the repository owner directly.

- **GitHub Repository**: [Kalvium SWE Task](https://github.com/Anushdubey01/Kalvium-SWE-Task)
- **Email**: [anushdubey881@gmail.com]
- **Issues**: [Submit an Issue](https://github.com/Anushdubey01/Kalvium-SWE-Task/issues)

