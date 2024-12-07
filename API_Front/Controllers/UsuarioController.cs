using API_Front;
using Dapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;

namespace API_Front.Controllers
{

    [Route("api/[controller]")] // la ruta se compone por lo anterior mas api + nombre el controlador + nombre del metodo
    [ApiController]
    public class UsuarioController : ControllerBase
    {


        private readonly string _connectionString = "Server=LAPTOP-0SMBKNDP;Database=Form_Cpt;User Id=sa;Password=12345678;TrustServerCertificate=true;";


        [HttpPost("login")]

        public IActionResult Login([FromBody] UserLogin user) 
                                                         
        {

            if (user == null) 
            {
                return BadRequest("Invalid user data.");
            }
            using (var connection = new SqlConnection(_connectionString)) 
            {

                var sql = "SELECT * FROM Users WHERE Email = @Email AND User_Last_name = @User_Last_Name"; 
                var result = connection.QuerySingleOrDefault<Users>(sql, new { user.Email, user.User_Last_Name }); 

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


        [HttpPost("Register")]
        public IActionResult Register([FromBody] Usuarios User)
        {

            if (User == null) 
            {
                return BadRequest("Invalid user data.");
            }
            using (var connection = new SqlConnection(_connectionString)) 
            {
                var sql = "INSERT INTO Users (UserName, Email, User_Last_Name, User_Phone, Manager_Name, Manager_Email, Fecha_Inicio, Fecha_Final, Notas) " +
                          "VALUES (@UserName, @Email, @User_Last_Name, @User_Phone, @Manager_Name, @Manager_Email, @Fecha_Inicio, @Fecha_Final, @Notas)";

                var rowsAffected = connection.Execute(sql, new
                {
                    User.UserName,
                    User.Email,
                    User.User_Last_Name,
                    User.User_Phone,
                    User.Manager_Name,
                    User.Manager_Email,
                    User.Fecha_Inicio,
                    User.Fecha_Final,
                    User.Notas
                });
                if (rowsAffected != 0)
                {
                    return Ok("User registered succesfully. ");
                }
                else
                {
                    return StatusCode(500, "An error ocurred while registering the user.");
                }
            }
        }
    }
}
