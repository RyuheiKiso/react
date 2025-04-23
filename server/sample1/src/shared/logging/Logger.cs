using System;
using System.IO;
using System.Collections.Generic;

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

        public Logger(string logFilePath, string minLevel = LOG_LEVEL_INFO)
        {
            this.logFilePath = logFilePath;
            this.minLevel = minLevel;
            levelPriority = new Dictionary<string, int>
            {
                { LOG_LEVEL_ERROR, 0 },
                { LOG_LEVEL_INFO, 1 },
                { LOG_LEVEL_DEBUG, 2 }
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