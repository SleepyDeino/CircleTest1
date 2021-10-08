using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace CircleTest1.DataModels
{
    public class Comment
    {
        public int CommentID { get; set; }
        public string text { get; set; }
        public string color { get; set; }
    }
}
