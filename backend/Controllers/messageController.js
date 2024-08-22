import Conversation from "../Model/conversation.js";
import Message from "../Model/messageModel.js";

export const sendMessage = async (req, res) => {
  try {
    const { id: recieverId } = req.params;
    const { message } = req.body;

    const senderId = req.user._id;

    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, recieverId] },
    });
    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, recieverId],
      });
    }
    const newMessage = await Message({
      senderId,
      recieverId,
      message,
    });
    if (newMessage) {
      conversation.message.push(newMessage._id);
    }
    // await conversation.save()
    // await newMessage.save()

    await Promise.all([conversation.save(), newMessage.save()]);

    return res.status(201).json(newMessage);
  } catch (error) {
    console.log("Error in sendMessage Controller", error.message);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getMessage = async (req, res) => {
  try {
    const { id: userToChatId } = req.params;
    const senderId = req.user._id;

    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, userToChatId] },
    }).populate("message");

    if (!conversation) res.status(200).json([]);

    res.status(200).json(conversation.message);
  } catch (error) {
    console.log("Error in sendMessage Controller", error.message);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
