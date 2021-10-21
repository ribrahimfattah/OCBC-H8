using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using PaymentDetails.Data;
using PaymentDetails.Models;

namespace PaymentDetails.Controllers
{
    [Route("finalproject/[controller]")]
    [ApiController]
    public class PaymentDetailsController : ControllerBase
    {
        private readonly ApiDbContext _context;
        public PaymentDetailsController(ApiDbContext context)
        {
            _context = context;
        }
        [HttpGet]
        public async Task<IActionResult> GetPayments()
        {
            var payments = await _context.Payments.ToListAsync();
            return Ok(payments);
        }

        [HttpPost]
        public async Task<IActionResult> CreatePayment(PaymentData data)
        {
            if (ModelState.IsValid)
            {
                await _context.Payments.AddAsync(data);
                await _context.SaveChangesAsync();

                return CreatedAtAction("GetPayments", new { data.PaymentDataId }, data);
            }
            return new JsonResult("Something went wrong") { StatusCode = 500 };
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetMovie(int id)
        {
            var payment = await _context.Payments.FirstOrDefaultAsync(x => x.PaymentDataId == id);

            if (payment == null)
                return NotFound();

            return Ok(payment);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdatePayment(int id, PaymentData payment)
        {
            if (id != payment.PaymentDataId)
                return BadRequest();

            var existPayment = await _context.Payments.FirstOrDefaultAsync(x => x.PaymentDataId == id);

            if (existPayment == null)
                return NotFound();

            existPayment.CardOwnerName = payment.CardOwnerName;
            existPayment.CardNumber = payment.CardNumber;
            existPayment.ExpirationDate = payment.ExpirationDate;
            existPayment.SecurityCode = payment.SecurityCode;

            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPayments", new { payment.PaymentDataId }, payment);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteMovie(int id)
        {
            var existPayment = await _context.Payments.FirstOrDefaultAsync(x => x.PaymentDataId == id);

            if (existPayment == null)
                return NotFound();

            _context.Payments.Remove(existPayment);
            await _context.SaveChangesAsync();

            return Ok(existPayment);
        }
    }
}
