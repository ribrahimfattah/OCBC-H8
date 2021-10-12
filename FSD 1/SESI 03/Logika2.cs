using System;

class Logika2{

    public static void Main(string[] args){

        int nilai;
        string nama;

        Console.Write("Masukkan nama : ");
        nama = Console.ReadLine();

        Console.Write("Masukkan nilai : ");
        nilai = int.Parse(Console.ReadLine());

        
        if (nilai < 60)
        {
            Console.WriteLine($"Nilai kamu C, tingaktkan belajarmu ya {nama}");
        }else if (nilai < 80)
        {
            Console.WriteLine($"Nilai kamu B, tingaktkan belajarmu ya {nama}");
        }else
        {
            Console.WriteLine($"Selamat {nama} Nilai kamu A");
        }

    }
}