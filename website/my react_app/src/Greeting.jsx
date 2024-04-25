import PropTypes from "prop-types";

function Greeting(props) {
  const welcomeMessage = <h2>Welcome {props.username}</h2>;

  const loginPrompt = <h2>Login chy</h2>;
  return props.isLoggedIn ? welcomeMessage : loginPrompt;
}

Greeting.propTypes = {
  username: PropTypes.string,
  isLoggedIn: PropTypes.bool 
};

export default Greeting;
