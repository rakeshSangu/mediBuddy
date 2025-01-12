# MediBuddy Web Page  - [Mobile View]

This project implements a fully responsive web page based on a provided Figma design. The page is built using **React** and leverages modern web development practices to ensure clean, maintainable, and efficient code.

## Overview  

This project is a single-page web application designed as per the provided Figma file and API specifications. Designed for Mobile View devices and focuses on delivering a seamless user experience while adhering to coding standards.  

---

## Features  

- Fully designed adapting to Mobile screen sizes (mobile).  
- Dynamically rendered components based on API response.  
- Two special components: **Featured Health Check-up Packages** and **Book Lab Tests**, implemented with conditional rendering logic.  
- Modularized React components for maintainability and scalability.  
- Hosted on a live platform   

---

## Technology Stack  

- **Frontend**: React, JavaScript  
- **CSS for styling**  
- **Hosting** 
- **Version Control**: Git  

---

## For Initial setup, Run - npm install

## Folder Structure  

```plaintext
src/  
├── components/          # Reusable React components  
│   ├── BannerSection/  
│   ├── BookPopularLabTestsSection/  
│   ├── CategoriesSection/  
│   ├── FeaturedHealthCheckups/  
│   ├── Header/  
│   ├── IconsContainer/  
│   ├── LabTestItem/  
│   ├── LifestylePackages/  
│   ├── PackageItem/  
│   ├── QuestionItem/  
│   ├── UserReviewsSection/  
├── styles/              # Global and component-specific styles  
├── utils/               # Helper functions and utilities  
├── services/            # API interaction code  
├── App.js               # Main App component  
├── index.js             # React DOM render entry point  
└── README.md            # Project documentation

## Setup and Installation  

### Prerequisites  
- **Node.js** (v16+ recommended)  
- **npm** or **yarn** package manager  

### Steps  

1. Clone the repository:  
   ```bash
   git clone https://github.com/your-username/healthbuddy-webpage.git  
   cd healthbuddy-webpage
