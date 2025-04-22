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
            var dbConfig = configManager.GetDatabaseConfig();
            var connStr = $"Host={dbConfig.Connection?.Host};Port={dbConfig.Connection?.Port};Database={dbConfig.Connection?.Database};Username={dbConfig.Connection?.Username};Password={dbConfig.Connection?.Password}";
            dbConnection = dbConfig.Provider?.ToLower() switch
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