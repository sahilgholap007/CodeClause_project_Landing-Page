import './App.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <section class="landing-container">
      <nav>
        <input type="checkbox" id="check" />
        <label for="check" class="checkbtn">
        <FontAwesomeIcon icon={faBars} style={{color: "#ffffff",}} />
        </label>
        <label class="logo">Elevate</label>
        <ul>
          <li><a href="./PAGES/Signup.html" class="active">Signup</a></li>
          <li><a href="./PAGES/Login.html" class="active">Login </a></li>
        </ul>
      </nav>
      <div class="home-content">
        <h1>ELEVATE</h1>
        <div class="home-list">
          <p>Hiring Revolutionized</p>
          <p>Discover More</p>
          <p>July 7, 2023</p>
        </div>
        <div class="home-image-container">
          <img src="/Images/home.jpg" alt="Landing" />
        </div>
      </div>
      <section class="features">
        <h1>Top-Notch Features</h1>
        <div class="feature-content">
          <img src="/Images/features.jpg" alt="Feature 1" />
          <div class="feature-text">
            <div class="feature-text-box">
              <h2>Time Saver</h2>
              <p>
                Wave goodbye to tendious processes that eat up your valuable
                time.
              </p>
            </div>
            <div class="feature-text-box">
              <h2>A+ Candidates</h2>
              <p>
                Take pride in your hiers by selecting from the best of the best.
              </p>
            </div>
            <div class="feature-text-box">
              <h2>No Hassle</h2>
              <p>Embrace a smooth and headache-free hiring experience now!</p>
            </div>
          </div>
        </div>
      </section>
      <section class="cards-container">
        <div class="card">
          <img src="/Images/clock.png" alt="clock" />
          <h1>50%</h1>
          <p>Faster Hiring</p>
        </div>
        <div class="card">
          <img src="/Images/star.png" alt="clock" />
          <h1>97%</h1>
          <p>Satisfied Clients</p>
        </div>
        <div class="card">
          <img src="/Images/checked.png " alt="clock" />
          <h1>100%</h1>
          <p>Efficient Boost</p>
        </div>
      </section>
      <section class="about">
        <div class="about-img">
          <img src="/Images/about.jpg" alt="About" />
        </div>
        <div class="about-text-container">
          <h1>About Us</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatum, voluptate, quibusdam, quia voluptas quod quos
            exercitationem voluptatibus quas quibusdam, quia voluptas quod quos
            exercitationem voluptatibus quas.
          </p>
        </div>
      </section>
      <section class="getStarted">
        <h1>Get Started</h1>
        <p>
          Ready to knock your hiring experience out of the park? join the<br />revolution
          and take the first step to a Hassle-free hiring process.
        </p>
        <button class="signup-btn">Signup Now</button>
      </section>
      <section class="Contact-container" id="contact-con">
        <h1>Contact Us</h1>
        <form action="" class="contact-frm">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea
            name=""
            id=""
            cols="8"
            rows="8"
            placeholder="Message"
            class="grid-item"
          ></textarea>
          <button class="contact-btn">Send</button>
        </form>
      </section>
      <section class="footer">
        <p>@2023 Sahil Gholap.</p>
      </section>
    </section>
  );
}

export default App;
