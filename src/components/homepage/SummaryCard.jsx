'use client';
import React from "react";
import { useFriends } from "@/context/FriendsContext";

const SummaryCard = () => {
  const { friends, timeline } = useFriends();
  
  const onTrack = friends.filter((app) => app.status === "on-track").length;
  const almostDue = friends.filter((app) => app.status === "almost due").length;
  const overdue = friends.filter((app) => app.status === "overdue").length;
  
  // Just use a subset of timeline if needed, or simply count overdue
  // The Figma seems to just say "Overdue This Month".
  // We'll map exactly to what Figma implies (Total, On Track, Almost Due, Overdue).

  const summaryData = [
    {
      id: 1,
      item: friends.length,
      name: "Total Friends",
    },
    {
      id: 2,
      item: onTrack,
      name: "On Track",
    },
    {
      id: 3,
      item: almostDue,
      name: "Almost Due",
    },
    {
      id: 4,
      item: overdue,
      name: "Overdue",
    },
  ];

  return (
    <div className="container mx-auto px-5 max-w-6xl">
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
       items-center justify-center gap-3 pb-15 pt-5 border-b-2 border-gray-100"
      >
        {summaryData.map((data) => (
          <div
            key={data.id}
            className="flex flex-col items-center justify-center
               border-none py-10
                bg-white shadow-sm rounded-lg transition transform hover:-translate-y-1"
          >
            <h3 className="text-3xl text-[#244D3F] font-bold">
              {data.item}
            </h3>
            <p className="text-[#64748B] text-sm mt-1">{data.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SummaryCard;
