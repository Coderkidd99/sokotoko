import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div className="flex ">
        <img src={user.picture} alt={user.name} className=""/>
        <p className=" text-sm font-normal">{user.email}</p>
      </div>
    )
  );
};

export default Profile;
