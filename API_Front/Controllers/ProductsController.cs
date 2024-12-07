using API_Front;
using Dapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;

namespace API_Front.Controllers
{
    [Route("api/[controller]")] // la ruta se compone por lo anterior mas api + nombre el controlador + nombre del metodo
    [ApiController]
    public class ProductsController : Controller
    {
        private readonly string _connectionString = "Server=LAPTOP-0SMBKNDP;Database=Products;User Id=sa;Password=12345678;TrustServerCertificate=true;";


        [HttpPost("register")]

        public IActionResult Register([FromBody] Products product)
        {
            if (product == null)
            {
                return BadRequest("Invalid product data.");
            }

            using (var connection = new SqlConnection(_connectionString))
            {
                var sql = "INSERT INTO Products (NameProduct, ProductPriceCompra, Cantidad, ProductPriceVenta) VALUES  (@NameProduct, @ProductPriceCompra, @Cantidad, @ProductPriceVenta )";
                var rowsAffected = connection.Execute(sql, new { product.NameProduct, product.ProductPriceCompra, product.Cantidad , product.ProductPriceVenta });
                // execute es de Dapper y ahora es para mandarle

                if (rowsAffected != 0)
                {
                    return Ok("Product registered succesfully. ");
                }
                else
                {
                    return StatusCode(500, "An error ocurred while registering the Product.");
                }
            }
        }



        [HttpPut("update/{id}")]
        public IActionResult Update(int id, [FromBody] Products product)
        {
            if (product == null)
            {
                return BadRequest("Invalid product data.");
            }

            using (var connection = new SqlConnection(_connectionString))
            {
                var sql = "UPDATE Products SET NameProduct = @NameProduct, ProductPriceCompra = @ProductPriceCompra, Cantidad = @Cantidad, ProductPriceVenta = @ProductPriceVenta WHERE Id = @id";
                var rowsAffected = connection.Execute(sql, new { Id = id, product.NameProduct, product.ProductPriceCompra, product.Cantidad, product.ProductPriceVenta });

                if (rowsAffected > 0)
                {
                    return Ok("Product updated successfully.");
                }
                else
                {
                    return NotFound("Product not found.");
                }
            }
        }

        [HttpDelete("delete/{id}")]
        public IActionResult Delete(int id)
        {

            using (var connection = new SqlConnection(_connectionString))
            {
                var sql = "DELETE FROM Products WHERE Id = @id";
                var rowsAffected = connection.Execute(sql, new { Id = id });

                if (rowsAffected > 0)
                {
                    return Ok("Product deleted successfully.");
                }
                else
                {
                    return NotFound("Product not found.");
                }
            }
        }


        [HttpPost("validate")]

        public IActionResult validate([FromBody] Products product)                                                
        {
            if (product == null) 
            {
                return BadRequest("Invalid user data.");
            }
            using (var connection = new SqlConnection(_connectionString)) 

            {
                var sql = "SELECT * FROM Products WHERE  NameProduct = @NameProduct and ProductPriceCompra = @ProductPriceCompra and  Cantidad = @Cantidad and ProductPriceVenta = @ProductPriceVenta"; 
                var result = connection.QuerySingleOrDefault<Products>(sql, new { product.NameProduct, product.ProductPriceCompra, product.Cantidad, product.ProductPriceVenta });

                if (result != null)
                {

                    return Ok("validate successful.");
                }
                else
                {
                    return Unauthorized("Invalid validate.");
                }
            }
        }

        [HttpGet("getProducts")]
        public IActionResult GetProducts()
        {
            try
            {
                using (var connection = new SqlConnection(_connectionString))
                {
                    var sql = "SELECT * FROM Products";
                    var products = connection.Query<Products>(sql).ToList();
                    if (products == null || products.Count == 0)
                    {
                        return NotFound("No Products found.");
                    }

                    return Ok(products);
                }
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }


        [HttpGet("getProductById/{id}")]
        public IActionResult GetProductById(int id)
        {
            try
            {
                using (var connection = new SqlConnection(_connectionString))
                {
                    var sql = "SELECT * FROM Products WHERE Id = @id";

                    var product = connection.QuerySingleOrDefault<Products>(sql, new { Id = id });

                    if (product == null)
                    {
                        return NotFound($"Product with ID {id} not found.");
                    }

                    return Ok(product);
                }
            }
            catch (Exception ex)
            {
                return StatusCode(500, "An error occurred: " + ex.Message);
            }
        }


    }
}
