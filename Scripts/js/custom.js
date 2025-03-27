// Function to load external HTML content into the page
function loadContent() {
    // Fetch and load header Home page content
    fetch('header-home.html')
        .then(response => response.text())
        .then(data => document.getElementById('header-home-placeholder').innerHTML = data)
        .catch(error => console.error('Error loading header-home:', error));

    // Fetch and load header Inner page content
    fetch('header.html')
        .then(response => response.text())
        .then(data => document.getElementById('header-placeholder').innerHTML = data)
        .catch(error => console.error('Error loading header:', error));



    // Fetch and load footer content
    fetch('footer.html')
        .then(response => response.text())
        .then(data => document.getElementById('footer-placeholder').innerHTML = data)
        .catch(error => console.error('Error loading footer:', error));
}

// Call the function to load content when the page is loaded
window.onload = loadContent;




        // Get the modal
        var modal = document.getElementById('myModal12');

        // Get the button that opens the modal
        var btn = document.getElementById("myBtn");

        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close12")[0];

        // When the user clicks the button, open the modal
        btn.onclick = function () {
            modal.style.display = "block";
            $('body').css('overflow-y', 'hidden');

        }



        // When the user clicks on <span> (x), close the modal
        span.onclick = function () {
            modal.style.display = "none";
            $('body').css('overflow-y', 'scroll');
        }

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
                $('body').css('overflow-y', 'scroll');
            }
        }

        $(document).keydown(function (e) {
            // ESCAPE key pressed
            if (e.keyCode === 27) {

                modal.style.display = "none";
                $('body').css('overflow-y', 'scroll');
            }
        });



        // Get the modal
        var modal1 = document.getElementById('myModal123');

        // Get the button that opens the modal
        var btn = document.getElementById("myBtn1");

        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close123")[0];

        // When the user clicks the button, open the modal
        btn.onclick = function () {
            modal1.style.display = "block";
            $('body').css('overflow-y', 'hidden');

        }



        // When the user clicks on <span> (x), close the modal
        span.onclick = function () {
            modal1.style.display = "none";
            $('body').css('overflow-y', 'scroll');
        }

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function (event) {
            if (event.target == modal1) {
                modal1.style.display = "none";
                $('body').css('overflow-y', 'scroll');
            }
        }

        $(document).keydown(function (e) {
            // ESCAPE key pressed
            if (e.keyCode === 27) {

                modal1.style.display = "none";
                $('body').css('overflow-y', 'scroll');
            }
        });

