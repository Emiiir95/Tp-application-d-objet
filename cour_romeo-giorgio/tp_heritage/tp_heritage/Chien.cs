using System;
namespace tp_heritage
{
    public class Chien : Animal
    {
        public string nom;

        public Chien(string cri, int age, int ageMaximum) : base(cri, age, 15)
        {
            Console.WriteLine("Veuillez nommer votre chien :");
            nom = Console.ReadLine();
        }

        public override void SeDeplacer(int metre)
        {
            Console.WriteLine($"Le chien marche sur une distance de {metre} mètres");
        }

        public override void Afficher()
        {
            Console.WriteLine($"Cet animal est un chien nommé {nom}");
            base.Afficher();
        }
    }
}