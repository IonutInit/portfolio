import user from "../assets/images/user.svg";

const UserAvatar = () => {
  return (
    <img
      src={user}
      style={{
        height: "35px",
        paddingLeft: "10px",
      }}
      alt=""
    />
  );
};

export default UserAvatar;
