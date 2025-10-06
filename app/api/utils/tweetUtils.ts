export interface Tweet {
  id: string
  text: string
  created_at: string
  author_id?: string
  public_metrics?: {
    retweet_count: number
    reply_count: number
    like_count: number
    quote_count: number
  }
}

export interface TweetResponse {
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
  })
}

export function formatTweetText(text: string, maxLength = 280): string {
  if (text.length <= maxLength) return text
  return text.substring(0, maxLength - 3) + "..."
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

export function calculateEngagementRate(tweet: Tweet): number {
  if (!tweet.public_metrics) return 0

  const { retweet_count, reply_count, like_count, quote_count } = tweet.public_metrics
  const totalEngagement = retweet_count + reply_count + like_count + quote_count

  return totalEngagement
}

export function sortTweetsByEngagement(tweets: Tweet[]): Tweet[] {
  return tweets.sort((a, b) => {
    const engagementA = calculateEngagementRate(a)
    const engagementB = calculateEngagementRate(b)
    return engagementB - engagementA
  })
}

export function filterTweetsByDate(tweets: Tweet[], startDate: Date, endDate: Date): Tweet[] {
  return tweets.filter((tweet) => {
    const tweetDate = new Date(tweet.created_at)
    return tweetDate >= startDate && tweetDate <= endDate
  })
}

export function groupTweetsByDate(tweets: Tweet[]): Record<string, Tweet[]> {
  return tweets.reduce(
    (acc, tweet) => {
      const date = formatTweetDate(tweet.created_at)
      if (!acc[date]) {
        acc[date] = []
      }
      acc[date].push(tweet)
      return acc
    },
    {} as Record<string, Tweet[]>,
  )
}
