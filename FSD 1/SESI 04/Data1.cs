using System;

public class Data1{

    public static void Main(string[] args){

       int[] aAngka = new int[5];
       string[] aNama = new string[] {"Joni", "Meri", "David"};
       object[] aObjek = {20,33, "Lorem ipsum", DateTime.Now, true, 'D'};

       Console.WriteLine("=== Isi array ===");
       Console.WriteLine("Tipe data int : " + aAngka[0]);

       Console.Write("Tipe data string : ");
       for(int i = 0; i < aNama.Length; i++)
            Console.Write(aNama[i] + " ");
        Console.WriteLine();

       Console.Write("Tipe data object : ");
       for(int i = 0; i < aObjek.Length; i++)
            Console.Write(aObjek[i] + " ");
    }
}