const openCertifications = document.getElementById('open-certifications')
const closeCertifications= document.getElementById('close-certifications')
const certifications= document.getElementById('certifications-container')

openCertifications.addEventListener('click', ()=>{ 
    certifications.classList.replace("display-none", "certifications-container");
})

closeCertifications.addEventListener('click', ()=>{ 
    certifications.classList.replace( "certifications-container","display-none");
})


const videoAvatar= document.getElementById('video-avatar')
const presentationContainerText= document.getElementById('presentation-container-text')
const btnClosePresentation = document.getElementById('btn-close-presentation')

/*videoAvatar.addEventListener('click', ()=>{
  presentationContainerText.classList.replace( "display-none",'presentation-container-text');
})*/

btnClosePresentation.addEventListener('click', ()=>{
  presentationContainerText.classList.replace( 'presentation-container-text',"display-none");

})

const btnOpenAboutMe= document.getElementById('btn-open-about-me')
btnOpenAboutMe.addEventListener('click', ()=>{
  presentationContainerText.classList.replace( "display-none",'presentation-container-text');
})
