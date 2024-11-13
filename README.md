# Kalvium SWE Task

This repository is a solution for the **Kalvium SWE Task** by **Rohan Wetal**. The task involves building a simple application where multiple users can view and interact with a PDF document in sync. The application allows for page navigation and zooming in or out of the PDF.

---

### Features

- **Page Navigation**: Users can navigate between pages of the PDF in real-time.
- **Zoom**: Zoom in and zoom out on the PDF document.
- **Real-time Sync**: The application uses WebSockets to sync PDF navigation across users.
- **File Upload**: Users can upload their own PDF file to view.
  
---

### Tech Stack

- **Frontend**: React.js, react-pdf, Tailwind CSS
- **Backend**: Node.js, Express, Socket.io
- **Other**: PDF.js for rendering the PDF

---

### How to Run the Application

#### Prerequisites
- [Node.js](https://nodejs.org/) (version 14.x or higher)
- npm (comes with Node.js)

#### Steps

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Anushdubey01/Kalvium-SWE-Task.git
   ```

2. **Navigate to the frontend directory**:

   ```bash
   cd Kalvium-SWE-Task/frontend
   ```

3. **Install dependencies**:

   ```bash
   npm install
   ```

4. **Run the React app**:

   ```bash
   npm start
   ```

   The app will start and be available at `http://localhost:3000`.

5. **Navigate to the backend directory**:

   ```bash
   cd ../backend
   ```

6. **Install backend dependencies**:

   ```bash
   npm install
   ```

7. **Run the Node.js server**:

   ```bash
   npm start
   ```

   The backend server will be available at `http://localhost:5000`.

8. **Enjoy the app**: The frontend and backend should now be running and synced.

---

### Screenshots

(Add screenshots of the app here if necessary.)

---

### License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

### Contact

For any questions or suggestions, please reach out via [GitHub Issues](https://github.com/Anushdubey01/Kalvium-SWE-Task/issues).
