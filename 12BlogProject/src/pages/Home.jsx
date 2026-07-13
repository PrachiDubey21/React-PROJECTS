import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import { Container, PostCard } from "../components";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    appwriteService.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  // Landing Page when no posts exist
  if (posts.length === 0) {
    return (
      <div className="w-full min-h-screen bg-[#fdf6f0] flex items-center">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* Left Content */}
            <div>
              <h1 className="text-5xl font-bold leading-tight text-[#5f4b44]">
                Share your thoughts with the world.
              </h1>

              <p className="mt-6 text-lg leading-8 text-[#7b5e57]">
                A cozy and beautiful space where writers and readers can connect
                through stories, ideas, and creativity.
              </p>

              <button className="mt-8 px-5 py-2 bg-[#b08968] text-white rounded-full font-medium hover:bg-[#9a7759] transition">
                Login to post
              </button>
            </div>

            {/* Right Side Card */}
            <div className="bg-[#f5ebe0] p-10 rounded-[40px] shadow-xl">
              <div className="bg-[#f9d5d3] rounded-3xl p-8">
                <h2 className="text-3xl font-semibold text-[#5f4b44] mb-4">
                  Welcome to YourBlog
                </h2>

                <p className="text-[#6d5c54] leading-7">
                  Read inspiring blogs, publish your own thoughts, and build
                  your personal creative corner on the internet.
                </p>
              </div>
            </div>

          </div>
        </Container>
      </div>
    );
  }

  // Show Posts
  return (
    <div className="w-full py-10 bg-[#fdf6f0] min-h-screen">
      <Container>

        {/* Heading */}
        <div className="text-center mb-14">
          <h1 className="text-6xl font-bold text-[#6d5c54] mb-4">
            Explore Posts
          </h1>

          <p className="text-xl text-[#8b6b61]">
            Discover stories, ideas, and creativity shared by writers.
          </p>
        </div>

        {/* Posts */}
        <div className="flex flex-wrap gap-6 justify-center">
          {posts.map((post) => (
            <div
              key={post.$id}
              className="w-full sm:w-[320px]"
            >
              <PostCard {...post} />
            </div>
          ))}
        </div>

      </Container>
    </div>
  );
}

export default Home;