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
          className="absolute right-1 top-1 cursor-pointer"
        >
          <CircleCloseIcon />
        </div>
        {image && image.length ? (
          <>
            <div className="relative">
              <div
                className={`h-52 bg-color-white rounded-md p-1 overflow-hidden ${
                  image.length == 1
                    ? "w-full"
                    : image.length == 2
                    ? "flex gap-2"
                    : image.length == 3
                    ? "grid grid-rows-2 grid-flow-col gap-2"
                    : image.length == 4
                    ? "grid grid-cols-2 grid-rows-2 gap-2"
                    : "grid grid-cols-2 grid-rows-2 gap-2"
                }`}
              >
                {image.slice(0, 4).map((img, i) => (
                  <div
                    key={i}
                    className={`w-full h-full shadow-md ${
                      image.length == 3 && "[&:nth-of-type(1)]:row-span-2"
                    }`}
                  >
                    <img
                      src={img}
                      alt="images"
                      className="object-cover h-full w-full"
                    />
                  </div>
                ))}
              </div>
              <div
                className="absolute right-2 top-2 bg-color-border p-1 rounded-full cursor-pointer"
                onClick={() => setImage([])}
              >
                <CircleCloseIcon />
              </div>
              <div
                className="bg-color-border text-color-blue p-1 shadow-md rounded-md cursor-pointer absolute top-2 left-3 text-xs"
                onClick={() => chooseFile.current.click()}
              >
                <div className="flex justify-center items-center gap-1">
                  <div>
                    <Media />
                  </div>
                  <p>Add photos/videos</p>
                </div>
              </div>
              {image.length >= 5 && (
                <>
                  <div className="absolute right-[90px] bottom-[30px] w-10 h-10 text-color-blue bg-color-border rounded-full flex justify-center items-center shadow-md cursor-pointer">
                    +{image.length - 4}
                  </div>
                </>
              )}
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
