import React from "react";
import {Link} from "react-router-dom";

function Main() {
  return (
    <>
        <section id="title">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-6">
                    <h2>Where students life flourish!</h2>
                </div>
                <div class="col-lg-6">
                    <div class="box-logo">
                    </div>
                    <div class="triangle-logo">
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section id="features">
        <div class="about-us">
            <h3 class="feature-title">Who we are</h3>
            <br />
            <p>We are a group of enthusiastic students who try to make the students life as fun as possible by making unrivalled social activities. Such as:</p>
            <ul>
                <li>Hiking</li>
                <li>Camping</li>
                <li>Water Sports</li>
                <li>Courts Sports</li>
                <li>Tech Gathering</li>
                <li>Day Trips</li>
                <li>Night Out</li>
            </ul>
            <p>Ever thought of creating your own event? This is the place you can make it possible! Drop us an email or speak to us in person to arrange that.</p>
        </div>
        <div class="row">
            <div class="feature-box col-lg-4">
                <i class="icon fas fa-check-circle fa-4x"></i>
                <h3 class="feature-title">Have Fun</h3>
                <p>Get out and make the best of your day</p>
            </div>
            <div class="feature-box col-lg-4">
                <i class="icon fas fa-bullseye fa-4x"></i>
                <h3 class="feature-title">Develop</h3>
                <p>Develop your skills and learn new ones</p>
            </div>
            <div class="feature-box col-lg-4">
                <i class="icon fas fa-heart fa-4x"></i>
                <h3 class="feature-title">Meet Others</h3>
                <p>Make new friends and grow your relationships</p>
            </div>
        </div>

        <div id="next-events" class="events-button-section">
            <Link to="/events">
                <button type="button" class="events-btn btn btn-primary btn-lg">
                    Next Event
                </button>
            </Link>
        </div>
    </section>
    <section id="testimonials">
        <div class="activities-title col-lg-12">
            <h2>Activities Log</h2>
        </div>
        <div id="testimonial-carousel" class="carousel slide" data-ride="false">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="main_images/water-sport.jpg" alt="man-surfing" />
                </div>
                <div class="carousel-item">
                    <img src="main_images/hiking.jpg" alt="" />
                </div>
                <div class="carousel-item">
                    <img src="main_images/football.jpg" alt="" />
                </div>
                <div class="carousel-item">
                    <img src="main_images/tennis.jpg" alt="" />
                </div>
                <div class="carousel-item">
                    <img src="main_images/tech-gather.jpg" alt="" />
                </div>
                <div class="carousel-item">
                    <img src="main_images/night-out.jpg" alt="" />
                </div>
            </div>

            <a class="carousel-control-prev" href="#testimonial-carousel" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#testimonial-carousel" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    </section>
    <section id="press">
        <img class="press-logo" src="main_images/tnw.png" alt="tnw-logo" />
        <img class="press-logo" src="main_images/bizinsider.png" alt="biz-insider-logo" />
        <img class="press-logo" src="main_images/mashable.png" alt="mashable-logo" />
    </section>
    <section id="cta">
        <h3 class="cta-font">Change the way your look at Life Today. <br /> Get in touch...</h3>
        {/* <button type="button" class="btn btn-outline-light btn-lg download-button"><i class="fab fa-google-play"></i> Download</button> */}
        <form class="contact-form" action="mailto:" method="post" enctype="text/plain">
            <input type="text" name="YourName" value="" placeholder="Name" />
            <br /> <br />
            <input type="text" name="YourEmail" value="" placeholder="Email" />
            <br /> <br />
            <input type="text" name="YourPhone" value="" placeholder="Phone" />
            <br /> <br />
            <textarea name="name" rows="8" cols="40" placeholder="Message..."></textarea>
            <br />
            <input type="submit" value="submit" />
        </form>
    </section>

    </>
  );
}

export default Main;
