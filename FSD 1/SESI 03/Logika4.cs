using System;

class Logika4{

    public static void Main(string[] args){

        double nilai;

        Console.Write("Nilai : ");
        nilai = convert.ToDouble(Console.ReadLine());

        if(nilai => 80){
            Console.WriteLine("Kamu mendapat grade A");
        }else if(nilai => 65){
            Console.WriteLine("Kamu mendapat grade B");
        }else if(nilai => 45){
            Console.WriteLine("Kamu mendapat grade C");
        }else if(nilai => 25){
            Console.WriteLine("Kamu mendapat grade D");
        }
    }
}