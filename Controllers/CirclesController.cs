using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using Microsoft.AspNetCore.Hosting;
using CircleTest1.DataModels;
using Microsoft.EntityFrameworkCore;

namespace CircleTest1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CirclesController : Controller
    {
        private readonly Context _context;

        public CirclesController(Context context)
        {
            _context = context;
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<Circle>> Getid(int id)
        {
            var toDoModel = await _context.Circles.FindAsync(id);

            if (toDoModel == null)
            {
                return NotFound();
            }

            return toDoModel;
        }
        public List<Circle> GetCircles()
        { 
            List<Circle> circles =  _context.Circles.ToList();
            return circles;
        }
        public void SaveCircle(Circle circle)
        {
             _context.Circles.Add(circle);
        }
        public List<Comment> GetComments()
        {
            List<Comment> comments = _context.Comments.ToList();
            return comments;
        }
        public void SaveComment(Comment comment)
        {
            _context.Comments.Add(comment);
        }
        //private readonly ILogger<CirclesController> _logger;
        //readonly SqlConnection con;
        //readonly IConfigurationRoot configuration;
        //SqlCommand com = new SqlCommand();
        //SqlDataReader dr;
        //List<Circle> circles = new List<Circle>();
        //public CirclesController(ILogger<CirclesController> logger, IWebHostEnvironment env)
        //{
        //    _logger = logger;
        //    con = new SqlConnection();
        //    configuration = new ConfigurationBuilder().SetBasePath(env.ContentRootPath).AddJsonFile("appsettings.json").Build();
        //    con.ConnectionString = configuration[""];
        //}
        //public List<Circle> fetchTableData()
        //{
        //    if (circles.Count > 0)
        //        circles.Clear();
        //    con.Open();
        //    com.Connection = con;
        //    com.CommandText = "SELECT * FROM [Circle]";
        //    dr = com.ExecuteReader();
        //    while(dr.Read())
        //    {
        //        circles.Add(new Circle()
        //        {
        //            CircleID =Int32.Parse(dr["CircleID"].ToString()),
        //            y = Int32.Parse(dr["y"].ToString()),
        //            x = Int32.Parse(dr["x"].ToString()),
        //            radius = Int32.Parse(dr["radius"].ToString()),
        //            color = dr["color"].ToString()
        //        });
        //    }
        //    con.Close();
        //    return circles;
        //}
        //public void saveCircle(Circle circle)
        //{
        //    con.Open();
        //    com.Connection = con;
        //    com.CommandText = "INCERT INTO [Circle] VALUES ('"+circle.CircleID.ToString()+ "','" + circle.y.ToString() + "','" + circle.x.ToString() + "','" + circle.radius.ToString() + "','" + circle.color + "') ";
        //    com.ExecuteNonQuery();
        //    con.Close();
        //}
    }
}
