using System;

namespace pro3{

    public class Override{

        public int bil1, bil2;

        public void bilangan(int angka1, int angka2)
        {
            bil1 = angka1;
            bil2 = angka2;
        }

        public virtual void penjumlahanPerkalian()
        {
            Console.WriteLine("Overriding ");
            Console.WriteLine("Hasil penjumlahan angka {0} dan angka {1}  = {2} ", bil1, bil2, bil1+bil2);
            Console.WriteLine("Hasil perkalian angka {0} dan angka {1}  = {2} ", bil1, bil2, bil1*bil2);
        }

        
    }

    public class ChildOverride:Override{
        int bil3, bil4;
        public void bilangan2(int angka1, int angka2){
            bil3 = angka1;
            bil4 = angka2;
        }
        
        public override void penjumlahanPerkalian(){
            Console.WriteLine("Overriding");
            Console.WriteLine("Hasil penjumlahan angka {0} dan angka {1}  = {2} ", bil3, bil4, bil3+bil4);
            Console.WriteLine("Hasil perkalian angka {0} dan angka {1}  = {2} ", bil3, bil4, bil3*bil4);
        }
    }
}