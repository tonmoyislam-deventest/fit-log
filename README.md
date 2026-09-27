# FitLog

A responsive workout library web application built with Next.js, React, and Tailwind CSS.

Users can explore different workouts, view workout details, add workouts to today's plan, save workouts for later, and manage their workout progress. The project focuses on practicing React and Next.js concepts while building a real-world style workout application.

## Project Type

Next.js Workout Library & Workout Plan Application

**Live Link :** [Live-Link](https://fit-log-dev.netlify.app/)


## Features

- Fetch workout data from an external API
- Display workouts dynamically using reusable components
- View detailed workout information
- Add workouts to Today's Plan
- Save workouts for later
- Mark workouts as completed
- Remove workouts from Today's Plan
- Remove saved workouts
- Show total number of exercises
- Calculate total workout minutes
- Calculate total calories
- Sort workouts by duration
- Sort workouts by calories
- Sort workouts by rating
- Show different empty states for Today's Plan and Saved
- Display toast notifications for user actions
- Responsive layout for different screen sizes
- Clean and modern UI using Tailwind CSS

## Technologies Used

- Next.js
- React
- JavaScript (ES6+)
- Tailwind CSS
- React Toastify
- API

## React Concepts Used

### useState

Used `useState` to manage application states such as:

- Workout plan
- Saved workouts
- Active tab
- Sorting option
- Loading state

### useEffect

Used `useEffect` to fetch workout data from the API and update the application when the data changes.

### Props

Props are used to pass data and functions between components.

For example:

- Workout data is passed to the `WorkoutCard` component
- Workout information is passed to workout detail components
- Active tab state is passed to `PlanTabs`
- Workout data is passed to plan workout components

### Context API

This project also helped me understand how shared application data can be managed using React Context API.

The project uses Context API to manage:

- Workout data
- Today's Plan
- Saved workouts

### Destructuring

Used object destructuring to make props, context values, and state easier to access inside components.

### Conditional Rendering

Used conditional logic to display different UI states based on the selected tab and available workout data.

For example:

- Show loading state while fetching data
- Show empty state when there are no workouts
- Show `Mark as Done` only for Today's Plan
- Show remove option for saved workouts

### Array Methods

Used JavaScript array methods such as:

- `.map()`
- `.filter()`
- `.some()`
- Spread operator for creating new arrays

## Responsive Design

The interface is designed to work across different screen sizes.

Tailwind CSS responsive utilities are used to adjust:

- Grid columns
- Workout card layout
- Navbar layout
- Spacing
- Typography
- Button layout
- My Plan layout

The workout cards change from a single-column layout on smaller screens to multiple columns on larger screens.

## What I Learned

While building this project, I practiced several important React and Next.js concepts.

- How to fetch and display API data
- How to manage application state using `useState`
- How to run side effects using `useEffect`
- How to share data using Context API
- How to pass data and functions using props
- How to use destructuring with component props and context
- How to create reusable React components
- How to use conditional rendering
- How to use `.map()` to render dynamic content
- How to use `.filter()` to remove items
- How to use `.some()` to check existing items
- How to build a workout plan system
- How to implement sorting functionality
- How to build responsive layouts using Tailwind CSS
- How to organize a larger Next.js project into smaller components

## Challenges & Solutions

### Managing Today's Plan and Saved Workouts

One of the challenges was keeping Today's Plan and Saved workouts separate.

I solved this by using separate states inside the Context API to manage both types of workouts independently.

### Preventing Duplicate Workouts

Another challenge was preventing the same workout from being added multiple times.

I used the `.some()` method to check whether a workout already exists before adding it.

### Managing Workout Progress

Handling the `Mark as Done` functionality was another challenge.

I solved this by removing the completed workout from Today's Plan while keeping the Saved workouts separate.

### Sorting Workouts

Making the sorting system work for both Today's Plan and Saved workouts was another challenge.

I used the selected tab and sorting option to determine which workouts should be sorted.

### Responsive Layout

Making the workout cards, navbar, hero section, and My Plan section work properly on different screen sizes was also a challenge.

I used Tailwind CSS responsive utilities and adjusted the layout at different breakpoints.

### Empty Workout States

Sometimes there are no workouts available in Today's Plan or Saved.

I added conditional rendering to show an appropriate empty state when no workouts are available.

## Getting Started

To run this project locally:

### 1. Clone the repository

```bash
git clone https://github.com/tonmoyislam-deventest/fit-log
```

### 2. Go to the project directory
```bash
cd fit-log
```

### 3. Install dependencies
```bash
npm install
```

### 4. Start the development server
```bash
npm run dev
```