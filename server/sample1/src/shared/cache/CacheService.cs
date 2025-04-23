using System;
using System.Text.Json;
using StackExchange.Redis;

namespace Sample1.Shared.Cache
{
    public class CacheService
    {
        private readonly IDatabase redisDb;
        private readonly TimeSpan defaultExpiry;

        public CacheService(IDatabase redisDb, TimeSpan defaultExpiry)
        {
            this.redisDb = redisDb;
            this.defaultExpiry = defaultExpiry;
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