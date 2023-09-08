import "./flip_card.css";

export default function Flip_card() {
  return (
    <>
      <div className="work_history_box">
        <div id="job_box">
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img
                  id="job_box_img"
                  src="https://vip.cafezupas.com/assets/img/logo-cafe.png"
                />
              </div>
              <div class="flip-card-back">
                <h3>Cafe Zupas</h3>
                <h5>Assistant Manager</h5>
                <h5>12/21 - current</h5>
              </div>
            </div>
          </div>
        </div>
        <div id="job_box">
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img
                  id="job_box_img"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/IHOP_logo.svg/2560px-IHOP_logo.svg.png"
                />
              </div>
              <div class="flip-card-back">
                <h3>IHOP</h3>
                <h5>Assistant Manager</h5>
                <h5>10/20 - 12/21</h5>
              </div>
            </div>
          </div>
        </div>
        <div id="job_box">
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img
                  id="sunrise_medical_img"
                  src="https://www.vestarcapital.com/wp-content/uploads/2021/05/sunrise-medical-logo-500x500-1.png"
                />
              </div>
              <div class="flip-card-back">
                <h3>Sunrise Medical </h3>
                <h5>Personal Aid</h5>
                <h5>8/19 - 1/21</h5>
              </div>
            </div>
          </div>
        </div>
        <div id="job_box">
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img
                  id="job_box_img"
                  src="https://img1.wsimg.com/isteam/ip/c7e71ea9-60e9-4ed6-9e6c-8e59e8fc7480/0d462467-1726-4370-8e6a-810b0f797d76.jpg"
                />
              </div>
              <div class="flip-card-back">
                <h3>Little Lemons Therapy</h3>
                <h5>Registered Behavior Technician (RBT)</h5>
                <h5>10/18 - 8/19</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
