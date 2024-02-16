using System;
using System.Numerics;

namespace applicationObjet
{
	public class Company
	{
        private string siret;
        private string name;
        private List<Company> company = new List<Company>();

        public string Siret
        {
            get { return siret; }
            set { siret = value; }
        }

        public string Name
        {
            get { return name; }
            set { name = value; }
        }

        public Company(string siret, string name)
        {
            this.siret = siret;
            this.name = name;
        }
    }
}

