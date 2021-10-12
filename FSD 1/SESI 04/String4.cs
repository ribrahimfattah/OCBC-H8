using System;

public class String4{
    
    public static void Main(string[] args){

        string stringAwal = "C# membuat string mudah";

        // Menciptakan sebuah substring
        string substr = stringAwal.Substring(5, 12);

        Console.WriteLine("stringawal: " + stringAwal);
        Console.WriteLine("substring: " + substr);
    }
}