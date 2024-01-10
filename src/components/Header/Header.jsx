import profile from "../../assets/images/profile.png";
const Header = () => {
  return (
    <div className="flex justify-between align-middle px-3 m-4 border-b-2">
      <h1 className="text-4xl font-bold ">My Knowlwdge Cafe </h1>
      <img src={profile} alt="" />
    </div>
  );
};

export default Header;
