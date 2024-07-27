# HackerNewsWebApp
Hacker News Angular Client

## Overview

The Hacker News Angular Client is a web application built with Angular that displays the latest stories from the Hacker News feed. It interacts with the HackerNewsAPI backend to fetch and present data in a user-friendly format.

## Features

- **Display Latest Stories:** View the most recent stories from Hacker News.
- **Responsive Design:** Optimized for both desktop and mobile devices.
- **User-Friendly Interface:** Intuitive navigation and presentation of stories.

## Getting Started

### Prerequisites

- [Node.js (v16 or later)](https://nodejs.org/)
- [Angular CLI](https://angular.io/cli) (install via npm)

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/HackerNewsAngularClient.git
   cd HackerNewsAngularClient

2. **Install Dependencies**

    ```bash
    npm install

3. **Configure API Endpoint**

    Update the src/environments/environment.ts file with the base URL of the Hacker News API:

    export const environment = {
      production: false,
      apiUrl: 'http://localhost:5000/api'
    };
   
4. **Run the Application**
   
    ```bash
    ng serve
   
The application will be available at http://localhost:4200.
