$(document).ready(() => {
  $('#type').load('../components/is.html')
})

var checkSpec = function () {
  if (!$(".check").prop("checked")) {
    $('.is').addClass('active')
    $('.av').removeClass('active')
    $('#type').load('../components/is.html')
  } else {
    $('.av').addClass('active')
    $('.is').removeClass('active')
    $('#type').load('../components/av.html')
  }
}