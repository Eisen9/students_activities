import React from "react";
import './../event_styles.css';

function Category(props) {
    return (
        <div>
            <table class="category">
              <tr>
                  <td>
                    <h1>{props.categoryName}</h1>
                  </td>
                  <td>
                    <h2><a href={props.categoryLink} class="link">View More</a></h2>
                  </td>
              </tr>
            </table>

            <table class="event-container">
              <tr>
              <td class="event-box" align="center">
                  <a href={props.event1link} class="link">
                    <div>
                        <img src={props.event1img} class="preview"/>
                        <h1>{props.event1name}</h1>
                        <h2>{props.event1date}</h2>
                    </div>
                  </a>
              </td>

              <td class="event-box" align="center">
                  <a href={props.event2link} class="link">
                    <div>
                        <img src={props.event2img} class="preview"/>
                        <h1>{props.event2name}</h1>
                        <h2>{props.event2date}</h2>
                    </div>
                  </a>
              </td>

              <td class="event-box" align="center">
                  <a href={props.event3link} class="link">
                    <div>
                        <img src={props.event3img} class="preview"/>
                        <h1>{props.event3name}</h1>
                        <h2>{props.event3date}</h2>
                    </div>
                  </a>
              </td>
              </tr>
          </table>
        </div>
    )
}

function  EventBox(props) {

}

function Events() {
  return (
    <div>

    {/*
      <div>Recommended For You</div>
      <div>Academic Events</div>
      <div>Camping</div>
      <div>Gaming Events</div>
      <div>Hking</div>
      <div>Sports Events</div>
      <div>Tech Events</div>
      <div>Trips</div>
      <div>Other Events</div>
*/}
      <div>
          <Category 
            categoryName="Recommended For You"
            categoryLink="https://eisen9.github.io/outandabout/"

            event1img="basketball.png"
            event1name="Basketball"
            event1date="25/02/2021 - 10:00"
            event1link="https://eisen9.github.io/outandabout/"

            event2img="football.png"
            event2name="Football"
            event2date="25/02/2021 - 11:00"
            event2link="https://eisen9.github.io/outandabout/"

            event3img="jog.png"
            event3name="Social Jog"
            event3date="25/02/2021 - 12:00"
            event3link="https://eisen9.github.io/outandabout/"
          />

          <Category 
            categoryName="Academic Events"
            categoryLink="https://eisen9.github.io/outandabout/"

            event1img="basketball.png"
            event1name="Basketball"
            event1date="25/02/2021 - 10:00"
            event1link="https://eisen9.github.io/outandabout/"

            event2img="football.png"
            event2name="Football"
            event2date="25/02/2021 - 11:00"
            event2link="https://eisen9.github.io/outandabout/"

            event3img="jog.png"
            event3name="Social Jog"
            event3date="25/02/2021 - 12:00"
            event3link="https://eisen9.github.io/outandabout/"
          />

          <Category 
            categoryName="Camping Events"
            categoryLink="https://eisen9.github.io/outandabout/"

            event1img="basketball.png"
            event1name="Basketball"
            event1date="25/02/2021 - 10:00"
            event1link="https://eisen9.github.io/outandabout/"

            event2img="football.png"
            event2name="Football"
            event2date="25/02/2021 - 11:00"
            event2link="https://eisen9.github.io/outandabout/"

            event3img="jog.png"
            event3name="Social Jog"
            event3date="25/02/2021 - 12:00"
            event3link="https://eisen9.github.io/outandabout/"
          />

          <Category 
            categoryName="Gaming Events"
            categoryLink="https://eisen9.github.io/outandabout/"

            event1img="basketball.png"
            event1name="Basketball"
            event1date="25/02/2021 - 10:00"
            event1link="https://eisen9.github.io/outandabout/"

            event2img="football.png"
            event2name="Football"
            event2date="25/02/2021 - 11:00"
            event2link="https://eisen9.github.io/outandabout/"

            event3img="jog.png"
            event3name="Social Jog"
            event3date="25/02/2021 - 12:00"
            event3link="https://eisen9.github.io/outandabout/"
          />
          <Category 
            categoryName="Hiking Events"
            categoryLink="https://eisen9.github.io/outandabout/"

            event1img="basketball.png"
            event1name="Basketball"
            event1date="25/02/2021 - 10:00"
            event1link="https://eisen9.github.io/outandabout/"

            event2img="football.png"
            event2name="Football"
            event2date="25/02/2021 - 11:00"
            event2link="https://eisen9.github.io/outandabout/"

            event3img="jog.png"
            event3name="Social Jog"
            event3date="25/02/2021 - 12:00"
            event3link="https://eisen9.github.io/outandabout/"
          />  

          <Category 
            categoryName="Sport Events"
            categoryLink="https://eisen9.github.io/outandabout/"

            event1img="basketball.png"
            event1name="Basketball"
            event1date="25/02/2021 - 10:00"
            event1link="https://eisen9.github.io/outandabout/"

            event2img="football.png"
            event2name="Football"
            event2date="25/02/2021 - 11:00"
            event2link="https://eisen9.github.io/outandabout/"

            event3img="jog.png"
            event3name="Social Jog"
            event3date="25/02/2021 - 12:00"
            event3link="https://eisen9.github.io/outandabout/"
          />

          <Category 
            categoryName="Tech Events"
            categoryLink="https://eisen9.github.io/outandabout/"

            event1img="basketball.png"
            event1name="Basketball"
            event1date="25/02/2021 - 10:00"
            event1link="https://eisen9.github.io/outandabout/"

            event2img="football.png"
            event2name="Football"
            event2date="25/02/2021 - 11:00"
            event2link="https://eisen9.github.io/outandabout/"

            event3img="jog.png"
            event3name="Social Jog"
            event3date="25/02/2021 - 12:00"
            event3link="https://eisen9.github.io/outandabout/"
          />

          <Category 
            categoryName="Trips"
            categoryLink="https://eisen9.github.io/outandabout/"

            event1img="basketball.png"
            event1name="Basketball"
            event1date="25/02/2021 - 10:00"
            event1link="https://eisen9.github.io/outandabout/"

            event2img="football.png"
            event2name="Football"
            event2date="25/02/2021 - 11:00"
            event2link="https://eisen9.github.io/outandabout/"

            event3img="jog.png"
            event3name="Social Jog"
            event3date="25/02/2021 - 12:00"
            event3link="https://eisen9.github.io/outandabout/"
          />

          <Category 
            categoryName="Other Events"
            categoryLink="https://eisen9.github.io/outandabout/"

            event1img="basketball.png"
            event1name="Basketball"
            event1date="25/02/2021 - 10:00"
            event1link="https://eisen9.github.io/outandabout/"

            event2img="football.png"
            event2name="Football"
            event2date="25/02/2021 - 11:00"
            event2link="https://eisen9.github.io/outandabout/"

            event3img="jog.png"
            event3name="Social Jog"
            event3date="25/02/2021 - 12:00"
            event3link="https://eisen9.github.io/outandabout/"
          />
      </div>
    </div>
  );
}

export default Events;
