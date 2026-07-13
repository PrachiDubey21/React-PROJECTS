import React from "react";
import { Container, PostForm } from "../components";

function AddPost() {
  return (
    <div className="min-h-screen bg-[#fdf6f0] py-12">
      <Container>

        <div className="max-w-5xl mx-auto">

          {/* Heading Section */}
          <div className="mb-10 text-center">
            <h1 className="text-5xl font-bold text-[#5f4b44]">
              Create a New Post
            </h1>

            <p className="mt-4 text-[#7b5e57] text-lg">
              Share your thoughts, stories, and creativity beautifully.
            </p>
          </div>

          {/* Form Card */}
          <div className="bg-[#f5ebe0] shadow-xl rounded-[32px] p-8 md:p-10">
            <PostForm />
          </div>

        </div>

      </Container>
    </div>
  );
}

export default AddPost;