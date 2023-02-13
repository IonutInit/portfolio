/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

import { v4 as uuidv4 } from "uuid";

const chatId = uuidv4();

const charLimit = 200;

async function sendReceive(message: any) {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await fetch(
      "https://iobot-chat.onrender.com/api/v1/text",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chatId,
          prompt: message,
        }),
      }
    );
    const botReply = await response.json();
    return `${botReply}.`;
  } catch (err) {
    throw err;
  }
}

// eslint-disable-next-line react/prop-types
const MessageParser = ({ children, actions }: any) => {
  function parse(message: any) {
    if (message.length > charLimit) {
      actions.limitExceeded(charLimit);
    } else {
      const reply = sendReceive(message);
      // eslint-disable-next-line react/prop-types
      actions.handleReply(reply);
    }
  }

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse,
          actions: {},
        });
      })}
    </div>
  );
};

export default MessageParser;
