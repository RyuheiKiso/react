using System;
using System.IO;
using Sample1.Shared.Utils;

namespace Sample1.Shared.Logging
{
    public class Logger
    {
        private const string LOG_LEVEL_ERROR = "ERROR";
        private const string LOG_LEVEL_INFO = "INFO";
        private const string LOG_LEVEL_DEBUG = "DEBUG";

        private readonly string logFilePath;
        private readonly string minLevel;
        private readonly Dictionary<string, int> levelPriority;

        public Logger(ConfigManager configManager)
        {
            try
            {
                var cfg = configManager.LoadConfig("config/logging.yaml");
                logFilePath = cfg["filePath"]?.ToString() ?? "logs/app.log";
                minLevel = cfg["minLevel"]?.ToString() ?? LOG_LEVEL_INFO;
            }
            catch (Exception ex)
            {
                // デフォルト値を使用し、エラーをログに記録
                logFilePath = "logs/app.log";
                minLevel = LOG_LEVEL_INFO;
                Console.Error.WriteLine($"[Logger Initialization Error] {ex.Message}");
            }

            levelPriority = new Dictionary<string, int>
            {
                {LOG_LEVEL_ERROR, 3},
                {LOG_LEVEL_INFO, 2},
                {LOG_LEVEL_DEBUG, 1}
            };
        }

        public void Log(string message, string level = LOG_LEVEL_INFO)
        {
            if (!levelPriority.TryGetValue(level, out var prio) || prio < levelPriority[minLevel])
                return;

            var logEntry = $"[{DateTime.UtcNow:O}] [{level}] {message}";
            var dir = Path.GetDirectoryName(logFilePath);

            try
            {
                if (!string.IsNullOrEmpty(dir) && !Directory.Exists(dir))
                    Directory.CreateDirectory(dir);

                File.AppendAllText(logFilePath, logEntry + Environment.NewLine);
            }
            catch (Exception ex)
            {
                // ファイル書き込みエラー時の処理
                Console.Error.WriteLine($"[Log Write Error] {ex.Message}");
            }
        }
    }
}