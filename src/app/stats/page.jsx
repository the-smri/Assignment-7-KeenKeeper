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
            { name: 'Text', value: counts.Text },
            { name: 'Call', value: counts.Call },
            { name: 'Video', value: counts.Video },
        ].filter(item => item.value > 0); // Hide empty slices
    }, [timeline]);

    // Matching Figma screenshot strictly: Text (Purple), Call (Dark Green), Video (Light Green)
    const COLORS = ['#8B5CF6', '#264e3f', '#3ebd6c']; 

    return (
        <div className="container mx-auto px-5 py-10 max-w-6xl">
            <h1 className="text-3xl lg:text-[40px] font-bold text-slate-800 mb-8">Friendship Analytics</h1>
            
            <div className="bg-white shadow-sm border border-gray-100 rounded-lg p-8 flex flex-col items-center justify-center">
                 <h3 className="w-full text-left font-bold text-lg text-[#264e3f] mb-6">By Interaction Type</h3>
                 
                 {data.length === 0 ? (
                     <div className="py-20 text-gray-400">No interaction data available to display.</div>
                 ) : (
                     <div className="w-full h-[450px]">
                         <ResponsiveContainer width="100%" height="100%">
                             <PieChart>
                                 <Pie
                                     data={data}
                                     cx="50%"
                                     cy="50%"
                                     innerRadius={110}
                                     outerRadius={140}
                                     paddingAngle={5}
                                     dataKey="value"
                                     stroke="none"
                                 >
                                     {data.map((entry, index) => (
                                         <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                     ))}
                                 </Pie>
                                 <Tooltip />
                                 <Legend 
                                     verticalAlign="bottom" 
                                     height={36} 
                                     iconType="circle" 
                                     iconSize={8}
                                     wrapperStyle={{ fontSize: '12px', color: '#64748B' }}
                                 />
                             </PieChart>
                         </ResponsiveContainer>
                     </div>
                 )}
            </div>
        </div>
    );
};

export default StatsPage;