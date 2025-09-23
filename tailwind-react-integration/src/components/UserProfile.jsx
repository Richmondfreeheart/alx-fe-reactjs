import React from "react";

function UserProfile() {
  return (
    <div className="user-profile bg-gray-100 p-8 max-w-sm mx-auto my-20 rounded-lg shadow-lg text-center p-4 md:p-8 max-w-xs md:max-w-sm my-10 md:my-20 hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <img
        src="https://via.placeholder.com/150"
        alt="User"
        className="w-36 h-36 w-24 h-24 md:w-36 md:h-36 rounded-full mx-auto transform transition-transform duration-300 ease-in-out hover:scale-110"
      />
      <h1 className="text-xl text-blue-800 my-4 text-lg md:text-xl my-3 md:my-4 transition-colors duration-300 ease-in-out hover:text-blue-500">
        John Doe
      </h1>
      <p className="text-base text-gray-600 text-sm md:text-base">
        Developer at Example Co. Loves to write code and explore new technologies.
      </p>
    </div>
  );
}

export default UserProfile;
