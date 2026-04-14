'use client';
import { createContext, useContext, useState, useEffect } from 'react';
import { format } from 'date-fns';

const FriendsContext = createContext();

export function FriendsProvider({ children }) {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);
  const [timeline, setTimeline] = useState([]);

  // Fetch Friends Data
  useEffect(() => {
    const fetchFriends = async () => {
      setLoading(true);
      try {
        const res = await fetch('/friends.json');
        const data = await res.json();
        // Simulate network delay for loading animation
        setTimeout(() => {
          setFriends(data);
          setLoading(false);
        }, 800);
      } catch (error) {
        console.error("Failed to fetch friends data", error);
        setLoading(false);
      }
    };
    fetchFriends();
  }, []);

  // Load Timeline from LocalStorage
  useEffect(() => {
    const savedTimeline = localStorage.getItem('timeline');
    if (savedTimeline) {
      setTimeline(JSON.parse(savedTimeline));
    }
  }, []);

  // Add an interaction
  const addInteraction = (friendId, friendName, type) => {
    const newEntry = {
      id: Date.now(),
      friendId,
      type, // 'Call' | 'Text' | 'Video'
      title: `${type} with ${friendName}`,
      date: new Date().toISOString()
    };

    setTimeline(prev => {
      const updated = [newEntry, ...prev];
      localStorage.setItem('timeline', JSON.stringify(updated));
      return updated;
    });

    // Optionally update days_since_contact and status to 'on-track'
    setFriends(prev => prev.map(f => {
      if (f.id === friendId) {
        return {
          ...f,
          days_since_contact: 0,
          status: 'on-track'
        };
      }
      return f;
    }));
  };

  return (
    <FriendsContext.Provider value={{ friends, loading, timeline, addInteraction }}>
      {children}
    </FriendsContext.Provider>
  );
}

export function useFriends() {
  return useContext(FriendsContext);
}
