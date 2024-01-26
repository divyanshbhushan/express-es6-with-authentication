# 🚀 ES6+ Template with Tailwind CSS and Email-Password Login System

A streamlined Node.js project template featuring Express, EJS, Tailwind CSS, and a secure email-password login system using modern JavaScript practices.

## Features 🌟

- ⚡️ Built with Express for efficient server-side routing and handling.
- 🔍 Leverages EJS for dynamic and flexible view templating.
- ✨ Embraces ES6+ syntax for cleaner, more concise code.
- 🎨 Styled with Tailwind CSS for easy and responsive UI development.
- 🔐 Implements a secure email-password login system.
- 📦 Packaged with npm for easy dependency management.
- 🏗️ Well-structured for easy navigation and extension.

## 🚀 Live Preview

Explore the live version of this project on [Express Starter Code](https://your-app-name.herokuapp.com/) or any other hosting service you prefer.

**Note:** The live preview may take a moment to load initially.

## 🛠️ Getting Started

1. **Clone the repository:**

    ```bash
    git clone https://github.com/divyanshbhushan/express-es6-with-authentication.git
    cd es6-template
    ```

2. **Create a `.env` file:**

   Create a `.env` file in the root of your project. Add the following lines and replace the placeholders with your MongoDB URI and a secure JWT secret:

    ```env
    # .env

    MONGODB_URI=your-mongodb-uri
    JWT_SECRET=your-jwt-secret
    ```

   Ensure you keep your `.env` file secure and do not share it publicly.

3. **Install dependencies:**

    ```bash
    npm install
    ```

4. **Start the development server:**

    ```bash
    npm start
    ```

5. **Access the application in your browser:**

    [http://localhost:3000/](http://localhost:3000/)

Make sure to replace `your-mongodb-uri` and `your-jwt-secret` with your actual MongoDB URI and a secure JWT secret key. This step is crucial for connecting to your MongoDB database and securing your JSON Web Tokens (JWT) used in authentication.

## Using in Your Own Projects

1. **Copy the project structure:**

   Duplicate the files and folders within the `es6-template` directory to create a new project based on this template.

2. **Customize the code:**

   - Edit the `routes/index.js` file to define your application's routes and logic.
   - Modify the `views` directory to create and tailor your EJS templates.
   - Implement and customize the email-password login system according to your needs.
   - Install any additional dependencies needed for your project using `npm install`.

## Key Files and Directories 🔑

- `package.json`: Manages project dependencies and scripts.
- `app.js`: The main application file, where Express is configured, and routes are defined.
- `routes/index.js`: Contains route definitions for handling different URL paths.
- `views/index.ejs`: An example EJS view file.
- `public/`: Directory for static assets like images, CSS, and JavaScript files.

## 🤝 Contributing

We welcome contributions! Please feel free to open issues or pull requests to help improve this template.
