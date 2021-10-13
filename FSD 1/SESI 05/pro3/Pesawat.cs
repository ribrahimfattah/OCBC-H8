using System;

namespace pro3{

    public class Pesawat{

            public string nama, ketinggian, jumlahPenumpang;
            public int jumlahRoda;

            public void terbang(){

                Console.WriteLine("Pesawat dengan nama {0}, sedang take off", this.nama);
            }

            public void sudahTerbang(){

                Console.WriteLine("Pesawat sekarang pada ketinggian {0}", this.ketinggian);
            }
    }
}