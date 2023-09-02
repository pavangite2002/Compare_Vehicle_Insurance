
export default function FooterComp() {

    return(
        <div>
            <div class="d-flex flex-column">

                <footer
                   className="text-center text-lg-start text-white bg-dark py-1"
                      style={{ width: "100%"}}
                           >

                    <section
                        class="d-flex justify-content-between p-1"
                        style={{backgroundColor:"rgb(72, 129, 153)"}}>

                        <div class="me-5">
                        <h6 class="text-uppercase fw-bold">Connect With Us</h6>
                        </div>

                        <div>
                            <a href="https://www.instagram.com/accounts/login/?hl=en" class="text-white me-4">
                            <img className="mt-2 me-2" src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" style={{height: "30px" , width:"30px"}}></img>
                            </a>
                            
                            <a href="https://www.facebook.com/" class="text-white me-4">
                            <img className="mt-2 me-2" src="https://w7.pngwing.com/pngs/637/497/png-transparent-facebook-fb-social-media-logo-social-media-logo-socialmedia-3d-icon-thumbnail.png" style={{height: "30px" , width:"30px"}}></img>
                            </a>
                            <a href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D" class="text-white me-4">
                            <img className="mt-2 me-2" src="https://e7.pngegg.com/pngimages/708/311/png-clipart-twitter-twitter-thumbnail.png" style={{height: "30px" , width:"30px"}}></img>
                            </a>
                            
                        </div>

                    </section>

                    <section class="">
                        <div class="container text-center text-md-start mt-2">

                            <div class="row mt-1">

                                <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-2">

                                    <h6 class="fw-bold">Compare Vehicle Insurance:</h6>
                                    <hr class="mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }} />
                                    <p>
                                    We help you find the best insurance plans for your vehicles. Compare rates and coverage from various insurance companies to make an informed decision 
                                    </p>
                                </div>

                               
                                <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                                    <h6 class="text-uppercase fw-bold">Useful links:</h6>
                                    <hr
                                        class="mb-4 mt-0 d-inline-block mx-auto"
                                        style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }}
                                    />
                                    <p>
                                        <a href="/contactus" class="text-white text-decoration-none">Contact us</a>
                                    </p>
                                    
                                    <p>
                                        <a href="about" class="text-white text-decoration-none">About us</a>
                                    </p>
                                    <p>
                                        <a href="/" class="text-white text-decoration-none">Help</a>
                                    </p>
                                </div>



                                <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                                    <h6 class="text-uppercase fw-bold">Contact:</h6>
                                    <hr
                                        class="mb-2 mt-0 d-inline-block mx-auto"
                                        style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }}
                                    />
                                    
                                    <p><i class="fas fa-envelope mr-3"></i><a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=new">vehicleinsurance007@gmail.com</a></p>
                                    <p><i class="fas fa-phone mr-3"></i></p>
                                    <p><i class="fas fa-phone mr-3"></i>Pavan Gite</p>
                                    <p><i class="fas fa-phone mr-3"></i>Chetan Bavane</p>
                                    <p><i class="fas fa-phone mr-3"></i>Ganesh Savant</p>
                                    <p><i class="fas fa-print mr-3"></i>Vaibhav Jadhav</p>
                                </div>

                            </div>

                        </div>
                    </section>

                    <div
                        class="text-center p-2"
                        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
                    >
                        <hr class="mb-4"></hr>
                        Copyright @2023 All rights reserved by :
                        <a class="text-white text-decoration-none"  href="https://electromart.com/">C-DAC Know-It</a>
                    </div>
                </footer>
            </div>
      </div>
    )
}


    
    
        
    