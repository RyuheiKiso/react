using StackExchange.Redis;
using Sample1.Shared.Cache;
using Sample1.Shared.Database;
using Sample1.Shared.Logging;
using Sample1.Shared.Network;
using Sample1.Shared.Security;
using Sample1.Shared.Utils;

namespace Sample1.Shared.Base
{
    public class BaseAPI
    {
        protected CacheService? CacheService { get; private set; }
        protected DatabaseHandler? DatabaseHandler { get; private set; }
        protected Logger? Logger { get; private set; }
        protected NetworkService? NetworkService { get; private set; }
        protected SecurityManager? SecurityManager { get; private set; }
        protected ConfigManager? ConfigManager { get; private set; }

        /// <summary>
        /// 各種サービスをConfigManager経由で初期化する。
        /// </summary>
        public BaseAPI(ConfigManager configManager, IDatabase redisDb, TimeSpan cacheExpiry, string dbProvider, string dbHost, int dbPort, string dbName, string dbUser, string dbPassword, string logFilePath, HttpClient httpClient)
        {
            ConfigManager = configManager;
            CacheService = new CacheService(redisDb, cacheExpiry);
            DatabaseHandler = new DatabaseHandler(dbProvider, dbHost, dbPort, dbName, dbUser, dbPassword);
            Logger = new Logger(logFilePath);
            NetworkService = new NetworkService(httpClient);
            SecurityManager = new SecurityManager(configManager);
        }
    }
}