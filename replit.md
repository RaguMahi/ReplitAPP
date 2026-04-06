# Digital Transit Platform

## Overview
A comprehensive digital transit platform focusing on robust deployment and authentication reliability. The application provides a mobile-responsive transit management system with enhanced error handling, deployment diagnostics, and secure user authentication mechanisms.

## Project Architecture
### Stack
- React frontend with TypeScript
- Express.js backend
- PostgreSQL database (Neon)
- RESTful API architecture
- Excel data import and validation infrastructure
- Drizzle ORM for database interactions
- Tailwind CSS for responsive design
- Passport.js for authentication
- Deployment troubleshooting infrastructure

### Key Components
- **Timetable System**: Main timetable view and mobile-optimized version
- **Authentication**: Secure user login with Passport.js
- **Data Management**: Excel import system for bus schedule data
- **API Layer**: RESTful endpoints for locations and bus stops

## Recent Changes
### 2025-01-24: Fixed Timetable Run Filtering Logic
- **Issue**: Timetable returning incorrect runs when both starting and destination stops weren't in the same run
- **Problem**: Logic was searching across multiple runs (current + future runs) instead of restricting to same run
- **Solution**: Modified filtering logic in both `Timetable.tsx` and `MobileTimetablePage.tsx` to only find destination stops within the same run as the starting stop
- **Validation**: Ensures both conditions are met:
  1. Starting stop and destination stop are present in the same run
  2. Starting stop time is earlier than destination stop time within that run
- **Files Modified**:
  - `client/src/pages/Timetable.tsx` - Main timetable component
  - `client/src/pages/MobileTimetablePage.tsx` - Mobile timetable page

## User Preferences
- Communication: Simple, everyday language (user is non-technical)
- Focus on preserving existing functionality while fixing bugs
- Ensure mobile responsiveness is maintained

## Development Guidelines
- Follow fullstack JavaScript best practices
- Use React Query for data fetching
- Maintain responsive design with Tailwind CSS
- Database operations through Drizzle ORM
- No manual SQL migrations - use `npm run db:push`