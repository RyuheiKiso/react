using System;
using System.Net;
using System.Net.Http;
using System.Net.WebSockets;
using System.Text;
using System.Threading;

namespace Sample1.Shared.Network
{
    public class NetworkService
    {
        private const int DEFAULT_TIMEOUT = 30; // デフォルトのタイムアウト（秒）
        private readonly HttpClient _httpClient;

        public NetworkService(HttpClient httpClient)
        {
            _httpClient = httpClient;
            _httpClient.Timeout = TimeSpan.FromSeconds(DEFAULT_TIMEOUT);
        }

        public void SendRequest(string endpoint, string payload, string method = "GET")
        {
            HttpRequestMessage request = new HttpRequestMessage(new HttpMethod(method), endpoint)
            {
                Content = new StringContent(payload, Encoding.UTF8, "application/json")
            };

            try
            {
                var response = _httpClient.Send(request);
                Console.WriteLine($"Response: {response.StatusCode}");
            }
            catch (Exception ex)
            {
                Console.Error.WriteLine($"Error during request: {ex.Message}");
            }
        }

        public async Task SendWebSocketRequest(string endpoint, string payload)
        {
            using var client = new ClientWebSocket();
            await client.ConnectAsync(new Uri(endpoint), CancellationToken.None);

            var buffer = Encoding.UTF8.GetBytes(payload);
            await client.SendAsync(new ArraySegment<byte>(buffer), WebSocketMessageType.Text, true, CancellationToken.None);

            var receiveBuffer = new byte[1024];
            var result = await client.ReceiveAsync(new ArraySegment<byte>(receiveBuffer), CancellationToken.None);
            Console.WriteLine("WebSocket response: " + Encoding.UTF8.GetString(receiveBuffer, 0, result.Count));
        }
    }
}