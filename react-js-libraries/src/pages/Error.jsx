import { Link } from "react-router-dom";

function Error() {
  return (
    <div>
      <h2>Oops ! The page you are looking for doesn't exist.</h2>
      <p>Return to <Link to={"/"}>home</Link></p>
    </div>
  );
}

export default Error;
