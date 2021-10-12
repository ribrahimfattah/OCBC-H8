using System;

public class Logika8{


    public static void Main(string[] args){

        int nilaiAwal, nilaiAkhir, pilih;

        Console.Write("Masukkan nilai awal : ");
        nilaiAwal = int.Parse(Console.ReadLine());
        Console.Write("Masukkan nilai akhir : ");
        nilaiAkhir = int.Parse(Console.ReadLine());

        Console.WriteLine("Mau pilih opetor apa?[pilih angka]");
        Console.WriteLine("1. Penjumlahan (+)");
        Console.WriteLine("2. Pengurangan (-)");
        Console.WriteLine("3. Perkalian (x)");
        Console.WriteLine("4. Pembagian (:)");
        Console.Write("Pilih : ");
        pilih = int.Parse(Console.ReadLine());

        int temp = 0;
        int hasil = 0;
        for (int i = nilaiAwal; i < nilaiAkhir; i++)
        { 
            if(pilih == 1){
                hasil = i + temp;
                Console.WriteLine($"{i} + {temp} = {hasil}");
            }else if(pilih == 2){
                hasil = i - temp;
                Console.WriteLine($"{i} - {temp} = {hasil}");
            }else if(pilih == 3){
                hasil = i * temp;
                Console.WriteLine($"{i} x {temp} = {hasil}");
            }else if(pilih == 4){
                hasil = i / temp;
                Console.WriteLine($"{i} : {temp} = {hasil}");
            }

            temp = i;
        }
    }
}