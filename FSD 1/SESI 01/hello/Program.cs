using System;

namespace hello
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");

            string fname, lname;
            int umur;
            // Boolean isVaksin = false;
            // string isVaksin;

            Console.Write("Enter your first name : ");
            fname = Console.ReadLine();

            Console.Write("Enter your lasts name : ");
            lname = Console.ReadLine();

            Console.Write("Enter your age : ");
            umur = int.Parse(Console.ReadLine());

            Console.WriteLine("Your full name is " + fname + " " + lname);
            Console.WriteLine("Your age " + umur);

            // if(umur > 12){
            //     Console.Write("Apakah sudah vaksin?[Y/N]");
            //     isVaksin = Console.ReadLine();

            //     if(isVaksin = 'Y'){
            //         "KEREN!!!";
            //     }else if(isVaksin = 'N'){
            //         "Silahkan vaksin ya";
            //     }else{
            //         "not found";
            //     }
            // }else{
            //     Console.WriteLine("Jaga Protokol Kesehatan");
            // }

        }
    }
}
