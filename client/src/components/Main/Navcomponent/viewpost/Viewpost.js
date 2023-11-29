import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';
import './input.css';
import { useFormik } from 'formik';
import { AiOutlineDelete } from 'react-icons/ai';
import { MdModeEdit } from 'react-icons/md';

const Viewpost = () => {
    const [data, setData] = useState({})
    const [comment, setComment] = useState('')
    const [User, setUser] = useState([])
    const { id: userId } = useParams()
    // console.log(userId)

    const { id } = useParams()
    const Id = localStorage.getItem('userId')
    const navigate = useNavigate()

    useEffect(() => {
        return axios.get(`http://localhost:4000/api/id/${id}`)
            .then(res => setUser(res.data))
    });

    useEffect(() => {
        return axios.post(`http://localhost:4000/api/id`, { id })
            .then(res => setData(res.data.data))
    }, [id]);

    const image = data.image
    const title = data.title;
    const discription = data.discription;
    // const by = data.PostedBy
    const user = data.user

    const DeletePost = async () => {
        let res = await axios.put(`http://localhost:4000/api/id`, { userid: id })
        if (res.status === 201) {
            navigate('/')
        }
    }
    const Sendcomment = async () => {
        setComment('')
        await axios.post(`http://localhost:4000/api/userpost/comment`, { comment, user: Id, post: id, date: moment().format('MMMM Do YYYY, h:mm:ss a'), })
    }

    const DeleteComment = async (iD) => {
        await axios.put(`http://localhost:4000/api/userpost/comment/${iD}`)
    }

    const updateBlog = async () => {
        let res = await axios.put(`http://localhost:4000/api/userpost/update`, { userid: userId, data: values })
        if (res.status === 202) {
            window.location.reload()
            // navigate(`/viewpost/${userId}`)
        }
    }

    const { handleChange, values, handleSubmit } = useFormik({
        initialValues: {
            image: "",
            title: "",
            discription: "",
            PostedBy: "",
            categoary: ""
        },
        onSubmit: updateBlog,
    });

    return (
        <>
            <div id="main-content" className="blog-page">
                <div className="container">
                    <div className="row clearfix">
                        <div className="col-lg-12 col-md-12 left-box">
                            <div className="card single_post">
                                <div className="body">
                                    <div className="img-post" style={{textAlign:'center'}}>
                                        <img className=" img-fluid" src={image} alt="First slide"  />
                                    </div>
                                    {
                                        user === Id ?
                                            <div className="action-icons">
                                                <AiOutlineDelete onClick={() => DeletePost()} />
                                                <MdModeEdit data-bs-toggle="modal" data-bs-target="#exampleModal" />
                                            </div>
                                            :
                                            null
                                    }
                                    <h3 className='mt-5'><a href="blog-details.html">{title}</a></h3>
                                    <p className='mt-3'>{discription}</p>
                                </div>
                            </div>
                            <div className="card">
                                <div className="header">
                                    <h2>Comments ({User.length})</h2>
                                </div>
                                <div className="body">
                                    <ul className="comment-reply list-unstyled">
                                        {User.map((data, index) => {
                                            return (<li key={index} className="row clearfix">
                                                <div className="icon-box col-md-1 col-4">
                                                    <img
                                                        className="img-fluid img-thumbnail"
                                                        src={data.image}
                                                        alt={data.name}
                                                        height="90px"
                                                        style={{
                                                            width: 90,
                                                            borderRadius: '52px',
                                                            background: '#fafafa',
                                                        }}
                                                    />
                                                </div>
                                                <div className="text-box col-md-10 mt-4 col-8 p-l-0 p-r-0">
                                                    <h5 className="m-b-0">{data.name}</h5>
                                                    <p>
                                                        {data.comment}
                                                    </p>
                                                    {
                                                        user === Id ?
                                                            <p><AiOutlineDelete style={{ cursor: 'pointer' }} onClick={() => DeleteComment(data._id)} /></p>
                                                            :
                                                            null
                                                    }
                                                    <ul className="list-inline">
                                                        <li>{data.date}</li>
                                                    </ul>
                                                </div>
                                            </li>)
                                        })}
                                    </ul>
                                </div>
                            </div>
                            <div className="card">
                                <div className="header">
                                    <h2>Leave a comment </h2>
                                </div>
                                <div className="body">
                                    <div className="comment-form">
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <textarea
                                                    rows="4"
                                                    value={comment}
                                                    onChange={(e) => setComment(e.target.value)} // This line was added
                                                    className="form-control no-resize mb-4"
                                                    placeholder="Please type what you want..."
                                                ></textarea>
                                            </div>
                                            <button onClick={() => Sendcomment()} className="btn btn-primary">SUBMIT</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Edit Blog</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <form onSubmit={handleSubmit}>
                                        <div className="mb-3">
                                            <label htmlFor="image" className="form-label">Image</label>
                                            <input type="text"
                                                value={values.image}
                                                onChange={handleChange}
                                                name="image" className="form-control" id="image" />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="title" className="form-label">Title</label>
                                            <input type="text"
                                                value={values.title}
                                                onChange={handleChange}
                                                name="title" className="form-control" id="title" />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="discription" className="form-label">Description</label>
                                            <input type="text"
                                                value={values.discription}
                                                onChange={handleChange}
                                                name="discription" className="form-control" id="discription" />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="categoary" className="form-label">Category</label>
                                            <input type="text"
                                                value={values.categoary}
                                                onChange={handleChange}
                                                name="categoary" className="form-control" id="categoary" />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="PostedBy" className="form-label">PostedBy</label>
                                            <input type="text"
                                                value={values.PostedBy}
                                                onChange={handleChange}
                                                name="PostedBy" className="form-control" id="PostedBy" />
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Discard</button>
                                            <button type="submit" className="btn btn-primary" data-bs-dismiss="modal" >Update</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Viewpost