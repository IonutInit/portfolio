/* eslint-disable */

import { createChatBotMessage } from "react-chatbot-kit";

import BotAvatar from "./BotAvatar";
import UserAvatar from "./UserAvatar";

const config = {
  botName: "Iobot",
  initialMessages: [
    createChatBotMessage(
      `Hi there. I'm a finely tuned but badly trained OpenAI DaVinci model meant to impersonate Ionut.`,
      {}
    ),
    createChatBotMessage(
      "Before we start, I want to let you know that our conversation will be anonymously recorded, so I can be trained better.",
      {
        withAvatar: false,
        delay: 2000,
      }
    ),
    createChatBotMessage(
      `Now that the fine print is out of the way, go ahead and ask me anything: how do you pronounce my name, what's my stack, anything really.`,
      {
        withAvatar: false,
        delay: 6000,
      }
    ),
    createChatBotMessage(
      "Oh, one more thing. I'm hosted on a free platform, so my first answer may be a bit slow.",
      {
        withAvatar: true,
        delay: 10000,
      }
    ),
  ],
  customComponents: {
    // eslint-disable-next-line react/jsx-props-no-spreading
    botAvatar: (props) => <BotAvatar {...props} />,
    // eslint-disable-next-line react/jsx-props-no-spreading
    userAvatar: (props) => <UserAvatar {...props} />,
  },
};

export default config;
