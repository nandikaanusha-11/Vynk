
import "../App.css";

import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <div className="landing">

      {/* ================= NAVBAR ================= */}

      <nav className="navbar">

        <h2 className="logo">Vynk</h2>

        <div className="nav-links">
          <a href="#how-it-works">How It Works</a>
          <a href="#features">Features</a>

          <Link to="/login" className="login-link">
            Login
          </Link>

          <Link to="/signup" className="nav-signup">
            Sign Up
          </Link>
        </div>

      </nav>


      {/* ================= HERO ================= */}

      <section className="hero">

        <div className="hero-content">

          <p className="hero-tag">
            PRIVATE 1-TO-1 VIDEO CONFERENCING
          </p>

          <h1>
            Talk. Connect.
            <br />
            Face to Face.
          </h1>

          <p className="hero-description">
            Connect with people instantly through simple,
            private and high-quality video conversations.
          </p>

          <div className="hero-buttons">

            <Link to="/signup" className="primary-btn">
              Start Calling
            </Link>

            <Link to="/login" className="secondary-btn">
              Login
            </Link>

          </div>

        </div>


        {/* Video call visual */}

        <div className="video-preview">

          <div className="video-window">

            <div className="person person-one">
              <div className="heroimg"><img src="/girl_on_vc.jpg"/></div>
            </div>

            <div className="person person-two">
             <div className="heroimg"><img src="/boy_on_video_call.jpg"/></div>
            </div>

            <div className="call-status">
              <span className="status-dot"></span>
              Connected
            </div>

          </div>

        </div>

      </section>


      {/* ================= HOW IT WORKS ================= */}

      <section className="how-it-works" id="how-it-works">

        <div className="section-heading">

          <p className="section-tag">
            SIMPLE PROCESS
          </p>

          <h2>
            How Vynk Works
          </h2>

          <p>
            Start a private video conversation in just
            three simple steps.
          </p>

        </div>


        <div className="steps">

          <div className="step">

            <div className="step-number">
              01
            </div>

            <h3>
              Create a Room
            </h3>

            <p>
              Start your private video room with just
              a few clicks.
            </p>

          </div>


          <div className="step-line"></div>


          <div className="step">

            <div className="step-number">
              02
            </div>

            <h3>
              Invite Someone
            </h3>

            <p>
              Share the room with the person you want
              to talk to.
            </p>

          </div>


          <div className="step-line"></div>


          <div className="step">

            <div className="step-number">
              03
            </div>

            <h3>
              Start Talking
            </h3>

            <p>
              Join the room and start your
              face-to-face conversation.
            </p>

          </div>

        </div>

      </section>


      {/* ================= FEATURES ================= */}

     {/* ================= FEATURES ================= */}

<section className="features" id="features">

  <div className="section-heading">

    <p className="section-tag">
      WHY VYNK
    </p>

    <h2>
      Everything You Need for Better Conversations
    </h2>

    <p>
      Vynk keeps video calling simple, private and
      focused on what matters — the conversation.
    </p>

  </div>


  <div className="feature-container">

    {/* Feature 1 */}

    <div className="feature-card">

      <div className="feature-icon">
        🔒
      </div>

      <h3>
        Private 1-to-1 Calls
      </h3>

      <p>
        Have focused conversations without unnecessary
        participants or distractions.
      </p>

    </div>


    {/* Feature 2 */}

    <div className="feature-card">

      <div className="feature-icon">
        ⚡
      </div>

      <h3>
        Quick & Simple
      </h3>

      <p>
        Create a room and start your conversation
        without complicated setup.
      </p>

    </div>


    {/* Feature 3 */}

    <div className="feature-card">

      <div className="feature-icon">
        🎥
      </div>

      <h3>
        Face-to-Face
      </h3>

      <p>
        Enjoy a natural communication experience
        through real-time video.
      </p>

    </div>


    {/* Feature 4 */}

    <div className="feature-card">

      <div className="feature-icon">
        🎙️
      </div>

      <h3>
        Clear Communication
      </h3>

      <p>
        Keep your conversations smooth with
        real-time audio and video.
      </p>

    </div>


    {/* Feature 5 */}

    <div className="feature-card">

      <div className="feature-icon">
        🌐
      </div>

      <h3>
        Browser Based
      </h3>

      <p>
        Join your conversations directly from your
        browser without installing an application.
      </p>

    </div>


    {/* Feature 6 */}

    <div className="feature-card">

      <div className="feature-icon">
        💬
      </div>

      <h3>
        Simple Interface
      </h3>

      <p>
        A clean interface that keeps your attention
        on the person you're talking to.
      </p>

    </div>

  </div>

</section>


      {/* ================= REVIEWS ================= */}

      <section className="reviews">

        <div className="section-heading">

          <p className="section-tag">
            USER REVIEWS
          </p>

          <h2>
            What People Say
          </h2>

        </div>


        <div className="rating">

          <div className="stars">
            ★★★★★
          </div>

          <strong>
            4.8 / 5
          </strong>

          <p>
            Based on user reviews
          </p>

        </div>


        <div className="review-container">

          <div className="review-card">

            <div className="review-stars">
              ★★★★★
            </div>

            <p>
              "The interface is really simple and
              the video quality is great."
            </p>

            <h4>
              Anusha 
            </h4>

          </div>


          <div className="review-card">

            <div className="review-stars">
              ★★★★★
            </div>

            <p>
              "I can start a call without dealing
              with complicated settings."
            </p>

            <h4>
              Hirthika
            </h4>

          </div>


          <div className="review-card">

            <div className="review-stars">
              ★★★★★
            </div>

            <p>
              "Clean, fast and easy to use."
            </p>

            <h4>
              Tony Stark
            </h4>

          </div>

        </div>

      </section>


      {/* ================= FAQ ================= */}

      <section className="faq">

        <div className="section-heading">

          <p className="section-tag">
            QUESTIONS
          </p>

          <h2>
            Frequently Asked Questions
          </h2>

        </div>


        <div className="faq-container">

          <details>
            <summary>
              How do I start a video call?
              <span>+</span>
            </summary>

            <p>
              Create a room, share the room with
              another person and start your call.
            </p>

          </details>


          <details>
            <summary>
              Do I need to install anything?
              <span>+</span>
            </summary>

            <p>
              Vynk is designed to work directly
              through your browser.
            </p>

          </details>


          <details>
            <summary>
              Is my video call private?
              <span>+</span>
            </summary>

            <p>
              Vynk is designed around private
              one-to-one conversations.
            </p>

          </details>


          <details>
            <summary>
              Can I use Vynk on my phone?
              <span>+</span>
            </summary>

            <p>
              Vynk is designed to provide a
              responsive experience across devices.
            </p>

          </details>

        </div>

      </section>


      {/* ================= FINAL CTA ================= */}

      <section className="final-cta">

        <h2>
          Ready to Connect?
        </h2>

        <p>
          Start your next conversation with Vynk.
        </p>

        <Link to="/signup" className="primary-btn">
          Get Started
        </Link>

      </section>


      {/* ================= FOOTER ================= */}

      <footer className="footer">

        <h3>
          Vynk
        </h3>

        <p>
          Simple. Private. Face-to-face.
        </p>

        <p className="copyright">
          © 2026 Vynk. All rights reserved.
        </p>

      </footer>

    </div>
  );
}