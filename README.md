# Pokémon List App

A modern Pokémon listing application built with Next.js 14, TypeScript, and Tailwind CSS. Browse through Generation 1 Pokémon with search functionality and detailed information pages.

## Features

- **Responsive Design**: Works perfectly on desktop and mobile devices
- **Search Functionality**: Find Pokémon by name with highlighted results
- **Detailed Information**: View comprehensive stats, abilities, and images
- **Modern Stack**: Built with Next.js 14 App Router, TypeScript, and Tailwind CSS
- **Beautiful UI**: Clean and modern interface with smooth animations
- **Dynamic Routes**: Individual pages for each Pokémon
- **Error Handling**: Custom 404 pages for non-existent Pokémon

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **API**: PokéAPI (https://pokeapi.co/)
- **Package Manager**: pnpm
- **Font**: Geist Mono

## Getting Started

First, install the dependencies:

```bash
pnpm install
```

Then, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
pokemon-list/
├── app/                          # Next.js App Router
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout with header
│   ├── page.tsx                 # Homepage with Pokémon grid
│   └── pokemon-info/            # Pokémon detail routes
│       └── [slug]/
│           ├── page.tsx         # Individual Pokémon page
│           └── not-found.tsx    # Custom 404 page
├── components/                   # Reusable React components
│   ├── Card.tsx                 # Pokémon card component
│   ├── Cardboard.tsx            # Grid container
│   ├── Header.tsx               # Navigation header
│   ├── Input.tsx                # Search input
│   └── PokemonInfo.tsx          # Detailed Pokémon information
├── context/                      # React Context providers
│   └── SearchContext.tsx        # Search state management
├── interfaces/                   # TypeScript type definitions
│   ├── CardProps.ts
│   ├── InputProps.ts
│   ├── Pokemon.ts
│   └── PokemonInfoProps.ts
└── utils/                        # Utility functions
    └── pokemon-data.ts           # API functions and data transformation
```

## How to Use

1. **Browse Pokémon**: View all Generation 1 Pokémon on the homepage
2. **Search**: Use the search bar to find specific Pokémon by name
3. **View Details**: Click on any Pokémon card to see detailed information
4. **Navigate**: Use the back arrow on detail pages to return to the main list

## API Integration

The app integrates with the [PokéAPI](https://pokeapi.co/) to fetch:

- Generation 1 Pokémon list
- Individual Pokémon details (stats, abilities, images)
- High-quality Pokémon sprites from the dream world collection

## Key Features Explained

### Search Functionality

- Real-time search with highlighted matching text
- Case-insensitive search
- Maintained search state across navigation

### Dynamic Routing

- SEO-friendly URLs: `/pokemon-info/pikachu`
- Server-side rendering for better performance
- Custom 404 pages for invalid Pokémon names

### Error Handling

- Graceful handling of API failures
- Custom not-found pages
- Network error recovery

## Deployment

The easiest way to deploy this Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Contributing

Feel free to contribute to this project by:

1. Forking the repository
2. Creating a feature branch
3. Making your changes
4. Submitting a pull request

## License

This project is open source and was done for educational purposes.
