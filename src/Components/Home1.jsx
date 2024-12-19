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
            <div className='bg-blue-600 h-[150px] w-full text-4xl text-white font-bold'>
                <h1 className='w-[700px] m-auto pt-10'></h1>
            </div>
            <div className='flex space-x-4 m-2 text-2xl'>
                <h1>NEWS UPDATE</h1>
                <p>{formattedDate}</p>
            </div>

            <div className='grid grid-cols-4 gap-5'>
                {news.length > 0 ? (
                    news.map((content, index) => (
                        <div key={index}>
                            <div className='w-80 p-2 bg-gray-100 rounded-xl ml-2 z-50 shadow-xl'>
                                <img src={content.imageUrl || "/Images/logo.webp"} alt="News" className='h-60 w-full' />
                                <div className='flex space-x-3 text-gray-700'>
                                    <p>{content.update_time + " ago"}</p>
                                    <p>Comments</p>
                                </div>
                                <h1 className='text-xl'>{content.heading}</h1>
                                <p className='text-justify'>{content.first_para}</p>
                                <hr />
                                <div className='flex space-x-16 mt-2'>
                                    <p>Author: {content.author_name || "Unknown"}</p>
                                    <button className='bg-[#195A94] text-white p-2 rounded-xl'>Read more →</button>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>Loading news...</p>
                )}
            </div>
        </>
    );
}

export default Home1;
