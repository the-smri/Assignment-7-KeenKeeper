'use client';
import React, { use } from 'react';
import { useFriends } from '@/context/FriendsContext';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { FaPhoneAlt, FaCommentAlt, FaVideo, FaInfoCircle, FaArchive, FaTrash, FaRegClock } from 'react-icons/fa';
import toast from 'react-hot-toast';

const FriendsDetailPage = ({ params }) => {
  const unwrappedParams = use(params);
  const { id } = unwrappedParams;
  const { friends, addInteraction, loading } = useFriends();

  if (loading) {
    return <div className="text-center py-20 flex justify-center"><span className="loading loading-spinner text-success loading-lg"></span></div>;
  }

  const friend = friends.find((f) => f.id === parseInt(id));

  if (!friend && !loading) {
    return notFound();
  }

  const handleAction = (type) => {
    addInteraction(friend.id, friend.name, type);
    toast.success(`Logged ${type} with ${friend.name}!`);
  };

  const statusColor = {
    "overdue": "bg-red-400 text-white",
    "almost due": "bg-yellow-400 text-black",
    "on-track": "bg-green-400 text-white",
  };

  return (
    <div className="container mx-auto px-5 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="col-span-1 border border-gray-100 bg-white p-6 rounded-lg shadow space-y-6 flex flex-col items-center">
          <div className="flex flex-col items-center space-y-3">
            <Image
              src={friend.picture}
              alt={friend.name}
              width={100}
              height={100}
              className="rounded-full shadow"
            />
            <h2 className="text-2xl font-bold text-[#244D3F]">{friend.name}</h2>
            <div className={`px-4 py-1 rounded-2xl font-bold text-sm ${statusColor[friend.status]}`}>
              {friend.status}
            </div>
          </div>

          <div className="w-full space-y-3 text-center">
            <p className="text-gray-600 text-sm italic">"{friend.bio}"</p>
            <p className="text-gray-500 text-sm">{friend.email}</p>
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {friend.tags.map(tag => (
              <span key={tag} className="badge badge-success badge-outline text-[#244D3F]">
                {tag}
              </span>
            ))}
          </div>

          <div className="w-full border-t border-gray-200 mt-4 pt-4 flex flex-col gap-3">
            <button className="btn btn-outline border-gray-300 text-gray-700 w-full"><FaRegClock /> Snooze 2 Weeks</button>
            <button className="btn btn-outline border-gray-300 text-gray-700 w-full"><FaArchive /> Archive</button>
            <button className="btn btn-error text-white w-full"><FaTrash /> Delete</button>
          </div>
        </div>

        {/* Right Column */}
        <div className="col-span-1 lg:col-span-2 space-y-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="border border-gray-100 bg-white p-6 rounded-lg shadow text-center space-y-2">
              <h3 className="text-3xl font-bold text-[#244D3F]">{friend.days_since_contact}</h3>
              <p className="text-sm text-gray-500">Days Since Contact</p>
            </div>
            <div className="border border-gray-100 bg-white p-6 rounded-lg shadow text-center space-y-2">
              <h3 className="text-3xl font-bold text-[#244D3F]">{friend.goal}</h3>
              <p className="text-sm text-gray-500">Goal (Days)</p>
            </div>
            <div className="border border-gray-100 bg-white p-6 rounded-lg shadow text-center space-y-2">
              <h3 className="text-xl font-bold text-[#244D3F]">{new Date(friend.next_due_date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</h3>
              <p className="text-sm text-gray-500">Next Due Date</p>
            </div>
          </div>

          {/* Goal Card */}
          <div className="border border-gray-100 bg-white p-6 rounded-lg shadow flex justify-between items-center">
            <div>
              <h4 className="font-semibold text-lg text-gray-800">Relationship Goal</h4>
              <p className="text-sm text-gray-500">Contact every {friend.goal} days</p>
            </div>
            <button className="btn btn-sm btn-outline text-[#244D3F] border-[#244D3F]">Edit</button>
          </div>

          {/* Quick Check-In Card */}
          <div className="border border-gray-100 bg-white p-6 rounded-lg shadow space-y-4 text-center pb-8 pt-8">
             <h4 className="font-semibold text-lg text-gray-800 text-left">Quick Check-In</h4>
            <div className="flex gap-4">
              <button onClick={() => handleAction('Call')} className="flex-1 btn bg-white hover:bg-gray-50 border border-gray-200 shadow-sm text-gray-700 h-24 flex flex-col gap-2">
                <FaPhoneAlt size={20} className="text-[#244D3F]" />
                Call
              </button>
              <button onClick={() => handleAction('Text')} className="flex-1 btn bg-white hover:bg-gray-50 border border-gray-200 shadow-sm text-gray-700 h-24 flex flex-col gap-2">
                <FaCommentAlt size={20} className="text-[#244D3F]" />
                Text
              </button>
              <button onClick={() => handleAction('Video')} className="flex-1 btn bg-white hover:bg-gray-50 border border-gray-200 shadow-sm text-gray-700 h-24 flex flex-col gap-2">
                <FaVideo size={24} className="text-[#244D3F]" />
                Video
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendsDetailPage;