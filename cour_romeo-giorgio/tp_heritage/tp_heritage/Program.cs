using System;
using tp_heritage;

internal class Program
{

    private static void Main(string[] args)
    {
        Aigle aigle = new Aigle("ROOOOOOOHHHHH ROOOOOOHHHH", 1, 20);
        aigle.SeDeplacer(15);
        aigle.Vieillir(18);
        aigle.Crier();
        aigle.Afficher();
        Console.WriteLine("-----------------------");
        Chien chien = new Chien("WOUF WOUF", 1, 15);
        chien.SeDeplacer(5);
        chien.Vieillir(18);
        chien.Afficher();

        Console.Read();

    }
}