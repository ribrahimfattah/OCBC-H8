using System;

namespace pro3{
    class Program{
        static void Main(string[] args){
            
            main :
            int pilih, ulang = 0;

            Console.WriteLine("--- Plih Menu ---");
            Console.WriteLine("1. Pesawat Tempur");
            Console.WriteLine("2. Overloading");
            Console.WriteLine("3. Bilangan");
            Console.WriteLine("4. About me");
            Console.WriteLine("5. Mau makan");
            Console.WriteLine("Menu berapa : ");
            pilih = int.Parse(Console.ReadLine());

            switch (pilih)
            {
                case 1:{

                    string cobaLagi;
                    do{
                        Pesawat();

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

                    string cobaLagi;
                    do{
                        Overloading();

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

                    string cobaLagi;
                    do{
                        Override();

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
                    
                    string cobaLagi;
                    do{
                        AboutMe();

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
                    exit();
                    break;
                }
                
                default:{

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
                            break;
                        }
                    }while (ulang == 0);
                    break;
                }
            }
        }

        static void Pesawat(){
            
            string namaPesawat, ketinggianPesawat, jmlPenumpang;
            int jmlRoda;
            Pesawat pesawat = new Pesawat();
            PesawatTempur pesawatTempur = new PesawatTempur();

            Console.Write("Masukkan Nama Pesawat            : ");
            namaPesawat = Console.ReadLine();
            Console.Write("Masukkan Ketinggian Pesawat      : ");
            ketinggianPesawat = Console.ReadLine();
            Console.Write("Masukkan Jumlah Penumpang        : ");
            jmlPenumpang = Console.ReadLine();
            Console.Write("Masukkan Jumlah Roda        : ");
            jmlRoda = int.Parse(Console.ReadLine());

            pesawat.nama = namaPesawat;
            pesawat.ketinggian = ketinggianPesawat;
            pesawat.jumlahPenumpang = jmlPenumpang;
            pesawat.jumlahRoda = jmlRoda;

            pesawatTempur.nama = namaPesawat;
            pesawatTempur.ketinggian = ketinggianPesawat;
            pesawatTempur.jumlahPenumpang = jmlPenumpang;
            pesawatTempur.jumlahRoda = jmlRoda;

            pesawat.terbang();
            pesawatTempur.terbangTempur();
        }

        static void Overloading(){
            
            string nama;
            double noTelp;

            Overloading overloading = new Overloading();
            Console.Write("Masukkan Nama            : ");
            nama = Console.ReadLine();

            Console.Write("Masukkan No Telp         : ");
            noTelp = double.Parse(Console.ReadLine());
            
            overloading.Print(nama);
            overloading.Print(noTelp);
        }

        static void Override(){

            int val1, val2, val3;

            Override overridee = new Override();
            ChildOverride overridee2 = new ChildOverride();

            Console.Write("Masukkan Angka 1      : ");
            val1 = int.Parse(Console.ReadLine());

            Console.Write("Masukkan Angka 2      : ");
            val2 = int.Parse(Console.ReadLine());

            Console.Write("Masukkan Angka 3      : ");
            val3 = int.Parse(Console.ReadLine());

            overridee.bilangan(val1,val2);
            overridee2.bilangan2(val1,val3);
            overridee.penjumlahanPerkalian();
            overridee2.penjumlahanPerkalian(); 
        }

        static void AboutMe(){
            AboutMe me = new AboutMe();
            me.Me();
        }

        static void exit(){

        Console.Write("Press any key to continue ...\n\n");
        Console.ReadKey(true);
        Console.WriteLine("***** TERIMA KASIH *****\n");
        }
    }
}
