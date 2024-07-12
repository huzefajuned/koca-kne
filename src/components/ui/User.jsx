const User = ({ user_info }) => {
  console.log("user_info", user_info);

  return (
    <div className="max-w-sm mx-auto bg-white shadow-md rounded-lg overflow-hidden">
      <div className="flex items-center space-x-4 p-6">
        <img
          className="w-16 h-16 rounded-full object-cover"
          src={user_info.photoURL}
          alt="User Avatar"
        />
        <div>
          <h2 className="text-xl font-semibold text-gray-900">
            {user_info.displayName}
          </h2>
          <p className="text-gray-600">{user_info.email}</p>
          <p className="text-gray-600">{user_info.providerId}</p>
        </div>
      </div>
    </div>
  );
};

export default User;
