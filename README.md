# Twine

A monorepo managed with NX and PNPM.

## Project Structure

```
twine/
├── packages/
│   ├── backend/ (Python backend)
│   │   ├── microservices/
│   │   ├── main.py
│   │   └── requirements.txt
│   └── frontend/
│       └── mobile/ (React Native Expo app)
```

## Getting Started

### Prerequisites

- Node.js (v18+)
- PNPM (v10.8.1+)
- NX CLI (installed globally)
- Python 3.9+ (for backend)
- pip (for Python package management)

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd twine

# Install JavaScript dependencies
pnpm install

# Install Python dependencies
pnpm backend:setup
# OR
cd packages/backend
pip install -r requirements.txt
cd ../..
```

### Running Apps

```bash
# Start all apps
pnpm start

# Start only the mobile app
pnpm mobile

# Start mobile app on Android
pnpm mobile:android

# Start mobile app on iOS
pnpm mobile:ios

# Start only the backend
pnpm backend
```

### Development Commands

```bash
# Run tests across all projects
pnpm test

# Run linting across all projects
pnpm lint

# Build all projects
pnpm build

# Visualize project dependencies
pnpm graph
```

## Working with NX

This monorepo uses NX to manage the workspace. Some helpful NX commands:

```bash
# Run a target for a specific project
nx run <project>:<target>

# Run a target for all projects
nx run-many --target=<target> --all

# Only run for projects affected by current changes
nx affected --target=<target>
```

## Adding New Projects

To add a new project to the monorepo:

```bash
# Create a new directory in the appropriate packages subfolder
# Add a package.json and project.json file
# Update the project.json with appropriate NX targets
```

## Project Conventions

- All packages should be located under the `packages` directory
- Backend services go in `packages/backend/`
- Frontend applications go in `packages/frontend/`
- Shared libraries can go in `packages/shared/`
