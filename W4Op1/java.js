document.addEventListener('DOMContentLoaded', function() {
    const tafelDiv = document.getElementById('tafelVanTien');

    let tafelVanTien = '';

    for (let i = 1; i <= 10; i++) {
      const resultaat = i * 10;
      tafelVanTien += `${i} x 10 = ${resultaat}<br>`;
    }

    tafelDiv.innerHTML = tafelVanTien;
  });