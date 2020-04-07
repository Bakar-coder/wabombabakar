import React, { useState } from "react";
import { Link } from "react-router-dom";

export default () => {
  const [state, setState] = useState({ isClosed: true });
  if (state.isClosed) setState({ ...state, isClosed: false });
  return (
    <section className="header">
      <div className={state.isClosed ? "content__closed" : "content__open"}>
        <div className="header__content">
          <div className="all-content">
            <h1 className="heading__one">
              <span className="spn spn__one">Hi, my name is</span> Wabomba Bakar.{" "}
              <span className="spn spn__two">I build apps for the web.</span>{" "}
            </h1>
            <p className="lead">
              I am a software engineer / full-stack web application development specialist <br /> based  in East
            Africa specializing in building exceptional high
            <span>
                {" "}
                quality Websites, <br />Web  Applications and Rest APIs using
                cutting edge Technologies.
            </span>
            </p>
            <div className="cta">
              <button className="btn btn__info">
                <Link to="/contact">Get In Touch</Link>
              </button>
              <button className="btn btn__work">
                <Link to="/work">View My Work &rarr;</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
