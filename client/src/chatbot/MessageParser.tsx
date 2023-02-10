/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

import { v4 as uuidv4 } from "uuid";

const chatId = uuidv4();

// eslint-disable-next-line react/prop-types
const MessageParser = ({ children, actions }: any) => {
  function parse(message: any) {
    async function sendReceive() {
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
        // console.log(botReply)
        // console.log(chatId)
        return `${botReply}.`;
      } catch (err) {
        throw err;
      }
    }

    const reply = sendReceive();

    // eslint-disable-next-line react/prop-types
    actions.handleReply(reply);
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
