using System;

class Logika3{

    public static void Main(string[] args){

        string username, password;

        Console.Write("Username : ");
        username = Console.ReadLine();
        Console.Write("Password : ");
        password = Console.ReadLine();
        
        if (username == "ocbc" && password == "bootcamp"){
            Console.WriteLine("Anda berhasil login!");
        }else{
            Console.WriteLine("Login gagal");
        }
    }
}