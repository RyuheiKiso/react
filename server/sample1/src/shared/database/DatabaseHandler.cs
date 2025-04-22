using System;
using System.Data;
using Microsoft.Data.SqlClient;
using Npgsql;
using Sample1.Shared.Utils;

namespace Sample1.Shared.Database
{
    public class DatabaseHandler
    {
        private readonly IDbConnection dbConnection;

        public DatabaseHandler(ConfigManager configManager)
        {
            var cfg = configManager.LoadConfig("config/database.yaml");
            var provider = cfg["provider"]?.ToString()?.ToLower() ?? "sqlserver";
            var connStr = cfg["connectionString"]?.ToString() ?? throw new InvalidOperationException("connectionString not found in database.yaml");
            dbConnection = provider switch
            {
                "postgresql" or "postgres" => new NpgsqlConnection(connStr),
                _ => new SqlConnection(connStr)
            };
            dbConnection.Open();
        }

        public IDbConnection Connection => dbConnection;

        public void Connect()
        {
            if (dbConnection.State != ConnectionState.Open)
                dbConnection.Open();
        }

        public void Close()
        {
            if (dbConnection.State != ConnectionState.Closed)
                dbConnection.Close();
        }

        public IDbTransaction BeginTransaction()
        {
            if (dbConnection.State != ConnectionState.Open)
            {
                Connect();
            }
            return dbConnection.BeginTransaction();
        }

        public void CommitTransaction(IDbTransaction transaction)
        {
            transaction?.Commit();
            transaction?.Dispose();
        }

        public void RollbackTransaction(IDbTransaction transaction)
        {
            transaction?.Rollback();
            transaction?.Dispose();
        }
    }
}