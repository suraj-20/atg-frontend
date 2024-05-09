import React from "react";
import "./Home.css";
import Navbar from "../../Components/Navbar_Component/Navbar";
import Hero from "../../Components/Hero_Component/Hero";
import SubHeader from "../../Components/SubHeader_Component/SubHeader";
import Posts from "../../Components/Allposts_Component/Posts";
// import SignupMobileView from "../../Components/Mobile_view/SignupMobileView";

const Home = () => {
  // const [showPopup, setShowPopup] = useState(false);

  // const handleTogglePopup = () => {
  //   setShowPopup(!showPopup);

  //   if (!showPopup) {
  //     // document.body.style.background = "rgba(0, 0, 0, 0.5)";
  //     document.body.style.overflow = "hidden";
  //   } else {
  //     // document.body.style.background = "initial";
  //     document.body.style.overflow = "auto";
  //   }
  // };
  return (
    <div className="home_page">
      <section className="navbar_section">
        <Navbar />
      </section>
      <section className="hero_header_section">
        <Hero />
      </section>
      <section className="subHeader_section">
        <SubHeader />
      </section>
      <hr className="mx-auto mt-0" style={{ maxWidth: "1040px" }} />
      <section className="posts_section">
        <Posts />
      </section>
      {/* <section className="signup-btn">
        <button
          onClick={handleTogglePopup}
          style={{ bottom: "18px", right: "18px" }}
          className="btn circle-write-post rounded-circle d-flex justify-content-center align-items-center position-fixed d-lg-none"
        >
          <i className="fa-solid fa-pen"></i>
        </button>
      </section> */}
      {/* <section className="mobile-modal-overlay d-lg-none active">
        {showPopup && <SignupMobileView onClose={handleTogglePopup} />}
      </section> */}
    </div>
  );
};

export default Home;
