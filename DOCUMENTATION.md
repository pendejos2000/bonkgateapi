# FourYourSafety (FYS) - Comprehensive Documentation

![FYS Logo](public/images/fys-hand-logo.jpg)

## Table of Contents

1. [Overview](#overview)
2. [Features](#features)
3. [Technical Architecture](#technical-architecture)
4. [Installation](#installation)
5. [API Documentation](#api-documentation)
6. [Component Documentation](#component-documentation)
7. [Utilities & Helper Functions](#utilities--helper-functions)
8. [Design System](#design-system)
9. [Token Economics](#token-economics)
10. [Browser Extension](#browser-extension)
11. [Development Guide](#development-guide)
12. [Deployment](#deployment)
13. [Troubleshooting](#troubleshooting)

---

## Overview

**FourYourSafety (FYS)** is a comprehensive crypto-Twitter intelligence browser extension and web platform designed to track, monitor, and analyze activities on Twitter/X related to cryptocurrency. The platform provides real-time intelligence on deleted tweets, token addresses, follower changes, and profile modifications to help traders and researchers make informed decisions in the crypto space.

### Key Highlights

- **Real-time Monitoring**: Track Twitter activities as they happen
- **Deleted Content Recovery**: Archive deleted tweets and token addresses
- **Social Network Analysis**: Understand follower patterns and influence networks
- **AI-Powered Tools**: Content creation studio with AI assistance
- **Token-Gated Access**: $FYS token holders get premium features without subscriptions
- **Privacy-Focused**: Local data storage with optional cloud sync

### Target Audience

- **Crypto Traders**: Monitor influencer activities and token promotions
- **Security Researchers**: Investigate suspicious accounts and rug pulls
- **Social Analysts**: Study narrative evolution and influence patterns
- **Content Creators**: Leverage AI tools for multimedia content

---

## Features

### 1. Deleted Tweets Tracking

**Functionality**: Automatically archives deleted tweets from crypto influencers before they disappear.

**How it Works**:
- Monitors specified Twitter accounts in real-time
- Captures tweet content, metadata, and media
- Stores deleted tweets with timestamps
- Provides search and filter capabilities

**Use Cases**:
- Track when influencers delete token promotions
- Document backtracking on predictions
- Archive evidence of pump-and-dump schemes
- Monitor narrative changes

**API Endpoint**: `/api/metadata/get_deleted_tweets`

**Parameters**:
\`\`\`typescript
{
  user: string,        // Username or user ID
  how: "username" | "id",
  page: number         // Pagination
}
\`\`\`

**Response**:
\`\`\`typescript
{
  tweets: Tweet[],
  count: number,
  timestamp: string
}
\`\`\`

---

### 2. Contract Address (CA) Tracking

**Functionality**: Monitors when crypto token addresses (contract addresses) are mentioned and subsequently deleted from tweets.

**How it Works**:
- Scans tweets for Ethereum addresses (0x pattern matching)
- Regex pattern: `/0x[a-fA-F0-9]{40}/`
- Tracks deletion of tweets containing CAs
- Cross-references with known scam databases

**Use Cases**:
- Identify rug pulls before they happen
- Track influencer token shilling patterns
- Monitor suspicious contract promotions
- Build wallet address databases

**Processing Function**: `filterTweetsWithAddresses(tweets: Tweet[])`

**Implementation**:
\`\`\`typescript
export function filterTweetsWithAddresses(tweets: Tweet[]): Tweet[] {
  const pattern = /0x[a-fA-F0-9]{40}/;
  return tweets.filter(tweet => {
    const text = tweet.text || '';
    return pattern.test(text);
  });
}
\`\`\`

---

### 3. First Followers Analysis

**Functionality**: Identifies and analyzes the first followers of new Twitter accounts to discover insider connections.

**How it Works**:
- Retrieves follower data chronologically
- Scores followers based on influence metrics
- Maps relationship networks
- Identifies coordinated behavior patterns

**Use Cases**:
- Detect bot networks following new accounts
- Identify early project supporters (potential insiders)
- Track coordinated shill campaigns
- Map influence networks

**API Endpoint**: `/api/graph/get_first_follower`

**Analysis Metrics**:
- Follower count
- Account age
- Activity patterns
- Network connections
- Influence score

---

### 4. Profile Changes Monitoring

**Functionality**: Tracks changes to Twitter profiles including bio updates, username changes, and display name modifications.

**How it Works**:
- Polls profile data at regular intervals
- Stores historical snapshots
- Compares changes and flags significant updates
- Maintains complete edit history

**Tracked Changes**:
- Bio text modifications
- Username changes (handles)
- Display name changes
- Profile picture updates
- Banner image changes
- Location changes
- Website URL changes

**API Endpoints**:
- `/api/metadata/get_bio_history`
- `/api/metadata/get_past_usernames`

**Use Cases**:
- Monitor rebranding attempts
- Track identity shifts
- Detect impersonation attempts
- Document profile evolution

---

### 5. Key Followers Analysis

**Functionality**: Analyzes follower networks to identify influential accounts and connection patterns.

**How it Works**:
- Calculates follower influence scores
- Maps network relationships
- Identifies key opinion leaders (KOLs)
- Detects coordinated behavior

**API Endpoint**: `/api/graph/get_scored_followers`

**Scoring Algorithm**:
\`\`\`typescript
// Pseudo-code for follower scoring
score = (
  followerCount * 0.3 +
  engagementRate * 0.4 +
  accountAge * 0.2 +
  networkCentrality * 0.1
)
\`\`\`

**Metrics Provided**:
- Influence score (0-100)
- Engagement rate
- Network centrality
- Activity frequency
- Content quality indicators

---

### 6. Real-time Alerts (Coming Soon - Phase 2)

**Planned Functionality**:
- Push notifications for tracked events
- Email alerts for critical activities
- Webhook integrations
- Custom alert rules

**Alert Types**:
- Deleted tweet notifications
- Profile change alerts
- New follower alerts
- Suspicious activity warnings
- Custom keyword triggers

---

## Technical Architecture

### Technology Stack

#### Frontend
- **Framework**: Next.js 14.x (App Router)
- **Language**: TypeScript 5.x
- **UI Library**: React 18.x
- **Styling**: Tailwind CSS 3.x
- **Component Library**: shadcn/ui (Radix UI primitives)
- **Icons**: Lucide React
- **Fonts**: Inter (Google Fonts)

#### Backend
- **Runtime**: Node.js 20.x
- **API**: Next.js API Routes (App Router)
- **Data Fetching**: Native Fetch API
- **Authentication**: JWT (planned)

#### External Services
- **Twitter Data**: Toto API (toto.oz.xyz/api)
- **Media Storage**: Vercel Blob Storage
- **Analytics**: Vercel Analytics
- **Deployment**: Vercel Platform

### Project Structure

\`\`\`
fouryoursafety/
├── app/
│   ├── api/                    # API Routes
│   │   ├── graph/             # Network analysis endpoints
│   │   │   ├── get_first_follower/
│   │   │   │   └── route.ts
│   │   │   └── get_scored_followers/
│   │   │       └── route.ts
│   │   ├── metadata/          # Profile & tweet metadata
│   │   │   ├── get_bio_history/
│   │   │   │   └── route.ts
│   │   │   ├── get_deleted_tweets/
│   │   │   │   └── route.ts
│   │   │   └── get_past_usernames/
│   │   │       └── route.ts
│   │   └── utils/             # Shared utilities
│   │       ├── totoApi.ts
│   │       └── tweetUtils.ts
│   ├── studio/                # Content creation tools
│   │   ├── audio/
│   │   │   └── page.tsx
│   │   ├── image/
│   │   │   └── page.tsx
│   │   ├── text/
│   │   │   └── page.tsx
│   │   ├── video/
│   │   │   └── page.tsx
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── support/
│   │   ├── actions.ts
│   │   └── page.tsx
│   ├── globals.css            # Global styles
│   ├── layout.tsx             # Root layout
│   └── page.tsx               # Homepage
├── components/
│   ├── ui/                    # shadcn/ui components
│   │   ├── accordion.tsx
│   │   ├── alert.tsx
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── dialog.tsx
│   │   ├── input.tsx
│   │   ├── label.tsx
│   │   ├── select.tsx
│   │   ├── sheet.tsx
│   │   ├── slider.tsx
│   │   ├── switch.tsx
│   │   ├── tabs.tsx
│   │   ├── textarea.tsx
│   │   └── ... (30+ components)
│   ├── content-creator.tsx
│   ├── footer.tsx
│   ├── hero-section.tsx
│   ├── mobile-navigation.tsx
│   ├── roadmap-section.tsx
│   └── social-media-card.tsx
├── hooks/
│   ├── use-mobile.tsx
│   └── use-toast.ts
├── lib/
│   └── utils.ts               # Utility functions
├── public/
│   ├── images/
│   │   ├── bonkgate-logo.png
│   │   ├── fys-logo.png
│   │   └── fys-hand-logo.jpg
│   └── ... (various assets)
├── styles/
│   └── globals.css
├── .gitignore
├── components.json            # shadcn/ui config
├── next.config.mjs
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts
├── tsconfig.json
└── DOCUMENTATION.md
\`\`\`

### Data Flow Architecture

\`\`\`
┌─────────────┐
│   Browser   │
│  Extension  │
└──────┬──────┘
       │
       ▼
┌─────────────┐     ┌──────────────┐
│  Next.js    │────▶│  Toto API    │
│  Frontend   │     │  (External)  │
└──────┬──────┘     └──────────────┘
       │
       ▼
┌─────────────┐     ┌──────────────┐
│   API       │────▶│  Processing  │
│  Routes     │     │   Utilities  │
└──────┬──────┘     └──────────────┘
       │
       ▼
┌─────────────┐
│   Client    │
│  Response   │
└─────────────┘
\`\`\`

---

## Installation

### Prerequisites

- Node.js 20.x or higher
- npm 10.x or yarn 1.22.x
- Git

### Local Development Setup

1. **Clone the repository**:
\`\`\`bash
git clone https://github.com/BonkGate-Labs/BonkGate-Extension.git
cd BonkGate-Extension
\`\`\`

2. **Install dependencies**:
\`\`\`bash
npm install
# or
yarn install
\`\`\`

3. **Set up environment variables**:
Create a `.env.local` file in the root directory:
\`\`\`env
# Toto API Configuration
TOTO_API_KEY=your_api_key_here
TOTO_API_URL=https://toto.oz.xyz/api

# Next.js Configuration
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Optional: Analytics
NEXT_PUBLIC_VERCEL_ANALYTICS_ID=your_analytics_id
\`\`\`

4. **Run the development server**:
\`\`\`bash
npm run dev
# or
yarn dev
\`\`\`

5. **Open your browser**:
Navigate to `http://localhost:3000`

### Production Build

\`\`\`bash
npm run build
npm run start
\`\`\`

### Browser Extension Installation

1. **Download the extension**:
   - Visit the GitHub releases page
   - Download the latest `.zip` file

2. **Install in Chrome**:
   - Open Chrome and navigate to `chrome://extensions/`
   - Enable "Developer mode"
   - Click "Load unpacked"
   - Select the extracted extension folder

3. **Configure the extension**:
   - Click the FYS icon in your browser toolbar
   - Enter your API credentials (if required)
   - Configure monitoring preferences

---

## API Documentation

### Base Configuration

**Toto API Client** (`app/api/utils/totoApi.ts`)

\`\`\`typescript
export class TotoApi {
  private readonly BASE_URL = "https://toto.oz.xyz/api";
  private readonly API_KEY = "your_api_key";
  private readonly headers: HeadersInit;

  constructor() {
    this.headers = {
      "accept": "application/json",
      "x-api-key": this.API_KEY,
      "Content-Type": "application/json"
    };
  }
}
\`\`\`

### API Endpoints

#### 1. Get First Followers

**Endpoint**: `POST /api/graph/get_first_followers`

**Description**: Retrieves the first followers of a specified user.

**Request**:
\`\`\`typescript
interface FirstFollowersRequest {
  user: string;           // Username or user ID
  how: "username" | "id"; // Lookup method
  page: number;           // Page number (1-based)
}
\`\`\`

**Response**:
\`\`\`typescript
interface FirstFollowersResponse {
  followers: {
    id: string;
    username: string;
    displayName: string;
    followedAt: string;
    followerCount: number;
    followingCount: number;
  }[];
  count: number;
  hasMore: boolean;
}
\`\`\`

**Example Usage**:
\`\`\`typescript
const api = new TotoApi();
const result = await api.getFirstFollowers("elonmusk", "username", 1);
console.log(result.followers);
\`\`\`

---

#### 2. Get Bio History

**Endpoint**: `POST /api/metadata/get_bio_history`

**Description**: Retrieves historical bio changes for a user.

**Request**:
\`\`\`typescript
interface BioHistoryRequest {
  user: string;
  how: "username" | "id";
  page: number;
}
\`\`\`

**Response**:
\`\`\`typescript
interface BioHistoryResponse {
  history: {
    bio: string;
    changedAt: string;
    previousBio: string | null;
  }[];
  count: number;
}
\`\`\`

**Example Usage**:
\`\`\`typescript
const api = new TotoApi();
const result = await api.getBioHistory("vitalikbuterin", "username", 1);
console.log(result.history);
\`\`\`

---

#### 3. Get Past Usernames

**Endpoint**: `POST /api/metadata/get_past_usernames`

**Description**: Retrieves username change history.

**Request**:
\`\`\`typescript
interface PastUsernamesRequest {
  user: string;
  how: "username" | "id";
  page: number;
}
\`\`\`

**Response**:
\`\`\`typescript
interface PastUsernamesResponse {
  usernames: {
    username: string;
    changedAt: string;
    changedFrom: string | null;
  }[];
  count: number;
}
\`\`\`

---

#### 4. Get Deleted Tweets

**Endpoint**: `POST /api/metadata/get_deleted_tweets`

**Description**: Retrieves deleted tweets from a user.

**Request**:
\`\`\`typescript
interface DeletedTweetsRequest {
  user: string;
  how: "username" | "id";
  page: number;
}
\`\`\`

**Response**:
\`\`\`typescript
interface DeletedTweetsResponse {
  tweets: {
    id: string;
    text: string;
    deletedAt: string;
    createdAt: string;
    media?: {
      type: "photo" | "video";
      url: string;
    }[];
    metrics: {
      likes: number;
      retweets: number;
      replies: number;
    };
  }[];
  count: number;
}
\`\`\`

---

#### 5. Get Latest Tweets

**Endpoint**: `POST /api/metadata/get_latest_tweets`

**Description**: Retrieves the most recent tweets from a user.

**Request & Response**: Similar to deleted tweets endpoint.

---

#### 6. Get Scored Followers

**Endpoint**: `POST /api/graph/get_scored_followers`

**Description**: Retrieves followers with influence scores.

**Request**:
\`\`\`typescript
interface ScoredFollowersRequest {
  user: string;
  how: "username" | "id";
  page: number;
}
\`\`\`

**Response**:
\`\`\`typescript
interface ScoredFollowersResponse {
  followers: {
    id: string;
    username: string;
    displayName: string;
    score: number;        // 0-100 influence score
    metrics: {
      followerCount: number;
      followingCount: number;
      tweetCount: number;
      engagementRate: number;
    };
  }[];
  count: number;
}
\`\`\`

---

### Error Handling

All API endpoints return standardized error responses:

\`\`\`typescript
interface ApiError {
  error: {
    code: string;
    message: string;
    details?: any;
  };
  status: number;
}
\`\`\`

**Common Error Codes**:
- `400` - Bad Request (invalid parameters)
- `401` - Unauthorized (invalid API key)
- `404` - Not Found (user doesn't exist)
- `429` - Rate Limit Exceeded
- `500` - Internal Server Error

---

## Component Documentation

### Core Components

#### 1. HeroSection (`components/hero-section.tsx`)

**Purpose**: Main landing section with features, CTAs, and video demo.

**Props**: None (uses internal state)

**Key Features**:
- Animated video modal with fullscreen support
- Feature grid with 6 cards
- 3-step "How It Works" section
- Roadmap integration
- Token utility showcase
- Statistics display
- Use cases for traders and researchers
- CTA section

**State Management**:
\`\`\`typescript
const [isVideoOpen, setIsVideoOpen] = useState(false);
const videoRef = useRef<HTMLVideoElement>(null);
\`\`\`

**Key Functions**:
- `openVideoModal()`: Opens video player
- `closeVideoModal()`: Closes video player
- `handleFullscreen()`: Enters fullscreen mode

**Responsive Design**:
- Mobile: Single column layout
- Tablet: 2-column grid
- Desktop: 3-column grid for features

---

#### 2. RoadmapSection (`components/roadmap-section.tsx`)

**Purpose**: Interactive roadmap display with phase navigation.

**Features**:
- Pulsating blob indicators
- Tab-based phase navigation
- Progress indicators
- Feature lists with status icons

**Animation Classes**:
- `animate-pulse-wave`: Expanding wave effect
- Phase indicators with gradients
- Border animations on hover

**Phase Data Structure**:
\`\`\`typescript
interface Phase {
  id: string;
  name: string;
  status: "current" | "upcoming";
  features: {
    name: string;
    description: string;
    completed: boolean;
  }[];
}
\`\`\`

---

#### 3. Footer (`components/footer.tsx`)

**Purpose**: Site-wide footer with links and branding.

**Sections**:
1. **Brand**:
   - FYS hand logo
   - Company tagline
2. **Resources**:
   - Documentation
   - Support
   - API Access (coming soon)
3. **Community**:
   - Social media links
   - CTA button

**External Links**:
- Twitter: https://x.com/bonkgate
- GitHub: https://github.com/BonkGate-Labs/BonkGate-Extension
- Docs: https://docs.bonkgate.fun/

---

#### 4. Studio Components

##### Audio Studio (`app/studio/audio/page.tsx`)

**Features**:
- Audio file upload and preview
- Waveform visualization (HTML5 Canvas)
- Playback controls (play, pause, skip)
- Volume and speed controls
- Audio mixer with EQ controls
- Effects panel (reverb, delay, compression)
- AI audio processing assistant
- Export options

**Canvas Waveform Generation**:
\`\`\`typescript
useEffect(() => {
  const canvas = canvasRef.current;
  if (!canvas) return;
  
  const ctx = canvas.getContext("2d");
  const width = canvas.width;
  const height = canvas.height;
  
  // Draw simulated waveform bars
  const barWidth = 3;
  const gap = 2;
  const bars = Math.floor(width / (barWidth + gap));
  
  for (let i = 0; i < bars; i++) {
    const barHeight = Math.random() * (height * 0.8) + height * 0.1;
    ctx.fillRect(i * (barWidth + gap), (height - barHeight) / 2, barWidth, barHeight);
  }
}, []);
\`\`\`

**AI Assistant Integration**:
\`\`\`typescript
const handleAIProcess = () => {
  setIsProcessing(true);
  // AI processing simulation
  setTimeout(() => {
    setAiResponse("Analysis complete...");
    setIsProcessing(false);
  }, 2000);
};
\`\`\`

---

##### Image Studio (`app/studio/image/page.tsx`)

**Features**:
- Image upload with preview
- Real-time filter application (Canvas API)
- AI image generation interface
- Quick editing tools
- Image adjustments (brightness, contrast, saturation)
- Resize with aspect ratio lock
- Export in multiple formats

**Filter Implementation**:
\`\`\`typescript
useEffect(() => {
  if (!imagePreview || !canvasRef.current) return;
  
  const canvas = canvasRef.current;
  const ctx = canvas.getContext("2d");
  const img = new Image();
  
  img.onload = () => {
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0);
    
    // Apply selected filter
    switch (activeFilter) {
      case "grayscale":
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;
        for (let i = 0; i < data.length; i += 4) {
          const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
          data[i] = data[i + 1] = data[i + 2] = avg;
        }
        ctx.putImageData(imageData, 0, 0);
        break;
      // Other filters...
    }
  };
  
  img.src = imagePreview;
}, [imagePreview, activeFilter]);
\`\`\`

**Supported Filters**:
- Grayscale
- Sepia
- Invert
- Vintage
- HDR

---

##### Text Studio (`app/studio/text/page.tsx`)

**Features**:
- Rich text editor
- Real-time statistics (word count, reading time)
- AI text generation with parameters
- AI text improvement assistant
- Format controls
- Readability analysis
- Export to multiple formats

**Statistics Calculation**:
\`\`\`typescript
const updateTextStats = (text: string) => {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  const characters = text.length;
  const sentences = text.split(/[.!?]+/).filter(Boolean).length;
  const readingTime = Math.ceil(words / 200); // 200 WPM

  setTextStats({
    words,
    characters,
    sentences,
    readingTime: `${readingTime} min`,
  });
};
\`\`\`

**AI Generation Parameters**:
- Tone: Professional, Casual, Friendly, Formal, Persuasive
- Length: Short (100 words), Medium (300 words), Long (500 words)
- Custom length option

---

##### Video Studio (`app/studio/video/page.tsx`)

**Features**:
- Video upload and preview
- Timeline editor with tracks
- Playback controls
- Video effects (brightness, contrast, saturation)
- Stabilization toggle
- Text and caption tools
- Crop presets
- Export options

**Video Playback Control**:
\`\`\`typescript
const togglePlay = () => {
  const videoElement = videoRef.current;
  if (!videoElement) return;
  
  if (isPlaying) {
    videoElement.pause();
  } else {
    videoElement.play();
  }
  
  setIsPlaying(!isPlaying);
};
\`\`\`

**Timeline Structure**:
\`\`\`
┌─────────────────────────────────┐
│ Video Track                     │
│ ┌──────────────┐               │
│ │  Main Clip   │               │
│ └──────────────┘               │
├─────────────────────────────────┤
│ Audio Track                     │
├─────────────────────────────────┤
│ Text/Captions Track             │
└─────────────────────────────────┘
\`\`\`

---

### UI Component Library (shadcn/ui)

The application uses 40+ pre-built components from shadcn/ui:

**Form Components**:
- Button, Input, Textarea, Select, Checkbox, Switch, Radio Group, Slider

**Layout Components**:
- Card, Dialog, Sheet, Tabs, Accordion, Separator

**Feedback Components**:
- Alert, Toast, Progress, Skeleton

**Navigation Components**:
- Navigation Menu, Breadcrumb, Pagination

**Utility Components**:
- Tooltip, Popover, Dropdown Menu, Context Menu, Hover Card

**Example Usage**:
\`\`\`tsx
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Example() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Example Card</CardTitle>
      </CardHeader>
      <CardContent>
        <Button>Click Me</Button>
      </CardContent>
    </Card>
  );
}
\`\`\`

---

## Utilities & Helper Functions

### 1. Tweet Processing Utilities (`app/api/utils/tweetUtils.ts`)

#### filterTweetsWithAddresses

**Purpose**: Filters tweets containing Ethereum addresses.

**Implementation**:
\`\`\`typescript
export function filterTweetsWithAddresses(tweets: Tweet[]): Tweet[] {
  const pattern = /0x[a-fA-F0-9]{40}/;
  
  return tweets.filter(tweet => {
    const text = tweet.text || '';
    return pattern.test(text);
  });
}
\`\`\`

**Use Case**:
\`\`\`typescript
const allTweets = await fetchTweets();
const tweetsWithCAs = filterTweetsWithAddresses(allTweets);
console.log(`Found ${tweetsWithCAs.length} tweets with contract addresses`);
\`\`\`

---

#### combineTweets

**Purpose**: Merges two tweet arrays and removes duplicates.

**Implementation**:
\`\`\`typescript
export function combineTweets(deletedTweets: Tweet[], latestTweets: Tweet[]): Tweet[] {
  const allTweets = [...deletedTweets, ...latestTweets];
  const uniqueTweets: Tweet[] = [];
  const seenIds = new Set<string>();
  
  for (const tweet of allTweets) {
    const tweetId = tweet.id;
    if (!seenIds.has(tweetId)) {
      seenIds.add(tweetId);
      uniqueTweets.push(tweet);
    }
  }
  
  return uniqueTweets;
}
\`\`\`

**Algorithm**: O(n) time complexity using Set for duplicate detection.

---

#### processTweets

**Purpose**: Main processing pipeline for tweet data.

**Implementation**:
\`\`\`typescript
export function processTweets(
  deletedResult: TweetResponse, 
  latestResult: TweetResponse
): TweetResponse {
  // Extract tweets
  const deletedTweets = deletedResult.tweets || [];
  const latestTweets = latestResult.tweets || [];
  
  // Filter deleted tweets for Ethereum addresses
  const filteredDeleted = filterTweetsWithAddresses(deletedTweets);
  
  // Combine and deduplicate
  const uniqueTweets = combineTweets(filteredDeleted, latestTweets);
  
  // Create response
  const result: TweetResponse = {
    tweets: uniqueTweets,
    count: uniqueTweets.length
  };
  
  // Copy metadata
  for (const key in deletedResult) {
    if (key !== 'tweets' && key !== 'count') {
      result[key] = deletedResult[key];
    }
  }
  
  return result;
}
\`\`\`

**Pipeline Flow**:
\`\`\`
Deleted Tweets ──┐
                 ├──> Filter CAs ──> Combine ──> Deduplicate ──> Result
Latest Tweets  ──┘
\`\`\`

---

### 2. API Helper Functions (`app/api/utils/totoApi.ts`)

#### filterCredits

**Purpose**: Removes credit information from API responses.

**Implementation**:
\`\`\`typescript
export function filterCredits(responseData: ApiResponse): ApiResponse {
  if (responseData && 'current_credits' in responseData) {
    const { current_credits, ...rest } = responseData;
    return rest;
  }
  return responseData;
}
\`\`\`

**Why**: Keeps response data clean and prevents exposing credit information to clients.

---

### 3. Utility Functions (`lib/utils.ts`)

#### cn (Class Name Merger)

**Purpose**: Merges Tailwind CSS classes with conflict resolution.

**Implementation**:
\`\`\`typescript
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
\`\`\`

**Usage**:
\`\`\`tsx
<div className={cn(
  "base-class",
  isActive && "active-class",
  "override-class"
)}>
  Content
</div>
\`\`\`

**Benefits**:
- Handles conditional classes
- Resolves Tailwind conflicts
- Type-safe with TypeScript

---

### 4. Custom Hooks

#### useMobile (`hooks/use-mobile.tsx`)

**Purpose**: Detects mobile viewport.

**Implementation**:
\`\`\`typescript
import { useState, useEffect } from "react"

export function useMobile() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener("resize", checkMobile)
    
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  return isMobile
}
\`\`\`

**Usage**:
\`\`\`tsx
const isMobile = useMobile();

return (
  <div>
    {isMobile ? <MobileNav /> : <DesktopNav />}
  </div>
);
\`\`\`

---

#### useToast (`hooks/use-toast.ts`)

**Purpose**: Manages toast notifications.

**Features**:
- Queue management
- Auto-dismiss
- Multiple variants (success, error, warning, info)
- Custom durations

**Usage**:
\`\`\`tsx
import { useToast } from "@/hooks/use-toast"

export default function Example() {
  const { toast } = useToast()
  
  const handleSuccess = () => {
    toast({
      title: "Success!",
      description: "Your changes have been saved.",
      variant: "default",
    })
  }
  
  const handleError = () => {
    toast({
      title: "Error",
      description: "Something went wrong.",
      variant: "destructive",
    })
  }
  
  return (
    <div>
      <button onClick={handleSuccess}>Show Success</button>
      <button onClick={handleError}>Show Error</button>
    </div>
  )
}
\`\`\`

---

## Design System

### Neobrutalist Design Principles

FourYourSafety uses a distinctive **neobrutalist** design aesthetic characterized by:

1. **Bold Black Borders**: 2-4px solid black borders on all components
2. **Strong Box Shadows**: Offset shadows creating a "lifted" effect
3. **High Contrast**: Pure black on white with bold accent colors
4. **Chunky Typography**: Heavy font weights (700-900)
5. **Sharp Corners**: Minimal border radius (8-12px)
6. **Flat Colors**: No gradients on primary elements (except specific features)

### Color System

\`\`\`typescript
// tailwind.config.ts
colors: {
  "bonk-orange": "#f0b90b",     // Primary brand color
  background: "hsl(var(--background))",
  foreground: "hsl(var(--foreground))",
  // ... additional colors
}
\`\`\`

**Brand Colors**:
- **Primary Orange**: `#f0b90b` (bonk-orange)
- **Black**: `#000000` (borders, text, shadows)
- **White**: `#ffffff` (backgrounds, contrast)

**Feature Card Colors**:
- Red: `#ef4444` (Deleted Tweets)
- Orange: `#f0b90b` (CA Tracking)
- Blue: `#3b82f6` (First Followers)
- Purple: `#a855f7` (Profile Changes)
- Green: `#22c55e` (Key Followers)
- Yellow-Amber: Gradient (Real-time Alerts)

### Typography

**Font Family**: Inter (Google Fonts)

**Font Weights**:
- Regular: 400
- Medium: 500
- Semibold: 600
- Bold: 700
- Extrabold: 800
- Black: 900

**Heading Scale**:
\`\`\`css
.text-8xl { font-size: 6rem; }      /* Hero headlines */
.text-6xl { font-size: 3.75rem; }   /* Section titles */
.text-5xl { font-size: 3rem; }
.text-4xl { font-size: 2.25rem; }
.text-3xl { font-size: 1.875rem; }
.text-2xl { font-size: 1.5rem; }
.text-xl  { font-size: 1.25rem; }
.text-lg  { font-size: 1.125rem; }
\`\`\`

### Shadow System

**Custom Shadows**:
\`\`\`css
/* Neobrutalist box shadow */
.shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]

/* Button shadow */
.shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]

/* Hover effect */
.hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]
\`\`\`

**Usage Pattern**:
\`\`\`tsx
<Card className="border-4 border-black rounded-xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
  Card Content
</Card>
\`\`\`

### Spacing System

Follows Tailwind's default spacing scale (4px base unit):

\`\`\`
0: 0px
1: 4px
2: 8px
3: 12px
4: 16px
6: 24px
8: 32px
12: 48px
16: 64px
\`\`\`

### Border Radius

\`\`\`css
.rounded-xl: 12px    /* Cards, buttons */
.rounded-lg: 8px     /* Smaller components */
.rounded-full: 9999px /* Circles, pills */
\`\`\`

### Animation System

**Custom Animations** (defined in `tailwind.config.ts`):

\`\`\`typescript
keyframes: {
  "slide-in-up": {
    "0%": { transform: "translateY(100%)", opacity: "0" },
    "100%": { transform: "translateY(0)", opacity: "1" }
  },
  "pulse": {
    "0%, 100%": { transform: "scale(1)", opacity: "1" },
    "50%": { transform: "scale(1.05)", opacity: "0.8" }
  },
  "wave": {
    "0%": { transform: "scale(1)", opacity: "1" },
    "50%": { transform: "scale(1.5)", opacity: "0.5" },
    "100%": { transform: "scale(2)", opacity: "0" }
  }
}
\`\`\`

**Usage**:
\`\`\`tsx
<div className="animate-slide-in-up">Modal</div>
<div className="animate-pulse">Loading...</div>
<div className="animate-wave">Ripple Effect</div>
\`\`\`

### Hover Effects

**Standard Pattern**:
\`\`\`tsx
<Card className="
  border-4 border-black 
  shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]
  hover:translate-y-[-4px] 
  hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]
  transition-all
">
  Hover me
</Card>
\`\`\`

**Button Hover**:
\`\`\`tsx
<Button className="
  hover:translate-y-[-2px]
  active:translate-y-[0px]
  transition-transform
">
  Click me
</Button>
\`\`\`

### Responsive Design

**Breakpoints**:
\`\`\`typescript
sm: '640px'   // Mobile landscape, small tablets
md: '768px'   // Tablets
lg: '1024px'  // Desktop
xl: '1280px'  // Large desktop
\`\`\`

**Mobile-First Approach**:
\`\`\`tsx
<div className="
  text-base          /* Mobile */
  sm:text-lg         /* Small devices */
  md:text-xl         /* Tablets */
  lg:text-2xl        /* Desktop */
">
  Responsive Text
</div>
\`\`\`

**Grid Layouts**:
\`\`\`tsx
<div className="
  grid 
  grid-cols-1        /* Mobile: 1 column */
  md:grid-cols-2     /* Tablet: 2 columns */
  lg:grid-cols-3     /* Desktop: 3 columns */
  gap-6
">
  {features.map(feature => <Card key={feature.id} />)}
</div>
\`\`\`

### Accessibility

**Focus States**:
\`\`\`css
.focus:outline-none 
.focus:ring-2 
.focus:ring-offset-2 
.focus:ring-bonk-orange
\`\`\`

**Screen Reader Support**:
\`\`\`tsx
<button aria-label="Close modal" className="sr-only">
  Close
</button>
\`\`\`

**Semantic HTML**:
- Use `<main>`, `<header>`, `<footer>`, `<nav>`, `<article>`
- Proper heading hierarchy (h1 → h2 → h3)
- ARIA labels where needed

---

## Token Economics

### $FYS Token Overview

**Token Name**: FourYourSafety Token  
**Symbol**: $FYS  
**Type**: Utility Token  
**Blockchain**: Solana (implied from LetsBonk integration)

### Token Utility

1. **Access Pass**
   - Holders get subscription-free access to premium features
   - Replaces monthly subscription fees
   - Minimum holding requirement (determined by DAO)

2. **Governance Rights**
   - Vote on feature development priorities
   - Determine access requirements
   - Community treasury allocation
   - Platform policy decisions

3. **Premium Features**
   - Real-time alerts (Phase 2)
   - API access with higher rate limits
   - Advanced analytics dashboard
   - Priority support

4. **Community Benefits**
   - Exclusive Discord/Telegram channels
   - Early access to new features
   - Special events and AMAs
   - Educational content

### Access Tiers (Planned)

\`\`\`typescript
interface AccessTier {
  name: string;
  minTokens: number;
  features: string[];
}

const tiers: AccessTier[] = [
  {
    name: "Basic",
    minTokens: 0,
    features: [
      "View deleted tweets (limited)",
      "Basic follower analysis",
      "5 API calls/day"
    ]
  },
  {
    name: "Holder",
    minTokens: 1000, // Example threshold
    features: [
      "Unlimited deleted tweet access",
      "Advanced follower analysis",
      "Real-time alerts",
      "1000 API calls/day",
      "Priority support"
    ]
  },
  {
    name: "Premium Holder",
    minTokens: 10000,
    features: [
      "All Holder features",
      "API access (unlimited)",
      "Custom alert rules",
      "Data export",
      "Dedicated support",
      "Governance voting rights"
    ]
  }
];
\`\`\`

### Community Governance

**DAO Structure** (Phase 2):
- Snapshot voting for proposals
- 1 token = 1 vote
- Quorum requirements for major decisions
- Proposal submission requirements

**Votable Items**:
- Feature prioritization
- Access tier thresholds
- API rate limits
- Treasury allocation
- Partnership decisions

### Token Links

- **Trade**: https://letsbonk.fun/token/[token_address]
- **Contract**: TBD
- **Liquidity Pool**: TBD

---

## Browser Extension

### Extension Architecture

\`\`\`
Extension/
├── manifest.json          # Extension configuration
├── background/
│   └── service-worker.js  # Background processes
├── content/
│   └── content-script.js  # Twitter page injection
├── popup/
│   ├── index.html
│   └── popup.js          # Extension popup UI
├── options/
│   └── options.html      # Settings page
└── assets/
    ├── icons/
    └── styles/
\`\`\`

### Manifest Configuration

\`\`\`json
{
  "manifest_version": 3,
  "name": "FourYourSafety",
  "version": "1.0.0",
  "description": "Crypto-Twitter intelligence tracker",
  "permissions": [
    "storage",
    "tabs",
    "https://twitter.com/*",
    "https://x.com/*"
  ],
  "background": {
    "service_worker": "background/service-worker.js"
  },
  "content_scripts": [
    {
      "matches": ["https://twitter.com/*", "https://x.com/*"],
      "js": ["content/content-script.js"],
      "run_at": "document_idle"
    }
  ],
  "action": {
    "default_popup": "popup/index.html",
    "default_icon": {
      "16": "assets/icons/icon16.png",
      "48": "assets/icons/icon48.png",
      "128": "assets/icons/icon128.png"
    }
  }
}
\`\`\`

### Features

1. **Real-time Monitoring**
   - Observes DOM mutations on Twitter
   - Captures tweets before deletion
   - Monitors profile changes

2. **Data Collection**
   - Stores data in browser local storage
   - Optional cloud sync
   - Encrypted sensitive data

3. **User Interface**
   - Popup for quick access
   - Options page for settings
   - Toast notifications for alerts

4. **Privacy Controls**
   - Opt-in/opt-out for specific tracking
   - Data retention settings
   - Export/delete personal data

### Installation Process

**Chrome Web Store**:
1. Visit extension page
2. Click "Add to Chrome"
3. Accept permissions
4. Configure settings

**Manual Installation** (Developer Mode):
1. Download from GitHub
2. Extract files
3. Open `chrome://extensions/`
4. Enable "Developer mode"
5. Click "Load unpacked"
6. Select extension folder

### Configuration

**Extension Settings**:
\`\`\`typescript
interface ExtensionSettings {
  apiKey: string;
  monitoring: {
    deletedTweets: boolean;
    profileChanges: boolean;
    followerChanges: boolean;
  };
  notifications: {
    enabled: boolean;
    sound: boolean;
    desktop: boolean;
  };
  storage: {
    maxTweets: number;
    retentionDays: number;
    cloudSync: boolean;
  };
}
\`\`\`

---

## Development Guide

### Prerequisites

- **Node.js**: 20.x or higher
- **npm** or **yarn**
- **Git**
- **VS Code** (recommended) with extensions:
  - ESLint
  - Prettier
  - Tailwind CSS IntelliSense
  - TypeScript and JavaScript Language Features

### Setup

1. **Clone and install**:
\`\`\`bash
git clone https://github.com/BonkGate-Labs/BonkGate-Extension.git
cd BonkGate-Extension
npm install
\`\`\`

2. **Environment setup**:
\`\`\`bash
cp .env.example .env.local
# Edit .env.local with your API keys
\`\`\`

3. **Run development server**:
\`\`\`bash
npm run dev
\`\`\`

### Code Style

**ESLint Configuration** (`.eslintrc.json`):
\`\`\`json
{
  "extends": [
    "next/core-web-vitals",
    "prettier"
  ],
  "rules": {
    "no-console": "warn",
    "@typescript-eslint/no-unused-vars": "error"
  }
}
\`\`\`

**Prettier Configuration** (`.prettierrc`):
\`\`\`json
{
  "semi": false,
  "singleQuote": false,
  "tabWidth": 2,
  "printWidth": 120,
  "trailingComma": "es5"
}
\`\`\`

### Git Workflow

**Branch Naming**:
- `feature/feature-name` - New features
- `fix/bug-description` - Bug fixes
- `refactor/component-name` - Code refactoring
- `docs/update-description` - Documentation updates

**Commit Messages**:
\`\`\`
feat: add deleted tweets filtering
fix: resolve API timeout issue
refactor: optimize tweet processing
docs: update API documentation
\`\`\`

### Testing

**Unit Tests** (coming soon):
\`\`\`bash
npm run test
npm run test:watch
\`\`\`

**E2E Tests** (coming soon):
\`\`\`bash
npm run test:e2e
\`\`\`

### Building

**Production Build**:
\`\`\`bash
npm run build
npm run start
\`\`\`

**Static Export**:
\`\`\`bash
npm run build
npm run export
\`\`\`

### Performance Optimization

**Image Optimization**:
- Use Next.js `<Image>` component
- Specify width and height
- Use WebP format where possible

**Code Splitting**:
- Dynamic imports for heavy components
- Route-based splitting (automatic with App Router)

**Caching Strategy**:
\`\`\`typescript
export const revalidate = 3600; // 1 hour
\`\`\`

---

## Deployment

### Vercel Deployment (Recommended)

1. **Connect GitHub**:
   - Import repository in Vercel dashboard
   - Configure environment variables
   - Deploy

2. **Environment Variables**:
\`\`\`
TOTO_API_KEY=your_api_key
NEXT_PUBLIC_APP_URL=https://yourdomain.com
\`\`\`

3. **Custom Domain**:
   - Add domain in project settings
   - Configure DNS records
   - Enable HTTPS

### Alternative Deployment

**Docker**:
\`\`\`dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
\`\`\`

**Build and Run**:
\`\`\`bash
docker build -t fouryoursafety .
docker run -p 3000:3000 fouryoursafety
\`\`\`

---

## Troubleshooting

### Common Issues

#### 1. API Connection Errors

**Problem**: Unable to connect to Toto API

**Solutions**:
- Check API key validity
- Verify network connectivity
- Check API rate limits
- Ensure CORS is properly configured

\`\`\`typescript
// Debug API calls
console.log("API Request:", {
  url: endpoint,
  headers: headers,
  body: payload
});
\`\`\`

#### 2. Build Failures

**Problem**: `npm run build` fails

**Solutions**:
- Clear `.next` folder: `rm -rf .next`
- Delete `node_modules`: `rm -rf node_modules`
- Reinstall dependencies: `npm install`
- Check TypeScript errors: `npm run type-check`

#### 3. Extension Not Loading

**Problem**: Browser extension doesn't load

**Solutions**:
- Check manifest.json syntax
- Verify file paths in manifest
- Clear extension cache
- Reload extension in developer mode

#### 4. Styling Issues

**Problem**: Tailwind classes not applying

**Solutions**:
- Ensure `globals.css` imports Tailwind directives
- Check `content` array in `tailwind.config.ts`
- Clear browser cache
- Restart dev server

### Debug Mode

Enable verbose logging:

\`\`\`typescript
// lib/debug.ts
export const DEBUG = process.env.NODE_ENV === 'development';

export function debug(...args: any[]) {
  if (DEBUG) {
    console.log('[DEBUG]', ...args);
  }
}
\`\`\`

Usage:
\`\`\`typescript
import { debug } from '@/lib/debug';

debug('Processing tweets:', tweets.length);
\`\`\`

### Performance Monitoring

**Vercel Analytics**:
\`\`\`typescript
// app/layout.tsx
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
\`\`\`

### Support Channels

- **GitHub Issues**: Report bugs and request features
- **Discord**: Community support (link in footer)
- **Email**: support@fouryoursafety.com
- **Documentation**: https://docs.bonkgate.fun/

---

## Contributing

### Contribution Guidelines

1. **Fork the repository**
2. **Create a feature branch**
3. **Make your changes**
4. **Write tests** (when applicable)
5. **Update documentation**
6. **Submit a pull request**

### Code of Conduct

- Be respectful and inclusive
- Follow the code style guidelines
- Write clear commit messages
- Test your changes thoroughly
- Keep PRs focused and concise

---

## License

**MIT License** (or specify your license)

Copyright (c) 2025 FourYourSafety

---

## Changelog

### Version 1.0.0 (Current)
- ✅ Core extension functionality
- ✅ Deleted tweet tracking
- ✅ Profile monitoring
- ✅ Follower analysis
- ✅ Web dashboard
- ✅ Studio tools (audio, image, text, video)

### Version 1.1.0 (Upcoming)
- 🔲 Real-time alerts
- 🔲 Token-gated access
- 🔲 API public access
- 🔲 Mobile app

---

## Contact

- **Website**: https://fouryoursafety.com
- **Twitter**: https://x.com/bonkgate
- **GitHub**: https://github.com/BonkGate-Labs
- **Discord**: [Join our community]
- **Email**: hello@fouryoursafety.com

---

*Documentation last updated: January 2025*
