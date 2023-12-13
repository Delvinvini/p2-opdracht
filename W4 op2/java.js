document.addEventListener('DOMContentLoaded', function() {
    function toonTafels(getal) {

      const tafelsDiv = document.getElementById('tafels');
  

      let alleTafels = '';
  

      for (let i = 1; i <= getal; i++) {
        let tafel = '';
        for (let j = 1; j <= 10; j++) {
          const resultaat = i * j;
          tafel += `${i} x ${j} = ${resultaat}<br>`;
        }
        alleTafels += `<h3>Tafel van ${i}:</h3>${tafel}<br>`;
      }
  

      tafelsDiv.innerHTML = alleTafels;
    }
  

    toonTafels(10); 
  });