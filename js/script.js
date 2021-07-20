
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

      //hide show
      const upload = document.getElementById('upload');
      const imgCnt = document.getElementById('cnt');
      const filters = document.getElementById('filters');
      upload.style.display = "none";
      imgCnt.style.display = "block";
      filters.style.display = "block";
      const img = document.getElementById("myImg");
      const greyscale = document.getElementById("greyscale");
      const saturate = document.getElementById("saturate");
      const sepia = document.getElementById("sepia");
      const invert = document.getElementById("invert");
      const contrast = document.getElementById("contrast");
      const brightness = document.getElementById("brightness");
      const blur = document.getElementById("blur");
      const hue = document.getElementById("hue");


      
      greyscale.addEventListener('change', function(){
        img.style.filter = "grayscale(" + greyscale.value + "%)";
      });

      saturate.addEventListener('change', function () {
        img.style.filter = "saturate(" + saturate.value + "%)";
      });

      sepia.addEventListener('change', function () {
        img.style.filter = "sepia(" + sepia.value + "%)";
      });

      invert.addEventListener('change', function () {
        img.style.filter = "invert(" + invert.value + "%)";
      });

      contrast.addEventListener('change', function () {
        img.style.filter = "contrast(" + contrast.value + "%)";
      });

      brightness.addEventListener('change', function () {
        img.style.filter = "brightness(" + brightness.value + "%)";
      });

      blur.addEventListener('change', function () {
        img.style.filter = "blur(" + blur.value + "px)";
      });

      hue.addEventListener('change', function () {
        img.style.filter = "hue-rotate(" + hue.value + "deg)";
      });
      
    }
  });
});


