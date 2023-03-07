import React, { useState, useEffect } from "react";
import axios from "axios";
import { css } from "@emotion/react";
import { ClipLoader } from "react-spinners";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const Teste = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((response) => {
          setData(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error(error);
          setLoading(false);
        });
    }, 5000);
  }, []);

  return (
    <div className="App">
      {loading && (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: "9999",
            backgroundColor: "#fff",
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ClipLoader color={"#36D7B7"} loading={loading} css={override} size={150} />
        </div>
      )}

      {!loading && data && (
        <div>
          {data.map((post) => (
            <div key={post.id}>
              <h1>{post.title}</h1>
              <p>{post.body}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Teste;
