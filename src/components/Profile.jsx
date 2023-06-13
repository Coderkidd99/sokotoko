import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, isLoading, error } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    isAuthenticated && (
      <div className="flex">
        <img src={user.picture} alt={user.name} className=" border-gray-500 rounded-full h-10 w-10 overflow-hidden hover:scale-125 transition-transform duration-300 " />
      </div>
    )
  );
};

export default Profile;
