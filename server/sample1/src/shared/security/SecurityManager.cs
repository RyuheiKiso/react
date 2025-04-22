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

        public SecurityManager(ConfigManager configManager)
        {
            // ConfigManagerを使用して初期化処理を追加
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
                    IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(AUTH_SECRET)),
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
            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(AUTH_SECRET));
            var credentials = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(payload as IEnumerable<Claim>),
                Expires = DateTime.UtcNow.AddSeconds(TOKEN_EXPIRY),
                SigningCredentials = credentials
            };

            var token = handler.CreateToken(tokenDescriptor);
            return handler.WriteToken(token);
        }
    }
}