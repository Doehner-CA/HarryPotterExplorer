# ⚡ Harry Potter Explorer ⚡

 

A cross-platform mobile application built with React Native that allows users to explore the magical world of Harry Potter. Search and discover information about characters, spells, houses, and books from the wizarding world.

 

## Features

 

- **Character Search**: Find detailed information about Harry Potter characters including their houses, actors, nicknames, and images

- **Spell Directory**: Explore the complete collection of spells and their descriptions

- **House Information**: Learn about the four Hogwarts houses, their founders, colors, and animals

- **Book Catalog**: Browse the Harry Potter book series with release dates and page counts

- **Platform**: Runs on Web

- **Clean UI**: Gryffindor-themed interface with intuitive navigation

- **Real-time Search**: Dynamic search functionality with loading states and error handling

 

## Technologies Used

 

- **React Native** (0.81.5) - Mobile app framework

- **React** (19.1.0) - UI library

- **Expo** (54.0.23) - Development platform for universal React applications

- **React Native Web** (0.21.0) - Web compatibility layer

 

## Potter API

 

This application uses the **PotterAPI** created by [Federico Perin](https://github.com/fedeperin/potterapi).

 

### About the API

 

PotterAPI is a comprehensive Harry Potter API developed with Express.js, providing detailed information about the wizarding world in multiple languages.

 

- **Base URL**: `https://potterapi-fedeperin.vercel.app`

- **Documentation**: [https://github.com/fedeperin/potterapi](https://github.com/fedeperin/potterapi)

- **License**: MIT

 

### API Endpoints Used

 

This app utilizes the following endpoints:

 

```

GET /en/characters?search={query}

GET /en/spells?search={query}

GET /en/houses?search={query}

GET /en/books?search={query}

```

 


 

## Installation

 

### Prerequisites

 

- Node.js (v14 or higher)

- npm or yarn

- Expo CLI (optional, but recommended)

 

### Setup

 

1. Clone the repository:

```bash

git clone https://github.com/Doehner-CA/HarryPotterExplorer.git

cd HarryPotterExplorer

```

 

2. Install dependencies:

```bash

npm install

```

 

## Running the App

 

### Development Server

 

Start the Expo development server:

```bash

npm start

```

 

### Platform-Specific

 

Run on Web:

```bash

npm run web

```

 

## How to Use

 

1. **Select a Category**: Choose from Characters, Spells, Houses, or Books

2. **Enter Search Term**: Type your search query in the input field or leave it blank

3. **Search**: Click the search button to fetch results

4. **Browse Results**: Scroll through the results displayed in cards

 

### Example Searches

 

- **Characters**: "Harry", "Hermione", "Dumbledore"

- **Spells**: "Expelliarmus", "Patronus", "Lumos"

- **Houses**: "Gryffindor", "Slytherin", "Ravenclaw", "Hufflepuff"

- **Books**: "Phoenix", "Chamber", "Stone"

 

## Project Structure

 

```

HarryPotterExplorer/

├── App.js                 # Main application component with all logic

├── index.js              # Entry point

├── package.json          # Dependencies and scripts

├── app.json              # Expo configuration

├── assets/               # Images and icons

│   ├── icon.png

│   ├── adaptive-icon.png

│   ├── splash-icon.png

│   ├── favicon.png

│   └── hogwarts.png

└── README.md             # This file

```

 

## Key Features Implementation

 

### Search Functionality

The app implements a robust search system with:

- URL encoding for special characters

- Loading states with activity indicators

- Error handling and user feedback

- Empty result handling

 

### Dynamic Rendering

Results are displayed differently based on category:

- **Characters**: Display images, houses, actors, and birthdates

- **Spells**: Show spell names and their uses

- **Houses**: Present founders, colors, and house animals

- **Books**: List titles, release dates, and page counts

 

### Performance Optimization

- Uses FlatList for efficient rendering of large result sets

- Implements proper state management with React hooks

- Optimized image loading and display

 
 

## License

 

[MIT License](https://github.com/Doehner-CA/HarryPotterExplorer/blob/main/LICENSE)

 

## Acknowledgments

 

- **Potter API**: Special thanks to [Federico Perin](https://github.com/fedeperin) for creating and maintaining the [PotterAPI](https://github.com/fedeperin/potterapi)

- **Harry Potter Universe**: Created by J.K. Rowling

- **Icons and Images**: Harry Potter themed assets

 
## Screenshot
![Screenshot](./Screenshot-harrypotterexplorer)
 



 
