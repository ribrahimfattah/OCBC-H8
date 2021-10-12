using System;

class HitungNilai{
    
    public static void Main(string[] args){

        int pertama, kedua, ketiga, total;
        double rata;

        Console.WriteLine("=== Menghitung Nilai");
        Console.Write("Masukkan nilai PERTAMA : ");
        pertama = int.Parse(Console.ReadLine());
        Console.Write("masukkan nilai KEDUA : ");
        kedua = int.Parse(Console.ReadLine());
        Console.Write("masukkan nilai KETIGA : ");
        ketiga = int.Parse(Console.ReadLine());

        total = pertama + kedua + ketiga;
        rata = total / 3.0;
        Console.WriteLine("Total Nilai adalah " + total);
        Console.WriteLine("Rata-rata Nilai adalah " + rata);
        Console.Read();
    }
}