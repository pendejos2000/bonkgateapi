export class TotoApi {
  private baseUrl: string

  constructor() {
    this.baseUrl = process.env.TOTO_API_URL || "https://api.toto.com"
  }

  async fetchUserData(username: string) {
    try {
      const response = await fetch(`${this.baseUrl}/user/${username}`, {
        headers: {
          "Content-Type": "application/json",
        },
      })

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`)
      }

      return await response.json()
    } catch (error) {
      console.error("Error fetching user data:", error)
      throw error
    }
  }

  async fetchFollowers(username: string) {
    try {
      const response = await fetch(`${this.baseUrl}/followers/${username}`, {
        headers: {
          "Content-Type": "application/json",
        },
      })

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`)
      }

      return await response.json()
    } catch (error) {
      console.error("Error fetching followers:", error)
      throw error
    }
  }

  async fetchBioHistory(username: string) {
    try {
      const response = await fetch(`${this.baseUrl}/bio-history/${username}`, {
        headers: {
          "Content-Type": "application/json",
        },
      })

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`)
      }

      return await response.json()
    } catch (error) {
      console.error("Error fetching bio history:", error)
      throw error
    }
  }

  async fetchDeletedTweets(username: string) {
    try {
      const response = await fetch(`${this.baseUrl}/deleted-tweets/${username}`, {
        headers: {
          "Content-Type": "application/json",
        },
      })

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`)
      }

      return await response.json()
    } catch (error) {
      console.error("Error fetching deleted tweets:", error)
      throw error
    }
  }

  async fetchPastUsernames(username: string) {
    try {
      const response = await fetch(`${this.baseUrl}/past-usernames/${username}`, {
        headers: {
          "Content-Type": "application/json",
        },
      })

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`)
      }

      return await response.json()
    } catch (error) {
      console.error("Error fetching past usernames:", error)
      throw error
    }
  }

  async fetchTokenInfo(contractAddress: string) {
    try {
      const response = await fetch(`${this.baseUrl}/token/${contractAddress}`, {
        headers: {
          "Content-Type": "application/json",
        },
      })

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`)
      }

      return await response.json()
    } catch (error) {
      console.error("Error fetching token info:", error)
      throw error
    }
  }
}
