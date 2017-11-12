window.addEventListener('load', function() {
   var windowLoadedTime = new Date().getTime();
   var loading = document.querySelector('#loading');
   var leftCurtain = document.querySelector('#curtain--left');
   var rightCurtain = document.querySelector('#curtain--right');
   var loadingText = document.querySelector('.loading__float-container');
   var heavyImg = document.querySelector('#heavyImg');

   if (heavyImg.complete) {
      setTimeout(hideLoadingScreen, 1000);
   } else {
      loading.style.display = 'block';
      heavyImg.addEventListener('load', function() {
         var currentTime = new Date().getTime();
         var timePassed = currentTime - windowLoadedTime;
         if (tiemPassed < 1500) {
            setTimeout(hideLoadingScreen, 1500 - timePassed);
         } else {
            hideLoadingScreen();
         }
      });
   }

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
});
