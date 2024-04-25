import PropTypes from 'prop-types';


function Students(props) {

  return (
    <div className='student'>
      <p>Name : {props.name}</p>
      <p>Age : {props.age}</p>
    </div>
  );
}

Students.propTypes ={
    name: PropTypes.string,
    age: PropTypes.string  
}

export default Students;
