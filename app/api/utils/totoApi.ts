export class TotoApi {
  private baseUrl: string
  private apiKey: string

  constructor() {
    this.baseUrl = process.env.TOTO_API_URL || "https://toto.oz.xyz/api"
    this.apiKey = process.env.TOTO_API_KEY || "0c33e8e7087afdcf3fded8a539e1c1e8"
  }

  private async makeRequest(endpoint: string, body: any) {
    try {
      const response = await fetch(`${this.baseUrl}${endpoint}`, {
        method: "POST",
        headers: {
          "accept": "application/json",
          "Content-Type": "application/json",
          "x-api-key": this.apiKey,
        },
        body: JSON.stringify(body),
      })

      const responseText = await response.text()

      if (!response.ok) {
        console.error(`API error ${response.status}. Response body:`, responseText)
        throw new Error(`API error: ${response.status} - ${responseText.substring(0, 200)}`)
      }

      try {
        return JSON.parse(responseText)
      } catch (jsonError) {
        console.error("Failed to parse JSON. Response text:", responseText)
        throw new Error(`Invalid JSON response: ${responseText.substring(0, 200)}`)
      }
    } catch (error) {
      console.error(`Error calling ${endpoint}:`, error)
      throw error
    }
  }

  async fetchCurrentMetadata(username: string, page: number = 1) {
    return this.makeRequest("/metadata/get_current_metadata", {
      user: username,
      how: "username",
      page,
    })
  }

  async fetchLatestMetadata(username: string, page: number = 1) {
    return this.makeRequest("/metadata/get_latest_metadata", {
      user: username,
      how: "username",
      page,
    })
  }

  // Graph API - Get actual follower list (not just count)
  async fetchFollowers(username: string, page: number = 1) {
    return this.makeRequest("/graph/get_first_followers", {
      user: username,
      how: "username",
      page,
      with_pfp: true
    })
  }

  // Graph API - Get scored followers (top 20 highest-scoring)
  async fetchScoredFollowers(username: string, page: number = 1) {
    return this.makeRequest("/graph/get_scored_followers", {
      user: username,
      how: "username",
      page,
      with_pfp: true
    })
  }

  async fetchFollowerCount(username: string, page: number = 1) {
    return this.makeRequest("/metadata/get_follower_count", {
      user: username,
      how: "username",
      page,
    })
  }

  async fetchBioHistory(username: string, page: number = 1) {
    return this.makeRequest("/metadata/get_bio_history", {
      user: username,
      how: "username",
      page,
    })
  }

  async fetchDeletedTweets(username: string, page: number = 1) {
    return this.makeRequest("/metadata/get_deleted_tweets", {
      user: username,
      how: "username",
      page,
    })
  }

  async fetchLatestTweets(username: string, page: number = 1) {
    return this.makeRequest("/metadata/get_latest_tweets", {
      user: username,
      how: "username",
      page,
    })
  }

  async fetchTweets(username: string, page: number = 1) {
    return this.makeRequest("/metadata/get_tweets", {
      user: username,
      how: "username",
      page,
    })
  }

  async fetchPastUsernames(username: string, page: number = 1) {
    return this.makeRequest("/metadata/get_past_usernames", {
      user: username,
      how: "username",
      page,
    })
  }

  async fetchMetadataHistory(username: string, page: number = 1) {
    return this.makeRequest("/metadata/get_metadata_history", {
      user: username,
      how: "username",
      page,
    })
  }

  async fetchUserId(username: string, page: number = 1) {
    return this.makeRequest("/metadata/get_userid", {
      user: username,
      how: "username",
      page,
    })
  }

  async fetchUserMentionedContracts(username: string, chain?: string, page: number = 1) {
    const body: any = {
      user: username,
      how: "username",
      page,
    }
    if (chain) {
      body.chain = chain
    }
    return this.makeRequest("/metadata/get_user_mentioned_contracts", body)
  }

  async fetchTweetsByIds(tweetIds: string) {
    return this.makeRequest("/metadata/get_tweets_by_ids", {
      tweet_ids: tweetIds,
    })
  }

  async fetchCurrentNumTweets(username: string, page: number = 1) {
    return this.makeRequest("/metadata/get_current_num_tweets", {
      user: username,
      how: "username",
      page,
    })
  }

  async fetchCurrentNumFollowing(username: string, page: number = 1) {
    return this.makeRequest("/metadata/get_current_num_following", {
      user: username,
      how: "username",
      page,
    })
  }

  async fetchCurrentNumFollowers(username: string, page: number = 1) {
    return this.makeRequest("/metadata/get_current_num_followers", {
      user: username,
      how: "username",
      page,
    })
  }

  // Token info endpoint - not documented in Toto API, might be a separate service
  async fetchTokenInfo(contractAddress: string) {
    // This endpoint structure is a placeholder - update based on actual API
    return this.makeRequest("/token/info", {
      contract_address: contractAddress,
    })
  }
}
