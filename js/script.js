
//show hide inputs

// function hideToggle() {
//   var x = document.getElementById("filter__value");
//     if (x.style.display === "none") {
//       x.style.display = "block";
//     } else {
//       x.style.display = "none";
//     }
//   }

// caricamento dell'immagine

window.addEventListener('load', function () {
  document.querySelector('input[type="file"]').addEventListener('change', function () {
    if (this.files && this.files[0]) {
      
      let image = document.querySelector('#myImg');
      image.src = URL.createObjectURL(this.files[0]); 
      const upload = document.getElementById('upload');
      const imgCnt = document.getElementById('cnt');
      const filters = document.getElementById('filters');
      upload.style.display = "none";
      imgCnt.style.display = "block";
      filters.style.display = "block";

      var greyscale = document.getElementById('greyscale').value;
      console.log(greyscale);

    }
  });
});


