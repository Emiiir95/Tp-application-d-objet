using System;
using System.Diagnostics.Metrics;
using System.Xml.Linq;

namespace tp_heritage
{
	public class Animal
    {
        private string cri;
        private int age;
        private int ageMaximum;

        public Animal(string cri, int age, int ageMaximum)
        {
            this.cri = cri;
            this.age = age;
            this.ageMaximum = ageMaximum;
        }

        public string Cri
        {
            get { return cri; }
            set { cri = value; }
        }

        public int Age
        {
            get { return age; }
            set { age = value; }
        }

        public int AgeMaximum
        {
            get { return ageMaximum; }
            set { ageMaximum = value; }
        }

        public void Crier ()
        {
            Console.WriteLine($"le bruit de l'animal est {cri}");
        }

        public virtual void SeDeplacer(int metre)
        {
            Console.WriteLine( metre > 1 ? $"L'animal se déplace de {metre} mètres" : $"L'animal se déplace de {metre} mètre");
        }

        public void Vieillir(int anneeAjouter)
        {
            int nouvelAge = age + anneeAjouter;
            if (nouvelAge > ageMaximum)
            {
                Console.WriteLine(nouvelAge + "ans l'animal est mort");
            } else
            {
                Console.WriteLine(nouvelAge + "ans l'animal est vivant");
            }
        }

        public void Manger()
        {
            Console.WriteLine("L'animal mange");
            Crier();
        }

        public virtual void Afficher()
        {
            Console.WriteLine($"Description de l'animal : \n- son cri est {cri} \n- son age maximum est de {ageMaximum} ans");
            Crier();
        }
    }
}

