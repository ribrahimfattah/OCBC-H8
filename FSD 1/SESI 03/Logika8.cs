using System;

public class Logika8{


    public static void Main(string[] args){

        // string ope;
        int pilih;

        Console.WriteLine("Mau pilih opetor apa?[pilih angka]");
        Console.WriteLine("1. Penjulmahan (+)");
        Console.WriteLine("1. Pengurangan (-)");
        Console.WriteLine("1. Perklaian (x)");
        Console.WriteLine("1. Pembagian (:)");
        Console.Write("Pilih : ");
        pilih = int.Parse(Console.ReadLine());

        int temp = 0;
        int hasil = 0;
        for (int i = 1; i < 15; i++)
        { 
            if(pilih == 1){
                hasil = temp + i;
                Console.WriteLine($"{temp} + {i} = {hasil}");
            }else if(pilih == 2){
                hasil = temp - i;
                Console.WriteLine($"{temp} - {i} = {hasil}");
            }else if(pilih == 3){
                hasil = temp * i;
                Console.WriteLine($"{temp} x {i} = {hasil}");
            }else if(pilih == 4){
                hasil = temp / i;
                Console.WriteLine($"{temp} : {i} = {hasil}");
            }

            temp = i;
        }
    }
}