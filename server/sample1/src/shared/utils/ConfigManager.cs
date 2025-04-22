using System;
using System.Collections.Generic;
using System.IO;
using YamlDotNet.Serialization;
using YamlDotNet.Serialization.NamingConventions;

namespace Sample1.Shared.Utils
{
    public class ConfigManager
    {
        private const string DEFAULT_CONFIG_PATH = "config/serverSettings.yaml";
        private readonly Dictionary<string, object> configCache = new Dictionary<string, object>();
        private readonly IDeserializer deserializer;

        public ConfigManager()
        {
            deserializer = new DeserializerBuilder()
                .WithNamingConvention(CamelCaseNamingConvention.Instance)
                .Build();
        }

        /// <summary>
        /// YAML設定ファイルを読み込み、Dictionaryとして返す。
        /// </summary>
        public Dictionary<string, object> LoadConfig(string filepath = DEFAULT_CONFIG_PATH)
        {
            if (configCache.TryGetValue(filepath, out var cached) && cached is Dictionary<string, object> dict)
                return dict;
            var yaml = File.ReadAllText(filepath);
            var configDict = deserializer.Deserialize<Dictionary<string, object>>(yaml);
            configCache[filepath] = configDict;
            return configDict;
        }

        /// <summary>
        /// 指定キーの設定値を返す。存在しない場合は例外をスローする。
        /// </summary>
        public T GetConfig<T>(string key, string filepath = DEFAULT_CONFIG_PATH)
        {
            var dict = LoadConfig(filepath);
            if (dict.TryGetValue(key, out var val))
                return (T)Convert.ChangeType(val, typeof(T));
            throw new KeyNotFoundException($"Config key '{key}' not found in {filepath}.");
        }
    }
}