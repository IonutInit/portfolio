import bot from "../assets/images/bot.svg";

const BotAvatar = () => {
  return (
    <img
      src={bot}
      style={{
        height: "35px",
        paddingRight: "10px",
      }}
      alt=""
    />
  );
};

export default BotAvatar;
