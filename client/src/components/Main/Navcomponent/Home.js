import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";
import './index.css'

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:4000/api/userpost`)
      .then((res) => setData(res.data.data));
  }, []);


  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row mt-n5">
          {data.map((post, index) => (
            <div key={index} className="col-md-6 col-lg-4 mt-5 wow fadeInUp" data-wow-delay=".2s">
              <Link to={`/viewpost/${post._id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="blog-grid">
                  <div className="blog-grid-img position-relative d-flex align-items-center justify-content-center">
                    <img
                      alt="img"
                      height="210px"
                      src={post.image}
                      style={{ maxWidth: '35%' }}
                    />
                  </div>
                  <div className="blog-grid-text p-4">
                    <h3 className="h5 mb-3">
                      {post.title}
                    </h3>
                    <p className="display-30">
                      {post.discription.slice(0, 45)}...
                    </p>
                    <div className="meta meta-style2">
                      <ul>
                        {/* <li>
                          <a href="#!">
                            <i className="fas fa-calendar-alt"></i> 10 Jul,{' '}
                            {new Date().getFullYear()}
                          </a>
                        </li> */}
                        <li>
                          <a href="#!">
                            <i className="fas fa-user"></i>By: {post.PostedBy}
                          </a>
                        </li>
                        {/* <li>
                          <a href="#!">
                            <i className="fas fa-comments"></i> 
                          </a>
                        </li> */}
                      </ul>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

    </>
  );
};

export default Home;
