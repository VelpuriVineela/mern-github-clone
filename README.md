# MERN GitHub Clone

## Project Description

![Screenshot 2024-06-19 153930](https://github.com/VelpuriVineela/mern-github-clone/assets/134683293/53b0787c-29ff-4c5f-a095-1801d626e517)

MERN GitHub Clone is a web application built using the MERN stack (MongoDB, Express, React, Node.js). The application allows users to authenticate via GitHub, explore repositories, and manage their liked repositories. The backend handles API requests and connects to MongoDB, while the frontend offers a user-friendly interface built with React.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [Hosted Link](#hosted-link)
- [Contact](#contact)

## Installation

### Backend
1. Clone the repository:
    ```bash
    git clone https://github.com/VelpuriVineela/mern-github-clone.git
    ```
2. Navigate to the backend directory:
    ```bash
    cd mern-github-clone/backend
    ```
3. Install the required dependencies:
    ```bash
    npm install
    ```
4. Set up the environment variables:
    - Create a `.env` file in the `backend` directory.
    - Add the following variables:
        ```
        MONGO_URI=your_mongodb_connection_string
        JWT_SECRET=your_jwt_secret
        GITHUB_CLIENT_ID=your_github_client_id
        GITHUB_CLIENT_SECRET=your_github_client_secret
        ```

5. Start the backend server:
    ```bash
    npm start
    ```

### Frontend
1. Navigate to the frontend directory:
    ```bash
    cd ../frontend
    ```
2. Install the required dependencies:
    ```bash
    npm install
    ```
3. Start the frontend development server:
    ```bash
    npm run dev
    ```

## Usage
1. Access the application by navigating to `http://localhost:3000` in your web browser.
2. Register or log in using your GitHub account.
3. Explore profiles, like repositories, and manage your GitHub data through the user-friendly interface.

## Features
- User Authentication (GitHub OAuth)
- Explore GitHub Profiles
- Like and Manage Repositories
- Seamless Integration between Frontend and Backend

## Folder Structure

### Backend
```bash
backend/
│
├── controllers/
│ ├── explore.controller.js
│ └── user.controller.js
│
├── db/
│ └── connectMongoDB.js
│
├── middleware/
│ └── ensureAuthenticated.js
│
├── models/
│ └── user.model.js
│
├── passport/
│ └── github.auth.js
│
├── routes/
│ ├── auth.route.js
│ ├── explore.route.js
│ └── user.route.js
│
└── server.js
```

### Frontend
```bash
frontend/
│
├── dist/
├── node_modules/
├── public/
├── src/
│ ├── components/
│ │ ├── LikeProfile.jsx
│ │ ├── Logout.jsx
│ │ ├── ProfileInfo.jsx
│ │ ├── Repo.jsx
│ │ ├── Repos.jsx
│ │ ├── Search.jsx
│ │ ├── Sidebar.jsx
│ │ ├── SortRepos.jsx
│ │ └── Spinner.jsx
│ │
│ ├── context/
│ │ └── AuthContext.jsx
│ │
│ ├── lib/
│ │ └── function.js
│ │
│ ├── pages/
│ │ ├── ExplorePage.jsx
│ │ ├── HomePage.jsx
│ │ ├── LikesPage.jsx
│ │ ├── LoginPage.jsx
│ │ └── SignUpPage.jsx
│ │
│ ├── utils/
│ │ └── App.jsx
│ │
│ ├── App.jsx
│ ├── index.css
│ └── main.jsx
│
├── .eslintrc.cjs
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```


## Contributing
Contributions are welcome! Please fork this repository and submit a pull request for any changes.

## Hosted Link
https://mern-github-clone-aw6f.onrender.com

## Contact
For any inquiries or support, please contact [Velpuri Vineela](https://github.com/VelpuriVineela).
