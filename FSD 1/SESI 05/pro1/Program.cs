using System;

namespace pro1{
    class Program{
        static void Main(string[] args){

            // instant objek
        Laptop laptop1 = new Laptop();
        
        // string[] daftarMerk = {"Lenovo", "Asus", "Acer", "Dell", "Samsung"};

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

        if(laptop1.ram < 2){
            string pilih;
            Console.Write("ram sangat rendah, upgrade RAM sekarang[Y/N]?");
            pilih = Console.ReadLine();

            if(pilih == "Y" | pilih == "y"){
                int upgradeRam;

                Upgrade upgrade = new Upgrade();
                Console.Write("Masukkan jumlah upgrade RAM :");
                upgradeRam = int.Parse(Console.ReadLine());

                upgrade.UpgradeRam(upgradeRam);
                
            }
        }
        // Akses method
        laptop1.Chatting();
        laptop1.Sosmed();
        laptop1.OnlineShop();

        Console.Read();
        }
    }
}
