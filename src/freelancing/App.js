import React from "react";
import "./app.css";
import image from "./images/download.jpg";
import { MdPhoneInTalk } from "react-icons/md";
import { BsArrowRight } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import { CgArrowLongRight, CgArrowLongLeft } from "react-icons/cg";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { ImHammer2 } from "react-icons/im";
import { FaBalanceScale } from "react-icons/fa";
import { FaPlane } from "react-icons/fa";
import { BsTrophyFill } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { FaFax } from "react-icons/fa";
import {
  BsTelephoneOutbound,
  BsFillTelephoneFill,
  BsFillCaretDownFill,
} from "react-icons/bs";

const App = () => {
  return (
    <div>
      <section id="header">
        <div className="header container">
          <div className="right">
            <img src={image} alt="abc" />
          </div>
          <div className="left">
            <div className="top">
              <div className="phonwa">
                <MdPhoneInTalk className="icons" />
                <div>
                  <h4>CHESAPEAKE</h4>
                  <h4>(757)288-5529</h4>
                </div>
              </div>
              <div className="phonwa">
                <MdPhoneInTalk className="icons" />
                <div>
                  <h4>SUFFOLK</h4>
                  <h4>(757)483-3040</h4>
                </div>
              </div>
            </div>
            <div className="bottom">
              <ul>
                <li>
                  <a href="#hero" data-after="Home">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#service" data-after="Service">
                    ATTORNEY PROFILE
                  </a>
                </li>
                <li>
                  <a href="#project" data-after="Project">
                    FIRM OVERVIEW
                  </a>
                </li>
                <li>
                  <a href="#about" data-after="About">
                    PRACTICE AREAS
                    <BsFillCaretDownFill x />
                  </a>
                </li>
                <li>
                  <a href="#contact" data-after="Contact">
                    TESTIMONIALS
                  </a>
                </li>
                <li>
                  <a href="#contact" data-after="Contact">
                    BLOG
                  </a>
                </li>
                <li>
                  <a href="#contact" data-after="Contact">
                    CONTACT US
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section id="hero">
        <div className="hero container">
          <div>
            <h1>
              FAMILY LAW<span></span>
            </h1>
            <h1>
              Family and Criminal Law Attorneys<span></span>
            </h1>
            <h1>
              Hamptin Roads<span></span>
            </h1>
            <a href="#project" type="button" className="botan">
              Read More
            </a>
          </div>
        </div>
      </section>
      <section id="estate">
        <div className="estate">
          <div className="estateImage">
            <img
              src="data:image/jpeg;base64,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"
              alt="BgImage"
            />
          </div>
          <div className="estatecontent">
            <h3>Estate Planning</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex aut
              cum blanditiis deleniti, quasi molestias ullam. Quibusdam
              reprehenderit explicabo id excepturi quasi natus velit, deleniti
              at autem totam suscipit quod repellat rerum iste magni maiores
              quaerat vel, veniam nesciunt, enim provident maxime! Nostrum vero
              accusamus fugit, nulla voluptatum dolor quasi? Totam voluptate
              reprehenderit officiis velit possimus eaque voluptatem tempore
              asperiores?
            </p>
            <a href="#">
              READ MORE <BsArrowRight className="estateicon" />
            </a>
          </div>
        </div>
      </section>
      <section id="dedicated">
        <div className="dedicated">
          <div>
            <h1>Dedicated Divorce and Criminal Lawyers in Chesapeake,</h1>
            <h1>VA and Suffolk, VA</h1>
            <h3>
              Providing effective divorce, family and criminal law solution in
              Chesapeake for yoy and your family
            </h3>
            <hr />
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem natus fugit voluptas non. Veritatis, tempora minus?
              Quam repellat natus neque sit a incidunt minima iste ducimus ex
              laborum provident tenetur error dolorum repellendus distinctio
              alias modi aperiam aspernatur esse id beatae voluptas, deserunt
              ipsa aliquam. Dolores adipisci temporibus corporis illo id?
              Reprehenderit minima vel aliquam rerum dolor error ab laboriosam.
            </p>
            <h3>
              To speak to an experienced Family Law or Criminal Defence attorney
              (757) 228-5529 or contact
            </h3>
            <h3>an attorney from Shannon & Associates, P.C. online today</h3>
          </div>
        </div>
      </section>
      <section id="testimonials">
        <div className="testimonials">
          <div className="topping">
            <h1>Testimonials</h1>
            <hr />
          </div>
          <div className="bottoming">
            <img
              className="person"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuk6lROAM6PdlonjLDJ3fiO4toTAvTUqSYyw&usqp=CAU"
              alt="face"
            />
            <div className="content">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Nesciunt illo quas, dolor fugit cum iste omnis, quasi aperiam
                laudantium quaerat atque? Perspiciatis nam adipisci ipsa
                doloribus fugit modi incidunt ratione optio nisi? Optio facilis,
                in obcaecati voluptate, qui numquam suscipit delectus magni
                nihil esse, illum eos eius tempore! Nesciunt vel soluta dolore
                similique ipsum, officiis minus voluptatem iste earum
                necessitatibus ad quisquam, in laudantium quasi praesentium?
              </p>
              <div className="leftover">
                <div className="left">
                  <h3>- H.G.</h3>
                  <AiFillStar className="teststaricon" />
                  <AiFillStar className="teststaricon" />
                  <AiFillStar className="teststaricon" />
                  <AiFillStar className="teststaricon" />
                  <AiFillStar className="teststaricon" />
                </div>
                <div className="right">
                  <CgArrowLongRight className="testarricon" />
                  <CgArrowLongLeft className="testarricon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="offer">
        <div className="offer">
          <div className="heading">
            <h1>What We Offer Our Client</h1>
            <hr />
          </div>
          <div className="content">
            <div className="items">
              <SiHomeassistantcommunitystore className="offericon" />
              <h3>Help For Local Residents</h3>
            </div>
            <div className="items">
              <ImHammer2 className="offericon" />
              <h3>Genuine Interest in the Law We Practice</h3>
            </div>
            <div className="items">
              <FaBalanceScale className="offericon" />
              <h3>A Balanaced Approach</h3>
            </div>
            <div className="items">
              <FaPlane className="offericon" />
              <h3>Assistance in Military Family Matters</h3>
            </div>
            <div className="items">
              <BsTrophyFill className="offericon" />
              <h3>Recognized Excellence</h3>
            </div>
            <div className="items">
              <BsTelephoneOutbound className="offericon" />
              <h3>Prompt Communication</h3>
            </div>
          </div>
        </div>
      </section>
      <section id="touch">
        <div className="touch">
          <div className="heading">
            <h1>Get in Touch!</h1>
            <hr />
          </div>
          <form>
            <div className="input3box">
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <input type="tel" placeholder="Phone" />
            </div>
            <textarea />
            <div className="btnconatiner">
              <div className="left">
                <h3>Please check the box below.*</h3>
                <div>
                  <input
                    type="checkbox"
                    name="I have read the disclaimer"
                    id="1"
                  />
                  <h6>
                    I have read the <span>disclaimer</span>
                  </h6>
                </div>
              </div>
              <button type="submit" className="botan">
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </section>

      <section id="link">
        <div className="link">
          <div className="quick con">
            <h1>Quick Links</h1>
            <hr />
            <ul>
              <li>Home</li>
              <li>Attorney Profile</li>
              <li>Firm Overview</li>
              <li>Practice Areas</li>
              <li>Blog</li>
              <li>Contact Us</li>
              <li>Maps and Directions</li>
            </ul>
          </div>
          <div className="practice con">
            <h1>Practice Areas</h1>
            <hr />
            <ul>
              <li>Criminal Defence</li>
              <li>DUI</li>
              <li>Estate Planning</li>
              <li>Family Law</li>
              <li>Traffic Tickets</li>
              <li>Estate Planning</li>
            </ul>
          </div>
          <div className="find con">
            <h1>Find Us</h1>
            <hr />
            <div className="cont">
              <GoLocation className="lasticon" />
              <h1>2006 Old Greenbier Road,Suite 4 Chesapeake,VA 23320</h1>
            </div>
            <div className="cont">
              <BsFillTelephoneFill className="lasticon" />
              <h1>Phone: &#40;757&#41; 228-5529</h1>
            </div>
            <div className="cont">
              <FaFax className="lasticon" />
              <h1>Fax: 757.228.5856</h1>
            </div>
            <button className="review">REVIEW US</button>
          </div>
        </div>
      </section>
      <section id="footer">
        <div className="footer">
          <h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam esse
            delectus quia odit maiores tempora velit consequatur earum rem?
            Saepe rem necessitatibus, optio maxime maiores et. Est maiores,
            delectus ea fugiat repudiandae quam harum earum facere possimus
            itaque blanditiis exercitationem at iusto ab vitae nulla. Error
            dolorem quis tenetur iste ad, fuga provident aliquid officiis, qui
            maiores, minima veritatis quod eum laborum incidunt ea quisquam. Ex
            aspernatur qui est sequi vitae dolias!
          </h3>
          <br />
          <h3>Website by: Precision Legal Marketing</h3>
        </div>
      </section>
    </div>
  );
};

export default App;
