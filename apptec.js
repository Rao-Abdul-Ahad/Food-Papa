const element = document.querySelector('.animate');

element.classList.add('animate__animated', 'animate__BackInDown');

element.addEventListener('animationend', () => {
  element.classList.remove('animate__BackInDown');
  element.classList.add('animate__fadeIn');
});

function btn1(){
    Swal.fire({
        title: "Sign Up With Email and Password!",
        html: "I will close in <b></b> milliseconds.",
        icon: "success",
        timer: 1500,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading();
          const timer = Swal.getPopup().querySelector("b");
          timerInterval = setInterval(() => {
            timer.textContent = `${Swal.getTimerLeft()}`;
          }, 10);
        },
        willClose: () => {
          clearInterval(timerInterval);
        }
      }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
          console.log("I was closed by the timer");
        }
      });
      setTimeout(function(){
        location.href="Signup.html"
      },1500)
      
}


