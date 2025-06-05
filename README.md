# Redesign the "Choose Your Skip Size

Modern, a React-based application that will re-design the "Choose Your Skip Size" page [wewantwaste.co.uk](https://wewantwaste.co.uk/) according to the requirements set out in the [technical report](./test-task.md).

This project delivers a visually distinct, user-friendly interface while maintaining the original functionality, with a focus on clean code, responsiveness, and enhanced UI/UX.

The link to the [demo site Vercel](https://tz-remwaste.vercel.app/) is the result of the test task completion

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [API Integration](#api-integration)
- [Responsiveness](#responsiveness)

## Overview

This project is a complete redesign of the "Choose Your Skip Size" page from [wewantwaste.co.uk](https://wewantwaste.co.uk/). The original page is accessed by navigating to the website, entering the postcode `LE10 1SH`, selecting an address, and choosing the "Garden Waste" option. The redesigned page offers a modern, intuitive user experience with responsive design for both mobile and desktop browsers, while preserving all original functionality.

The application fetches skip size options dynamically from the provided API and presents them in a clean, visually appealing interface. The project adheres to modern React practices and prioritizes maintainable, modular code.

## Features

- **Modern UI/UX**: A visually distinct design with improved user experience, featuring clean layouts, intuitive navigation, and clear visuals.
- **Responsive Design**: Optimized for both mobile and desktop browsers, ensuring seamless performance across devices.
- **Dynamic Data**: Fetches and displays skip size options from the API endpoint `https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft`.
- **Maintainable Code**: Modular React components with clear separation of concerns, following best practices for scalability.
- **Accessibility**: Incorporates accessible design principles to ensure usability for all users.

## Tech Stack

- **React**: Front-end library for building the user interface.
- **Tailwind CSS**: Utility-first CSS framework for responsive and modern styling.
- **Axios**: For making API requests to fetch skip size data.
- **Vite**: Build tool for fast development and optimized production builds.
- **ESLint & Prettier**: For code quality and consistent formatting.

## Installation

To set up the project locally, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/sxidsvit/tz-remwaste.git
   cd tz-remwaste
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Start the development server**:

   ```bash
   npm run start
   ```

4. **Open the application**:

   - The app will be available at ` http://localhost:8080/` (or the port specified by Vite).

5. **Build for production**:

   ```bash
   npm run build
   ```

6. **Preview the production build**:
   ```bash
   npm run preview
   ```

## Usage

1. Open the application in a web browser.
2. The page displays a list of available skip sizes fetched from the API.
3. Select a skip size to proceed with the booking process (as per the original functionality).
4. The interface adapts seamlessly to mobile and desktop devices, providing an intuitive experience.

## Project Structure

```plaintext
tz-remwaste/
├── public/                  # Static assets (index.html, favicon, etc.)
├── src/                     # Source code
│   ├── assets/              # Images, fonts, or other assets
│   ├── components/          # Reusable React components
│   ├── styles/              # CSS or Tailwind CSS files
│   ├── App.jsx              # Main React component
│   └── index.jsx            # Entry point
├── .gitignore               # Files/folders to ignore in version control
├── package.json             # Project metadata and dependencies
├── tailwind.config.js       # Tailwind CSS configuration
├── vite.config.js           # Vite configuration
└── README.md                # Project documentation
```

## API Integration

The application fetches skip size data from the following API endpoint:

```
https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft
```

- The data is retrieved using Axios and rendered dynamically in the UI.
- Error handling ensures a smooth user experience if the API is unavailable.

## Responsiveness

The page is designed to be fully responsive:

- **Mobile**: Uses Tailwind CSS classes to adjust layouts, font sizes, and spacing for smaller screens.
- **Desktop**: Provides a spacious, visually appealing layout optimized for larger screens.
- Media queries and Tailwind's responsive utilities ensure consistent performance across devices.

## Contact:

[<img alt="webDev | LinkedIn" src="https://img.shields.io/badge/linkedin-0077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white" />][linkedin]

[linkedin]: https://www.linkedin.com/in/sergiy-antonyuk/

---
