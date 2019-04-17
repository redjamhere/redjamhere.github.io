var checkSpec = function () {
  if (!$(".check").prop("checked")) {
    $('.is').addClass('active')
    $('.av').removeClass('active')
  } else {
    $('.av').addClass('active')
    $('.is').removeClass('active')
  }
}