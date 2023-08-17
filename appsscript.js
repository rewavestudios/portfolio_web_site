const scriptURL = 'https://script.google.com/macros/s/AKfycbyAmwanm0H50ZM1asdsEl_Kg3FAmyGbVB_c8UoZXAM5bi5cadr3SYOehyY9js-E-oAO/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      msg.innerHTML = "Message sent successfully!"
      setTimeout(function(){
        msg.innerHTML = ""
    },5000)
    form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})