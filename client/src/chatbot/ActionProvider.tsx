/* eslint-disable */
import React from "react";

function ActionProvider({ createChatBotMessage, setState, children }) {
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

    setState((prev: { messages: any }) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  }

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleReply,
          },
        });
      })}
    </div>
  );
}

export default ActionProvider;
