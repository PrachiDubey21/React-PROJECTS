import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, RTE, Select } from "..";
import appwriteService from "../../appwrite/config";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function PostForm({ post }) {
  const { register, handleSubmit, watch, setValue, control, getValues } =
    useForm({
      defaultValues: {
        title: post?.title || "",
        slug: post?.$id || "",
        content: post?.content || "",
        status: post?.status || "active",
      },
    });

  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);

  const submit = async (data) => {
    if (post) {
      const file = data.image[0]
        ? await appwriteService.uploadFile(data.image[0])
        : null;

      if (file) {
        appwriteService.deleteFile(post.featuredImage);
      }

      const dbPost = await appwriteService.updatePost(post.$id, {
        ...data,
        featuredImage: file ? file.$id : undefined,
      });

      if (dbPost) {
        navigate(`/post/${dbPost.$id}`);
      }
    } else {
      const file = await appwriteService.uploadFile(data.image[0]);

      if (file) {
        const fileId = file.$id;
        data.featuredImage = fileId;

        const dbPost = await appwriteService.createPost({
          ...data,
          userID: userData.$id,
        });

        if (dbPost) {
          navigate(`/post/${dbPost.$id}`);
        }
      }
    }
  };

  const slugTransform = useCallback((value) => {
    if (value && typeof value === "string")
      return value
        .trim()
        .toLowerCase()
        .replace(/[^a-zA-Z\d\s]+/g, "-")
        .replace(/\s/g, "-");

    return "";
  }, []);

  React.useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === "title") {
        setValue("slug", slugTransform(value.title), {
          shouldValidate: true,
        });
      }
    });

    return () => subscription.unsubscribe();
  }, [watch, slugTransform, setValue]);

  return (
    <div className="py-10 bg-[#f5ebe0] min-h-screen">
      <form
        onSubmit={handleSubmit(submit)}
        className="
          max-w-7xl
          mx-auto
          flex
          flex-wrap
          gap-6
          bg-[#fffaf5]
          p-6
          rounded-3xl
          shadow-[0_10px_40px_rgba(0,0,0,0.06)]
        "
      >
        {/* Left Side */}
        <div className="w-full lg:w-[65%]">
          <div className="bg-[#f8edeb] p-6 rounded-2xl shadow-sm">
            <h2 className="text-2xl font-semibold text-[#7f5539] mb-6">
              {post ? "Edit Post" : "Create New Post"}
            </h2>

            <Input
              label="Title"
              placeholder="Write your title..."
              className="mb-5"
              {...register("title", { required: true })}
            />

            <Input
              label="Slug"
              placeholder="Post slug"
              className="mb-5"
              {...register("slug", { required: true })}
              onInput={(e) => {
                setValue(
                  "slug",
                  slugTransform(e.currentTarget.value),
                  {
                    shouldValidate: true,
                  },
                );
              }}
            />

            <div className="rounded-2xl overflow-hidden">
              <RTE
                label="Content"
                name="content"
                control={control}
                defaultValue={getValues("content")}
              />
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full lg:flex-1">
          <div className="bg-[#faedcd] p-6 rounded-2xl shadow-sm sticky top-24">
            <h3 className="text-xl font-semibold text-[#7f5539] mb-5">
              Publish
            </h3>

            <Input
              label="Featured Image"
              type="file"
              className="mb-5"
              accept="image/png, image/jpg, image/jpeg, image/gif"
              {...register("image", { required: !post })}
            />

            {post && (
              <div className="w-full mb-5">
                <img
                  src={appwriteService.getFilePreview(
                    post.featuredImage,
                  )}
                  alt={post.title}
                  className="
                    w-full
                    rounded-2xl
                    object-cover
                    shadow-md
                  "
                />
              </div>
            )}

            <Select
              options={["active", "inactive"]}
              label="Status"
              className="mb-6"
              {...register("status", { required: true })}
            />

            <Button
              type="submit"
              bgColor={
                post
                  ? "bg-[#b08968]"
                  : "bg-[#ddb7ab]"
              }
              className="
                w-full
                text-white
                font-semibold
                py-3
                rounded-xl
                hover:opacity-90
                transition-all
                duration-300
              "
            >
              {post ? "Update Post" : "Publish Post"}
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}