import '../css/style.css'
import facebook from '../assets/icons/facebook.svg'
import youtube from '../assets/icons/youtube.svg'
import twitter from '../assets/icons/twitter.svg'
import ins from '../assets/icons/instagram.svg'
import wasap from '../assets/icons/whatsapp.svg'
import telefono from '../assets/icons/telephone.svg'
import email from '../assets/icons/email.svg'
import celular from '../assets/icons/telefono-inteligente.gif'
import contactanos from '../assets/ilustraciones/contactanos.jpg'
import imagenmovil from '../assets/ilustraciones/contactanosmovil.png'
import React, { useState } from 'react';


function Contact() {

  const [mostrarImagen, setMostrarImagen] = useState(false);

  const ocultarDiv = () => {
    if (window.innerWidth <= 1000) {
      setMostrarImagen(true);
    } else {
      setMostrarImagen(false);
    }
  };

  window.addEventListener('resize', ocultarDiv);
  return (
    <>
    
    <section id="faq pb-sm-5 container my-5">

<div className="container mt-5 py-sm-2 pt-md-5">
  <div className="row justify-content-center mt-5">
    <div className="col-md-8 col-lg-6 text-center mb-3">
      <h6 className="  fw-bold lh-sm mb-3 display-6 dark dark py-2">Preguntas Frecuentes</h6>
      <p className="pb-3 fs-6 font text-secondary ">En este apartado podras encontrar todas las preguntas frecuentes que
        nuestros usuarios
        han
        echo con anterioridad. En caso de que no encuentres lo que buscas, contactactanos pulsando <a
      href="./contactos.html">aqui</a></p>
</div>
</div>
<div className="row d-flex justify-content-center ">
<div></div>
<div className="col-lg-9 fs-6 font text-secondary ">
  <div className="accordion" id="accordionExample">
    <div className="accordion-item mb-2">
      <h2 className="accordion-header" id="heading1">
        <button className="accordion-button bg_azul" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1"
          aria-expanded="true" aria-controls="collapse1"><span className=" fs-5   mb-0 fw-bold text-start  dark">  Es posible negociar el precio del flete directamente con el conductor encargado del servicio ?</span></button>
      </h2>
      <div className="accordion-collapse collapse show  " id="collapse1" aria-labelledby="heading1"
        data-bs-parent="#accordionExample">
        <div className="accordion-body  text-secondary bg_azul ">Hola, buenos dias, si es posible negociar el precio del flete  con el conductor encargado de prestar el servicio, lo puedes hacer por medio una llamada telefonica, ya que tienes la posibilidad de poder acceder a los datos del conductor.</div>
      </div>
    </div>
    <div className="accordion-item mb-2">
      <h2 className="accordion-header" id="heading2">
        <button className="accordion-button collapsed bg_azul" type="button" data-bs-toggle="collapse"
          data-bs-target="#collapse2" aria-expanded="true" aria-controls="collapse2"><span
            className="mb-0 fs-5  fw-bold text-start bg_azul  dark">  Que pasa si hay un retraso en la llegada del vehiculo encargado de prestar el servicio?</span></button>
      </h2>
      <div className="accordion-collapse collapse bg_azul" id="collapse2" aria-labelledby="heading2"
        data-bs-parent="#accordionExample">
        <div className="accordion-body text-secondary  bg_azul"> Hola, buenas tardes, en tal caso de que sucedan ese tipo de situaciones, el conductor debera notificarte del por que el retraso, en tal caso de que se le haga imposible llegar, te debe notificar, para que asi puedas solicitar otro vehiculo.</div>
      </div>
    </div>
    <div className="accordion-item mb-2">
      <h2 className="accordion-header" id="heading3">
        <button className="accordion-button collapsed bg_azul" type="button" data-bs-toggle="collapse"
          data-bs-target="#collapse3" aria-expanded="true" aria-controls="collapse3"><span
            className="mb-0 fs-5 fw-bold text-start dark "> Que sucederia si el vehiculo en el cual transportaba los alimentos nunca llego al lugar de destino.</span></button>
      </h2>
      <div className="accordion-collapse collapse bg_azul" id="collapse3" aria-labelledby="heading3"
        data-bs-parent="#accordionExample">
        <div className="accordion-body  text-secondary bg_azul"> En tal  caso de que suceda una situacion de este tipo debes de comunicarte con las autoridades pertinentes para dar aviso, y brindarles toda la informacion que te brinda la aplicacion en ese momento sobre el conductor y el vehiculo en el cual estaba prestando el servicio, tambien debes de notificar con los administardores de la aplicacion para que se encarguen de inhabilitar al condutor, en ese momento se le notificara al conductor del por que la suspencion</div>
      </div>
    </div>
    <div className="accordion-item mb-2">
      <h2 className="accordion-header" id="heading4">
        <button className="accordion-button collapsed bg_azul" type="button" data-bs-toggle="collapse"
          data-bs-target="#collapse4" aria-expanded="true" aria-controls="collapse4"><span
            className="mb-0 fs-5 fw-bold text-start  dark "> Como hago para tener la seguridad de que los vehiculos y conductores que estan regristrados a la app cumplen con toda la normativa?</span></button>
      </h2>
      <div className="accordion-collapse collapse" id="collapse4" aria-labelledby="heading4"
        data-bs-parent="#accordionExample">
        <div className="accordion-body text-secondary bg_azul">Los administradores de TRAMO se encaragn de verificar que cada solicitud que es enviada a la aplicacion, que los documentos de la persona se encuentren en regla igual que los documentos del vehiculo, despues de haber revisado y comprobar que se encuentren en regla, sera aprobado para que pueda prestar sus servicios.</div>
      </div>
    </div>
    <div className="accordion-item mb-2">
      <h2 className="accordion-header" id="heading5">
        <button className="accordion-button collapsed bg_azul" type="button" data-bs-toggle="collapse"
          data-bs-target="#collapse5" aria-expanded="true" aria-controls="collapse5"><span
            className="mb-0 fs-5 text-start fw-bold  dark">Tengo la posibilidad de escoger el vehiculo de acuerdo a mis nesecidades?</span></button>
      </h2>
      <div className="accordion-collapse collapse" id="collapse5" aria-labelledby="heading5"
        data-bs-parent="#accordionExample">
        <div className="accordion-body text-secondary bg_azul"> Hola, buenas tardes, si es posible escoger el veiculo, de acuerdo a tus nesecidades, y al ambiente geografico.</div>
      </div>
    </div>
  </div>
</div>
</div>
</div>
</section>

    {/* section fin */}

    {/* Contactanos */}
    
<div class="d-flex justify-content-center align-items-end mt-5">
            <img src={celular} alt="" width="68px" height="68px"></img>
            <h1 className="fw-bold fs-2 dark lh-sm align-items-end font">Contactanos</h1>
        </div>
        <div className="mt-3">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3986.073285212112!2d-76.5646593855345!3d2.482692857580904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e300410eb607c65%3A0x614545787e90bea6!2sSENA!5e0!3m2!1ses!2sco!4v1669607479158!5m2!1ses!2sco" width="100%" height="500" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    
       
        <section className="contact-area font">
            <div className="container-form-contacto p-3">
                <div className="row">
                    <div className="col-12">
                        <div className="contact-content">
                            <div className="row">
                            <div className="col-12 col-lg-7">
                                <p className='font dark fs-2 fw-bold'>Dejanos un mensaje</p>
                                    <div className="contact-form-area wow fadeInUp mt-3 mt-lg-0" data-wow-delay="500ms">
                                       
                                        <form action="#" method="post " >
                                            <input type="text" className="form-control color" id="name" placeholder="Name"></input>
                                            <input type="email" className="form-control color mt-2" id="email" placeholder="E-mail"></input>
                                            <input type="tel" className="form-control color mt-2" id="number" placeholder="Numero de telefono"></input>
                                            <textarea name="message" className="form-control color descripcion-pregunta my-2" id="message" cols="30" rows="7" placeholder="Message"></textarea>
                                            <div className='text-center'>

                                            <button className="btn btn-form-contacto mt-30 p-2 letra" >Contactanos</button>
                                            
                                            </div>
                                           
              
                                       </form>
                                    </div>
                                </div>
                                
                                <div className="col-12 col-lg-5 ">

                                    <div className="contact-information cambios wow fadeInUp" data-wow-delay="400ms">
                                       <div className='estilo'>
                                        <a href="">
                                          <img className='imagen1' src={contactanos} alt=""  />
                                        </a>
                                       </div>
                                        <div >
                                            <h3 className="titulo-form font">Envia Tu Pregunta</h3>
                                            <p className="mt-30 font">Dejanos saber tus dudas, o inconvenientes que hayas tenido durante el uso de nuestra aplicacion.</p>
                                        </div>
    
                                        
                                        {/* <div >
                                          <ul className="iconos-form">
                                            <li className="form__list-item ">
                                              <a href="#" className="form__list-link">
                                                <img src={facebook} width="24px" className="mx-2" alt=""></img>
                                              </a>
                                            </li>
                                            <li className="form__list-item me-2">
                                              <a href="#" className="form__list-link">
                                                <img src={ins} width="24px" className="ms-2" alt=""></img>
                                              </a>
                                            </li>
                                            <li className="form__list-item me-2">
                                              <a href="#" className="form__list-link">
                                                <img src={twitter} width="24px" className="ms-2" alt=""></img>
                                              </a>
                                            </li>
                                            <li className="form__list-item me-2">
                                              <a href="#" className="form__list-link">
                                                <img src={wasap} width="24px" className="ms-2" alt=""></img>
                                              </a>
                                            </li>
                                            <li className="form__list-item me-2">
                                              <a href="#" className="form__list-link">
                                                <img src={youtube} width="24px" className="ms-2" alt=""></img>
                                              </a>
                                            </li>
                                          </ul>
                                        </div> */}
    
                                        
                                        <h6 className="footer__title">Contactanos</h6>
                                        <div className={mostrarImagen ? 'mi-div oculto' : 'mi-div'}>
      {mostrarImagen ? (
        <img className='organizarimg' src={imagenmovil} alt=""  />
      ) : (
        <p><div className="single-contact-info  desaparece">
                                         
        <ul className="footer__list">
          <li className="footer__list-item">
            <img   src={email} alt=""></img>
            <a href="" className="footer__list-link ms-1 colorcontactanos">TramoAdmin@gmail.com</a>
          </li>
          <li className="footer__list-item">
            <img  src={telefono} alt=""></img>
            <a href="" className="footer__list-link ms-1 colorcontactanos">+57 3235234567</a>
          </li>
          <li className="footer__list-item">
            <img  src={telefono} alt=""></img>
            <a href="" className="footer__list-link ms-1 colorcontactanos">+57 3235234567</a>
          </li>
        </ul>
      </div></p>
      )}
    </div>
                                        
                                    </div>
                                </div>
                    
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
       
            
        </section>

   
    
  
    </>
  )
}


export default Contact