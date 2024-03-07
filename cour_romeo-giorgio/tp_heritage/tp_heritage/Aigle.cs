using System;
namespace tp_heritage
{
    public class Aigle : Oiseau
    {
        public Aigle(string cri, int age, int ageMaximum) : base(cri, age, 10)
        {
            
        }

        public override void SeDeplacer(int metre)
        {
            Console.WriteLine($"L'aigle vole sur une distance de {metre} mètres");
        }

        public override void Afficher()
        {
            Console.WriteLine("Cet animal est un aigle.");
            base.Afficher();
        }

    }
}

