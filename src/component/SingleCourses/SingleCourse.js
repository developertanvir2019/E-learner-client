import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleCourse = () => {
    const dataserver = useLoaderData();
    return (
        <div>
            <h1>single courses details </h1>

        </div>
    );
};

export default SingleCourse;