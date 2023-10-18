document.addEventListener("DOMContentLoaded", function () {
   
    
   



   



    const chennaiButton = document.querySelector(".chennaiButton");
    const cbeButton = document.querySelector(".cbeButton");
    const maduraiButton = document.querySelector(".maduraiButton");
    const KancheepuramButton = document.querySelector(".KancheepuramButton");


    const titleDistrict = document.querySelector(".title-district");
    const searchContainer = document.getElementById("search");



    const district = document.getElementById("district");
    const backButton = document.getElementById("backButton");
    const loaderOverlay = document.getElementById("loader-overlay");









   
    chennaiButton.addEventListener("click", function (event) {
      event.preventDefault();
      toggleSearchContainer();
        
      backButton.style.display = "block";
      titleDistrict.style.display = "none";
      showLoader();

    });









    cbeButton.addEventListener("click", function (event) {
        alert("Coming soon!");
    });



    maduraiButton.addEventListener("click", function (event) {
        alert("Coming soon!");
    });

    KancheepuramButton.addEventListener("click", function (event) {
        alert("Coming soon!");
    });


    const SalemButton = document.querySelector(".SalemButton");
    const TirunelveliButton = document.querySelector(".TirunelveliButton");
    const DharmapuriButton = document.querySelector(".DharmapuriButton");


    SalemButton.addEventListener("click", function (event) {
        alert("Coming soon!");
    });

    TirunelveliButton.addEventListener("click", function (event) {
        alert("Coming soon!");
    });

    DharmapuriButton.addEventListener("click", function (event) {
        alert("Coming soon!");
    });







    function toggleSearchContainer() {
      searchContainer.style.display = "block";
      district.style.display = "none";
    }



    document.getElementById("backButton").addEventListener("click", function () {
        goBack();
        titleDistrict.style.display = "block";
        showLoader();
      });
  













      // Function to go back
      function goBack() {
        // You can customize this logic to navigate back or perform other actions
    
        searchContainer.style.display = "none";
        district.style.display = "block";
       
        backButton.style.display = "none";
      }










      function showLoader() {
        loaderOverlay.style.display = "flex";
        setTimeout(function () {
          loaderOverlay.style.display = "none";
        }, 1000); // 5000 milliseconds = 5 seconds
      }
  
    });