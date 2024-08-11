let slideIndex = 0;
showSlides(0);
      
      function showSlides(n) {
        let i;
        let j=n;
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("dot");
        
       

        for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";  
        }
        
        slideIndex++;
        
        if (slideIndex > slides.length) {slideIndex = 1}    
        for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
        }
       
        slides[slideIndex-1].style.display = "block";  
        dots[slideIndex-1].className += " active";
        setTimeout(showSlides, 4000); // Change image every 2 seconds
      }

      function submit()
      {
   
         for(var i=0;i<document.getElementsByClassName("form-control").length;i++){
        document.getElementsByClassName("form-control")[i].value="";
      }
     

         alert("Registerd Successfully")

      }