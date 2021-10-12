using System;

public class Data2{

    public static void Main(string[] args){

        string[] contohs = new string [4]{
            "Motherboard", "Processor", "Power Supply", "Video card"
        };

        Console.WriteLine("Menampilkan semua dari dalam array");
        Console.WriteLine("");

        foreach (string contoh in contohs)
        {
            Console.WriteLine(contoh);
        }

        Console.Write("Press any key to coninue . . .");
    }
}