
//show hide inputs



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
      
      
      //modifica dinamica dei filtri tramite input
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
      
      const greyBtn = document.getElementById("grey__btn");
      greyBtn.addEventListener('click', () => {
        
        if (greyscale.style.display === 'none') {
          greyscale.style.display = 'block';
        } else {
          greyscale.style.display = 'none';
        }
      });
      
      
      
      const satBtn = document.getElementById("sat__btn");
      satBtn.addEventListener('click', () => {

        if (saturate.style.display === 'none') {
          saturate.style.display = 'block';
        } else {
          saturate.style.display = 'none';
        }
      });
      const sepBtn = document.getElementById("sepia__btn");
      sepBtn.addEventListener('click', () => {

        if (sepia.style.display === 'none') {
          sepia.style.display = 'block';
        } else {
          sepia.style.display = 'none';
        }
      });
      const invertBtn = document.getElementById("invert__btn");
      invertBtn.addEventListener('click', () => {

        if (invert.style.display === 'none') {
          invert.style.display = 'block';
        } else {
          invert.style.display = 'none';
        }
      });
      const contrastBtn = document.getElementById("contrast__btn");
      contrastBtn.addEventListener('click', () => {

        if (contrast.style.display === 'none') {
          contrast.style.display = 'block';
        } else {
          contrast.style.display = 'none';
        }
      });
      const brightBtn = document.getElementById("bright__btn");

      brightBtn.addEventListener('click', () => {

        if (brightness.style.display === 'none') {
          brightness.style.display = 'block';
        } else {
          brightness.style.display = 'none';
        }
      });
      const blurBtn = document.getElementById("blur__btn");

      blurBtn.addEventListener('click', () => {

        if (blur.style.display === 'none') {
          blur.style.display = 'block';
        } else {
          blur.style.display = 'none';
        }
      });
      const hueBtn = document.getElementById("hue__btn");

      hueBtn.addEventListener('click', () => {

        if (hue.style.display === 'none') {
          hue.style.display = 'block';
        } else {
          hue.style.display = 'none';
        }
      });
        
    }

  });
});


