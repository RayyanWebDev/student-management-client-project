# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

<h1>
 Adroit-Student-Class-Management
    <img src="./src/assets/download_image_1700889633138.png" alt="Adroit Logo" width="100" height="100" >
   
</h1>

![Logo](./src/assets/download_image_1700889633138.png)

Welcome to our Online Learning Platform! This repository houses a comprehensive online learning management system designed to cater to students, teachers, and administrators.

## Table of Contents

1. [Navbar](#navbar)
2. [Homepage](#homepage)
3. [All Classes](#all-classes)
4. [Class Details Page](#class-details-page)
5. [Teach on [Adroit]](#teach-on-Adroit)
6. [Student Dashboard](#student-dashboard)
7. [Admin Dashboard](#admin-dashboard)
8. [Teacher Dashboard](#teacher-dashboard)
9. [Login & Registration Systems](#login--registration-systems)

## Navbar

The navbar contains essential navigation links like Home, All Classes, Teach on Adroit, and Sign In. For logged-in users, it displays the profile picture. Clicking the profile picture reveals options like User Name, Dashboard, and Logout.

## Homepage

The homepage features a carousel with relevant banners, a section highlighting partners or collaborators, and a segment showcasing popular/recommended classes. Additionally, it includes a feedback section with carousels displaying feedback details.

## All Classes

Displays classes approved by the admin in a card format with title, instructor name, image, price, description, total enrollment, and an enroll button.

## Class Details Page

Clicking 'Enroll' redirects to the class details page displaying class information and a 'Pay' button. After payment, the user is redirected to the dashboard's 'My Enrolled Classes' page.

## Teach on Adroit

Allows users to apply as teachers, providing necessary details. Upon submission, admin reviews the request, either approving or rejecting it.

## Student Dashboard

Redirects students to a dashboard with routes for 'My Enrolled Classes' and 'Profile.'

## Admin Dashboard

Provides access to 'Teacher Requests,' 'Users,' 'All Classes,' and 'Profile' sections. Admins can view teacher requests, manage users, and monitor all classes.

## Teacher Dashboard

Redirects teachers to a dashboard offering routes for 'Add Class,' 'My Class,' and 'Profile.'

## Login & Registration Systems

Users can log in using email/password or Google Sign-in. The registration page includes fields for Name, Email, Password, and PhotoURL.

For a detailed guide on each feature's implementation, setup instructions, dependencies, and additional project-specific information, please refer to the project documentation.

## Contact Information

For inquiries or support, feel free to contact us at [Email](mailto:Adroit@example.com) or visit our website [Adroit].

Thank you for using our Online Learning Platform!
