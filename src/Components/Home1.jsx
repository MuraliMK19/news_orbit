import axios from 'axios';
import React, { useEffect, useState } from 'react';
import api from '../api';

function Home1() {
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
    });

    const [news, setNews] = useState([]);

    useEffect(() => {
        const fetchnews = async () => {
            try {
                const response = await api.get("/get");
                setNews(response.data);  // Save the fetched news data in state
                console.log(response.data);
            } catch (err) {
                console.log("Failed to load news", err);
            }
        };
        fetchnews();
    }, []);

    return (
        <>
            {news.length > 0 ? (
                news.map((content, index) => (
                    <div key={index}>
                        <div className='bg-blue-600 h-[150px] w-full text-4xl text-white font-bold'>
                            <h1 className='w-[700px] m-auto pt-10'>{content.title}</h1>
                        </div>
                        <div className='flex space-x-4 m-2 text-2xl'>
                            <h1>NEWS UPDATE</h1>
                            <p>{formattedDate}</p>
                        </div>
                        <div className='w-1/4 p-5 bg-gray-100 rounded-xl ml-2 z-50 shadow-xl'>
                            <img src={content.imageUrl || "/Images/logo.webp"} alt="News" className='h-60 w-full' />
                            <div className='flex space-x-5 text-gray-700'>
                                <p>{/* Placeholder for any extra content if needed */}</p>
                                <p>Comments</p>
                            </div>
                            <h1 className='text-xl'>{content.title}</h1>
                            <p className='text-justify'>{content.content}</p>
                            <hr />
                            <div className='flex space-x-16 mt-2'>
                                <p>Author: {content.author || "Unknown"}</p>
                                <button className='bg-[#195A94] text-white p-2 rounded-xl'>Read more →</button>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <p>Loading news...</p>
            )}
        </>
    );
}

export default Home1;
