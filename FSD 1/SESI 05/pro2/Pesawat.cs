using System;

namespace pro2{

    public class Pesawat{

            public string nama;
            private string _ketinggian;
            public string Ketinggian{

                get {return this._ketinggian;}
                set {this._ketinggian = value;}
            }

            public void terbang(){

                Console.WriteLine("Pesawat dengan nama {0}, sedang take off", this.nama);
            }

            public void sudahTerbang(){

                Console.WriteLine("Pesawat sekarang pada ketinggian {0}", this.Ketinggian);
            }
    }
}