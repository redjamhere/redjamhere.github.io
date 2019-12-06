$('document').ready(() => {
  console.log("Hello! :)")

let currentPage = $(".active a").text()
currentPage.replace(/ /g, '')
console.log(currentPage) 

  $('#content').load(`components/${currentPage}.html`)

  $(".nav-item a").click((event) => {
    $(".active").removeClass("active")
    $(event.target).addClass("active")

    let fileName = $(".active").text()

    fileName = fileName.replace(/ /g, '')

    $('#content').load(`components/${fileName}.html`)
  })

  $("#cool").click(() => {
    console.log("rgge")
  })
})