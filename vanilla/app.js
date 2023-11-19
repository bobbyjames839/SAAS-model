var scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true
  });

  let button = document.getElementById('button');
  let form = document.getElementById('email-form');
  let icon = document.getElementById('msgIcon');
  
  button.addEventListener('click', function() {
    form.classList.toggle('email-form-display');

    if (form.classList.contains('email-form-display')) {
      icon.classList.remove('fa-comment');
      icon.classList.add('fa-times');
    } else {
      icon.classList.add('fa-comment');
      icon.classList.remove('fa-times');
    }
  });  

const menuLinks = document.querySelectorAll('.menu a');

  function handleClick(event) {
    menuLinks.forEach(link => link.classList.remove('active'));

    event.target.classList.add('active');
  }

  menuLinks.forEach(link => {
    link.addEventListener('click', handleClick);
  });



const plus = document.getElementByClass("expandElement");

function expandAttribute(num, num1) {
    const expandingElement = document.getElementsByClassName('bullet-expand')[num];
    const originalElement = document.getElementsByClassName('bullet')[num];
    const originalElementOuter = document.getElementsByClassName('bullet-outer')[num];
    const icon = document.getElementsByClassName('fa')[num1];
  
    if (expandingElement.style.display == "flex") {
      expandingElement.style.display = "none";
      originalElement.style.height = '120px';
      originalElementOuter.classList.remove('outer-change');
      icon.classList.add('fa-plus');
      icon.classList.remove('fa-minus');
    } else {
      expandingElement.style.display = "flex";
      originalElement.style.height = '80px';
      originalElementOuter.classList.add('outer-change');
      icon.classList.remove('fa-plus');
      icon.classList.add('fa-minus');
    }
}

function markAsChecked(clickedDiv) {

  const clickableDivs = document.querySelectorAll('.plan');
  clickableDivs.forEach(div => {
    div.classList.remove('clicked');
  });

  clickedDiv.classList.add('clicked');
}





function sendClicked() {

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");
  const messageSent = document.getElementById("messageSent");

  if (name.value !== "" && email.value !== "" && message.value !== "") {
    
    sendMail();

    function sendMail() {
      let params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };
  
    const serviceID = "service_nbyo6me";
    const templateID = "template_hjo8zn8";
  
      emailjs.send(serviceID, templateID, params)

  }   

    messageSent.innerText = "Message sent!"

    messageSent.style.display = 'flex';

    setTimeout(function() {
    messageSent.style.display = 'none';
    }, 2000)

    name.value = "";
    email.value = "";
    message.value = "";

  } else if (name.value === "" && email.value === "" && message.value === "") {
    return;
  } else {
    messageSent.innerText = "Please complete the form.";

    messageSent.style.display = 'flex';

    setTimeout(function() {
    messageSent.style.display = 'none';
    }, 2000)
  }
}






