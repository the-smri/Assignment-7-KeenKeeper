'use client';
import React, { useMemo } from 'react';
import { useFriends } from '@/context/FriendsContext';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const StatsPage = () => {
    const { timeline } = useFriends();

    const data = useMemo(() => {
        const counts = { Call: 0, Text: 0, Video: 0 };
        timeline.forEach(item => {
            if (counts[item.type] !== undefined) {
                counts[item.type]++;
            }
        });
        
        return [
            { name: 'Call', value: counts.Call },
            { name: 'Text', value: counts.Text },
            { name: 'Video', value: counts.Video },
        ].filter(item => item.value > 0); // Hide empty slices
    }, [timeline]);

    const COLORS = ['#6366f1', '#eab308', '#22c55e']; // Matching Figma (purple, yellow, green) approx.

    return (
        <div className="container mx-auto px-5 py-10 max-w-4xl">
            <h1 className="text-4xl font-bold text-[#244D3F] mb-8">Friendship Analytics</h1>
            
            <div className="bg-white border border-gray-100 shadow rounded-lg p-6 flex flex-col items-center justify-center">
                 <h3 className="w-full text-left font-semibold text-lg text-gray-700 mb-6">By Interaction Type</h3>
                 
                 {data.length === 0 ? (
                     <div className="py-20 text-gray-400">No interaction data available to display.</div>
                 ) : (
                     <div className="w-full h-[400px]">
                         <ResponsiveContainer width="100%" height="100%">
                             <PieChart>
                                 <Pie
                                     data={data}
                                     cx="50%"
                                     cy="50%"
                                     innerRadius={80}
                                     outerRadius={120}
                                     paddingAngle={5}
                                     dataKey="value"
                                 >
                                     {data.map((entry, index) => (
                                         <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                     ))}
                                 </Pie>
                                 <Tooltip />
                                 <Legend verticalAlign="bottom" height={36} iconType="circle" />
                             </PieChart>
                         </ResponsiveContainer>
                     </div>
                 )}
            </div>
        </div>
    );
};

export default StatsPage;