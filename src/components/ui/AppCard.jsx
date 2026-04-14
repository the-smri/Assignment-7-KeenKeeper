import Image from "next/image";
import Link from "next/link";
import React from "react";

const AppCard = ({ app }) => {
  const statusColor = {
    
     "overdue" : "bg-red-400 text-white",
    "almost due": "bg-yellow-400 text-black",
    "on-track": "bg-green-400 text-white",
  };

  return (
    <div>
      <Link
        href={`/friend-apps/${app.id}`}
        className="card  flex flex-col items-center justify-center border border-gray-100  py-8 bg-white shadow-lg rounded-lg space-y-3 "
      >
        <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
          <Image
            src={app.picture}
            alt={app.name}
            className="rounded-full"
            width={64}
            height={64}
          />
        </div>
        <h3 className="text-2xl text-[#244D3F] font-semibold">{app.name}</h3>

        <div className="flex items-center gap-3">
          {app.tags.map((tag, index) => (
            <div key={index} className="badge badge-success text-[#244D3F]">
              {tag}
            </div>
          ))}
        </div>
        <div
          className={`font-bold px-4
             py-0.5 rounded-2xl ${statusColor[app.status]}`}
        >
          {app.status}
        </div>
      </Link>
    </div>
  );
};

export default AppCard;
