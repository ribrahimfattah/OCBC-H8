========== FINAL PROJECT ANGULAR ==========

Nama : Rasyid Ibrahim Fattah
Kode Peserta : FSDO001ONL030

Link Github : https://github.com/ribrahimfattah/OCBC-H8/tree/main/FSD%201/ANGULAR/FINAL%20PROJECT
Link API : https://payment-030.herokuapp.com/finalproject/paymentdetails

<!-- *********** Disclaimer ********** -->
1. database terintegrasi dengan api pada final project c#
2. menggunakan reactive form
3. menggunakan custom validation
4. CRUD sudah bisa semua
5. menggunakna routing
6. memiliki 4 component
<!-- ********************* -->

<!-- ********* PANDUAN *********** -->
1. pada saat pertama kali aplikasi di load akan menampilkan halaman home, menampilkan data payment dan form kosong untuk create/post
2. form harus terisi semua untuk melakukan submit, jika tidak akan kena validasi
3. pada table payment, lakukan :
    /* klik 1 kali untuk melihat detail data, data akan otomatis masuk form dan form input hanya readonly tanpa tombol submit/update
    /* klik 2 kali untuk melakukan update data, data akan otomatis masuk form dan form enable disertai tombol update
    /* klik icon delete untuk melakukan hapus data, sebelum hapus data akan ada konfirmasi untuk user. Jika 'Ya' maka data akan terhapus, dan sebalilknya
4. kriteria form
    /* Card Owner Name
        - required
    /* Card Number
        - required
        - only number
        - must 10 characters
    /* Security Code
        - required
        - only number
        - must 6 characters
    /* Exp. Date
        - required
        - date
<!-- ************************************* -->

<!-- ******************** ALUR ***************** -->
/*  Home sebagai parent, meanampung child component form dan payment
/*  dari component payment akan mengirim data ke home lalu dikirim lagi ke form untuk ditampilkan ke form
/*  kemudian dari form akan mengirimkan data ke home untuk di proses request data ke API

=== TERIMA KASIH ===