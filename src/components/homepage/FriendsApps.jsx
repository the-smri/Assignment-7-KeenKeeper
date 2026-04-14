import React from "react";
import AppCard from "../ui/AppCard";

const friendsPromise = async function () {
  const res = await fetch("http://localhost:3000/friends.json");
  const apps = await res.json();
  return apps;
};

const FriendsApps = async () => {
  const apps = await friendsPromise();

  console.log(apps, "friends data");

  return (
    <div className=" container mx-auto px-5 py-10 ">
      <h5 className="text-balance font-medium py-2">
        Your Friends Apps ({apps.length})
      </h5>
      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 items-center justify-center gap-5">
        {apps.map((app) => (
          <AppCard key={app.id} app={app} />
        ))}
      </div>
    </div>
  );
};

export default FriendsApps;
