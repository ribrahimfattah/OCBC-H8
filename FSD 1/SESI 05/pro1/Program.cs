using System;

namespace pro1{
    class Program{
        static void Main(string[] args){

            // instant objek
        Laptop laptop1 = new Laptop();
        
        string[] daftarMerk = {"Lenovo", "Asus", "Acer", "Dell", "Samsung"};

        Console.Write("masukkan merk : ");
        laptop1.merk = Console.ReadLine();

        Console.Write("masukkan ram : ");
        laptop1.ram = int.Parse(Console.ReadLine());

        Console.Write("masukkan memory : ");
        laptop1.memory = int.Parse(Console.ReadLine());

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
