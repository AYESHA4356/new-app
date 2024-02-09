"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image';

export default function Home() {
  const [data, setData] = useState([]); // Corrected to be an array
  const [id, setId] = useState('');
  const [name, setName] = useState('');

  const create = async () => {
    const sendData = await axios.post('https://6596eac56bb4ec36ca039199.mockapi.io/api/user', {
      id: id,
      name: name,
    });
    console.log('Response create data:', sendData.data);
  };

  async function fetchData() {
    try {
      const response = await axios.get('https://6596eac56bb4ec36ca039199.mockapi.io/api/user');
      const users = response.data;
      setData(users);
    } catch (error) {
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div>
        <h1>Create data</h1>
        <input type="number" className="border" name="id" onChange={(e) => setId(e.target.value)} />
        <input type="text" className="border" name="name" onChange={(e) => setName(e.target.value)} />
        {name}
        <button className="border" onClick={create}>
          Create
        </button>
      </div>

      {data &&
        data.map((user) => (
          <div className="flex gap-5 mb-5" key={user.id}>
            <h1>{user.id}</h1>
            <img src={user.avatar} alt="Profile" width="100px" height="100px" />
            <h1>{user.name}</h1>
          </div>
        ))}
    </>
  );
}
