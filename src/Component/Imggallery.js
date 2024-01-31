import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchImageList } from "../Redux/Img/Action";

const Imggallery = () => {
  const data = useSelector((state) => state.imglist);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchImageList());
  }, []);

  return (
    <div>
      {/* {JSON.stringify(data.data)} */}
      {data &&
        data.data &&
        data.data.map((item) => (
          <div>
            <h1>{item.title}</h1>
            <img src={item.url}></img>
          </div>
        ))}
    </div>
  );
};

export default Imggallery;
