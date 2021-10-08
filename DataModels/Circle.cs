using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CircleTest1.DataModels
{
    public class Circle
    {
        public int CircleID { get; set; }
        public int y { get; set; }
        public int x { get; set; }
        public int radius { get; set; }
        public string color { get; set; }

        public virtual List<Comment> comments { get; set; }
    }
}
