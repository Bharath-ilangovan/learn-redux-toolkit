import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchImageList } from "../Redux/action/imageAction";

const Imggallery = () => {
  const data = useSelector((state) => state.imglist);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchImageList());
  }, []);

  if (data.error) {
    return <p>{data.error}</p>;
  }

  return (
    <div
      style={{
        // display: "grid",
        // placeItems: "center",
        // width: "100%",
        display: "flex",
        flexWrap: "wrap",
        padding: "0 4px",
      }}
    >
      {/* {JSON.stringify(data.data)} */}
      {data &&
        data.data &&
        data.data.map((item) => (
          <div style={{ margin: 2, width: "200px" }}>
            <h1 style={{ fontSize: 8 }}>{item.title}</h1>
            <img src={item.url} style={{ height: 100, width: 100 }}></img>
          </div>
        ))}
    </div>
  );
};

export default Imggallery;
