import React from "react";
import { Link } from "react-router-dom";
import '../../assets/css/fontawesome.css'
import '../../assets/css/templatemo-grad-school.css'
import '../../assets/css/lightbox.css'

const HomePage = () => {
  return (
    <div>
      {/* <!-- ***** Main Banner Area Start ***** --> */}
  <section class="section main-banner" id="top" data-section="section1">
      <video autoplay muted loop id="bg-video">
          <source src="../../assets/images/course-video.mp4" type="video/mp4" />
      </video>

      <div class="video-overlay header-text">
          <div class="caption">
              <h2><em>Luminar</em> Technolab</h2>
              <div class="main-button">
                  <div class="scroll-to-section"><Link to="about" >Learn more</Link></div>
              </div>
          </div>
      </div>
  </section>
  {/* <!-- ***** Main Banner Area End ***** --> */}


  <section class="features">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-12">
          <div class="features-post">
            <div class="features-content">
              <div class="content-show">
                <h4><i class="fa fa-pencil"></i>Courses</h4>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-12">
          <div class="features-post second-features">
            <div class="features-content">
              <div class="content-show">
                <h4><i class="fa fa-graduation-cap"></i>Virtual Class</h4>
              </div>
              
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-12">
          <div class="features-post third-features">
            <div class="features-content">
              <div class="content-show">
                <h4><i class="fa fa-book"></i>Real Meeting</h4>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    </div>
  );
};

export default HomePage;
