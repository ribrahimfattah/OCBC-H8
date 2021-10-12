using System;

public class Assignment1{

    public static void Main(string[] args){
        Console.Clear();
        main :
        judul();
        abouMe();
        Console.WriteLine();
        int pilih;

        Console.WriteLine("Menu soal : ");
        Console.WriteLine("1. Segitiga Alfabet");
        Console.WriteLine("2. Segitiga Angka");
        Console.WriteLine("3. Faktorial");
        Console.WriteLine("4. Balik Angka");
        Console.WriteLine("5. Convert Angka to String");
        Console.WriteLine("6. Cek Kata Palindrome");
        Console.WriteLine("7. Tentang Saya");
        Console.WriteLine("8. Exit");

        Console.Write("Pilih Menu Soal : ");
        pilih = int.Parse(Console.ReadLine());

        switch (pilih)
        {
            case 1:{
                int ulang = 0;
                string cobaLagi;
                do{
                    segitigaAlfabet();

                    Console.Write("Coba lagi [Y/N]? ");
                    cobaLagi = Console.ReadLine();

                    if(cobaLagi == "Y" || cobaLagi == "y"){
                        ulang = 0;
                    }else{
                        ulang = 1;
                        goto main;
                    }
                }while (ulang == 0);
                break;
            }
            case 2:{
                int ulang = 0;
                string cobaLagi;
                do{
                    segitigaAngka();

                    Console.Write("Coba lagi [Y/N]? ");
                    cobaLagi = Console.ReadLine();

                    if(cobaLagi == "Y" || cobaLagi == "y"){
                        ulang = 0;
                    }else{
                        ulang = 1;
                        goto main;
                    }
                }while (ulang == 0);
                break;
            }
            case 3:{
                int ulang = 0;
                string cobaLagi;
                do{
                    faktorial();

                    Console.Write("Coba lagi [Y/N]? ");
                    cobaLagi = Console.ReadLine();

                    if(cobaLagi == "Y" || cobaLagi == "y"){
                        ulang = 0;
                    }else{
                        ulang = 1;
                        goto main;
                    }
                }while (ulang == 0);
                break;
            }
            case 4:{
                int ulang = 0;
                string cobaLagi;
                do{
                    balikAngka();

                    Console.Write("Coba lagi [Y/N]? ");
                    cobaLagi = Console.ReadLine();

                    if(cobaLagi == "Y" || cobaLagi == "y"){
                        ulang = 0;
                    }else{
                        ulang = 1;
                        goto main;
                    }
                }while (ulang == 0);
                break;
            }
            case 5:{
                int ulang = 0;
                string cobaLagi;
                do{
                    convertIntToStr();

                    Console.Write("Coba lagi [Y/N]? ");
                    cobaLagi = Console.ReadLine();

                    if(cobaLagi == "Y" || cobaLagi == "y"){
                        ulang = 0;
                    }else{
                        ulang = 1;
                        goto main;
                    }
                }while (ulang == 0);
                break;
            }
            case 6:{
                int ulang = 0;
                string cobaLagi;
                do{
                    isPalindrome();

                    Console.Write("Coba lagi [Y/N]? ");
                    cobaLagi = Console.ReadLine();

                    if(cobaLagi == "Y" || cobaLagi == "y"){
                        ulang = 0;
                    }else{
                        ulang = 1;
                        goto main;
                    }
                }while (ulang == 0);
                break;
            }
            case 7:{
                int ulang = 0;
                string cobaLagi;
                do{
                    abouMe();

                    Console.Write("Coba lagi [Y/N]? ");
                    cobaLagi = Console.ReadLine();

                    if(cobaLagi == "Y" || cobaLagi == "y"){
                        ulang = 0;
                    }else{
                        ulang = 1;
                        goto main;
                    }
                }while (ulang == 0);
                break;
            }
            case 8:{
                exit();
                break;
            }
            default:{
                int ulang = 0;
                string cobaLagi;
                do{
                    Console.WriteLine("Pilihan tidak ditemukan");

                    Console.Write("Coba lagi [Y/N]? ");
                    cobaLagi = Console.ReadLine();

                    if(cobaLagi == "Y" || cobaLagi == "y"){
                        ulang = 1;
                        goto main;
                    }else{
                        exit();
                    }
                }while (ulang == 0);
                break;
            }
        }
    }

    static void judul(){
        Console.WriteLine("\n\n\t\b\b##### SELAMAT DATANG DI ASSIGNMENT 1 #####");
        Console.WriteLine("\n\tOOOO CCCC BBBB CCCC    X  X\t /\\_/\\");
        Console.WriteLine("\tO  O C    BBBB C        XX\t(     )");
        Console.WriteLine("\tO  O C    BBBB C        XX\t \\   /");
        Console.WriteLine("\tOOOO CCCC BBBB CCCC    X   X\t  \\ /");
    }

    static void abouMe(){
        Console.WriteLine("\n\nNama \t\t: Rasyid Ibrahim Fattah");
        Console.WriteLine("Kode Peserta \t: FSDO001ONL030");
        Console.WriteLine("Alamat \t\t: Semarang");
    }

    static void segitigaAlfabet(){

        Console.WriteLine("-------------------------------------------------------");
        Console.WriteLine("SEGITIGA ALFABET");
        Console.WriteLine("*Menampilkan piramida berupa alfabet secara bolak balik");
        Console.WriteLine("-------------------------------------------------------");

        int range;

        Console.Write("Masukkan Range : ");
        range = int.Parse(Console.ReadLine());

        int a,b,c,d;
        for (a = 1; a <=range; a++) {
            //outerloop
            for ( b = range-1; b >= a; b--) {
                //inner loop no 1
                Console.Write(" ");
                //Untuk memberikan spasi ke samping
            }
            
            for ( c = 1; c <= a; c++) {
                //inner loop no 2
                Console.Write(Convert.ToChar(c-1 + (int)'A'));
                //menampilkan huruf dari kanan ke kiri
            }
            for ( d = a-1; d >= 1; d--) {
                //inner loop no 3
                Console.Write(Convert.ToChar(d-1 + (int)'A'));
                //menampilkan huruf dari kiri ke kanan
            }

            Console.WriteLine();
        }
    }

    static void segitigaAngka(){

        Console.WriteLine("-------------------------------------------------------");
        Console.WriteLine("SEGITIGA ANGKA");
        Console.WriteLine("*Menampilkan piramida berupa angka secara bolak balik");
        Console.WriteLine("-------------------------------------------------------");

        int range;
        Console.Write("Masukkan Range : ");
        range = int.Parse(Console.ReadLine());

        int a,b,c,d;
        for (a = 1; a <=range; a++) {
            //outerloop
            for ( b = range-1; b >= a; b--) {
                //inner loop no 1
                Console.Write(" ");
                //Untuk memberikan spasi ke samping
            }
            
            for ( c = 1; c <= a; c++) {
                //inner loop no 2
                Console.Write(c);
                //menampilkan angka dari kanan ke kiri
            }
            for ( d = a-1; d >= 1; d--) {
                //inner loop no 3
                Console.Write(d);
                //menampilkan angka dari kiri ke kanan
            }

            Console.WriteLine();
        }
    }

    static void faktorial(){
        
        Console.WriteLine("-------------------------------------------------------");
        Console.WriteLine("FAKTORIAL");
        Console.WriteLine("*Menghitung nilai faktorial");
        Console.WriteLine("-------------------------------------------------------");

        int nilai;
        int faktorial;
        Console.Write("Masukkan nilai : ");
        nilai = int.Parse(Console.ReadLine());

        Console.Write($"{nilai}! = {nilai}");
        faktorial = nilai;
        for (int i = nilai-1; i > 0; i--){
            Console.Write($"*{i}");
            faktorial *= i;
        }

        Console.WriteLine();
        Console.WriteLine($"Faktorial of {nilai} is {faktorial}");
        Console.WriteLine();
        
    }

    static void balikAngka(){
        
        Console.WriteLine("-------------------------------------------------------");
        Console.WriteLine("BALIK ANGKA");
        Console.WriteLine("*Membalikkan angka yang dinputkan dan tidak mengecek palindrome");
        Console.WriteLine("-------------------------------------------------------");

        string angka;

        Console.Write("Masukkan angka : ");
        angka = Console.ReadLine();

        string temp = "";
        for (int i = angka.Length - 1; i >= 0; i--){
            temp += angka[i];
        }

        Console.WriteLine(temp);
    }

    static void convertIntToStr(){
        
        Console.WriteLine("-------------------------------------------------------");
        Console.WriteLine("KONVERSI ANGKA KE STRING");
        Console.WriteLine("*Mengkonversi angka ke string");
        Console.WriteLine("-------------------------------------------------------");

        int a;
        string angka;
        string[] array = {
            "zero",
            "one",
            "two",
            "three",
            "four",
            "five",
            "six",
            "seven",
            "eight",
            "nine"
        };

        Console.Write("Masukkan angka : ");
        angka = Console.ReadLine();

        for (int i = 0; i < angka.Length; i++){
            
            a = int.Parse(Convert.ToString(angka[i]));
            Console.Write(array[a] + " ");
        }

        Console.WriteLine();
    }

    static void isPalindrome(){

        Console.WriteLine("-------------------------------------------------------");
        Console.WriteLine("PALINDROME");
        Console.WriteLine("*Mengecek palindrome sebuah kata");
        Console.WriteLine("-------------------------------------------------------");

        string kata;

        Console.Write("Masukkan kata : ");
        kata = Console.ReadLine();

        string temp = "";
        for (int i = kata.Length - 1; i >= 0; i--){
            temp += kata[i];
        }

        if(kata == temp){
            Console.WriteLine($"{kata} adalah Palindrome");
        }else{
            Console.WriteLine($"{kata} bukan Palindrome");
        }
        
    }

    static void exit(){

        Console.Write("Press any key to continue ...\n\n");
        Console.ReadKey(true);
        Console.WriteLine("***** TERIMA KASIH *****\n");
    }
}    

