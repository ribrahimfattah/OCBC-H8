'''
===== ASSIGNMENTS 2 =====
Nama         : Rasyid Ibrahim Fattah
Kode Peserta : FSDO001ONL030
=========================
'''

def kelvin_and_celcius(suhu, cek = 'default'):
    '''
    Fungsi ini(kelvin_and_celcius) mengkonversi suhu dari Kelvin ke Celcius dan Celcius ke Kelvin
    -> memiliki 2 parameter, dimana parameter ke 2 bersifat opsional
    -> fungsi ini reusable, dipakai dari menu 1 sampai 6
    -> dengan memasukkan parameter berupa suhu ex. 30C atau 30K maka sistem akan mendeteksi otomatis
    -> ex. dengan memasukkan parameter 30K maka fungsi akan mengkonversi dari Kelvin ke Celcius
    -> ex. dengan memasukkan parameter 30C maka fungsi akan mengkonversi dari Celcius ke Kelvin
    '''

    if suhu[:-1].isnumeric(): # mengecek apakah inputan berupa int atau string
        derajat = int(suhu[:-1])
        skala = suhu[-1]

        if skala.upper() == "K":  # kelvin to celcius or fahrenheit
            if cek == 'C':
                konversi = float(derajat - 273.15)
                print(derajat, skala.upper(), "=", "{:.2f}".format(konversi),"C")
            if cek == 'F':
                konversi = float(((derajat - 273.15) * 9 / 5) + 32)
                print(derajat, skala.upper(), "=", "{:.2f}".format(konversi),"F")

        elif skala.upper() == "C":  # celcius to kelvin or fahrenheit
            if cek == 'K':
                konversi = float(derajat + 273.15)
                print(derajat, skala.upper(), "=", "{:.2f}".format(konversi),"K")
            if cek == 'F':
                konversi = float((9 * derajat) / 5 + 32)
                print(derajat, skala.upper(), "=", "{:.2f}".format(konversi),"F")

        elif skala.upper() == "F":  # fahrenheit to celcius or kelvin
            if cek == "C":
                konversi = float((derajat - 32) *5 / 9)
                print(derajat, skala.upper(), "=", "{:.2f}".format(konversi),"C")
            if cek == "K":
                konversi = float(((derajat - 32) * 5 / 9) + 273.15)
                print(derajat, skala.upper(), "=", "{:.2f}".format(konversi),"K")

        else :  # ketika inputan suhu tidak sesuai kaidah [K, C, F]
            print("Inputan yang anda masukkan salah")

    else: # jika inputan berupa string
        print("Inputan yang anda masukkan tidak sesuai.")



def konversi_to_fahrenheit(suhu):
    '''
    Fungsi ini(konversi_to_fahrenheit) mengkonversi dari Fahrenheit ke Celcius atau Kelvin
    -> memiliki 1 parameter
    -> memanggil fungsi kelvin_and_celcius
    -> dengan memasukkan parameter di fungsi ini(konversi_to_fahrenheit), fungsi kelvin_and_celcius otomatis akan mengkonversi suhunya 
    '''
    kelvin_and_celcius(suhu, "F")


def konversi_from_fahrenheit(suhu, konversi):
    '''
    Fungsi ini(konversi_from_fahrenheit) mengkonversi dari Fahrenheit ke Celcius atau Kelvin
    -> memiliki 2 parameter
    -> memanggil fungsi kelvin_and_celcius
    -> dengan memasukkan parameter di fungsi ini(konversi_from_fahrenheit), fungsi kelvin_and_celcius otomatis akan mengkonversi suhunya 
    '''
    skala = suhu[-1]
    if skala.upper() == 'F': 
        kelvin_and_celcius(suhu, konversi)
    else:
        print("inputan tidak sesuai")

def ask_menu():
    menu = input("\nPress any key to continue or q to exit : ")
    if menu == 'q':
        print("Terima Kasih")
        exit()

ulang = 0
while ulang == 0:
    print(__doc__)
    print("\n===== Konversi Suhu =====")
    print("1. Kelvin to Celcius")
    print("2. Celcius to Kelvin")
    print("3. Kelvin to Fahrenheit")
    print("4. Celcius to Fahrenheit")
    print("5. Fahrenheit to Kelvin")
    print("6. Fahrenheit to Celcius")
    print("0. Exit")

    print("\nMau konversi apa?")
    menu = input("Pilih menu [1-6] : ")
    print("")

    if menu == '1':
        print("**Kelvin to Celcius**")
        suhu = input("Masukkan suhu yang ingin dikonversi [ex. 30K] : ")
        if suhu[-1].upper() == 'K':
            kelvin_and_celcius(suhu, 'C')
        else:
            print("Inputan tidak sesuai")
        ask_menu()

    elif menu == '2':
        print("**Celcius to Kelvin**")
        suhu = input("Masukkan suhu yang ingin dikonversi [ex. 30C] : ")
        if suhu[-1].upper() == 'C':
            kelvin_and_celcius(suhu, 'K')
        else:
            print("Inputan tidak sesuai")
        ask_menu()

    elif menu == '3':
        print("**Kelvin to Fahrenheit**")
        suhu = input("Masukkan suhu yang ingin dikonversi [ex. 30K] : ")
        if suhu[-1].upper() == 'K':
            konversi_to_fahrenheit(suhu)
        else:
            print("Inputan tidak sesuai")
        ask_menu()

    elif menu == '4':
        print("**Celcius to Fahrenheit**")
        suhu = input("Masukkan suhu yang ingin dikonversi [ex. 30C] : ")
        if suhu[-1].upper() == 'C':
            konversi_to_fahrenheit(suhu)
        else:
            print("Inputan tidak sesuai")
        ask_menu()

    elif menu == '5':
        print("**Fahrenheit to Kelvin**")
        suhu = input("Masukkan suhu yang ingin dikonversi [ex. 30F] : ")
        konversi_from_fahrenheit(suhu, 'K')
        ask_menu()

    elif menu == '6':
        print("**Fahrenheit to Celcius**")
        suhu = input("Masukkan suhu yang ingin dikonversi [ex. 30F] : ")
        konversi_from_fahrenheit(suhu, 'C')
        ask_menu()

    elif menu == '0':
        exit()

    else:
        print("Menu tidak ditemukan")
        ask_menu()
