using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using Dapper;
using System;

namespace Api_Front.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly string _connectionString = "Server=DESKTOP-8UQG503\\MSSQLSERVE01;Database=db_test;User Id=sa;Password=admin1;TrustServerCertificate=true;";

        [HttpPost("login")]
        public IActionResult Login([FromBody] Users user)

        //un método de acción en un controlador de ASP.NET Core que recibe datos de una solicitud HTTP y devuelve un resultado de acción.
        //Indica que el método espera un objeto user de tipo Users en el cuerpo de la solicitud HTTP. El atributo [FromBody]
        //le dice a ASP.NET Core que los datos deben ser deserializados desde el cuerpo de la solicitud en un objeto Users



        {
            if (user == null)
            {
                return BadRequest("Invalid user data.");
            }

            using (var connection = new SqlConnection(_connectionString))
            {
                var sql = "SELECT * FROM Users WHERE Username = @Username AND Password = @Password";
                var result = connection.QuerySingleOrDefault<Users>(sql, new { user.Username, user.Password }); //Remplazqar los datos obtenidos

                if (result != null)
                {

                    return Ok("Login successful.");
                }
                else
                {
                    return Unauthorized("Invalid credentials.");
                }
            }

        }

        [HttpPost("register")]
        public IActionResult Register([FromBody] Users user)
        {
            if (user == null)
            {
                return BadRequest("Invalid user data.");
            }

            using (var connection = new SqlConnection(_connectionString))
            {
                var sql = "INSERT INTO Users (Username, Password) VALUES (@Username, @Password)";
                var rowsAffected = connection.Execute(sql, new { user.Username, user.Password });

                if (rowsAffected > 0)
                {
                    return Ok("User registered successfully.");
                }
                else
                {
                    return StatusCode(500, "An error occurred while registering the user.");
                }
            }

        }

    }
}
