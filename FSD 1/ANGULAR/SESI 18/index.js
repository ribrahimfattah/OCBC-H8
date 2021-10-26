const kursi = {
    warna: "putih salju",
    bahan: "kain",
    merk: "FSD OCBC",
    jumlahKaki: "4",
    kategori: "gaming",
    harga: "750000",
    bebanMaksimal: "200"
}

console.log(kursi)
// Panggil property
// cara 1: object.property
console.log(kursi.warna)

// cara 2: pbject['property]
console.log(kursi['warna'])

kursi.distribusi = ['jakrta', 'bandung']  // ttambah property

kursi.bahan = [     // tambah value property array
    kursi.bahan,
    'titanium'
]

kursi['bahan'] = 'titanium' // edit value property

delete kursi.kategori // delete property


// ========= function

function getValue(obj, key) {
    return obj[key]
}

console.log(getValue(kursi, 'harga'))

// const getValueArrowFunction(obj, key) => obj[key]