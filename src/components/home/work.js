import React, { useState } from "react";
import BeachResort from "../../images/Beach-resort.png";
import DigitalAg from "../../images/digital-agency.png";
import ContactKeeper from "../../images/client-contact-keeper-react.png";
import WebAg from "../../images/web-angency.png";
import MovieRental from "../../images/movie-rental.png";
import DgitalShop from "../../images/Ditital-Shop.png";
import Agency from "../../images/Agency.png";

export default () => {
  const [state, setState] = useState({ isClosed: true });
  if (state.isClosed) setState({ ...state, isClosed: false });

  return (
    <section className=" work">
      <div className={state.isClosed ? "content__closed" : "content__open"}>
        <h3 className="heading--sub mbs text-center">
          <span>03.</span> My Work.
        </h3>

        <div className="grid">
          <div className="grid__item">
            <div className="image-container">
              <div className="item-cover">
                <a href="#" className="btn btn__outline btn__sm" target="_blank">
                  View Website
                </a>
              </div>
              <img src={DgitalShop} alt="Image placeholder" />
            </div>
          </div>
          <div className="grid__item">
            <div className="image-container">
              <div className="item-cover">
                <a href="#" className="btn btn__outline btn__sm" target="_blank">
                  View Website
                </a>
              </div>
              <img src={Agency} alt="Image placeholder" />
            </div>
          </div>
          <div className="grid__item">
            <div className="image-container">
              <div className="item-cover">
                <a href="#" className="btn btn__outline btn__sm" target="_blank">
                  View Website
                </a>
              </div>
              <img src={BeachResort} alt="Image placeholder" />
            </div>
          </div>
          <div className="grid__item">
            <div className="image-container">
              <div className="item-cover">
                <a href="#" className="btn btn__outline btn__sm" target="_blank">
                  View Website
                </a>
              </div>
              <img alt="Image placeholder" src={DigitalAg} />
            </div>
          </div>

          <div className="grid__item">
            <div className="image-container">
              <div className="item-cover">
                <a href="#" className="btn btn__outline btn__sm" target="_blank">
                  View Website
                </a>
              </div>
              <img alt="Image placeholder" src={ContactKeeper} />
            </div>
          </div>

          <div className="grid__item">
            <div className="image-container">
              <div className="item-cover">
                <a href="#" className="btn btn__outline btn__sm" target="_blank">
                  View Website
                </a>
              </div>
              <img alt="Image placeholder" src={MovieRental} />
            </div>
          </div>

          <div className="grid__item">
            <div className="image-container">
              <div className="item-cover">
                <a href="#" className="btn btn__outline btn__sm" target="_blank">
                  View Website
                </a>
              </div>
              <img alt="Image placeholder" src={WebAg} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
