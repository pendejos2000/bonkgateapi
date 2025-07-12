interface ApiResponse {
    [key: string]: any;
  }
  
  export class TotoApi {
    private readonly BASE_URL = "https://toto.oz.xyz/api";
    private readonly API_KEY = "0c33e8e7087afdcf3fded8a539e1c1e8";
    private readonly headers: HeadersInit;
  
    constructor() {
      this.headers = {
        "accept": "application/json",
        "x-api-key": this.API_KEY,
        "Content-Type": "application/json"
      };
    }
  
    async getFirstFollowers(user: string, how: string = "username", page: number = 1): Promise<ApiResponse> {
      const url = `${this.BASE_URL}/graph/get_first_followers`;
      const payload = {
        user,
        how,
        page
      };
      
      const response = await fetch(url, {
        method: 'POST',
        headers: this.headers,
        body: JSON.stringify(payload)
      });
      
      return await response.json();
    }
  
    async getBioHistory(user: string, how: string = "username", page: number = 1): Promise<ApiResponse> {
      const url = `${this.BASE_URL}/metadata/get_bio_history`;
      const payload = {
        user,
        how,
        page
      };
      
      const response = await fetch(url, {
        method: 'POST',
        headers: this.headers,
        body: JSON.stringify(payload)
      });
      
      return await response.json();
    }
  
    async getPastUsernames(user: string, how: string = "username", page: number = 1): Promise<ApiResponse> {
      const url = `${this.BASE_URL}/metadata/get_past_usernames`;
      const payload = {
        user,
        how,
        page
      };
      
      const response = await fetch(url, {
        method: 'POST',
        headers: this.headers,
        body: JSON.stringify(payload)
      });
      
      return await response.json();
    }
  
    async getDeletedTweets(user: string, how: string = "username", page: number = 1): Promise<ApiResponse> {
      const url = `${this.BASE_URL}/metadata/get_deleted_tweets`;
      const payload = {
        user,
        how,
        page
      };
      
      const response = await fetch(url, {
        method: 'POST',
        headers: this.headers,
        body: JSON.stringify(payload)
      });
      
      return await response.json();
    }
  
    async getLatestTweets(user: string, how: string = "username", page: number = 1): Promise<ApiResponse> {
      const url = `${this.BASE_URL}/metadata/get_latest_tweets`;
      const payload = {
        user,
        how,
        page
      };
      
      const response = await fetch(url, {
        method: 'POST',
        headers: this.headers,
        body: JSON.stringify(payload)
      });
      
      return await response.json();
    }
  
    async getScoredFollowers(user: string, how: string = "username", page: number = 1): Promise<ApiResponse> {
      const url = `${this.BASE_URL}/graph/get_scored_followers`;
      const payload = {
        user,
        how,
        page
      };
      
      const response = await fetch(url, {
        method: 'POST',
        headers: this.headers,
        body: JSON.stringify(payload)
      });
      
      return await response.json();
    }
  }
  
  // Helper function to filter out current_credits from responses
  export function filterCredits(responseData: ApiResponse): ApiResponse {
    if (responseData && 'current_credits' in responseData) {
      const { current_credits, ...rest } = responseData;
      return rest;
    }
    return responseData;
  }