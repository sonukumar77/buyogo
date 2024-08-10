# SignUp-SignIn Functionality

Welcome to the App ! This is React Js application allows users to Sigin and Signup using multistep forms.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Hosted Link](#hosted-link)
- [Screenshots](#screenshots)
- [Project Structure](#project-structure)
- [Dependencies](#dependencies)
- [Login Credentials (For Testing)](#login-credentials)

## Features

- `Signin/Login`: The app allows users to Login into the application.First it check wheather user already exist or not if exist then it redirects to Login page otherwise to Signup page.
- `Signup/Register`: This allows users to signup into the app.
- `UI Enhancements`:Using multistep form this makes user happy to fill the form by entering with chuncks of data instead of filling/showing a large input field once.The app includes 
                    custom components like Success and Failure.
- `Automatic Redirection`: User can redirect after successfull signup without any action perform like button click after a set duration (e.g., 3 seconds).
- `Manual Navigation Controls`: Users can manually navigate between components.Also can navigate forward and back direction using next and back button controls.
- `Input Field Validation`: Validation is implement while user enter mobile number,password,pincode etc.
- `Responsiveness`: App is fully responsive user friendly and mobile compatiable.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/sonukumar77/buyogo.git

   ```

2. Navigate to the project folder:

   ```bash
   cd buyogo

   ```

3. Install dependencies:

   ```bash
   npm install
   ```

## Usage

1. Start the development server::

   ```bash
   npm run start

   ```

2. Open your browser and visit http://localhost:3000.

3. Explore the Signin/Signup App!

## Hosted Link

Visit the hosted application: [Signin/Signup App](https://my-buyogo.netlify.app/)

## Screenshots

![image](https://github.com/sonukumar77/buyogo/blob/main/src/assets/screenshots/Login-cred-check.png)

---

![image](https://github.com/sonukumar77/buyogo/blob/main/src/assets/screenshots/login-cred-wrong.png)

---

![image](https://github.com/sonukumar77/buyogo/blob/main/src/assets/screenshots/login-complete.png)

---

![image](https://github.com/sonukumar77/buyogo/blob/main/src/assets/screenshots/signup-step1.png)

---

![image](https://github.com/sonukumar77/buyogo/blob/main/src/assets/screenshots/signup-step2.png)

---

![image](https://github.com/sonukumar77/buyogo/blob/main/src/assets/screenshots/signup-complete.png)

## Project Structure

- `/src`: Contains the source code for the React Js application.
- `/src/components`: Reusable React components.
- `/src/components/icons`: Reusable React Icons components.
- `/src/Pages`: Top-level pages of the application.
- `/src/utils`: Utility functions.
- `/src/constants.js`: For constants data.
- `/src/redux`: Redux Setup for the state management for entire App at a global place.
- `/src/assets`: Images,icons and other assets.

## Dependencies

- React Js
- React-Router-Dom,Redux
- Other dependencies based on your specific components and features

## Login-Credentials

- Email : sonu@gmail.com
- password : 12345
