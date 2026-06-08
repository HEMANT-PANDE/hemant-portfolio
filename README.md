# Portfolio Frontend - React (MERN Stack)

A modern, responsive portfolio website built with React and Vite, as part of a MERN (MongoDB, Express, React, Node.js) stack.

## Features

- ✨ Modern UI with Tailwind CSS
- 🎨 Smooth animations with Framer Motion
- 📱 Fully responsive design
- 🔄 Real-time project fetching from backend
- 🎯 Optimized with Vite
- 🚀 Fast performance

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## Installation

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file (copy from `.env.example`):
```bash
VITE_API_URL=http://localhost:5000/api
```

3. Update the backend server URL if running on a different port.

## Development

Start the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:3000`

## Building for Production

Build the project:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # UI components (Badge, Button, Card, etc.)
│   ├── Navbar.jsx      # Navigation bar
│   ├── Hero.jsx        # Hero section
│   ├── About.jsx       # About section
│   ├── Skills.jsx      # Skills section
│   ├── Projects.jsx    # Projects section
│   ├── Contact.jsx     # Contact form
│   └── Footer.jsx      # Footer
├── data/               # Static data
│   └── portfolio.js    # Portfolio information
├── lib/                # Utilities and API client
│   ├── api.js         # API client with axios
│   └── utils.js       # Helper functions
├── hooks/              # Custom React hooks
│   └── useProjects.js # Hook for fetching projects
├── App.jsx            # Main App component
└── main.jsx           # Entry point
```

## API Integration

The frontend communicates with the backend via the API client in `src/lib/api.js`.

### Available API Endpoints:

- `GET /api/projects` - Fetch all projects
- `POST /api/projects` - Create new project (requires admin key)

## Technologies Used

- **React 18** - UI library
- **Vite** - Fast build tool
- **Tailwind CSS** - Utility-first CSS
- **Framer Motion** - Animation library
- **Axios** - HTTP client
- **Lucide React** - Icon library
- **React Icons** - Additional icons

## Environment Variables

Create a `.env` file in the frontend directory:

```env
VITE_API_URL=http://localhost:5000/api
```

## Notes

- The app falls back to static project data if the backend is unavailable
- Make sure the backend server is running on port 5000 (or update the API URL accordingly)
- The contact form currently logs to console; implement email service as needed

## License

MIT
