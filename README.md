# Edusity - A Learning Management Platform

## Overview

**Edusity** is a front-end learning management system (LMS) platform built using **React**, **JavaScript (ES6)**, **HTML5**, and **CSS3**.  
The platform is designed to provide an intuitive and seamless experience for both students and educators, focusing on clean design and responsive performance.

## Demo
[Live Demo](https://edusity-pro.vercel.app/)


## Features

- **Single Page Application (SPA)** built with React  
- **Responsive design** for desktop, tablet, and mobile  
- **Reusable components** for modular development  
- **Modern UI/UX** with custom layouts and typography  
- **Efficient state management** using React hooks  
- **Google Fonts** integration for better typography  
- **Media queries** for mobile responsiveness  

## Tech Stack

- **Frontend:**
  - React.js (JSX, Hooks)  
  - JavaScript (ES6+)  
  - HTML5 & CSS3  
  - React Router (for navigation)  
  - Google Fonts (Montserrat, Outfit, Roboto)  

## Project Structure
```bash
/Edusity
├── App.jsx          # Main app component
├── main.jsx         # Entry point for React DOM rendering
├── index.css        # Global CSS styles
├── /src
│   ├── /assets      # Project assets (images, etc.)
│   └── /components  # Reusable React components
├── package.json     # Project dependencies and scripts
└── README.md        # Project documentation
````

## File Details

### App.jsx

Contains the main component that defines the app structure. Uses React hooks (`useState`, `useEffect`) for state and lifecycle management.

### main.jsx

Entry point of the app. Renders the `App` component into the DOM using `ReactDOM.createRoot()`.

### index.css

Defines global styles for the application. Uses **mobile-first design** with media queries for responsiveness.

**Highlights:**

* Reset styles applied to all elements
* Layout styles with flexible containers
* Custom button themes (`.btn`, `.dark-btn`)
* Responsive design for smaller screens

## Getting Started

### Prerequisites

* [Node.js](https://nodejs.org/) (v14 or above)
* Any modern browser (Chrome, Firefox, etc.)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/anjali5Xcode/Edusity.git
   cd Edusity
   ```
2. Install dependencies:

   ```bash
   npm install
   ```
3. Start the development server:

   ```bash
   npm run dev
   ```
4. Open the app in your browser at the URL shown in terminal (default: `http://localhost:5173`).

## Contributing

Contributions are welcome!
Feel free to fork this repo, submit a pull request, or open issues for improvements and bug fixes.

Steps:

1. Fork the repo
2. Create your Feature Branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a Pull Request

## Author

**Anjali**

For any inquiries or feedback, feel free to connect here:
[GitHub Profile](https://github.com/anjali5Xcode)
