import EmojiPicker from "emoji-picker-react";
import React, { useEffect, useState } from "react";
import Feelingicon from "../assets/svg/Feeling";

const EmojiPickers = ({ setPostText, postText, textRef }) => {
  const [showEmoji, setShowEmoji] = useState(false);
  const [coursorPoint, setcoursorPoint] = useState();
  const handleEmoji = ({ emoji }) => {
    const ref = textRef.current;
    ref.focus();
    const start = postText.substring(0, ref.selectionStart);
    const end = postText.substring(ref.selectionStart);
    const newText = start + emoji + end;
    setPostText(newText);
    setcoursorPoint(start.length + emoji.length);
  };

  useEffect(() => {
    textRef.current.selectionEnd = coursorPoint;
  }, [coursorPoint]);
  return (
    <>
      <div className="relative">
        <div onClick={() => setShowEmoji(!showEmoji)}>
          <Feelingicon />
        </div>
        <div className="absolute bottom-7 right-0">
          {showEmoji && <EmojiPicker height={400} onEmojiClick={handleEmoji} />}
        </div>
      </div>
    </>
  );
};

export default EmojiPickers;
