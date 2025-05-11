const resimler = [
  "img/hobi1.jpg",
  "img/hobi2.jpg",
  "img/hobi3.jpg"
];

let aktifIndex = 0;

function degistirResim(yon) {
  aktifIndex += yon;

  if (aktifIndex < 0) {
    aktifIndex = resimler.length - 1;
  } else if (aktifIndex >= resimler.length) {
    aktifIndex = 0;
  }

  document.getElementById("galeriResim").src = resimler[aktifIndex];
}
