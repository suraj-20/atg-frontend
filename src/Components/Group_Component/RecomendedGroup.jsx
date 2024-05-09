import React from "react";
import user_profile1 from "../../Assets/user1-COSOQoOX.jpg";
import user_profile2 from "../../Assets/15d7211204149d93adda6dfafb5d81f2-08Q1wamp.jpg";
import user_profile3 from "../../Assets/c3ac7682e52df2e10d0a36ec3f243a44-6fhMyk-S.jpg";
import user_profile4 from "../../Assets/siddrath-t0piMZRc.jpg";

const cardObj = [
  {
    id: 1,
    user_image: user_profile1,
    user_name: "Leisure",
  },
  {
    id: 2,
    user_image: user_profile2,
    user_name: "Activism",
  },
  {
    id: 3,
    user_image: user_profile3,
    user_name: "MBA",
  },
  {
    id: 4,
    user_image: user_profile4,
    user_name: "Philosophy",
  },
];

const RecomendedGroup = () => {
  return (
    <>
      <div className="d-flex justify-content-between">
        <div className="d-flex align-items-center gap-3">
          <i className="fa-solid fa-location-dot"></i>
          <input
            type="text"
            className="input-text"
            name=""
            id=""
            placeholder="Enter Your Location"
          />
        </div>
        <button className="btn">
          <i className="fa-solid fa-pen"></i>
        </button>
      </div>
      <hr className="my-1" />
      <div className="d-flex align-items-center gap-2 mb-4">
        <i className="fa-solid fa-circle-info"></i>
        <p className="location-info">
          Your location will help us serve better and extend a personalised
          experience.
        </p>
      </div>
      <div className="d-flex align-items-center gap-2 text-capitalize mb-3">
        <i className="fa-solid fa-thumbs-up"></i>
        <span className="text-recommended">REcommended Groups</span>
      </div>
      <div className="d-flex flex-column gap-4">
        {cardObj.map((card, i) => {
          return (
            <div key={card.id} className="d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center gap-2">
                <img
                  src={card.user_image}
                  alt=""
                  className="rounded-circle"
                  width={36}
                  height={36}
                />
                <div className="text-wrapper">{card.user_name}</div>
              </div>
              <a href="/" className="btn follow rounded-5">
                Follow
              </a>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default RecomendedGroup;
