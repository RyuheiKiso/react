namespace Sample1.Shared.Utils
{
    public class IpManager
    {
        private const string DEFAULT_IP = "127.0.0.1";
        private List<string> ipList = new List<string>();

        public string GetClientIp(HttpContext context)
        {
            var clientIp = context.Connection.RemoteIpAddress?.ToString();
            return clientIp ?? DEFAULT_IP;
        }

        public void AddIpToList(string ip)
        {
            if (!ipList.Contains(ip))
            {
                ipList.Add(ip);
                Console.WriteLine($"IP added: {ip}");
            }
            else
            {
                Console.WriteLine($"IP already exists: {ip}");
            }
        }
    }

    public static class IpManagerExtensions
    {
        public static void MapClientIpEndpoint(this WebApplication app)
        {
            app.MapGet("/api/client-ip", (HttpContext context) =>
            {
                var ipManager = context.RequestServices.GetRequiredService<IpManager>();
                var clientIp = ipManager.GetClientIp(context);
                return Results.Json(new { ip = clientIp });
            });
        }
    }
}