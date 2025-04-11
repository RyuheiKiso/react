// WebSocketクライアントロジック
export function createWebSocketClient(url: string) {
    const socket = new WebSocket(url);
    socket.onopen = () => console.log('WebSocket connected');
    socket.onmessage = (event) => console.log('Message received:', event.data);
    return socket;
}
