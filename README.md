# Dragon News (Next.js)

Dragon News is a modern news portal built with Next.js App Router. It includes category-based news browsing, dynamic news detail pages, and shared UI sections like breaking headlines, navbar, and sidebars.

## Features

- Category-based news listing
- Dynamic news details route using article ID
- Dynamic page metadata generation for news detail pages
- Reusable shared components (header, navbar, breaking news)
- Responsive UI with Tailwind CSS + DaisyUI
- Server-side data fetching from the Programming Hero News API

## Tech Stack

- Next.js 16 (App Router)
- React 19
- Tailwind CSS 4
- DaisyUI 5
- react-icons
- react-fast-marquee
- date-fns

## Project Structure

```text
src/
	app/
		(auth)/
			login/
			register/
		(main)/
			page.jsx
			about-us/
			career/
			category/[id]/
			news/[id]/
		layout.js
		loading.jsx
		not-found.jsx
	components/
		homepage/news/
		shared/
	lib/
		data.js
```

## Data Source

This project uses the Programming Hero News API:

- `https://openapi.programming-hero.com/api/news/categories`
- `https://openapi.programming-hero.com/api/news/category/:id`
- `https://openapi.programming-hero.com/api/news/:news_id`

Data fetching helpers are located in `src/lib/data.js`.

## Getting Started

### Prerequisites

- Node.js 18.18+ (recommended: latest LTS)
- npm

### Installation

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the app for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint

## Dynamic Metadata

News detail pages use `generateMetadata` in `src/app/(main)/news/[id]/page.jsx` to set document title and description dynamically based on fetched article data.

## Image Configuration

Remote images are enabled through `next.config.mjs` using `images.remotePatterns`.

## Deployment

You can deploy this app on any platform that supports Next.js, such as:

- Vercel
- Netlify
- Render

For Vercel:

1. Push this repository to GitHub.
2. Import the project into Vercel.
3. Deploy with default Next.js settings.

## Author

Built as a Dragon News learning project using Next.js App Router.
