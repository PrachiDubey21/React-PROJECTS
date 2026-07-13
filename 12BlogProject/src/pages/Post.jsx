import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import parse from "html-react-parser";

import appwriteService from "../appwrite/config";
import { Button, Container } from "../components";

export default function Post() {
  const [post, setPost] = useState(null);

  const { slug } = useParams();
  const navigate = useNavigate();

  const userData = useSelector((state) => state.auth.userData);

  // Check if logged-in user is author of post
  const isAuthor = post && userData ? post.userID === userData.$id : false;

  useEffect(() => {
    if (slug) {
      appwriteService.getPost(slug).then((post) => {
        if (post) {
          setPost(post);
        } else {
          navigate("/");
        }
      });
    } else {
      navigate("/");
    }
  }, [slug, navigate]);

  const deletePost = () => {
    appwriteService.deletePost(post.$id).then((status) => {
      if (status) {
        appwriteService.deleteFile(post.featuredImage);
        navigate("/");
      }
    });
  };

  return post ? (
    <div className="bg-[#fdf6f0] min-h-screen py-12">

      <Container>

        {/* Main Card */}
        <div className="bg-[#fffaf5] rounded-[40px] p-6 md:p-10 shadow-[0_10px_40px_rgba(0,0,0,0.06)]">

          {/* Image Section */}
          <div className="relative mb-10">

            <div className="bg-[#f5ebe0] rounded-[32px] overflow-hidden p-4">
              <img
                src={appwriteService
                  .getFilePreview(post.featuredImage)
                  .toString()}
                alt={post.title}
                className="w-full h-[500px] object-contain rounded-[24px]"
              />
            </div>

            {/* Buttons */}
            {isAuthor && (
              <div className="absolute top-6 right-6 flex gap-3">

                <Link to={`/edit-post/${post.$id}`}>
                  <Button
                    bgColor="bg-[#b08968]"
                    className="
                      px-6 py-2.5
                      rounded-full
                      text-white
                      hover:bg-[#9c7455]
                      transition-all duration-300
                      shadow-md
                    "
                  >
                    Edit
                  </Button>
                </Link>

                <Button
                  bgColor="bg-[#d6a5a5]"
                  className="
                    px-6 py-2.5
                    rounded-full
                    text-white
                    hover:bg-[#c58f8f]
                    transition-all duration-300
                    shadow-md
                  "
                  onClick={deletePost}
                >
                  Delete
                </Button>

              </div>
            )}
          </div>

          {/* Content Section */}
          <div className="max-w-4xl mx-auto">

            {/* Small Tag */}
            <div className="mb-4">
              <span
                className="
                  bg-[#f9d5d3]
                  text-[#7b5e57]
                  px-4 py-1.5
                  rounded-full
                  text-sm
                  font-medium
                  tracking-wide
                "
              >
                Featured Post
              </span>
            </div>

            {/* Title */}
            <h1
              className="
                text-4xl md:text-5xl
                font-bold
                text-[#5f4b44]
                leading-tight
                mb-5
              "
            >
              {post.title}
            </h1>

            {/* Decorative Line */}
            <div className="w-28 h-1 rounded-full bg-[#d6a5a5] mb-10"></div>

            {/* Content */}
            <div
              className="
                browser-css
                text-[#6d5c54]
                text-lg
                leading-9
              "
            >
              {parse(post.content)}
            </div>

          </div>
        </div>

      </Container>
    </div>
  ) : null;
}