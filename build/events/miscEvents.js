$("#redditthreads, #youtube, #twitch, #settings").on('click', function(){
  if(detectmob()){
    $('#sidebar').slideUp();
  }
});

$("#sidebar").on('click', '.nav-button', function(e){
  if(e.which !== 2){
    $(".nav-button li").removeClass('selected-link');
    $(this).children('li').addClass('selected-link');
    ga('send', 'pageview', "#" + web.hashWithoutParams());
  }
  $('#advertisement').html('<iframe src="http://ib.adnxs.com/tt?id=2359794&referrer=2ez.gg" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" topmargin="0" leftmargin="0" allowtransparency="true" width="300" height="250"></iframe>');
});

$('.tooltip').tipsy({gravity: 'w'});
$('.settings-tooltip').tipsy({gravity: 'e'});