export default class MessageService {
  private api_url: string = import.meta.env.VITE_API_URL

  constructor() {
  }

  sendMessage(message: string): Promise<Response> {
    return fetch(`${this.api_url}/api/message`, { 
      method: 'POST',
      body: JSON.stringify({
        sender: 'User',
        date: new Date().toLocaleString(),
        message: message
      }),
    })
  }
}
