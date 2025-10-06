interface Tweet {
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

interface User {
  id: string
  username: string
  name: string
  profile_image_url?: string
  verified?: boolean
}

export function formatTweet(tweet: Tweet): string {
  return `${tweet.text} (${new Date(tweet.created_at).toLocaleDateString()})`
}

export function formatUser(user: User): string {
  return `@${user.username} (${user.name})`
}

export function calculateEngagement(tweet: Tweet): number {
  if (!tweet.public_metrics) return 0

  const { retweet_count, reply_count, like_count, quote_count } = tweet.public_metrics
  return retweet_count + reply_count + like_count + quote_count
}

export function sortTweetsByEngagement(tweets: Tweet[]): Tweet[] {
  return tweets.sort((a, b) => calculateEngagement(b) - calculateEngagement(a))
}

export function filterDeletedTweets(tweets: Tweet[], deletedIds: string[]): Tweet[] {
  return tweets.filter((tweet) => !deletedIds.includes(tweet.id))
}

export function extractHashtags(text: string): string[] {
  const hashtagRegex = /#[\w]+/g
  return text.match(hashtagRegex) || []
}

export function extractMentions(text: string): string[] {
  const mentionRegex = /@[\w]+/g
  return text.match(mentionRegex) || []
}

export function truncateText(text: string, maxLength = 280): string {
  if (text.length <= maxLength) return text
  return text.substring(0, maxLength - 3) + "..."
}
