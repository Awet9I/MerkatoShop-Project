using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using API.Data;
using API.Models;
using Microsoft.Extensions.Logging.Configuration;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductsController : ControllerBase
    {
        private readonly StoreContext _context;

        public ProductsController(StoreContext context)
        {
            // Initialize database session using SoreContext
            _context = context;
            
        }

        [HttpGet]
        public async Task<ActionResult<List<Product>>>GetProducts(){
            // Return all products 
            return  await _context.Products.ToListAsync();

        }


        [HttpGet("{id}")]
        public async Task<ActionResult<Product>>GetProduct(int id){
            // Return a product with matching id
            return await _context.Products.FindAsync(id);
        }
        
    }
}
