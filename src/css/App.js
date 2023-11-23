import './App.css';
import React from 'react';
import FAQ from './components/faq';
import TEXTTOGGLE from './components/textToggle';

import './css/landing.css';
import Navbar from './js/navbar.js'
import Footer from './js/footer.js';
import Dashboard_img from './images/dashboard.png';
import increase_icon from './images/increase_icon.svg';
import central_icon from './images/central_icon.svg';
import random_icon from './images/random_icon.svg';
import loop_icon from './images/loop_icon.png';
import about from './images/about.png';
import tick from './images/tick.svg';
import feature from './images/feature.png';
import dashboard2 from './images/dashboard2.png';
import steve from './images/steve.png';
import muthoni from './images/muthoni.png';
import paulo from './images/paulo.png';
import miranda from './images/miranda.png';
import toggle from './images/toogle.svg';
import location from './images/location-pin.svg';
import phone from './images/phone-call.svg';
import envelope from './images/regular_envelope.svg';

function App() {
  return (
    <div className="landing_page">
      <Navbar />

      <div className="landing-container">
        <div className="landing-left">
          <div className="landing-header">
            The Future of Certificate Management and Verification.
          </div>

          <div className="landing-paragragh">
            Digitize your certificates and enjoy instant verification from
            anywhere in the world. Store all your certificates in one secure
            location, easily accessible whenever you need them.
          </div>

          <div className="landing-buttons">
            <a href="/">
              <button className="get-started"> Get Started </button>
            </a>

            <a href>
              <button className="watch-demo"> Watch Demo </button>{' '}
            </a>
          </div>
        </div>
        <div className="landing-right">
          <img src={Dashboard_img} alt="description" />
        </div>
      </div>

      <div className="proposition-container">
        <div className="proposition-header">
          Are you tired of managing physical certificates or dealing with
          fraudulent credentials?
        </div>

        <div className="container-stat">
          <div className="container">
            <div>
              {' '}
              <img className="icon" src={increase_icon} alt="logo" />{' '}
            </div>
            <h1> 90% </h1>
            Digital certificates reduce administrative costs by up to 90%
            compared to paper-based certificates.
          </div>

          <div className="container">
            <div>
              {' '}
              <img className="icon" src={central_icon} alt="logo" />{' '}
            </div>
            <h1> 50% </h1>
            Organizations without centralized certificate management are 50%
            more likely to experience fraud
          </div>

          <div className="container">
            <div>
              {' '}
              <img className="icon" src={loop_icon} alt="logo" />{' '}
            </div>
            <h1> 55% </h1>
            Of employers encounter fraudulent documents during hiring
          </div>

          <div className="container">
            <div>
              {' '}
              <img className="icon" src={random_icon} alt="logo" />{' '}
            </div>
            <h1> 10% </h1>
            Of medical certificates are falsified, making digital credentials
            crucial
          </div>
        </div>
      </div>

      <div className="about-container">
        <div className="about-details">
          <a href="/">
            <button className="about-btn"> ABOUT VERITLY </button>
          </a>

          <div className="about-header">
            We provide digital credentials that can be verified in seconds from
            anywhere in the world
          </div>
          <hr />

          <div className="about-elements">
            <TEXTTOGGLE
              header="Our Vision"
              description="Combine multiple reports into a single beautiful dashboard lorem ipsum a met."
            />
            <TEXTTOGGLE
              header="Our Mission"
              description="MISSION Combine multiple reports into a single beautiful dashboard lorem ipsum a met."
            />
            <TEXTTOGGLE
              header="Our Values"
              description=" VALUES multiple reports into a single beautiful dashboard lorem ipsum a met."
            />
          </div>
        </div>

        <div className="about-image">
          <img src={about} alt="description" />
        </div>
      </div>

      <div className="features-container">
        <div className="features-image">
          <img src={feature} alt="description" />
        </div>

        <div className="features-details">
          <a href="/">
            <button> FEATURES </button>
          </a>
          <h1> Revolutionize certificate management and creation </h1>
          <p>
            {' '}
            Viritly combines the power of blockchain technology with
            user-friendly features to provide a seamless and secure experience.{' '}
          </p>
          <hr />
          <span>
            <img src={tick} alt="tick" /> Instant Verification{' '}
          </span>
          <span>
            <img src={tick} alt="tick" /> Certificate Creation and Customization{' '}
          </span>
          <span>
            <img src={tick} alt="tick" /> Centralized Certificate Repository{' '}
          </span>
          <span>
            <img src={tick} alt="tick" /> Blockchain Security{' '}
          </span>
        </div>
      </div>

      <div className="action-container">
        <div className="action-text">
          <div className="action-header">Get started with Veritly today</div>

          <div className="action-paragragh">
            Say goodbye to scattered certificates and enjoy the convenience of
            having everything in one place.
          </div>

          <a href="/">
            <button className="get-started"> Get Started </button>
          </a>

          <a href>
            <button className="watch-demo"> Watch Demo </button>{' '}
          </a>
        </div>

        <div className="action-images">
          <img src={dashboard2} alt="description" />
        </div>
      </div>

      <div className="team-container">
        <a href="/">
          <button> OUR TEAM </button>
        </a>
        <div className="team-header"> Meet Our Team of Experts </div>
        <div className="team-text">
          Our diverse and experienced team combines expertise in certificate
          management, blockchain technology, and customer support to deliver
          innovative solutions for digital credentialing.
        </div>
        <div className="team-images-container">
          <div className="team-member">
            <img src={steve} alt="description" />
            <h2>Steven De Koffi</h2>
            <h3> CMO & Co-Founder </h3>
            <p>
              Business and marketing guru from Cote D’Ivoire, with a passion for
              storytelling. He leads Veritly's marketing efforts, communicating
              our value to our audience
            </p>
          </div>

          <div className="team-member">
            <img src={muthoni} alt="description" />
            <h2>Peris Muthoni</h2>
            <h3> CTO & Co-Founder </h3>
            <p>
              A seasoned technologist from Kenya, with expertise in blockchain
              technology. She leads Veritly's technical development, ensuring
              that our platform is secure, reliable, and scalable
            </p>
          </div>

          <div className="team-member">
            <img src={paulo} alt="description" />
            <h2>Paulo Ouana</h2>
            <h3> CPO & Co-Founder </h3>
            <p>
              A Mozambican with a keen eye for user experience. He oversees
              Veritly's product development, ensuring that our platform meets
              the needs of our users.
            </p>
          </div>

          <div className="team-member">
            <img src={miranda} alt="description" />
            <h2>Miranda Anya</h2>
            <h3> CEO & Co-Founder </h3>
            <p>
              Experienced entrepreneur from Cameroon, with a passion for
              innovation. Co-founded Veritly with a vision to revolutionize
              certificate management and verification.
            </p>
          </div>
        </div>
      </div>

      <div className="faq-container">
        <button className="faq-button"> FAQ</button>
        <div className="faq-header"> Frequently asked questions </div>
        <div className="faq-desc">
          We have put together some common questions people ask
        </div>
        <div className="faq-questions">
          <FAQ
            title="What is Veritly"
            description=" this is the answer to Q1 Ready to get started with Veritly?
            Choose the package that suits you"
          />
          <FAQ
            title="How secure is Veritly's platform?"
            description=" this is the answer to Q2"
          />
          <FAQ
            title="How do I verify a certificate on Veritly?"
            description=" this is the answer to Q3"
          />
          <FAQ
            title="What types of certificates can be issued?"
            description=" this is the answer to Q4"
          />
          <FAQ
            title="How do I create a certificate on Veritly?"
            description=" this is the answer to Q5"
          />
          <FAQ
            title="How can I certificates issued through Veritly ?"
            description=" this is the answer to Q6"
          />
          <FAQ
            title="Can I integrate Veritly with my existing systems or platforms?"
            description=" this is the answer to Q7"
          />
        </div>
      </div>

      <div className="pricing-container">
        <button>PRICING</button>
        <div className="pricing-desc">
          <div> Ready to get started with Veritly?</div>
          <div>Choose the package that suits you</div>
          <div>
            {' '}
            <span>
              Monthly <img className="logo" src={toggle} alt="toggle-button" />{' '}
            </span>
            <span>
              {' '}
              Annualy <button> 20% discount </button>{' '}
            </span>{' '}
          </div>
        </div>

        <div className="plans">
          <div className="plan">
            <div className="plan-header"> Starter</div>
            <div className="plan-text">
              {' '}
              with all your customers via all conversation channels in one
              central dashboard.
            </div>
            <div className="plan-header"> $0</div>
            <div className="plan-text"> Per month </div>
            <button> Choose this Plan </button>
            <ul>
              <li>2GB SSD </li>
              <li>10GB Bandwidth </li>
              <li> 15 Email Accounts </li>
              <li> Unlimited Database </li>
              <li> 4 Subdomains </li>
              <li> 1 Parked Domain </li>
              <li> 2 Websites </li>
              <li> Free SSL </li>
              <li> Softaculous </li>
            </ul>
          </div>
          <div className="plan">
            <div className="plan-header"> Starter</div>
            <div className="plan-text">
              {' '}
              with all your customers via all conversation channels in one
              central dashboard.
            </div>
            <div className="plan-header"> $0</div>
            <div className="plan-text"> Per month </div>
            <button> Choose this Plan </button>
            <ul>
              <li>2GB SSD </li>
              <li>10GB Bandwidth </li>
              <li> 15 Email Accounts </li>
              <li> Unlimited Database </li>
              <li> 4 Subdomains </li>
              <li> 1 Parked Domain </li>
              <li> 2 Websites </li>
              <li> Free SSL </li>
              <li> Softaculous </li>
            </ul>
          </div>

          <div className="plan">
            <div className="plan-header"> Starter</div>
            <div className="plan-text">
              {' '}
              with all your customers via all conversation channels in one
              central dashboard.
            </div>
            <div className="plan-header"> $0</div>
            <div className="plan-text"> Per month </div>
            <button> Choose this Plan </button>
            <ul>
              <li>2GB SSD </li>
              <li>10GB Bandwidth </li>
              <li> 15 Email Accounts </li>
              <li> Unlimited Database </li>
              <li> 4 Subdomains </li>
              <li> 1 Parked Domain </li>
              <li> 2 Websites </li>
              <li> Free SSL </li>
              <li> Softaculous </li>
            </ul>
          </div>
        </div>
      </div>

<div className="contact-container">
  <button className="contact-button" > CONTACT </button>
  <div className="contact-header" > Get in Touch </div>
  <div className="contact-content"> 
    <div className="map" >
      <div className="map-header" > Contact</div>

      <div className='address' ><img src={location}  className='icon' alt='icon' /> 
      <p  className='address-text'> Ojobo, East Legon <br/> Greater Accra, Ghana</p> 
       </div>

       <div className='address' ><img src={phone}  className='icon' alt='icon' /> 
      <p  className='address-text'> +233 567 908 44</p> 
       </div>

       <div className='address' ><img src={envelope}  className='icon' alt='icon' /> 
      <p  className='address-text'> info@veritly.com</p> 
       </div>


       </div>


    <div className="contact-form" > </div>
  </div>

</div>



      <Footer />
    </div>
  );
}

export default App;
