let currentSlide = 0;



function changeSlide(direction = 1) {
    const slides = document.querySelectorAll('.slide');
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    document.querySelector('.slides').style.transform = `translateX(-${currentSlide * 100}%)`;
}



document.addEventListener("DOMContentLoaded", function() {
  

    const sections = document.querySelectorAll("section");
  //   sections.forEach(section => {
  //     section.classList.add("hidden-section");
  // });


    // Initialize the first slide;
    changeSlide(0); 
    // Auto slide every 3 seconds
    setInterval(() => {
        changeSlide( );
    }, 3500);

    //Q&A
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in");
                // entry.target.classList.remove("hidden-section");
                observer.unobserve(entry.target);
            }
        });
    });

    sections.forEach(section => {
        observer.observe(section);
    });
});

function toggleAnswer(element) {
    const answer = element.nextElementSibling;
      // answer.style.display = "none"

    if (answer.style.display === "block") {
        answer.style.display = "none";
    } else {
        answer.style.display = "block";
    }
}



document.addEventListener('DOMContentLoaded', () => {
    const cancelBtns = document.querySelectorAll('.nav_btn');
    const nav = document.querySelector('.side-nav-mobile');
    const navLinks = nav.querySelectorAll('a'); 
  
    // Toggle the navigation menu
    cancelBtns.forEach(btn => btn.addEventListener('click', () => {
      nav.classList.toggle('active');
    }));
  
    // Close the navigation menu when clicking outside of it
    document.addEventListener('click', (e) => {
      if (!nav.contains(e.target) && !e.target.closest('.nav_btn')) {
        nav.classList.remove('active');
      }
    });
  
    // Close the navigation menu when clicking on a link inside it
    navLinks.forEach(link => link.addEventListener('click', () => {
      nav.classList.remove('active');
    }));

    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
  
  // Show or hide the button based on scroll position
  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) { 
      scrollToTopBtn.classList.add('show');
    } else {
      scrollToTopBtn.classList.remove('show');
    }
  });

  // Scroll to top when button is clicked
  scrollToTopBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scroll
    });
  });

});




(function(){
    emailjs.init("TyGP7Pv_5UANq5fsx");
})();

document.querySelector(".contact-form").addEventListener("submit", (e)=>{
  e.preventDefault();

  const templateParams = {
    form_name: document.getElementById("name").value,
    form_email: document.getElementById("email").value,
    message: document.getElementById("message").value
  };
  // const templateParams = {
  //   form_name: "test",
  //   form_email: "test@example.com",
  //   message:"just a test"
  // };

  console.log('Sending with params:', templateParams); // Debugging

  emailjs.send('service_mo2phto', 'template_yte9kgy', templateParams)
  .then(function(response) {
    alert('SUCCESS! Your message has been sent.');
    console.log('SUCCESS!', response.status, response.text);
  }, function(error) {
    alert('FAILED... Please try again later.');
    console.error('FAILED...', error);
  });

  // to clear the form fields after submission
  document.querySelector(".contact-form").reset();
})

// function sendEmail() {
//     var name = document.getElementById("name").value;
//     var email = document.getElementById("email").value;
//     var message = document.getElementById("message").value;

//     var templateParams = {
//         from_name: name,
//         from_email: email,
//         message: message
//     };

//     emailjs.send('service_mo2phto', 'template_yte9kgy', templateParams)
//         .then(function(response) {
//             alert('SUCCESS!', response.status, response.text);
//         }, function(error) {
//             alert('FAILED...', error);
//         });
// }

