import React, { useState, useEffect } from "react";
import Axios from "axios";

// Fetching data using useEffect and setting states using useState hook
function DataFetching1() {
  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState({});
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    Axios.get("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => {
        setLoading(false);
        setPost(res.data);
        setErrorMsg("");
      })
      .catch((err) => {
        setLoading(false);
        setPost({});
        setErrorMsg("Something went wrong !");
      });
  }, []);

  return (
    <div>
      <h4>Fetching data using useState & useEffect</h4>
      {loading ? <h4>Loading...</h4> : <p>{post.title}</p>}
      {errorMsg ? <h4>errorMsg</h4> : null}
    </div>
  );
}

export default DataFetching1;
