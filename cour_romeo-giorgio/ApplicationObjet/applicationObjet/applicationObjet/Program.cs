using System.Numerics;
using System.Xml.Linq;
using applicationObjet;

internal class Program
{

    private static void Main(string[] args)
    {
        List<Company> company = new List<Company>();
        List<Placement> placement = new List<Placement>();
        List<Contact> contact = new List<Contact>();

        void displayMenu()
        {
            Console.Clear();
            Console.WriteLine("################");
            Console.WriteLine("#GestionBourget#");
            Console.WriteLine("################");
            Console.WriteLine("1 - Saisir un emplacement");
            Console.WriteLine("2 - Saisir une entreprise");
            Console.WriteLine("3 - Saisir un contact");
            Console.WriteLine("4 - Afficher les exposants");
            Console.WriteLine("0 - Quitter l'application");

        }

        void inputCompany()
        {
            Console.WriteLine("Saisir un numéro de SIRET : ");
            string siret = Console.ReadLine();
            Console.WriteLine("Saisir un nom : ");
            string name = Console.ReadLine();
            Company newCompany = new Company(siret, name);
            company.Add(newCompany);
        }

        void inputPlacement()
        {
            Console.WriteLine("Saisir le hall : ");
            string hall = Console.ReadLine();
            Console.WriteLine("Saisir la parcel : ");
            int parcel = int.Parse(Console.ReadLine());
            Console.WriteLine("Saisir la surface : ");
            int surface = int.Parse(Console.ReadLine());
            Placement newPlacement = new Placement(hall, parcel, surface);
            placement.Add(newPlacement);
        }

        void inputContact()
        {
            Console.WriteLine("Saisir le nom du contact : ");
            string name = Console.ReadLine();
            Console.WriteLine("Saisir le numéro de téléphone du contact : ");
            string phone = Console.ReadLine();
            Contact newContact = new Contact(name, phone);
            contact.Add(newContact);
        }

        void displayExposant()
        {
            foreach (var cmpagny in company)
            {
                Console.WriteLine($"Entreprise : {cmpagny.Name}, SIRET : {cmpagny.Siret}");
                foreach (var emplacement in placement)
                {
                    Console.WriteLine($"Emplacement : Hall {emplacement.Hall}, Parcelle {emplacement.Parcel}, Surface {emplacement.Surface}m^2");
                }
                foreach (var contact in contact)
                {
                    Console.WriteLine($"- {contact.Name} ({contact.Phone})");

                }
            }

        }


        bool menuOn = true;

        while (menuOn)
        {
            displayMenu();


            int userEntry = int.Parse(Console.ReadLine());
            switch (userEntry)
            {
                case 1:
                    Console.WriteLine("Saisie Emplacement");
                    inputPlacement();
                    Console.Clear();
                    break;
                case 2:
                    Console.WriteLine("Saisie Entreprise");
                    inputCompany();
                    Console.Clear();
                    break;
                case 3:
                    Console.WriteLine("Saisie Contact");
                    inputContact();
                    Console.Clear();
                    break;
                case 4:
                    Console.WriteLine("Affichage Exposants");
                    Console.Clear();
                    displayExposant();
                    break;
                case 0:
                    menuOn = false;
                    break;
                default:
                    Console.WriteLine("Cas non traité, veuillez recommencez");
                    Console.ReadLine();
                    Console.Clear();
                    break;
            }
        }

    }
}
