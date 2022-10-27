import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const courseData = useLoaderData();
    console.log(courseData);
    return (
        <div>
            shf my al detaisl{courseData.title}
        </div>
    );
};

export default CourseDetails;