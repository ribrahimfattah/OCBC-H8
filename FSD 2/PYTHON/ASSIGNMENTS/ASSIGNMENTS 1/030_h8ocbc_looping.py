numbers = [
  951, 402, 984, 651, 360, 69, 408, 319, 601, 485, 980, 507, 725, 547, 544, 615, 83, 165, 141, 501, 263, 617, 865, 575, 219, 390, 984, 592, 236, 105, 942, 941, 386, 462, 47, 418, 907, 344, 236, 375, 823, 566, 597, 978, 328, 615, 953, 345, 399, 162, 758, 219, 918, 237, 412, 566, 826, 248, 866, 950, 626, 949
]


#  Cara pertama
#  Modifikasi / Improve
#  memasukkan batas looping dengan inputan
#  untuk cek pada line 20 diubah ke string karena supaya ketika memasukkan input bisa berupa inputan kosong, enter, dll  
#  sehingga tidak mengalami error

loop = 0

while loop == 0:

    print("=================")
    batas = input("Masukkan batas: ")

    for cek in numbers: 
        if batas == str(cek): 
            loop = 1
            break
    else:
        print("Maaf batas yang anda masukkan tidak ada di dalam list")

    if loop == 1: 
        for x in numbers:   
            if x % 2 == 0: 
                print(x)
            if x == int(batas): 
                print('===DONE===')
                print("Batas akhir looping : ", batas)
                break

#  ==============================================================================
#  Cara Kedua
#  Sesuai Modul Kode.id
#  Loop dan print semua angka genap dari list angka diatas dengan urutan yang sama. Jangan mencetak angka apa pun yang muncul setelah angka 918.
#  Tampilkan pesan 'Done' setelah looping berakhir.

# for x in numbers:   
#     if x % 2 == 0: 
#         print(x)
#     if x == 918: 
#         print('===DONE===')
#         print("Batas akhir looping : 918")
#         break