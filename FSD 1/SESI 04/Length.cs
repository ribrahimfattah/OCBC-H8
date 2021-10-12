using System;

public class Length{

    public static void Main(string[] args){

        int[] angka = new int[10];

        Console.WriteLine("Panjang array angka adalah " + angka.Length);

        // Menggunakan Length untuk menginisialisasi angka.
        for(int i = 0; i < angka.Length; i++)
            angka[i] = i + 1;

        // Sekarang menggunakna Length untuk menampilkan angka
        Console.Write("Berikut adalah array angka: ");
        for(int i = 0; i < angka.Length; i++)
            Console.Write(angka[i] + " ");

        Console.WriteLine();

    }
}