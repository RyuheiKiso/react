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
        /// デフォルトConfigManagerを使用してBaseAPIを初期化します。
        /// </summary>
        public BaseAPI() : this(new ConfigManager()) { }
        
        /// <summary>
        /// 各種サービスをConfigManager経由で初期化する。
        /// </summary>
        public BaseAPI(ConfigManager configManager)
        {
            ConfigManager = configManager;
            CacheService = new CacheService(configManager);
            DatabaseHandler = new DatabaseHandler(configManager);
            Logger = new Logger(configManager);
            NetworkService = new NetworkService(configManager);
            SecurityManager = new SecurityManager(configManager);
        }
    }
}