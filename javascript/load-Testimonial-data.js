

function loadTestimonialData(){
    fetch('/json-data/testimonial.json')
    .then(res=>res.json())
    .then(data=> displayCard(data))
}
loadTestimonialData()
function displayCard(data){
    const card=document.getElementById('testimonial-card-id')
    const div=document.getElementById('dot-slider')
    for(const cardInfo of data){
        const div=document.createElement('div')
        
       
        if (`${cardInfo.rating}`==4){
            div.innerHTML=`
            <div  class="testimonial-card">
            <div class="testimonial-card-img">
                <img style="width: 90px;height: 90px;margin-left: 10%;margin-top: 2%;border-radius: 60px;" src=${cardInfo.image} alt="Avatar" style="width:100%">
            </div>
     
         <div class="testimonial_style" style="margin-top: 4%;width:60%">
           <h2 style="color: #30FBEF;margin-bottom:0;"><b>${cardInfo.name}</b></h2> 
           <div style="display:flex;height:30px;">
           <div ><p style="color: blueviolet;weight:"385";font-weight: 400;
           font-size: 16px;">${cardInfo.job}</p></div>
       
            <div><p style="color: #30FBEF;margin-left: 45px;">
            <i class="fas fa-circle"></i>
            <i class="fas fa-circle"></i>
            <i class="fas fa-circle"></i>
            <i class="fas fa-circle"></i>
           
            <i  style="color:#282828;" class="fa fa-circle"></i>
            </p></div>
           
          
           </div>
           <p style="color: white; font-weight: 400;
           font-size: 18px;">${cardInfo.detail}</p> 
           
         </div>
         
       </div>
            `
        }
        else if(`${cardInfo.rating}`==5){
            div.innerHTML=`
            <div  class="testimonial-card">
            <div class="testimonial-card-img">
                <img style="width: 90px;height: 90px;margin-left: 10%;margin-top: 2%;border-radius: 60px;" src=${cardInfo.image} alt="Avatar" style="width:100%">
            </div>
     
         <div class="testimonial_style" style="margin-top: 4%;width:60%">
           <h2 style="color: #30FBEF;margin-bottom:0;"><b>${cardInfo.name}</b></h2> 
           <div class="job_rating" style="display:flex;height:30px;">
           <div ><p style="color: #9C69E2;font-weight: 400;
           font-size: 14px;">${cardInfo.job}</p></div>
       
            <div><p style="color: #30FBEF;margin-left: 45px;">
            <i class="fas fa-circle"></i>
            <i class="fas fa-circle"></i>
            <i class="fas fa-circle"></i>
            <i class="fas fa-circle"></i>
            <i class="fas fa-circle"></i>
            </p></div>
           
          
           </div>
           <p style="color: white; font-weight: 400;
           font-size: 1.125rem;">${cardInfo.detail}</p> 
           
         </div>
         
       </div>
      
            ` 
          
        }
  
        card.appendChild(div)
    }

}
function slider(){


}
// var slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}    
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";  
//   }
//   for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";  
//   dots[slideIndex-1].className += " active";
// }