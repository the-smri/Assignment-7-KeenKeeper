'use client';
import React, { useState } from 'react';
import { useFriends } from '@/context/FriendsContext';
import { FaPhoneAlt, FaCommentAlt, FaVideo } from 'react-icons/fa';

const TimelinePage = () => {
    const { timeline } = useFriends();
    const [filter, setFilter] = useState('All');

    const filteredTimeline = filter === 'All' ? timeline : timeline.filter(item => item.type === filter);

    const getIcon = (type) => {
        switch (type) {
            case 'Call': return <FaPhoneAlt size={20} className="text-gray-500" />;
            case 'Text': return <FaCommentAlt size={20} className="text-gray-500" />;
            case 'Video': return <FaVideo size={24} className="text-gray-500" />;
            default: return null;
        }
    };

    return (
        <div className="container mx-auto px-5 py-10 max-w-4xl">
            <h1 className="text-4xl font-bold text-center text-[#244D3F] mb-8">Timeline</h1>

            <div className="mb-6 flex justify-end">
                <select 
                    className="select select-bordered w-full max-w-xs"
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                >
                    <option value="All">Filter by Interaction</option>
                    <option value="Call">Call</option>
                    <option value="Text">Text</option>
                    <option value="Video">Video</option>
                </select>
            </div>

            <div className="space-y-4">
                {filteredTimeline.length === 0 ? (
                    <div className="text-center py-10 text-gray-500 bg-white border border-gray-100 shadow rounded-lg">
                        No interactions found.
                    </div>
                ) : (
                    filteredTimeline.map(item => (
                        <div key={item.id} className="flex items-center gap-4 bg-white border border-gray-100 p-4 shadow rounded-lg">
                            <div className="bg-yellow-100 p-3 rounded-full flex items-center justify-center">
                                {getIcon(item.type)}
                            </div>
                            <div className="flex-1">
                                <h3 className="font-semibold text-gray-800">{item.title}</h3>
                                <p className="text-sm text-gray-500">{new Date(item.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' })}</p>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default TimelinePage;