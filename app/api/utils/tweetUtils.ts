export interface Tweet {
  id: string
  text: string
  author: {
    id: string
    username: string
    name: string
  }
  created_at: string
  metrics?: {
    retweet_count: number
    reply_count: number
    like_count: number
    quote_count: number
  }
}

export interface TweetAnalysis {
  sentiment: "positive" | "negative" | "neutral"
  score: number
  keywords: string[]
}

export function analyzeTweetSentiment(tweet: Tweet): TweetAnalysis {
  const text = tweet.text.toLowerCase()

  // Simple sentiment analysis based on keywords
  const positiveWords = ["good", "great", "awesome", "excellent", "amazing", "love", "best", "wonderful"]
  const negativeWords = ["bad", "terrible", "awful", "worst", "hate", "horrible", "poor", "disappointing"]

  let score = 0
  const keywords: string[] = []

  positiveWords.forEach((word) => {
    if (text.includes(word)) {
      score += 1
      keywords.push(word)
    }
  })

  negativeWords.forEach((word) => {
    if (text.includes(word)) {
      score -= 1
      keywords.push(word)
    }
  })

  let sentiment: "positive" | "negative" | "neutral" = "neutral"
  if (score > 0) sentiment = "positive"
  else if (score < 0) sentiment = "negative"

  return {
    sentiment,
    score,
    keywords,
  }
}

export function extractHashtags(text: string): string[] {
  const hashtagRegex = /#[\w]+/g
  return text.match(hashtagRegex) || []
}

export function extractMentions(text: string): string[] {
  const mentionRegex = /@[\w]+/g
  return text.match(mentionRegex) || []
}

export function extractUrls(text: string): string[] {
  const urlRegex = /(https?:\/\/[^\s]+)/g
  return text.match(urlRegex) || []
}

export function formatTweetDate(dateString: string): string {
  const date = new Date(dateString)
  const now = new Date()
  const diffInMs = now.getTime() - date.getTime()
  const diffInMinutes = Math.floor(diffInMs / 60000)
  const diffInHours = Math.floor(diffInMs / 3600000)
  const diffInDays = Math.floor(diffInMs / 86400000)

  if (diffInMinutes < 1) return "Just now"
  if (diffInMinutes < 60) return `${diffInMinutes}m ago`
  if (diffInHours < 24) return `${diffInHours}h ago`
  if (diffInDays < 7) return `${diffInDays}d ago`

  return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
}

export function truncateTweet(text: string, maxLength = 280): string {
  if (text.length <= maxLength) return text
  return text.substring(0, maxLength - 3) + "..."
}
