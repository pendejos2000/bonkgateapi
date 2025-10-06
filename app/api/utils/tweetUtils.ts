export interface Tweet {
  id: string
  text: string
  created_at: string
  author_id: string
  public_metrics?: {
    retweet_count: number
    reply_count: number
    like_count: number
    quote_count: number
  }
}

export interface TweetData {
  data: Tweet[]
  meta?: {
    result_count: number
    next_token?: string
  }
}

export function formatTweetDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  })
}

export function extractHashtags(text: string): string[] {
  const hashtags = text.match(/#\w+/g)
  return hashtags ? hashtags.map((tag) => tag.slice(1)) : []
}

export function extractMentions(text: string): string[] {
  const mentions = text.match(/@\w+/g)
  return mentions ? mentions.map((mention) => mention.slice(1)) : []
}

export function truncateTweet(text: string, maxLength = 280): string {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength - 3) + "..."
}
