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
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]

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

                // return CreatedAtAction("GetMovie", new {data.Id}, data);

                var movie = await _context.Movie.FirstOrDefaultAsync(x => x.Id == data.Id);
                object[] result = new object[2];
                result[0] = "Berhasil tambah data!";
                result[1] = movie;
                return Ok(result);
            }
            return new JsonResult("Something went wrong") {StatusCode = 500};
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetMovie(int id) {
            var movie = await _context.Movie.FirstOrDefaultAsync(x => x.Id == id);

            if(movie == null)
                return NotFound();

            return Ok(movie);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateMovie(int id, MoviesData movie) {
            if(id != movie.Id)
                return BadRequest();
            
            var existMovie = await _context.Movie.FirstOrDefaultAsync(x => x.Id == id);

            if(existMovie == null)
                return NotFound();

            existMovie.Name = movie.Name;
            existMovie.Genre = movie.Genre;
            existMovie.Duration = movie.Duration;
            existMovie.ReleaseDate = movie.ReleaseDate;

            await _context.SaveChangesAsync();

            object[] result = new object[2];
            result[0] = "Berhasil update data!";
            result[1] = existMovie;
            return Ok(result);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteMovie(int id) {
            var existMovie = await _context.Movie.FirstOrDefaultAsync(x => x.Id == id);

            if(existMovie == null)
                return NotFound();

            _context.Movie.Remove(existMovie);
            await _context.SaveChangesAsync();

            return new JsonResult("Movie dengan id " + id + " berhasil dihapus!") { StatusCode = 200 };
        }
    }
}


