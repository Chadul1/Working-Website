document.addEventListener("DOMContentLoaded", function() {
        
    //Store the navbar HTML as a variable so we can inject it into the document automatically
    var navBarHTML = 
    `<!--The horizontal navigation bar -->
     <nav class="navbar navbar-expand-lg" style="background-image: linear-gradient(to right, rgb(255,176,189), rgb(254,194,160));
     width:100%;
     ">

        <div class="container-fluid justify-content-between">
        
            <!-- The brand logo for the nav bar -->
            <a class="navbar-brand ms-2" href="#">
                <img src="../media/brand/Branding/logo1.png" href="../html/index.html" alt="Brand Logo" style="width:80px;" class="rounded-pill"> 
            </a>

            <!--The button to toggles the vertical drop-down links on smaller screens-->
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                <span class="navbar-toggler-icon"></span>
            </button>

            <!-- The portion that collapses when it needs to -->
            <div class="collapse navbar-collapse  justify-content-end" id="collapsibleNavbar">
                
                <!-- Nav links -->
                <ul class="navbar-nav mx-auto h4">

                    <li class="nav-item"> 
                        <a class="nav-link mx-5" href="../html/index.html">Home Page</a> 
                    </li>

                    <li class="nav-item"> 
                        <a class="nav-link mx-5" href="../html/animalAdoptionPage.html">Adoptable Animals</a> 
                    </li>

                    <li class="nav-item"> 
                        <a class="nav-link mx-5" href="../html/contact.html">Contact Us</a> 
                    </li>

                    <li class="nav-item"> 
                    <a class="nav-link mx-5" href="../html/donationPage.html">Donation</a> 
                    </li>

                    <li class="nav-item"> 
                    <a class="nav-link mx-5" href="../html/faq.html">FAQ</a> 
                    </li>
                </ul>
            </div>
        </div>
     </nav>`

     //Insert the navbar at the top of the page
    document.body.insertAdjacentHTML("afterbegin", navBarHTML);

     var navBarFooterHTML = 
    `<!-- The footer nav bar -->
    <footer class="list-unstyled navbar-expand-sm" style="background-image: linear-gradient(to right, rgb(255,176,189), rgb(254,194,160)); width: 100%; display:flex; justify-content: center;">

        <!-- navigation links -->
        <ul class="nav justify-content-center border-bottom h6" id="navFooter">
            <li class="nav-item" style="display:flex; align-items: center;">
            <li class="nav-item ">
                <a class="nav-link px-4 text-light" href="../html/index.html">Home Page</a> </li>
            </li>

            <li class="nav-item" style="display:flex; align-items: center;"> 
                <a class="nav-link px-4 text-light" href="../html/animalAdoptionPage.html">Adoptable Animals</a> 
            </li>

            <style>
            .social-icon {
                width: 30px; /* Adjust as needed */
                height: auto; /* Maintain aspect ratio */
            }
            </style>

            <div class="social-icons mt-4 mb-4">
                <a href="#" class="text-decoration-none me-3"><img src="../media/social/twitter2.png" alt="Twitter" class="social-icon"></a>
                <a href="#" class="text-decoration-none me-3"><img src="../media/social/instagram2.png" alt="Instagram" class="social-icon"></a>
                <a href="#" class="text-decoration-none me-3"><img src="../media/social/facebook2.png" alt="Facebook" class="social-icon"></a>
            </div>

            
            <li class="nav-item"> 
            <a class="nav-link mx-5 text-light" href="../html/donationPage.html">Donation</a> 
            </li>
        </ul>
    </footer>`
        
    //Insert the navbar at the top of the page
    document.body.insertAdjacentHTML("beforeend", navBarFooterHTML);
});