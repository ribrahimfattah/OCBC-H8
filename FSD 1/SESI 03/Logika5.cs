using System;

class Logika5{

    public static void Main(string[] args){

        // int nilai;
        // nilai = 7;

        // string bulan = DateTime.Now.Tostring();
        DateTime now = DateTime.Now;
        // bulan = now.Month;

        Console.WriteLine("Mau apa?[pilih angka]");
        Console.WriteLine("1. Convert bulan?");
        Console.WriteLine("2. ini bulan apa?");
        Console.WriteLine("Pilih : ");
        int pilih = int.Parse(Console.ReadLine());
        if (pilih == 1){
            Console.WriteLine("Masukkan angka bulan : ");
            int bulan = int.Parse(Console.ReadLine());
        }
        // else {
        //     int bulan = String.Parse(now.Month);
        // }
        switch (bulan)
        {
            case 1:{
                Console.WriteLine("januari");
                break;
            }
            case 2:{
                Console.WriteLine("Februari");
                break;
            }
            case 3:{
                Console.WriteLine("Maret");
                break;
            }
            case 4:{
                Console.WriteLine("April");
                break;
            }
            case 5:{
                Console.WriteLine("Mei");
                break;
            }
            case 6:{
                Console.WriteLine("Juni");
                break;
            }
            case 7:{
                Console.WriteLine("Juli");
                Console.WriteLine("{0}", now.Month);
                break;
            }
            case 8:{
                Console.WriteLine("Agustus");
                break;
            }
            case 9:{
                Console.WriteLine("September");
                break;
            }
            case 10:{
                Console.WriteLine("Oktober");
                break;
            }
            case 11:{
                Console.WriteLine("November");
                break;
            }
            case 12:{
                Console.WriteLine("Desember");
                break;
            }
            default:{
                Console.WriteLine("Anda bukan makhluk bumi");
                break;
            }
        }
    }
}