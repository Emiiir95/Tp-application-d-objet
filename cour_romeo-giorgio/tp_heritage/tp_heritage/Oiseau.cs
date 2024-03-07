using System;
namespace tp_heritage
{
    public class Oiseau : Animal
    {
        public Oiseau(string cri, int age, int ageMaximum) : base(cri, age, 20)
        {

        }

        public override void SeDeplacer(int metre)
        {
            Console.WriteLine($"L'oiseau vole sur une distance de {metre} mètres");
        }

        public override void Afficher()
        {
            Console.WriteLine("Cet animal est un oiseau.");
            base.Afficher();
        }
    }
}