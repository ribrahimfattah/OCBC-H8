using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MoviesApi.Models;
using MoviesApi.Data;
using MoviesApi.Configuration;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.OpenApi.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.Extensions.Configuration.Json;
using Swashbuckle.AspNetCore;
using System.Text;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace MoviesApi.Controllers {
    [Route("api/[controller]")]
    [ApiController]
    public class MoviesApiController : ControllerBase {
        private readonly ApiDbContext _context;
        public MoviesApiController(ApiDbContext context) {
            _context = context;
        }
        [HttpGet]
        public async Task<IActionResult> GetMovies() {
            var movies = await _context.Movie.ToListAsync();
            return Ok(movies);
        }

        [HttpPost]
        public async Task<IActionResult> CreateMovie(MoviesData data) {
            if(ModelState.IsValid) {
                await _context.Movie.AddAsync(data);
                await _context.SaveChangesAsync();

                return CreatedAtAction("GetMovie", new {data.Id}, data);
            }
            return new JsonResult("Something went wrong") {StatusCode = 500};
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetMovie(int id) {
            var mov = await _context.Movie.FirstOrDefaultAsync(x => x.Id == id);

            if(mov == null)
                return NotFound();

            return Ok(mov);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateMovie(int id, MoviesData mov) {
            if(id != mov.Id)
                return BadRequest();
            
            var existMov = await _context.Movie.FirstOrDefaultAsync(x => x.Id == id);

            if(existMov == null)
                return NotFound();

            existMov.Name = mov.Name;
            existMov.Genre = mov.Genre;
            existMov.Duration = mov.Duration;
            existMov.ReleaseDate = mov.ReleaseDate;

            await _context.SaveChangesAsync();

            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteMovie(int id) {
            var existMov = await _context.Movie.FirstOrDefaultAsync(x => x.Id == id);

            if(existMov == null)
                return NotFound();

            _context.Movie.Remove(existMov);
            await _context.SaveChangesAsync();

            return Ok(existMov);
        }
    }
}


