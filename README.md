# Redesign the "Choose Your Skip Size"

This repository contains a solution for a test task from [REM Waste Management](https://www.remwaste.com). The task is to redesign a page on an existing site.

The link to the [demo site Vercel](https://tz-remwaste.vercel.app/) is the result of the test task completion

---

## Instructions For Code Challenge

### Objective

Redesign the "Choose Your Skip Size" page from the website [https://wewantwaste.co.uk/](https://wewantwaste.co.uk/) while maintaining its core functionality. The goal is to create a completely new visual design with improved UI/UX, ensuring the page is responsive for both mobile and desktop web browsers.

### Task Details

1. **Target Page**:

   - Navigate to [https://wewantwaste.co.uk/](https://wewantwaste.co.uk/).
   - Enter the postcode **LE10 1SH** and select an address.
   - Choose the **Garden Waste** option.
   - The resulting page is the "Choose Your Skip Size" page, which you will redesign.

2. **Requirements**:
   - **Functionality**: Preserve all existing functionality of the original page.
   - **Design**: Create a visually distinct design from the original page, focusing on modern UI/UX principles.
   - **Responsiveness**: Ensure the page displays correctly and is user-friendly on both mobile and desktop web browsers.
   - **Code Quality**: Write clean, maintainable, and well-structured React code.
   - **Data Source**: Use the following API endpoint to populate the skip size options:
     ```
     https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft
     ```

### Key Deliverables

- A fully functional React-based front-end page.
- A redesigned UI/UX that is visually distinct from the original.
- Responsive design optimized for both mobile and desktop browsers.
- Clean, modular, and maintainable React code.

### Guidelines

- Use modern React practices (e.g., functional components, hooks).
- Incorporate responsive design techniques (e.g., CSS media queries, Tailwind CSS, or similar).
- Ensure the page fetches and displays skip size data dynamically from the provided API.
- Focus on user experience, including intuitive navigation, clear visuals, and accessibility.

### Evaluation Criteria

- **Functionality**: Does the page retain all original features and work seamlessly?
- **Design**: Is the new design visually appealing, modern, and distinct from the original?
- **Responsiveness**: Does the page perform well on both mobile and desktop devices?
- **Code Quality**: Is the React code clean, modular, and maintainable?
- **UI/UX**: Are the user interface and experience intuitive and user-friendly?

### Notes

- You may use any modern front-end libraries or frameworks (e.g., Tailwind CSS, styled-components) to enhance the design, as long as the core implementation is React-based.
- Ensure the API data is integrated correctly to populate the skip size options dynamically.
- Test the responsiveness across different screen sizes to ensure a consistent experience.
