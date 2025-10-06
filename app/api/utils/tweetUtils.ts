interface Tweet {
  id: string
  text: string
  created_at: string
  user: {
    id: string
    username: string
    name: string
  }
}

export function formatTweet(tweet: any): Tweet {
  return {
    id: tweet.id || tweet.tweet_id || "",
    text: tweet.text || tweet.full_text || "",
    created_at: tweet.created_at || new Date().toISOString(),
    user: {
      id: tweet.user?.id || tweet.user_id || "",
      username: tweet.user?.username || tweet.username || "",
      name: tweet.user?.name || tweet.name || "",
    },
  }
}

export function formatTweets(tweets: any[]): Tweet[] {
  if (!Array.isArray(tweets)) return []
  return tweets.map(formatTweet)
}

export function filterDeletedTweets(tweets: any[]): any[] {
  if (!Array.isArray(tweets)) return []
  return tweets.filter((tweet) => tweet.is_deleted || tweet.deleted)
}

export function sortTweetsByDate(tweets: any[], ascending = false): any[] {
  if (!Array.isArray(tweets)) return []

  return [...tweets].sort((a, b) => {
    const dateA = new Date(a.created_at).getTime()
    const dateB = new Date(b.created_at).getTime()
    return ascending ? dateA - dateB : dateB - dateA
  })
}

export function extractHashtags(text: string): string[] {
  const hashtagRegex = /#(\w+)/g
  const matches = text.match(hashtagRegex)
  return matches ? matches.map((tag) => tag.slice(1)) : []
}

export function extractMentions(text: string): string[] {
  const mentionRegex = /@(\w+)/g
  const matches = text.match(mentionRegex)
  return matches ? matches.map((mention) => mention.slice(1)) : []
}

export function extractUrls(text: string): string[] {
  const urlRegex = /(https?:\/\/[^\s]+)/g
  const matches = text.match(urlRegex)
  return matches || []
}

export function truncateTweet(text: string, maxLength = 280): string {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength - 3) + "..."
}
