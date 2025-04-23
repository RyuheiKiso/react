using System;
using System.Collections.Generic;

namespace Sample1.Shared.Utils
{
    public class DatabaseConfig
    {
        public string Provider { get; set; } = "";
        public ConnectionConfig Connection { get; set; } = new ConnectionConfig();
        public RetryPolicyConfig RetryPolicy { get; set; } = new RetryPolicyConfig();
    }

    public class ConnectionConfig
    {
        public string Host { get; set; } = "";
        public int Port { get; set; }
        public string Database { get; set; } = "";
        public string Username { get; set; } = "";
        public string Password { get; set; } = "";
    }

    public class RetryPolicyConfig
    {
        public int MaxRetries { get; set; }
        public int DelaySeconds { get; set; }
    }
}
