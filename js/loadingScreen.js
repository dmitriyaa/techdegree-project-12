window.addEventListener('load', function() {
   var windowLoadedTime = new Date().getTime();
   var loading = document.querySelector('#loading');
   var leftCurtain = document.querySelector('#curtain--left');
   var rightCurtain = document.querySelector('#curtain--right');
   var loadingText = document.querySelector('.loading__float-container');

   function hideLoadingScreen() {
      loadingText.className += ' loading__float-container-hide';
      setTimeout(function() {
         leftCurtain.className += ' loading__curtain--left-hide';
         rightCurtain.className += ' loading__curtain--right-hide';
      }, 1000);
      setTimeout(function() {
         loading.style.display = 'none';
      }, 2000);
   }

   function launchHiding() {
      var currentTime = new Date().getTime();
      var timePassed = currentTime - windowLoadedTime;
      if (timePassed < 1500) {
         setTimeout(hideLoadingScreen, 1500 - timePassed);
      } else {
         hideLoadingScreen();
      }
   }

   function monitorImagesLoad() {
      var images = document.querySelectorAll('img');
      var imagesTotal = images.length;
      var imagesLoaed = 0;
      images.forEach(function(image) {
         if (image.complete) {
            imagesLoaed++;
         } else {
            image.addEventListener('load', function() {
               if (imagesLoaed === imagesTotal) {
                  imagesAreLoaded();
               }
            });
         }
      });
      if (imagesLoaed === imagesTotal) {
         launchHiding();
      }
   }

   monitorImagesLoad();

});
