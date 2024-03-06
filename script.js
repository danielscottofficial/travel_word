const linkItems = document.querySelectorAll(".link-item");

linkItems.forEach((linkItem, index) => {
    linkItem.addEventListener("click", () => {
        document.querySelector(".active").classList.remove("active");
        linkItem.classList.add("active");

        const indicator = document.querySelector(".indicator");

        indicator.style.left = `${index * 95 + 48}px`;
                indicator
    })
})




// calling important functions
navTogglerAnimation();


// Important functions
function navTogglerAnimation() {
    const navToggler = document.querySelector(".nav-toggler");
    // navToggler.style.opacity = 0

    let count = 1;
    navToggler.onclick = () => {
        if (count) {
            gsap.to(".nav-toggler .line:nth-child(2)", {opacity: 0, duration: .2})
            gsap.to(".nav-toggler .line:nth-child(1)", {rotate: 45, y: 3})
            gsap.to(".nav-toggler .line:nth-child(3)", {rotate: -45, y: -3})
            gsap.to(".nav-toggler", {justifyContent: "center"})


            gsap.to(".left-menu", {left: 0})
            count--;
        } else {
            gsap.to(".nav-toggler .line:nth-child(2)", {opacity: 1, duration: .2})
            gsap.to(".nav-toggler .line:nth-child(1)", {rotate: 0, y: 0})
            gsap.to(".nav-toggler .line:nth-child(3)", {rotate: 0, y: 0})
            gsap.to(".nav-toggler", {justifyContent: "space-between"})
            
            
            gsap.to(".left-menu", {left: "-100%", duration: 1})
            gsap.to(".overlay", {opacity: 0})
                
            count++;
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const copyButton = document.querySelector('.copy');
    const trc20Address = document.querySelector('.trc_20.address');
  
    if (copyButton) {
      copyButton.addEventListener('click', () => {
        trc20Address.select();
        document.execCommand('copy');
      });
    }
  });

 const copy_btn = document.querySelector('.copy_btn');
 const main_code = document.querySelector('.main_code');
 
 if (copy_btn) {
   copy_btn.addEventListener('click', () => {
     const textArea = document.createElement('textarea');
     textArea.value = main_code.textContent;
     document.body.appendChild(textArea);
     textArea.select();
     document.execCommand('copy');
     document.body.removeChild(textArea);
     alert('Invitation code copied!' + ' ' + main_code.textContent);
   });
 }



    // Get references to the menu and overlay elements
    const leftMenu = document.querySelector('.left-menu');
    const overlay = document.querySelector('.overlay');
    const navToggler = document.querySelector('.nav-toggler');

    // Function to toggle the menu and overlay
    function toggleMenu() {
        leftMenu.classList.toggle('open'); // Toggle the 'open' class on the menu
        overlay.style.display = leftMenu.classList.contains('open') ? 'block' : 'none'; // Show/hide overlay
    }

    // Event listener for the nav toggler button
    navToggler.addEventListener('click', toggleMenu);

    // Event listener for the overlay to close the menu when clicked outside
    overlay.addEventListener('click', function(event) {
        if (event.target === overlay) {
            toggleMenu(); // Close the menu
        }
    });

