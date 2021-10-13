using System;

namespace pro1{

    public class Laptop{

        // Attribute/Variable
        public string merk;
        public int ram, memory;

        // method
        public void Chatting(){

            Console.WriteLine("\n{0} sedang chatting", this.merk);
        }

        public void Sosmed(){

            Console.WriteLine("{0} sedang sosmed", this.merk);
        }

        public void OnlineShop(){

            Console.WriteLine("{0} sedang online shop", this.merk);
        }

    }

    public class Upgrade:Laptop{

        public void UpgradeRam(int ram){
            this.ram = ram;
            Console.WriteLine("Ram sudah diupgrade menjadi {0}", ram);
        }
    }
}
