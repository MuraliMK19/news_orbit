import React from 'react'

function News() {
    const news = [{
        heading: "Parliament Winter Session 2024 Day 16 LIVE: INDIA bloc will relocate the family of 2020 Hathras victim, Rahul Gandhi says",
        first_image: "/Images/Rahul_Gandhi.jpg",
        update_time: "12 hours ago",
        author_name: "By Charuthathan",
        read_time: "5 min read",
        first_para: "The Defence Minister initiated a two-day debate on the Constitution in the Lok Sabha with a sharp focus on its historical significance and its role in shaping the nation’s governance and global standing. Rajnath Singh spoke on politicising the Constitution’s legacy and criticised the Congress party’s efforts to attribute the creation of India’s Constitution solely to a particular political party. The debate also witnessed a fiery speech from Congress MP Priyanka Gandhi Vadra. In her maiden speech in Lok Sabha, Vadra said that the BJP would’ve changed the Constitution had it not been for the 2024 Lok Sabha elections. She said the Constitution is a protective shield of justice, unity and freedom of expression and accused the BJP-led Centre of trying to break in the past 10 years. She also spoke about the “growing monopoly” of the Adani Group, atrocities on women, incidents of violence in Sambhal and Manipur and the demand for a nationwide caste census.",
        second_image: "/Images/mkm.jpeg",
        credits: "Photo credit: Special arrangement",
        second_para: "Minister Rijiju says that people should be careful about what they say about India because it affects the country’s global image. He also says that there is no discrimination against minorities in India. He quotes a report to highlight discrimination against Muslims in countries like France, Spain, and Indonesia to say that minorities in India are treated better, which is why minorities from neighbouring countries seek refuge here."
    }]
    return (
        <>
            {news.map((content, index) => (
                <div key={index}>
                    < div className='bg-blue-600 h-[350px] w-full text-4xl text-white font-bold' >
                        <h1 className='w-[700px] m-auto pt-10'>{content.heading}</h1>
                    </div >
                    <img src={content.first_image} alt="loading" className='mt-[-120px] m-auto' />
                    <div className='flex space-x-5 justify-start ml-40 p-5'>
                        <p>{content.update_time}</p>
                        <p>{content.author_name}</p>
                        <p>{content.read_time}</p>
                    </div>
                    <div className='w-2/4 ml-40'>
                        <p className='text-justify text-xl font-georgia leading-9'>{content.second_para}</p>
                    </div>
                    <div>
                        <img src={content.second_image} alt="loading..." className='w-1/3 ml-40 p-5' />
                        <p className='text-left ml-40 p-2 border-l-2 border-red-500'>{content.credits}</p>
                    </div>
                    <div className='w-2/4 ml-40'>
                        <p className='text-justify text-xl font-georgia leading-9'>{content.second_para}</p>
                    </div>
                </div>
            ))
            }
        </>
    );
}

export default News