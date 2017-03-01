(function(){

  var catImage = document.getElementById('catImage');
  var countItem = document.getElementById('countItem');
  countItem.innerHTML = 'Contagem de clicks: 0';
  
  var count = 0;

  catImage.addEventListener('click', function(){
    count += 1;
    countItem.innerHTML = `Contagem de clicks: ${count}`;
  })

})();
