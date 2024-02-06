using System;
namespace applicationObjet
{
	public class Placement
	{
        private string hall;
        private int parcel ;
        private int surface;

        public string Hall
        {
            get { return hall; }
            set { hall = value; }
        }

        public int Parcel
        {
            get { return parcel; }
            set { parcel = value; }
        }

        public int Surface
        {
            get { return surface; }
            set { surface = value; }
        }

        public Placement() { }
    }
}

