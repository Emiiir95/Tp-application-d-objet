using System;
namespace applicationObjet
{
	public class Placement
	{
        private string hall;
        private int parcel ;
        private int surface;
        private List<Placement> placement = new List<Placement>();

        //public Company Company { get; set; }

        public string Hall
        {
            get { return hall; }
            set { hall = value; }
        }

        public int Parcel
        {
            get { return parcel; }
            set {
                if (value < 0)

                    throw new ArgumentException("La parcelle ne peut pas être négative.");
                parcel = value;
            }
        }

        public int Surface
        {
            get { return surface; }
            set
            {
                if (value <= 0)
                    throw new ArgumentException("La surface ne peut pas être négative.");
                surface = value;
            }
        }

        public Placement(string hall, int parcel, int surface)
        {
            this.hall = hall;
            Parcel = parcel;
            Surface = surface;
        }
    }
}

