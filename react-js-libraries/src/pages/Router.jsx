import { Link } from "react-router-dom";

function Router() {
  return (
    <div>
      <p>React packages that will come handy at work/side projects.</p>
      <ul>
        <li><Link to={"/react-icons"}>react-icons</Link></li>
      </ul>
    </div>
  );
}

export default Router;
