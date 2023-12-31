// import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
// import { Card, CardContent, Typography, Avatar } from '@mui/material'
// import Posts from './profile/posts'
// import axios from 'axios'
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import './index.css'

const UserProfile = () => {
  const id = localStorage.getItem('userId')

  const [data, setData] = useState([]);
  const [user, setUser] = useState([]);

  console.log(data)
  useEffect(() => {
    axios.get(`https://blogpost-yu02.onrender.com/api/userpost/${id}`)
      .then((res) => setData(res.data.data));
  }, [id]);

  useEffect(() => {
    axios.get(`https://blogpost-yu02.onrender.com/api/users/${id}`)
      .then((res) => setUser(res.data.data));
  }, [id]);

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-lg-12 mb-4 mb-sm-0 mt-6">
            <div className="card card-style1 border-0">
              <div className="card-body p-1-9 p-sm-2-3 p-md-6 p-lg-7" style={{overflow:'hidden'}}>
                <div className="row align-items-center">
                  <div className="col-lg-6 mb-4 mb-lg-0">
                    <img
                      src={user.image}
                      alt="..."
                      style={{ maxWidth: '500px', maxHeight:'300px'}}
                    />
                  </div>
                  <div className="col-lg-6 px-xl-10">
                    <div className="bg-secondary d-lg-inline-block py-1-9 px-1-9 px-sm-6 mb-1-9 rounded">
                      <h5 className="h1 text-white mb-2">{user.firstName} {user.lastName}</h5>
                    </div>
                    <ul className="list-unstyled mb-1-9">
                      <li className="mb-2 mb-xl-3 display-28 mt-3">
                        <span className="display-26 text-secondary me-2 font-weight-600">
                          Email:
                        </span>
                        {user.email}
                      </li>
                      <li className="mb-2 mb-xl-3 display-28">
                        <span className="display-26 text-secondary me-2 font-weight-600">
                          Website:
                        </span>
                        www.BlogPost.com
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
                      style={{ maxWidth: '100 %' }}
                    />
                  </div>
                  <div className="blog-grid-text p-4">
                    <h3 className="h5 mb-3">
                      {post.title}
                    </h3>
                    <p className="display-30">
                      {post.discription.slice(0, 50)}...
                    </p>
                    <div className="meta meta-style2">
                      <ul>
                        <li>
                          <a href="#!">
                            <i className="fas fa-user"></i>By: {post.PostedBy}
                          </a>
                        </li>
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
  )
}

export default UserProfile