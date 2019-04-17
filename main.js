//components set
$(document).ready(() => {
  $('header').load('./layouts/header.html')
  $('footer').load('./layouts/footer.html')
  $('#includes').load('./components/home.html')
})


openWin = function(win) {
    $('#includes').load('./components/' + win + '.html')
}
