using applicationObjet;

internal class Program
{

    private static void Main(string[] args)
    {
        List<Company> companies = new List<Company>();

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

        bool menuOn = true;

        while (menuOn)
        {
            displayMenu();
            int userEntry = int.Parse(Console.Read().ToString());
            switch (userEntry)
            {
                case 1:
                    Console.WriteLine("Saisie Emplacement");
                    Console.Read();
                    break;
                case 2:
                    Console.WriteLine("Saisie Entreprise");
                    Console.Read();
                    break;
                case 3:
                    Console.WriteLine("Saisie Contact");
                    Console.Read();
                    break;
                case 4:
                    Console.WriteLine("Affichage Exposants");
                    Console.Read();
                    break;
                case 0:
                    menuOn = false;
                    break;
            }
        }

    }
}
