document.addEventListener("DOMContentLoaded", function () {
    // Ensure the script runs only after the DOM is fully loaded

    // Check if placeholders exist before injecting content
    const headerHomePlaceholder = document.getElementById('header-home-placeholder');
    const headerPlaceholder = document.getElementById('header-placeholder');
    const footerPlaceholder = document.getElementById('footer-placeholder');

    if (headerHomePlaceholder) {
        headerHomePlaceholder.innerHTML = `
          <header class="nav-down">
             <div class="navbar-wrapper">
                <div class="container">
                   <nav class="navbar navbar-inverse">
                      <div id="nav-icon4" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"> 
                        <span></span> <span></span> <span></span> 
                      </div>
                      <div class="navbar-header st0-logo-crop">
                         <a class="navbar-brand " href="Home.html">
                         <img src="./Content/svg/logo.svg" class="pull-left sticky-1">
                         <img src="./Content/svg/logo-inner.svg" class="pull-left sticky-2">
                         </a>
                         <div class="pull-right home-logo-crop hidden-xs hidden-sm hidden-md">
                            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                               viewBox="0 0 38.716 77.982" style="enable-background:new 0 0 38.716 77.982;" xml:space="preserve">
                               <line class="st0-logo-crop" x1="31.372" y1="2.101" x2="31.372" y2="76.601" />
                               <line class="st0-logo-crop" x1="2.372" y1="39.351" x2="36.872" y2="39.351" />
                            </svg>
                         </div>
                      </div>
                      <div id="navbar" class="navbar-collapse collapse">
                         <ul class="nav navbar-nav nav-ul">
                            <li><a href="Brands.html">Brands</a> </li>
                            <li><a href="Legacy.html">Legacy</a></li>
                            <li><a href="Team.html">Team</a></li>
                            <li><a href="Events.html">Events</a></li>
                            <li><a href="Solutions.html">Solutions</a></li>
                            <li><a href="Careers.html">Careers</a></li>
                            <li><a href="Contact.html">Contact us</a></li>
                            <li><a href="https://www.deccanherald.com/" target="_blank">Deccan Herald</a></li>
                            <li><a href="https://www.prajavani.net/" target="_blank"> Prajavani</a></li>
                         </ul>
                      </div>
                   </nav>
                </div>
             </div>
          </header>
        `;
    }

    if (headerPlaceholder) {
        headerPlaceholder.innerHTML = `
            <header>
                <h1>Inner Page Header</h1>
                <nav>
                    <ul>
                        <li><a href="#">Dashboard</a></li>
                        <li><a href="#">Profile</a></li>
                        <li><a href="#">Settings</a></li>
                    </ul>
                </nav>
            </header>
        `;
    }

    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = `
            <footer class="footer space wow fadeInDown">
             <div class="container">
                <div class="row">
                   <img src="./Content/svg/logo-footer.svg" class="img-responsive center-block logo-bottom" alt="The Printers Mysore">
                   <p class="text-center copy-right-space">&#9400; 2018 All Rights Reserved</p>
                   <div class="col-xs-12 col-sm-3 col-sm-offset-2 col-xs-offset-0 text-align-c">
                      <ul>
                         <li><a href="Contact.html">Contact us</a></li>
                         <li>
                            <a id="btnMedia"  href="#modalForm" class=""  data-toggle="modal" data-target="#modalForm">Write to us</a>
                         </li>
                      </ul>
                   </div>
                   <div class="col-xs-12 col-sm-3 text-align-c no-mar-pad">
                      <ul>
                         <li><a href="Careers.html">Careers</a></li>
                         <li><a href="Subscriptions.html">Subscribe to our Paper</a> </li>
                      </ul>
                   </div>
                   <div class="col-xs-12 col-sm-3 text-align-c no-mar-pad">
                      <ul>
                         <li><a href="https://api.whatsapp.com/send?phone=919008266666" target="_blank">
                            <img src="./Content/images/whats-app-green.png" class="wats-app"> 
                            <span> +91 90082 66666 </span>
                         </a></li>
                         <li>
                            <a href="#privacyPolicy" data-toggle="modal" data-target="#privacyPolicy">Privacy policy</a>
                            <a href="#Terms" data-toggle="modal" data-target="#Terms">&nbsp;Terms</a>
                         </li>
                      </ul>
                   </div>
                </div>
             </div>
          </footer>
        `;
    } else {
        console.error("Error: #footer-placeholder not found in the DOM.");
    }
});
