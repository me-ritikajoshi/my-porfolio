const form = document.querySelector('form');

form.addEventListener('submit', (e) =>{
  e.preventDefault();

  const captchaResoponse = grecaptcha.getResponse();

  if(!captchaResoponse.length > 0){
     throw new Error("Captcha not completed");
  }

  const fd = new FormData(e.target);
  const params = new URLSearchParams(fd);

  fetch('https://formspree.io/f/xqakzdeg',{
   method: "POST",
   body: params,
  })
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err))

});