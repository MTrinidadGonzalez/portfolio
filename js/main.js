
//https://www.youtube.com/watch?v=pFsjtDwDA08&t=291s canal de youtube kx web muy bueno
//https://www.youtube.com/watch?v=wu_M_V-Hehg youtube animacion con librerí


//btn section front
const readMoreFrontBtn= document.getElementById('readMoreFrontBtn')
const frontReadMoreText= document.getElementById('frontReadMoreText')

readMoreFrontBtn.onclick=()=>{
    frontReadMoreText.classList.toggle('show')
    frontReadMoreText.classList.toggle('pStyles')
    

    if(frontReadMoreText.classList.contains('show')){
        readMoreFrontBtn.innerHTML= `<span>Front     -</span>`
    }
    else{
        readMoreFrontBtn.innerHTML= `<span>Front     +</span>`
    }
}

//btn section back

const readMoreBackBtn= document.getElementById('readMoreBackBtn')
const backReadMoreText= document.getElementById('backReadMoreText')

readMoreBackBtn.onclick=()=>{
    backReadMoreText.classList.toggle('show')
    backReadMoreText.classList.toggle('pStyles')  

    if(backReadMoreText.classList.contains('show')){
        readMoreBackBtn.innerHTML= `<span>Back     -</span>`
    }
    else{
        readMoreBackBtn.innerHTML= `<span>Back     +</span>`
    }
}


//btn read more perfil
const readMorePerfilBtn= document.getElementById('readMorePerfilBtn')
const presReeadMoreText= document.getElementById('presReeadMoreText')

readMorePerfilBtn.onclick=()=>{
    presReeadMoreText.classList.toggle('show')
    presReeadMoreText.classList.toggle('pStyles')

    if(presReeadMoreText.classList.contains('show')){
        readMorePerfilBtn.innerHTML= `<span>Perfil -</span>`
    }
    else{
        readMorePerfilBtn.innerHTML= `<span>Perfil +</span>`
    }
}

//certificados

const readMoreCertifications= document.getElementById('readMoreCertifications')
const certifictionsContainer= document.getElementById('certifictionsContainer')

readMoreCertifications.onclick=()=>{
    certifictionsContainer.classList.toggle('show')
   if(certifictionsContainer.classList.contains('show')){
    readMoreCertifications.innerHTML= `<span>Certificados -</span>`
   }
   else{
    readMoreCertifications.innerHTML= `<span>Certificados +</span>`
   }
}

//alerts certificados

const btnDWeb =document.getElementById("btnDWeb")
const btnJS= document.getElementById("btnJS")
const btnReact= document.getElementById("btnReact")

btnDWeb.onclick=()=>{
  
    Swal.fire({
      padding: '0%',
      width: 80,
      buttonConfirmText: "ok",
      confirmButtonColor: 'rgba(54, 48, 48, 0.158)',
      background: 'rgba(54, 48, 48, 0.158)',
      imageUrl: './assets/img/certificadoDW.jpg',
      imageWidth: '100%',
      
    })
  }
  
  btnJS.onclick=()=>{
    Swal.fire({
      padding: '0%',
      width: 80,
      buttonConfirmText: "ok",
      confirmButtonColor: 'rgba(54, 48, 48, 0.158)',
      background: 'rgba(54, 48, 48, 0.158)',
      imageUrl: './assets/img/certificadoJs.png',
      imageWidth: '100%',
      
    })
  }
  
  btnReact.onclick=()=>{
    Swal.fire({
      padding: '0%',
      width: 850,
      buttonConfirmText: "ok",
      confirmButtonColor: 'rgba(54, 48, 48, 0.158)',
      background: 'rgba(54, 48, 48, 0.158)',
      imageUrl: './assets/img/certificadoReact.png',
      imageWidth: '100%',
      
    })
  }
  
  