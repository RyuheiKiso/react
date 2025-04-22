using Sample1.Shared.Security;

namespace Sample1.Feature.LoginAPI
{
    public class Service
    {
        private readonly Repository _repository;
        private readonly SecurityManager _securityManager;

        public Service(Repository repository, SecurityManager securityManager)
        {
            _repository = repository;
            _securityManager = securityManager;
        }

        public object Authenticate(LoginRequest request)
        {
            if (_repository.ValidateUser(request.Username, request.Password))
            {
                var token = _securityManager.GenerateToken(new { Username = request.Username });
                return new { Token = token };
            }
            return new { Error = "Invalid credentials" };
        }
    }
}