'use client';
import React from "react";
import AppCard from "../ui/AppCard";
import { useFriends } from "@/context/FriendsContext";

const FriendsApps = () => {
  const { friends, loading } = useFriends();

  return (
    <div className="container mx-auto px-5 py-10 max-w-6xl">
      <h2 className="text-xl font-bold text-slate-800 mb-6">
        Your Friends
      </h2>
      {loading ? (
        <div className="flex justify-center items-center py-20">
          <span className="loading loading-spinner text-success loading-lg"></span>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-stretch justify-center gap-5">
          {friends.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FriendsApps;
