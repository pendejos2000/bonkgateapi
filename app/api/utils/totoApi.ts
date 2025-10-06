export class TotoApi {
  private baseUrl: string

  constructor() {
    this.baseUrl = process.env.TOTO_API_URL || "https://api.toto.com"
  }

  async getBnbTokenInfo(contractAddress: string, query: Record<string, any> = {}) {
    try {
      const queryString = new URLSearchParams(
        Object.entries(query).reduce((acc, [key, value]) => {
          if (Array.isArray(value)) {
            value.forEach((v) => acc.append(key, String(v)))
          } else {
            acc.append(key, String(value))
          }
          return acc
        }, new URLSearchParams()),
      ).toString()

      const url = `${this.baseUrl}/bnb/token/info/${contractAddress}${queryString ? `?${queryString}` : ""}`

      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })

      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`)
      }

      return await response.json()
    } catch (error) {
      console.error("Error fetching BNB token info:", error)
      throw error
    }
  }

  async getFirstFollower(username: string) {
    try {
      const url = `${this.baseUrl}/graph/first_follower/${username}`

      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })

      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`)
      }

      return await response.json()
    } catch (error) {
      console.error("Error fetching first follower:", error)
      throw error
    }
  }

  async getScoredFollowers(username: string, query: Record<string, any> = {}) {
    try {
      const queryString = new URLSearchParams(query as any).toString()
      const url = `${this.baseUrl}/graph/scored_followers/${username}${queryString ? `?${queryString}` : ""}`

      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })

      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`)
      }

      return await response.json()
    } catch (error) {
      console.error("Error fetching scored followers:", error)
      throw error
    }
  }

  async getBioHistory(username: string) {
    try {
      const url = `${this.baseUrl}/metadata/bio_history/${username}`

      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })

      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`)
      }

      return await response.json()
    } catch (error) {
      console.error("Error fetching bio history:", error)
      throw error
    }
  }

  async getDeletedTweets(username: string) {
    try {
      const url = `${this.baseUrl}/metadata/deleted_tweets/${username}`

      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })

      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`)
      }

      return await response.json()
    } catch (error) {
      console.error("Error fetching deleted tweets:", error)
      throw error
    }
  }

  async getPastUsernames(username: string) {
    try {
      const url = `${this.baseUrl}/metadata/past_usernames/${username}`

      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })

      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`)
      }

      return await response.json()
    } catch (error) {
      console.error("Error fetching past usernames:", error)
      throw error
    }
  }
}
