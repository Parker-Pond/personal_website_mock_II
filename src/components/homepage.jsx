import "./homepage.css";
import header from "./assets/webpage_header_img.png";
import Flip_card from "./flip_card";

import open_to_work from "./assets/open_to_work.jpeg";
import moody_photo from "./assets/moody_photo.jpg";
import header_2 from "./assets/header_2.png";

export default function Homepage() {
  return (
    <>
      {/* head shot with header title  */}
      <div className="header_bar">
        <div className="header_photo">
          <img src={moody_photo} />
        </div>

        <div className="header_quote">
          <img src={header_2} />
        </div>
      </div>

      {/* languages  */}
      <div className="language_boxes">
        <h2 className="title_text">Programming Languages</h2>
        <div className="inner_language_box">
          <div className="programming_languages">
            <h4>Front-end Languages</h4>
            <div className="column">
              <h6>HTML</h6>
              <h6>CSS</h6>
              <h6>JavaScript</h6>
            </div>
            <div className="column">
              <h6>React</h6>
              <h6>Vite</h6>
            </div>
          </div>
          <div id="programming_languages">
            <h4>Back-end Languages</h4>
            <div className="column">
              <h6>PostgreSQL</h6>
              <h6>Node.js</h6>
              <h6>Express.js</h6>
            </div>
            <div className="column">
              <h6>bcrypt</h6>
              <h6>Nodemon</h6>
              <h6>Other libraries</h6>
            </div>
          </div>
        </div>
      </div>

      {/* work history  */}


        <h2 className="title_text">Work History</h2>{" "}

    <Flip_card/>
     

      {/* portfolio */}
    </>
  );
}
