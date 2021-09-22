const judulBuku = document.querySelector("#judul-buku");
const jumlahHalaman = document.querySelector("#jumlah-halaman");
const buttonSubmit = document.querySelector("#sbmt");
const tabelIsi = document.querySelector("#table-isi")
let tabel = document.querySelector("#tabel");
tabel.style.display = "none"
let judul = "";
let jumlaahaman = "";



judulBuku.addEventListener("change", () => {
    // console.log(judulBuku.value);
    judul = judulBuku.value;
})

jumlahHalaman.addEventListener("change", () => {
    // console.log(judulBuku.value);
    jumlaahaman = jumlahHalaman.value;
})

buttonSubmit.addEventListener("click", () => {
    if(judul && jumlaahaman){
        tabel.style.display = "inline-block"
    
        let julBuk = judul;
        let jumlahlaman = jumlaahaman;
    
        const tr = document.createElement("tr");
        const td = document.createElement("td");
        const td2 = document.createElement("td");
    
        td.appendChild(document.createTextNode(julBuk))
        td2.appendChild(document.createTextNode(jumlahlaman))
    
        tr.appendChild(td);
        tr.appendChild(td2);
    
        tabelIsi.appendChild(tr);

        judulBuku.value = ""
        jumlahHalaman.value = ""
    }else{
        alert("Isi Dahulu");
    }
    
});

