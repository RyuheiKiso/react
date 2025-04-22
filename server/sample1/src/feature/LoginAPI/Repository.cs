using Microsoft.Data.SqlClient;

namespace Sample1.Feature.LoginAPI
{
    public class Repository
    {
        private readonly string _connectionString;

        public Repository(string connectionString)
        {
            _connectionString = connectionString;
        }

        public bool ValidateUser(string username, string password)
        {
            try
            {
                using (var connection = new SqlConnection(_connectionString))
                {
                    connection.Open();
                    var command = new SqlCommand("SELECT COUNT(1) FROM Users WHERE Username = @Username AND Password = @Password", connection);
                    command.Parameters.Add(new SqlParameter("@Username", username));
                    command.Parameters.Add(new SqlParameter("@Password", password));

                    return (int)command.ExecuteScalar() > 0;
                }
            }
            catch (SqlException ex)
            {
                // Log the exception and rethrow or handle it as needed
                Console.WriteLine($"Database error: {ex.Message}");
                throw;
            }
        }
    }
}