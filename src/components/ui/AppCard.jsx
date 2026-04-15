import Image from "next/image";
import Link from "next/link";
import React from "react";

const AppCard = ({ app }) => {
  const statusColor = {
    "overdue": "bg-[#EF4444] text-white",
    "almost due": "bg-[#F59E0B] text-white",
    "on-track": "bg-[#244D3F] text-white",
  };

  return (
    <div>
      <Link
        href={`/friend-apps/${app.id}`}
        className="card  flex flex-col items-center justify-center border border-gray-100  py-8 bg-white shadow-sm rounded-lg space-y-3 transition transform hover:scale-105"
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
        <h3 className="text-xl text-[#244D3F] font-bold">{app.name}</h3>

        <div className="text-xs text-gray-400 font-semibold">
          {app.days_since_contact}d ago
        </div>

        <div className="flex items-center justify-center flex-wrap gap-2">
          {app.tags.map((tag, index) => (
            <div key={index} className="px-3 py-1 text-[10px] uppercase font-bold rounded-full bg-[#E0F3EA] text-[#1D9955]">
              {tag}
            </div>
          ))}
        </div>
        <div
          className={`font-semibold text-xs px-4 mt-1
             py-1 rounded-full ${statusColor[app.status]}`}
        >
          {app.status === 'on-track' ? 'On Track' : app.status === 'almost due' ? 'Almost Due' : 'Overdue'}
        </div>
      </Link>
    </div>
  );
};

export default AppCard;
