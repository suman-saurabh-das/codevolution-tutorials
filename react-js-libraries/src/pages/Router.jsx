import { Link } from "react-router-dom";

function Router() {
  return (
    <div>
      <h3 className="m-0">React packages that will come handy at work/side projects.</h3>
      <ul>
        <li><Link to={"/react-icons"}>react-icons</Link></li>
        <li><Link to={"/react-toastify"}>react-toastify</Link></li>
        <li><Link to={"/react-modal"}>react-modal</Link></li>
        <li><Link to={"/react-tooltip"}>react-tooltip</Link></li>
      </ul>
    </div>
  );
}

export default Router;
