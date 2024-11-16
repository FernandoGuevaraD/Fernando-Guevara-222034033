using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using Dapper;
using System;

namespace Api_Front.Controllers
{
    [Route("Cpt/[controller]")]
    [ApiController]
    public class Usuariocontroller : ControllerBase
    {
        private readonly string _connectionString = "Server=DESKTOP-8UQG503\\MSSQLSERVE01;Database=db_Cpt;User Id=sa;Password=admin1;TrustServerCertificate=true;";

   

        [HttpPost("register")]
        public IActionResult Register([FromBody] Usuario user)
        {
            if (user == null)
            {
                return BadRequest("Invalid user data.");
            }

            using (var connection = new SqlConnection(_connectionString))
            {
                var sql = "INSERT INTO Users (UserName,User_Last_name,User_Phone,Email,Manager_Name,Manager_Email,fecha_Inicio,Fecha_Final,Notas) VALUES (@username,@userlastname,@userphone,@useremail,@managername,@manageremail,@fechaInicio,@fechaFinalizacion,@texto)";
                var rowsAffected = connection.Execute(sql, new { user.username, user.userlastname, user.userphone, user.useremail, user.managername, user.manageremail, user.fechaInicio, user.fechaFinalizacion, user.texto});

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

        [HttpPost("loginUser")]
        public IActionResult Login([FromBody] UsuarioInicio user)

        {
            if (user == null)
            {
                return BadRequest("Invalid user data.");
            }

            using (var connection = new SqlConnection(_connectionString))
                
            {
                var sql = "SELECT * FROM Users WHERE User_Last_name = @Usname AND Email = @Usemail";
                var result = connection.QuerySingleOrDefault<Users>(sql, new { user.Usname, user.Usemail }); 

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



    }
}
