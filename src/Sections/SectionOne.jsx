import React, { useEffect, useState } from "react";

export const SectionOne = () => {

    const [hideScrollText, setHideScrollText] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        const scrollThreshold = 100;
  
        if (window.scrollY > scrollThreshold) {
          setHideScrollText(true);
        } else {
          setHideScrollText(false);
        }
      };
  
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

    return (
        <section className="section one">
          <div className="mobileScroll" >
      <div class="nav">
          <div class="left-content">
              <img class="smalllogo" src="/bluelogo.png" alt="logohere" />
          </div>
          <div class="center">
              <h1>ALPINE</h1>
          </div>
      </div>
      <div className="content-one" >
          <h1 className="one-main" >Veniam<span className="one-blue" > Magna</span><br/>Incididunta</h1>
          <div className="content-one-bottom" >
            <div className="bottom-one" >
              <div className="bottom-circle" ></div>
              <h1 className="bottom-text" >Lorem ipsum dolor</h1>
            </div>
            <div className="bottom-two" >
              <p className="one-description" >Lorem ipsum dolor sit amet<br/> consectetur adipiscing elit.</p>
              <div className="bottom-box" >
                <h1 className="bottom-box-text" >Proident</h1>
              </div>
            </div>
          </div>
      </div>
      </div>
        </section>
    )
}