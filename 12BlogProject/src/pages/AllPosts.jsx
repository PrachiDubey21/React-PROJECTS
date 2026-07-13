import React, { useState, useEffect } from "react";
import { Container, PostCard } from "../components";
import appwriteService from "../appwrite/config";

function AllPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    appwriteService.getPosts([]).then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  return (
    <div className="w-full min-h-screen bg-[#fdf6f0] py-12">
      <Container>

        {/* Heading */}
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-bold text-[#5f4b44]">
            Explore Posts
          </h1>

          <p className="mt-4 text-lg text-[#7b5e57]">
            Discover stories, ideas, and creativity shared by writers.
          </p>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div key={post.$id}>
              <PostCard {...post} />
            </div>
          ))}
        </div>

      </Container>
    </div>
  );
}

export default AllPosts;