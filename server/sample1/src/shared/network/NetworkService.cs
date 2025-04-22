using System;
using System.Net;
using System.Net.Http;
using System.Net.WebSockets;
using System.Text;
using System.Threading;
using Grpc.Net.Client;
using Sample1.Shared.Utils;

namespace Sample1.Shared.Network
{
    public class NetworkService
    {
        private const int DEFAULT_TIMEOUT = 30; // デフォルトのタイムアウト（秒）

        public NetworkService(ConfigManager configManager)
        {
            // ConfigManagerを使用して初期化処理を追加
            Console.WriteLine("NetworkService initialized with ConfigManager.");
        }

        public void SendRequest(string endpoint, string payload, string method = "GET")
        {
            using var client = new HttpClient();
            client.Timeout = TimeSpan.FromSeconds(DEFAULT_TIMEOUT);

            HttpRequestMessage request = new HttpRequestMessage(new HttpMethod(method), endpoint)
            {
                Content = new StringContent(payload, Encoding.UTF8, "application/json")
            };

            try
            {
                var response = client.Send(request);
                Console.WriteLine($"Response: {response.StatusCode}");
            }
            catch (Exception ex)
            {
                Console.Error.WriteLine($"Error during request: {ex.Message}");
            }
        }

        public void SendGrpcRequest(string endpoint, string payload)
        {
            using var channel = GrpcChannel.ForAddress(endpoint);
            // gRPC通信の実装例
            Console.WriteLine("gRPC request sent to " + endpoint);
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