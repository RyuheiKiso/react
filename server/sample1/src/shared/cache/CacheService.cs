using System;
using System.Text.Json;
using StackExchange.Redis;
using Sample1.Shared.Utils;

namespace Sample1.Shared.Cache
{
    public class CacheService
    {
        private readonly IDatabase redisDb;
        private readonly TimeSpan defaultExpiry;

        public CacheService(ConfigManager configManager)
        {
            var cfg = configManager.LoadConfig("config/cache.yaml");
            var connection = cfg["connectionString"]?.ToString() ?? throw new InvalidOperationException("Cache connectionString not found");
            defaultExpiry = TimeSpan.FromSeconds(Convert.ToInt32(cfg["expirySeconds"] ?? 60));
            var mux = ConnectionMultiplexer.Connect(connection);
            redisDb = mux.GetDatabase();
        }

        public void Set<T>(string key, T data, TimeSpan? expiry = null)
        {
            var json = JsonSerializer.Serialize(data);
            var ttl = expiry ?? defaultExpiry;
            redisDb.StringSet(key, json, ttl);
        }

        public T? Get<T>(string key)
        {
            var val = redisDb.StringGet(key);
            if (val.IsNullOrEmpty) return default;
            return JsonSerializer.Deserialize<T>(val!);
        }

        public void Remove(string key)
        {
            redisDb.KeyDelete(key);
        }
    }
}