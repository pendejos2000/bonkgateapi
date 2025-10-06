# FourYourSafety (FYS) - Social Media Management Platform

![FYS Logo](public/images/fys-hand-logo.jpg)

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [API Integration](#api-integration)
- [Components Documentation](#components-documentation)
- [Utilities](#utilities)
- [Styling](#styling)
- [Configuration](#configuration)
- [Deployment](#deployment)

## 🎯 Overview

FourYourSafety (FYS) is a comprehensive social media management platform that provides advanced Twitter/X account analysis, content creation tools, and multi-platform publishing capabilities. The platform features a cyberpunk/terminal aesthetic with a dark theme and red accents.

### Key Capabilities

- **Social Media Intelligence**: Advanced Twitter/X account analysis including follower scoring, bio history tracking, and deleted tweet recovery
- **Content Creation Studio**: Multi-format content creation tools for text, images, audio, and video
- **Multi-Platform Publishing**: Unified interface for publishing across Instagram, Twitter, LinkedIn, and YouTube
- **Real-time Analytics**: Track engagement, followers, and content performance

## ✨ Features

### 1. Twitter/X Intelligence

- **Follower Analysis**
  - Get first followers of any account
  - Score followers based on engagement and authenticity
  - Identify bot accounts and suspicious followers

- **Account History Tracking**
  - Bio history over time
  - Past username changes
  - Deleted tweets recovery
  - Latest tweets monitoring

- **Ethereum Address Detection**
  - Automatically filter tweets containing crypto addresses
  - Track wallet-related activity

### 2. Content Creation Studios

#### Text Studio
- AI-powered text generation
- Grammar and style improvements
- Multiple tone options (professional, casual, friendly, formal, persuasive)
- Real-time text statistics (word count, reading time, sentences)
- Readability scoring
- Multiple export formats (TXT, DOCX, PDF, Markdown)

#### Image Studio
- Image upload and editing
- Filters (grayscale, sepia, invert)
- Adjustments (brightness, contrast, saturation, sharpness)
- Crop, rotate, and layer tools
- Drawing and erasing capabilities
- Export in multiple formats

#### Audio Studio
- Audio file upload and processing
- Waveform visualization
- EQ controls (bass, mid, treble)
- Volume adjustment
- Effects (reverb, delay, compression)
- Noise reduction
- Export processed audio

#### Video Studio
- Video upload and editing
- Timeline-based editing
- Clip splitting and layer management
- Playback speed control
- Effects and filters
- Text and sticker overlays
- Export options

### 3. Multi-Platform Publishing

- Unified posting interface
- Platform-specific optimizations
- Content scheduling
- Media attachment support
- Hashtag management
- Cross-platform analytics

### 4. Support System

- Discord webhook integration
- Ticket categorization
- Email and Telegram contact options
- Real-time notification system

## 🛠 Technology Stack

### Frontend
- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **State Management**: React Hooks

### Backend
- **Runtime**: Node.js
- **API Routes**: Next.js API Routes
- **External API**: Toto API (Twitter/X data)

### Development Tools
- **Package Manager**: npm/yarn/pnpm
- **Linting**: ESLint
- **Formatting**: Prettier (implied)
- **Type Checking**: TypeScript

## 📁 Project Structure

\`\`\`
├── app/                          # Next.js App Router directory
│   ├── api/                      # API routes
│   │   ├── graph/               # Graph-related endpoints
│   │   │   ├── get_first_follower/
│   │   │   └── get_scored_followers/
│   │   ├── metadata/            # Metadata endpoints
│   │   │   ├── get_bio_history/
│   │   │   ├── get_deleted_tweets/
│   │   │   └── get_past_usernames/
│   │   └── utils/               # API utilities
│   │       ├── totoApi.ts       # Toto API client
│   │       └── tweetUtils.ts    # Tweet processing utilities
│   ├── studio/                   # Studio pages
│   │   ├── audio/
│   │   ├── image/
│   │   ├── text/
│   │   ├── video/
│   │   └── layout.tsx
│   ├── support/                  # Support system
│   │   ├── actions.ts           # Server actions
│   │   └── page.tsx
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Homepage
│   └── globals.css              # Global styles
│
├── components/                   # React components
│   ├── studios/                 # Studio components
│   │   ├── audio-studio.tsx
│   │   ├── image-studio.tsx
│   │   └── video-studio.tsx
│   ├── ui/                      # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   ├── slider.tsx
│   │   ├── tabs.tsx
│   │   └── ... (50+ components)
│   ├── content-creator.tsx      # Multi-platform publisher
│   ├── footer.tsx               # Footer component
│   ├── hero-section.tsx         # Landing hero
│   ├── mobile-navigation.tsx    # Mobile nav
│   ├── roadmap-section.tsx      # Roadmap display
│   ├── social-media-card.tsx    # Social media stats
│   ├── studio-selector.tsx      # Studio selection
│   └── theme-provider.tsx       # Theme context
│
├── hooks/                        # Custom React hooks
│   ├── use-mobile.tsx           # Mobile detection
│   └── use-toast.ts             # Toast notifications
│
├── lib/                          # Utility libraries
│   └── utils.ts                 # Helper functions (cn)
│
├── public/                       # Static assets
│   ├── images/
│   │   ├── bonkgate-logo.png
│   │   ├── fys-logo.png
│   │   └── fys-hand-logo.jpg
│   └── ... (placeholders)
│
├── styles/                       # Additional styles
│   └── globals.css
│
├── components.json              # shadcn/ui config
├── next.config.mjs              # Next.js config
├── package.json                 # Dependencies
├── postcss.config.mjs           # PostCSS config
├── tailwind.config.ts           # Tailwind config
└── tsconfig.json                # TypeScript config
\`\`\`

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
\`\`\`bash
git clone <repository-url>
cd fouryoursafety
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
# or
yarn install
# or
pnpm install
\`\`\`

3. Set up environment variables (if needed):
\`\`\`bash
cp .env.example .env.local
\`\`\`

4. Run the development server:
\`\`\`bash
npm run dev
# or
yarn dev
# or
pnpm dev
\`\`\`

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🔌 API Integration

### Toto API Client

The platform integrates with the Toto API for Twitter/X data analysis.

**Location**: `app/api/utils/totoApi.ts`

#### Configuration

\`\`\`typescript
private readonly BASE_URL = "https://toto.oz.xyz/api";
private readonly API_KEY = "0c33e8e7087afdcf3fded8a539e1c1e8";
\`\`\`

#### Available Methods

1. **getFirstFollowers(user, how, page)**
   - Retrieves the first followers of a user
   - Parameters:
     - `user`: Username or user ID
     - `how`: "username" or "id"
     - `page`: Page number (default: 1)

2. **getBioHistory(user, how, page)**
   - Gets historical bio changes
   - Returns array of bio modifications with timestamps

3. **getPastUsernames(user, how, page)**
   - Retrieves previous usernames
   - Tracks account name changes over time

4. **getDeletedTweets(user, how, page)**
   - Recovers deleted tweets
   - Useful for accountability and research

5. **getLatestTweets(user, how, page)**
   - Fetches recent tweets
   - Real-time feed monitoring

6. **getScoredFollowers(user, how, page)**
   - Analyzes follower quality
   - Scores based on authenticity and engagement

#### Helper Functions

**filterCredits(responseData)**
- Removes credit information from API responses
- Returns cleaned data object

### Tweet Utilities

**Location**: `app/api/utils/tweetUtils.ts`

#### Functions

1. **filterTweetsWithAddresses(tweets)**
   - Filters tweets containing Ethereum addresses
   - Uses regex: `/0x[a-fA-F0-9]{40}/`

2. **combineTweets(deletedTweets, latestTweets)**
   - Merges two tweet arrays
   - Removes duplicates based on tweet ID

3. **processTweets(deletedResult, latestResult)**
   - Complete tweet processing pipeline
   - Filters, combines, and deduplicates

## 📚 Components Documentation

### Core Components

#### Hero Section (`components/hero-section.tsx`)
- Landing page hero with animated elements
- Responsive design for mobile and desktop
- Call-to-action buttons
- Feature highlights

#### Footer (`components/footer.tsx`)
- Multi-column layout
- Quick links navigation
- Social media links
- Legal information
- Newsletter signup
- Brand information with logo

#### Roadmap Section (`components/roadmap-section.tsx`)
- Visual timeline of project milestones
- Animated progress indicators
- Phase-based organization
- Responsive layout

### Studio Components

All studio components follow a similar pattern:
- File upload interface
- Preview area
- Control panels (desktop sidebar, mobile collapsible)
- Export options
- Real-time processing

#### Text Studio (`app/studio/text/page.tsx`)
- Two-tab interface: Edit and Generate
- AI-powered text processing
- Statistics tracking
- Multiple export formats

#### Image Studio (`components/studios/image-studio.tsx`)
- Canvas-based image rendering
- Filter application system
- Adjustment controls
- Tool palette

#### Audio Studio (`components/studios/audio-studio.tsx`)
- Waveform visualization
- Playback controls
- EQ and effects panel
- File management

#### Video Studio (`components/studios/video-studio.tsx`)
- Timeline editor
- Clip management
- Effects and text overlays
- Export configuration

### UI Components

The project uses 50+ shadcn/ui components located in `components/ui/`:

- **Form Controls**: Button, Input, Textarea, Select, Checkbox, Radio, Switch
- **Layout**: Card, Separator, Tabs, Accordion, Collapsible
- **Feedback**: Alert, Toast, Dialog, AlertDialog, Drawer
- **Navigation**: NavigationMenu, Menubar, Breadcrumb, Pagination
- **Data Display**: Table, Badge, Avatar, Skeleton, Progress
- **Overlays**: Popover, HoverCard, Tooltip, ContextMenu, DropdownMenu
- **Charts**: Chart components for data visualization

## 🛠 Utilities

### CN Function (`lib/utils.ts`)

The `cn` function combines Tailwind classes intelligently:

\`\`\`typescript
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
\`\`\`

**Usage**:
\`\`\`typescript
cn("px-4 py-2", isDark && "bg-black", "text-white")
// Conditionally applies classes while handling conflicts
\`\`\`

### Custom Hooks

#### useMobile (`hooks/use-mobile.tsx`)
Detects mobile viewport:
\`\`\`typescript
const isMobile = useMobile()
\`\`\`

#### useToast (`hooks/use-toast.ts`)
Toast notification system:
\`\`\`typescript
const { toast } = useToast()

toast({
  title: "Success",
  description: "Operation completed",
})
\`\`\`

## 🎨 Styling

### Theme Configuration

**Tailwind Config** (`tailwind.config.ts`)

Custom theme includes:
- Cyberpunk/terminal color palette
- Neobrutalist design system
- Custom animations
- Responsive breakpoints
- Dark mode support

### Color Palette

\`\`\`css
--background: 0 0% 100%;
--foreground: 0 0% 0%;
--primary: 0 0% 0%;
--secondary: 0 0% 96%;
--accent: 0 84% 60%;
--destructive: 0 84% 60%;
\`\`\`

### Design System

- **Font**: System fonts with fallbacks
- **Borders**: Bold 2-4px borders
- **Shadows**: Neobrutalist shadow effect: `shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]`
- **Border Radius**: `rounded-xl` (12px)
- **Spacing**: Consistent 4px grid

## ⚙️ Configuration

### Next.js Config (`next.config.mjs`)

\`\`\`javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['blob.v0.app'],
  },
}

export default nextConfig
\`\`\`

### TypeScript Config (`tsconfig.json`)

Optimized for Next.js App Router with path aliases:

\`\`\`json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./*"]
    }
  }
}
\`\`\`

### Package.json Scripts

\`\`\`json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  }
}
\`\`\`

## 📦 Dependencies

### Core
- `next`: ^14.0.0
- `react`: ^18.0.0
- `typescript`: ^5.0.0

### UI & Styling
- `tailwindcss`: ^3.4.0
- `@radix-ui/*`: Various UI primitives
- `lucide-react`: Icon library
- `class-variance-authority`: Component variants
- `clsx` & `tailwind-merge`: Class management

### Utilities
- `date-fns`: Date manipulation
- `zod`: Schema validation
- `react-hook-form`: Form management

## 🚀 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Configure environment variables
4. Deploy

\`\`\`bash
vercel --prod
\`\`\`

### Other Platforms

The app is a standard Next.js application and can be deployed to:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

### Build Output

\`\`\`bash
npm run build
\`\`\`

Creates optimized production build in `.next/` directory.

## 🔒 Environment Variables

Create `.env.local` file:

\`\`\`env
# Discord Webhook (Support System)
DISCORD_WEBHOOK_URL=your_webhook_url

# API Keys (if needed)
TOTO_API_KEY=your_api_key

# Next.js
NEXT_PUBLIC_APP_URL=http://localhost:3000
\`\`\`

## 📝 API Routes

### Graph Endpoints

**GET** `/api/graph/get_first_follower`
- Returns first followers of specified user

**GET** `/api/graph/get_scored_followers`
- Returns followers with quality scores

### Metadata Endpoints

**GET** `/api/metadata/get_bio_history`
- Returns bio change history

**GET** `/api/metadata/get_deleted_tweets`
- Returns recovered deleted tweets

**GET** `/api/metadata/get_past_usernames`
- Returns username change history

## 🧪 Testing

\`\`\`bash
# Run tests (if configured)
npm test

# Type checking
npm run type-check

# Linting
npm run lint
\`\`\`

## 🤝 Contributing

1. Fork the repository
2. Create feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open Pull Request

## 📄 License

This project is proprietary software. All rights reserved.

## 📞 Support

For support inquiries:
- Visit `/support` page
- Contact via Discord webhook
- Email support team
- Telegram: @support

## 🎯 Roadmap

### Phase 1: Foundation ✅
- Core platform architecture
- Twitter/X intelligence features
- Basic content studios

### Phase 2: Enhancement 🚧
- Advanced AI features
- Real-time collaboration
- Enhanced analytics

### Phase 3: Expansion 📋
- Additional platform integrations
- Mobile applications
- Enterprise features

### Phase 4: Innovation 💡
- AI-powered content strategies
- Predictive analytics
- Advanced automation

---

**Built with ❤️ by the FourYourSafety Team**

**Version**: 1.0.0  
**Last Updated**: January 2025
