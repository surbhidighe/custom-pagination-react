import React, { useEffect, useState } from "react";
import { BASE_URL } from "../config";
import Pagination from "./Pagination";

const PostList = () => {
  const [postData, setPostData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const postPerPage = 10;

  //fetch all posts
  const fetchPostData = async () => {
    const response = await fetch(BASE_URL);
    const data = await response.json();
    setPostData(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchPostData();
  }, []);

  return (
    <div className="postlist_div">
      <h1>Custom Pagination using react</h1>

      {!loading ? (
        <>
          <div className="post_div">
            {postData.length > 0 &&
              postData
                .slice(
                  currentPage * postPerPage - postPerPage,
                  currentPage * postPerPage
                )
                .map((post) => (
                  <div key={post.id} className="post_card">
                    <h4>
                      {post.id} {post.title}
                    </h4>
                  </div>
                ))}
          </div>
          <div className="pagination_div">
            <Pagination
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
              postPerPage={postPerPage}
              postData={postData}
            />
          </div>
        </>
      ) : (
        <h2>Loading........</h2>
      )}
    </div>
  );
};

export default PostList;
