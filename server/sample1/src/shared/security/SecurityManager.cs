using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.IdentityModel.Tokens;
using Sample1.Shared.Utils;

namespace Sample1.Shared.Security
{
    public class SecurityManager
    {
        private const string AUTH_SECRET = "your-secret-key";
        private const int TOKEN_EXPIRY = 3600; // トークン有効期限（秒）
        private readonly string authSecret;
        private readonly int tokenExpiry;

        public SecurityManager(ConfigManager configManager)
        {
            var cfg = configManager.LoadConfig("config/security.yaml");
            var authConfig = cfg["auth"] as Dictionary<string, object>;
            authSecret = authConfig?["secretKey"]?.ToString() ?? AUTH_SECRET;
            tokenExpiry = Convert.ToInt32(authConfig?["tokenExpirySeconds"] ?? TOKEN_EXPIRY);
            Console.WriteLine("SecurityManager initialized with ConfigManager.");
        }

        public bool ValidateToken(string token)
        {
            try
            {
                var handler = new JwtSecurityTokenHandler();
                var validationParameters = new TokenValidationParameters
                {
                    ValidateIssuerSigningKey = true,
                    IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(authSecret)),
                    ValidateIssuer = false,
                    ValidateAudience = false
                };

                handler.ValidateToken(token, validationParameters, out _);
                return true;
            }
            catch
            {
                return false;
            }
        }

        public string GenerateToken(object payload)
        {
            var handler = new JwtSecurityTokenHandler();
            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(authSecret));
            var credentials = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(payload as IEnumerable<Claim>),
                Expires = DateTime.UtcNow.AddSeconds(tokenExpiry),
                SigningCredentials = credentials
            };

            var token = handler.CreateToken(tokenDescriptor);
            return handler.WriteToken(token);
        }
    }
}