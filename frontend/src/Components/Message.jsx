import React from "react";

const Message = () => {
  return (
    <div className="chat chat-end">
      <div className="chat-image avatar">
        <div className="w-10 rounded-md">
          <img
            src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxLzI3OS1wYWkxNTc5LW5hbS1qb2IxNTI5LnBuZw.png"
            alt="Avatar"
          />
        </div>
      </div>
      <div className="chat-bubble text-white bg-sky-400">Hi what's up?</div>
      <div className="chat-footer text-slate-600/50 text-xs flex items-center gap-1">
        12:45
      </div>
    </div>
  );
};

export default Message;
