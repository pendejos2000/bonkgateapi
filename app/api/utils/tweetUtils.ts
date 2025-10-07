export interface Tweet {
    id: string;
    text: string;
    [key: string]: any;
  }
   
  export interface TweetResponse {
    tweets: Tweet[];
    count: number;
    [key: string]: any;
  }
   
  /**
   * Filters tweets containing Ethereum addresses
   */
  export function filterTweetsWithAddresses(tweets: Tweet[]): Tweet[] {
    // Match 0x followed by 40 hex characters (standard Ethereum address format)
    const pattern = /0x[a-fA-F0-9]{40}/;
   
    return tweets.filter(tweet => {
      const text = tweet.text || '';
      return pattern.test(text);
    });
  }
   
  /**
   * Combines two lists of tweets and removes duplicates based on ID
   */
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
   
  /**
   * Processes deleted and latest tweets according to business logic
   */
  export function processTweets(deletedResult: TweetResponse, latestResult: TweetResponse): TweetResponse {
    // Extract tweets from both results
    const deletedTweets = deletedResult.tweets || [];
    const latestTweets = latestResult.tweets || [];
   
    // Filter deleted tweets containing Ethereum addresses
    const filteredDeleted = filterTweetsWithAddresses(deletedTweets);
   
    // Combine both lists and remove duplicates
    const uniqueTweets = combineTweets(filteredDeleted, latestTweets);
   
    // Create the combined result
    const result: TweetResponse = {
      tweets: uniqueTweets,
      count: uniqueTweets.length
    };
   
    // Copy other fields from the original response
    for (const key in deletedResult) {
      if (key !== 'tweets' && key !== 'count') {
        result[key] = deletedResult[key];
      }
    }
   
    return result;
  }
