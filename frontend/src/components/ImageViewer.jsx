import React, { useRef } from "react";
import { CircleCloseIcon } from "../assets/svg/CircleClose";
import { Media } from "../assets/svg/Media";

const ImageViewer = ({ image, setImage, setShowMedia }) => {
  const chooseFile = useRef(null);
  const handleImageUpload = (e) => {
    const file = Array.from(e.target.files);
    file.forEach((img) => {
      if (
        img.type !== "image/jpeg" &&
        img.type !== "image/png" &&
        img.type !== "image/webp" &&
        img.type !== "image/gif"
      ) {
        console.log("Image Not Selected");
      } else {
        const renderFile = new FileReader();
        renderFile.readAsDataURL(img);
        renderFile.onload = (renderImg) => {
          setImage((imgages) => [...imgages, renderImg.target.result]);
        };
      }
    });
  };
  return (
    <>
      <div className="relative">
        <div
          onClick={() => setShowMedia(false)}
          className="absolute right-1 top-1"
        >
          <CircleCloseIcon />
        </div>
        {image && image.length ? (
          <>
            <div className="h-52 bg-color-white rounded-md p-1 w-full overflow-hidden">
              {image.map((img, i) => (
                <img
                  src={img}
                  alt="images"
                  className="object-cover h-full w-full"
                />
              ))}
            </div>
            <div
              className="flex justify-center items-center bg-color-blue text-color-white py-1 rounded-md cursor-pointer"
              onClick={() => chooseFile.current.click()}
            >
              <div className="flex justify-center gap-1">
                <div className="">
                  <Media />
                </div>
                <p>Add More photos/videos</p>
              </div>
            </div>
          </>
        ) : (
          <div
            className="flex justify-center items-center bg-color-white py-20 rounded-md cursor-pointer"
            onClick={() => chooseFile.current.click()}
          >
            <div className="text-center">
              <div className="flex justify-center">
                <Media />
              </div>
              <p>Add photos/videos</p>
              <p>or drag and drop</p>
            </div>
          </div>
        )}

        <input
          type="file"
          multiple
          accept="image/jpeg,image/png,image/webp,image/gif"
          className="hidden"
          onChange={handleImageUpload}
          ref={chooseFile}
        />
      </div>
    </>
  );
};

export default ImageViewer;
