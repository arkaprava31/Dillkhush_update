import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./Blog.css";
import { card1 } from "../../assets";
const Blog = () => {
  return (
    <div>
      <Navbar />
      <div className="blogcontainer">
        <div className="leftblog">
          <div className="blogtitle">
            <span className="blogtitle1">Blog Heading 1</span>
          </div>
          <div className="blogphoto">
            <img src={card1} alt="blog" className="blogphoto1" />
          </div>
          <div className="blogcontent">
            <p>
              Metaverse blogs usually go into considerable depth on the subject.
              But that doesn’t mean you need to have a huge amount of experience
              with the metaverse to follow them. Just understanding that the
              metaverse is essentially a connection or collaboration between
              online virtual worlds and the offline standard world will help you
              understand it. You should keep in mind that the metaverse is
              limitless.<br /><br/> There are no boundaries in the metaverse, and there are
              always new areas, experiences, and even people to meet within it.
              You should also keep in mind that new ways to access the metaverse
              are constantly appearing and evolving. For example, augmented
              reality glasses like the hololens are merging the offline and
              online worlds even further. And common devices like smartphones
              and game consoles can access the metaverse to some degree. Of
              course, virtual reality (VR) headsets are also creating ever more
              immersive experiences.
            </p>
          </div>
          <div className="blogfooter">
            <span >By Olivia Silver</span>
            <span>Case Studies</span>
          </div>
        </div>
        <div className="rightblog">
            <div className="rightdivtitle">
                <span>New Services</span>
            </div>
            <div className="rightdivcontent">
            <div></div>
            <div></div>
            <div></div>
            </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
