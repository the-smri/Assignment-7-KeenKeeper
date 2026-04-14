import React from "react";

const friendsPromise = async function () {
  const res = await fetch("http://localhost:3000/friends.json");
  const apps = await res.json();
  return apps;
};

const SummaryCard = async () => {
  const apps = await friendsPromise();
  const onTrack = apps.filter((app) => app.status === "on-track").length;
  const almostDue = apps.filter(
    (app) => app.status === "almost due" || app.status === "overdue",
  ).length;

  const summaryData = [
    {
      id: 1,
      item: apps.length,
      name: " Total Friends",
    },
    {
      id: 2,
      item: onTrack,
      name: "On Track",
    },
    {
      id: 3,
      item: almostDue,
      name: "Need Attention",
    },
    {
      id: 4,
      item: "12",
      name: "Interactions This Month",
    },
  ];

  return (
    <div className="container mx-auto px-5">
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
       items-center justify-center gap-3 pb-15 pt-5 border-b-2 border-gray-100"
      >
        {summaryData.map((data) => (
          <div
            key={data.id}
            className="flex flex-col items-center justify-center
               border border-gray-100 space-y-2 py-4
                bg-white shadow-lg rounded-lg  transition delay-150 duration-300 ease-in-out hover:-translate-y hover:scale-95 hover:bg-white  "
          >
            <h3 className="text-2xl text-[#244D3F] font-semibold">
              {data.item}
            </h3>
            <p className="text-[#64748B]">{data.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SummaryCard;
