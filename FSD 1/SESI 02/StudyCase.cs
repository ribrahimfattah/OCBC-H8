using System;

class StudyCase{
    
    public static void Main(string[] args){

        string name, jenisKelamin, statusNikah, password, username, vaksin;
        int age;

        Console.WriteLine("=== ENTER BIODATA ===");
        Console.Write("Enter your name : ");
        name = Console.ReadLine();

        Console.Write("Enter your jenis kelamin[P/L] : ");
        jenisKelamin = Console.ReadLine();

        Console.Write("Enter your status nikah[M/BM] : ");
        statusNikah = Console.ReadLine();

        Console.Write("Enter your age : ");
        age = int.Parse(Console.ReadLine());
        
        bool isAdult = age > 18;
        if (!isAdult){
            Console.WriteLine("Sorry, belum cukup umur");
        }else{
            Console.WriteLine("Sudah Vaksin?[Y/T]");
            vaksin = Console.ReadLine();
            bool isVaksin = vaksin == "Y";

            if(isVaksin){
                Console.Write("Username : ");
                username = Console.ReadLine();

                Console.Write("Password : ");
                password = Console.ReadLine();

                
                bool isPasswordValid = password == "OCBC";
                bool isUsernameValid = username == "IBRA";

                if (isAdult && isPasswordValid && isUsernameValid){
                    Console.WriteLine("\nWELCOME TO THE CLUB");

                    Console.WriteLine("\n=== BIODATA ===");
                    Console.WriteLine($"Nama : {name}");
                    Console.WriteLine($"Umur : {age}");
                    Console.WriteLine($"Jenis Kelamin : {jenisKelamin == "L" ? "Laki-laki" : "Perempuan"}");
                    Console.WriteLine($"Status Menikah : {statusNikah == "M" ? "Menikah" : "Belum Menikah"}");


                    int pertama, kedua, ketiga, total;
                    double rata;

                    Console.WriteLine("\n=== Menghitung Nilai ===");
                    Console.Write("Masukkan nilai PERTAMA : ");
                    pertama = int.Parse(Console.ReadLine());
                    Console.Write("masukkan nilai KEDUA : ");
                    kedua = int.Parse(Console.ReadLine());
                    Console.Write("masukkan nilai KETIGA : ");
                    ketiga = int.Parse(Console.ReadLine());

                    total = pertama + kedua + ketiga;
                    rata = total / 3.0;
                    Console.WriteLine("\nTotal Nilai adalah " + total);
                    Console.WriteLine("Rata-rata Nilai adalah " + rata);
                }else{
                    Console.WriteLine("Sorry, try again");
                }
            }else{
                Console.WriteLine("Silahkan Vaksin terlebih dahulu");
            }

        }
        
        
    }
}