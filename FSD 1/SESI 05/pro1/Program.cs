using System;

namespace pro1{
    class Program{
        static void Main(string[] args){
            // instant objek
        Laptop laptop1 = new Laptop();

        Console.Write("masukkan merk : ");
        laptop1.merk = Console.ReadLine();

        Console.Write("masukkan ram : ");
        laptop1.ram = int.Parse(Console.ReadLine());

        Console.Write("masukkan memory : ");
        laptop1.memory = int.Parse(Console.ReadLine());
        // akses atribut
        // laptop1.merk = "Lenovo";
        // laptop1.ram = 4;
        // laptop1.memory = 128;

        // tampilkan
        Console.WriteLine("\nMerk Laptop adalah {0}", laptop1.merk);
        Console.WriteLine("Kapasitas RAM ada {0}", laptop1.ram);
        Console.WriteLine("kapasitas Memory adalah {0}", laptop1.memory);

        // Akses method
        laptop1.Chatting();
        laptop1.Sosmed();
        laptop1.OnlineShop();

        Console.Read();
        }
    }
}
