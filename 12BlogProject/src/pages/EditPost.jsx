import React, { useEffect, useState } from "react";
import { Container, PostForm } from "../components";
import appwriteService from "../appwrite/config";
import { useNavigate, useParams } from "react-router-dom";

function EditPost() {
  const [post, setPosts] = useState(null);

  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (slug) {
      appwriteService.getPost(slug).then((post) => {
        if (post) {
          setPosts(post);
        }
      });
    } else {
      navigate("/");
    }
  }, [slug, navigate]);

  return post ? (
    <div className="min-h-screen bg-[#fdf6f0] py-12">
      <Container>

        <div className="max-w-5xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-10">
            <h1 className="text-5xl font-bold text-[#5f4b44]">
              Edit Your Post
            </h1>

            <p className="mt-4 text-lg text-[#7b5e57]">
              Update your content and make your story even better.
            </p>
          </div>

          {/* Form Section */}
          <div className="bg-[#f5ebe0] rounded-[32px] shadow-xl p-8 md:p-10">
            <PostForm post={post} />
          </div>

        </div>

      </Container>
    </div>
  ) : (
    <div className="min-h-screen flex items-center justify-center bg-[#fdf6f0]">
      <p className="text-[#7b5e57] text-xl">
        Loading post...
      </p>
    </div>
  );
}

export default EditPost;