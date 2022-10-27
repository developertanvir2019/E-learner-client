import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const courseData = useLoaderData();
    console.log(courseData);
    return (
        <div>
            <h1>Welcome to our <span className='text-danger'> {courseData.title}</span> course </h1>
            <img className='mt-3' src={courseData.thumbnail_url} alt="" />
            <br />
            <Link to={'/premium'} className='btn btn-primary px-4 mt-3'>Get Premium </Link>
            <h5 className='text-success py-2 mt-4'>Mentor name : {courseData.mentor_name}</h5>
            <h5 className='text-success py-2'>total enrolled : {courseData.total_enrolled}</h5>
            <h5 className='text-success py-2'>Total view : {courseData.total_view}</h5>
            <h2>course details</h2>
            <p className='container'>{courseData.details}</p>

        </div>
    );
};

export default CourseDetails;