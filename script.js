var scrollBtn = document.getElementById("scrollUp");

        // Show the button when user scrolls down 200px
        window.onscroll = function () {
            if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
                scrollBtn.style.display = "block";
            } else {
                scrollBtn.style.display = "none";
            }
        };

        // Scroll to the top smoothly when button is clicked
        scrollBtn.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default link action
            window.scrollTo({ top: 0, behavior: "smooth" });
        });

        const scroll = new LocomotiveScroll({
            el: document.querySelector('[#main]'),
            smooth: true
        });