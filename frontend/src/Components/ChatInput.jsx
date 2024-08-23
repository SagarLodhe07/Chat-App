import { IoIosSend } from "react-icons/io";
const ChatInput = () => {
  return (
    <form>
      <div className="w-full relative mb-1 ">
        <input
          type="text"
          className="w-full outline-none p-2 block rounded-md border-2 bg-transparent border-gray-300 text-gray-600"
          placeholder="Send a message"
        />
        <button className="absolute inset-y-0 end-0 flex items-center">
          <IoIosSend className="text-sky-600/70 size-7 mr-2" />
        </button>
      </div>
    </form>
  );
};

export default ChatInput;
