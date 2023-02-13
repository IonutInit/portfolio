/* eslint-disable */
import React from "react";

function ActionProvider({ createChatBotMessage, setState, children }) {
  const addMessage = (botMessage) => {
    setState((prev: { messages: any }) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  async function handleReply(botReply: any) {
    // eslint-disable-next-line func-names
    (async function () {
      // eslint-disable-next-line no-useless-catch
      try {
        await botReply;
      } catch (err) {
        throw err;
      }
    });
    const botMessage = createChatBotMessage(await botReply);
    addMessage(botMessage);
  }

  const limitExceeded = (charLimit: number) => {
    const botMessage = createChatBotMessage(
      `Error... Error... That's a lot of tokens, you know! I can only accept inputs smaller than ${charLimit} characters long.`
    );
    addMessage(botMessage);
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleReply,
            limitExceeded,
          },
        });
      })}
    </div>
  );
}

export default ActionProvider;
