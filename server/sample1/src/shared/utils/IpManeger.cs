using System;
using System.Collections.Generic;
using System.Net.Http;

namespace Sample1.Shared.Utils
{
    public class IpManager
    {
        private const string DEFAULT_IP = "127.0.0.1";
        private List<string> ipList = new List<string>();
        private string currentIp = DEFAULT_IP;

        public string GetCurrentIp()
        {
            try
            {
                using var client = new HttpClient();
                var response = client.GetStringAsync("https://api.ipify.org").Result;
                currentIp = response;
                return currentIp;
            }
            catch (Exception ex)
            {
                Console.Error.WriteLine($"Error fetching IP: {ex.Message}");
                return DEFAULT_IP;
            }
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
}