using System;
using System.Data;
using Microsoft.Data.SqlClient;
using Npgsql;

namespace Sample1.Shared.Database
{
    public class DatabaseHandler
    {
        private readonly IDbConnection dbConnection;

        public DatabaseHandler(string provider, string host, int port, string database, string username, string password)
        {
            if (string.IsNullOrEmpty(provider) || string.IsNullOrEmpty(host) || string.IsNullOrEmpty(database) || string.IsNullOrEmpty(username) || string.IsNullOrEmpty(password))
            {
                throw new ArgumentException("Invalid connection parameters: None of the parameters can be null or empty.");
            }

            var connStr = $"Host={host};Port={port};Database={database};Username={username};Password={password}";
            dbConnection = provider.ToLower() switch
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