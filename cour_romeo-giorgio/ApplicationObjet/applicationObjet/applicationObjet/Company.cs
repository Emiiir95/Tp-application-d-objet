using System;
namespace applicationObjet
{
	public class Company
	{
        private string siret;
        private string name;
        private List<Contact> contact = new List<Contact>();

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

        public Company() { }
    }
}

