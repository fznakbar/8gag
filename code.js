function gantiMeme(foto) {

    var angka = Math.floor(Math.random() * 32)
    console.log(angka)
    switch (angka) {
        case 0:
            hasil = "foto/foto1.jpg"
            break;
        case 1:
            hasil = "foto/foto2.jpg"
            break;
        case 2:
            hasil = "foto/foto3.jpg"
            break;
        case 3:
            hasil = "foto/foto4.jpg"
            break;
        case 4:
            hasil = "foto/foto5.jpg"
            break;
        case 5:
            hasil = "foto/foto6.jpg"
            break;
        case 6:
            hasil = "foto/foto7.jpg"
            break;
        case 7:
            hasil = "foto/foto8.jpg"
            break;
        case 8:
            hasil = "foto/foto9.jpg"
            break;
        case 9:
            hasil = "foto/foto10.jpg"
            break;
        case 10:
            hasil = "foto/foto11.jpg"
            break;
        case 11:
            hasil = "foto/foto12.jpg"
            break;
        case 12:
            hasil = "foto/foto13.jpg"
            break;
        case 13:
            hasil = "foto/foto14.jpg"
            break;
        case 14:
            hasil = "foto/foto15.jpg"
            break;
        case 15:
            hasil = "foto/foto16.jpg"
            break;
        case 16:
            hasil = "foto/foto32.jpg"
            break;
        case 17:
            hasil = "foto/foto17.jpg"
            break;
        case 18:
            hasil = "foto/foto18.jpg"
            break;
        case 19:
            hasil = "foto/foto19.jpg"
            break;
        case 20:
            hasil = "foto/foto20.jpg"
            break;
        case 21:
            hasil = "foto/foto21.jpg"
            break;
        case 22:
            hasil = "foto/foto22.jpg"
            break;
        case 23:
            hasil = "foto/foto23.jpg"
            break;
        case 24:
            hasil = "foto/foto24.jpg"
            break;
        case 25:
            hasil = "foto/foto25.jpg"
            break;
        case 26:
            hasil = "foto/foto26.jpg"
            break;
        case 27:
            hasil = "foto/foto27.jpg"
            break;
        case 28:
            hasil = "foto/foto28.jpg"
            break;
        case 29:
            hasil = "foto/foto29.jpg"
            break;
        case 30:
            hasil = "foto/foto30.jpg"
            break;
        case 31:
            hasil = "foto/foto31.jpg"
            break;
        case 32:
            hasil = "foto/foto/32.jpg"
            break;


    }

    meme.src = hasil;

}
var meme = document.getElementById("gambar")
meme.onclick = () => {
    gantiMeme()
}