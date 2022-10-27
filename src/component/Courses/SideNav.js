import { Link } from 'react-router-dom';
import './SideNav.css';

const SideNav = ({ data }) => {
    console.log(data)
    return (
        <div className='details'>
            <h1 className='text-success my-3 mb-5'>All courses</h1>
            {
                data.map(d => <Link to={`/courses/${d.category_id}`} key={d.category_id}><h4 className='my-4'>{d.title}</h4></Link>)
            }
        </div>
    );
};

export default SideNav;