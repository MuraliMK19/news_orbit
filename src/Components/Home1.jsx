import axios from 'axios';
import React, { useEffect, useState } from 'react'
import api from '../api';


function Home1() {

    const currentDate = new Date();
    console.log(currentDate);
    const formattedDate = currentDate.toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
    });
    const [news, setNews] = useState([])
    useEffect(() => {
        const fetchnews = async () => {
            try {
                const response = await api.get("/get");
                setNews(response.data)
                console.log(response.data)
            } catch (err) {
                console.log
                    ("Failed to load news", err);
            }
        }
        fetchnews();
    }, [])

    console.log(news);

    return (
        <>
            {news.map((content, index) => (
                <div key={index}>
                    < div className='bg-blue-600 h-[150px] w-full text-4xl text-white font-bold' >
                        <h1 className='w-[700px] m-auto pt-10'></h1>
                    </div >
                    <div className='flex space-x-4 m-2 text-2xl'>
                        <h1>NEWS UPDATE</h1>
                        <p>{formattedDate}</p>
                    </div>
                    <div className='w-1/4 p-5 bg-gray-100 rounded-xl ml-2 z-50 shadow-xl'>
                        <img src="/Images/logo.webp" alt="loading" className='h-60 w-full' />
                        <div className='flex space-x-5 text-gray-700'>
                            <p>{ }</p>
                            <p>Comments</p>
                        </div>
                        <h1 className='text-xl'>{ }</h1>
                        <p className='text-justify'>Get inspired by this revived W.H. Auden’s Hymn to the United Nations. "Let music for peace Be the paradigm, For peace means to change At the right time, As the World-Clock, Goes Tick and Tock.So may the story Of our human city Presently move
                        </p>
                        <hr />
                        <div className='flex space-x-16 mt-2'>
                            <p>Author: Charuthathan</p>
                            <button className='bg-[#195A94] text-white p-2 rounded-xl'>Read more →</button>
                        </div>
                    </div>
                </div>
            ))
            }
        </>
    );
}

export default Home1