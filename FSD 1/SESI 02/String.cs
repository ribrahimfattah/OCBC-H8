using System;

class String{
    
    public static void Main(string[] args){

        string nama;
        int umur;

        Console.WriteLine("=== PROGRAM PENDAFTARAN PENDUDUK ===");
        Console.Write("Masukkan nama : ");
        nama = Console.ReadLine();
        Console.Write("Masukkan alamat : ");
        var alamat = Console.ReadLine();
        Console.Write("Masukkan umur : ");
        umur = int.Parse(Console.ReadLine());

        Console.WriteLine();
        Console.WriteLine("Terima kasih!");
        Console.WriteLine("data berikut");
        Console.WriteLine($"Nama: {nama}");
        Console.WriteLine($"Alamat: {alamat}");
        Console.WriteLine($"Umur: {umur} tahun");
        Console.WriteLine("SUDAH DISIMPAN");

    }
}