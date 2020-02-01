function gantiMeme(foto) {

    var angka = Math.floor(Math.random() * 32)
    console.log(angka)
    switch (angka) {
        case 0:
            hasil = "https://img-9gag-fun.9cache.com/photo/aL0WV1z_700bwp.webp"
            break;
        case 1:
            hasil = "https://img-9gag-fun.9cache.com/photo/aDgOyWK_700bwp.webp"
            break;
        case 2:
            hasil = "https://img-9gag-fun.9cache.com/photo/aL0X61x_700bwp.webp"
            break;
        case 3:
            hasil = "https://img-9gag-fun.9cache.com/photo/a6N2Ngq_700bwp.webp"
            break;
        case 4:
            hasil = "https://img-9gag-fun.9cache.com/photo/a4RAWE1_700bwp.webp"
            break;
        case 5:
            hasil = "https://img-9gag-fun.9cache.com/photo/a1R5o8R_700bwp.webp"
            break;
        case 6:
            hasil = "https://img-9gag-fun.9cache.com/photo/ayoWNq8_700bwp.webp"
            break;
        case 7:
            hasil = "https://img-9gag-fun.9cache.com/photo/aGg8obn_700bwp.webp"
            break;
        case 8:
            hasil = "https://img-9gag-fun.9cache.com/photo/ag51EqK_700bwp.webp"
            break;
        case 9:
            hasil = "https://img-9gag-fun.9cache.com/photo/a5R6qpO_700bwp.webp"
            break;
        case 10:
            hasil = "https://img-9gag-fun.9cache.com/photo/aBgZPY2_700bwp.webp"
            break;
        case 11:
            hasil = "https://img-9gag-fun.9cache.com/photo/a8572mp_700bwp.webp"
            break;
        case 12:
            hasil = "https://img-9gag-fun.9cache.com/photo/ae51E4O_700bwp.webp"
            break;
        case 13:
            hasil = "https://img-9gag-fun.9cache.com/photo/ayo29VX_700bwp.webp"
            break;
        case 14:
            hasil = "https://img-9gag-fun.9cache.com/photo/ao5KMNg_700bwp.webp"
            break;
        case 15:
            hasil = "https://img-9gag-fun.9cache.com/photo/aBgnRbO_700bwp.webp"
            break;
        case 16:
            hasil = "https://img-9gag-fun.9cache.com/photo/aY7ryPq_700bwp.webp"
            break;
        case 17:
            hasil = "https://img-9gag-fun.9cache.com/photo/aQ13V12_460swp.webp"
            break;
        case 18:
            hasil = "https://img-9gag-fun.9cache.com/photo/ax70dQ2_460swp.webp"
            break;
        case 19:
            hasil = "https://img-9gag-fun.9cache.com/photo/am5rG62_460swp.webp"
            break;
        case 20:
            hasil = "https://img-9gag-fun.9cache.com/photo/aBgwrOZ_460swp.webp"
            break;
        case 21:
            hasil = "https://img-9gag-fun.9cache.com/photo/aL0MgYz_460swp.webp"
            break;
        case 22:
            hasil = "https://img-9gag-fun.9cache.com/photo/avoPN3Z_460swp.webp"
            break;
        case 23:
            hasil = "https://img-9gag-fun.9cache.com/photo/a7wbVWb_460swp.webp"
            break;
        case 24:
            hasil = "https://img-9gag-fun.9cache.com/photo/aAgrBG0_460swp.webp"
            break;
        case 25:
            hasil = "https://img-9gag-fun.9cache.com/photo/a9Rd6z0_460swp.webp"
            break;
        case 26:
            hasil = "https://img-9gag-fun.9cache.com/photo/ax7E9oK_460swp.webp"
            break;
        case 27:
            hasil = "https://img-9gag-fun.9cache.com/photo/a6OvRb9_460swp.webp"
            break;
        case 28:
            hasil = "https://img-9gag-fun.9cache.com/photo/a3Q6B53_460swp.webp"
            break;
        case 29:
            hasil = "https://img-9gag-fun.9cache.com/photo/aWYXApZ_460swp.webp"
            break;
        case 30:
            hasil = "https://img-9gag-fun.9cache.com/photo/apmdMDW_460swp.webp"
            break;
        case 31:
            hasil = "https://img-9gag-fun.9cache.com/photo/aOYjbjM_460swp.webp"
            break;



    }

    meme.src = hasil;

}
var meme = document.getElementById("gambar")
meme.onclick = () => {
    gantiMeme()
}