using System;

namespace pro2
{
    class Program
    {
        static void Main(string[] args)
        {
            string nama, tinggi;
            Pesawat pesawat = new Pesawat();

            Console.Write("Masukkan Nama Pesawat     : ");
            nama = Console.ReadLine();

            Console.Write("Ketinggian Pesawat       : ");
            tinggi = Console.ReadLine();

            pesawat.nama = nama;
            pesawat.Ketinggian = tinggi;
            pesawat.terbang();
            pesawat.sudahTerbang();
            Console.Read();
        }
    }
}
