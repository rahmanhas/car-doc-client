import React from 'react';
import image1 from '../../../../src/assets/images/banner/1.jpg'
import image2 from '../../../../src/assets/images/banner/2.jpg'
import image3 from '../../../../src/assets/images/banner/3.jpg'
import image4 from '../../../../src/assets/images/banner/4.jpg'
import image5 from '../../../../src/assets/images/banner/5.jpg'
import image6 from '../../../../src/assets/images/banner/6.jpg'
const Banner = () => {
    return (
        <div className="carousel w-full  h-[600px]">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={image1} className="w-full rounded-xl" />
                <div className="absolute h-full flex items-center left-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] rounded-xl">
                    <div className='text-white w-1/3 pl-12'>
                        <h2 className='text-6xl font-bold space-y-7'>Lorem ipsum dolor sit amet </h2>
                        <p className='space-y-7 mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, eaque. Sint voluptatum vitae et a doloribus, molestias hic itaque tempora.</p>
                        <div className='flex mt-5'>
                            <button className='btn btn-primary mr-5'>Discover More</button>
                            <button className='btn btn-secondary'>Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={image2} className="w-full" />
                <div className="absolute h-full flex items-center left-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                    <div className='text-white w-1/3 pl-12'>
                        <h2 className='text-6xl font-bold space-y-7'>Lorem ipsum dolor sit amet </h2>
                        <p className='space-y-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, eaque. Sint voluptatum vitae et a doloribus, molestias hic itaque tempora.</p>
                        <div>
                            <button className='btn btn-primary mr-5'>Discover More</button>
                            <button className='btn btn-secondary'>Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={image3} className="w-full" />
                <div className="absolute h-full flex items-center left-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                    <div className='text-white w-1/3 pl-12'>
                        <h2 className='text-6xl font-bold space-y-7'>Lorem ipsum dolor sit amet </h2>
                        <p className='space-y-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, eaque. Sint voluptatum vitae et a doloribus, molestias hic itaque tempora.</p>
                        <div>
                            <button className='btn btn-primary mr-5'>Discover More</button>
                            <button className='btn btn-secondary'>Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={image4} className="w-full" />
                <div className="absolute h-full flex items-center left-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                    <div className='text-white w-1/3 pl-12'>
                        <h2 className='text-6xl font-bold space-y-7'>Lorem ipsum dolor sit amet </h2>
                        <p className='space-y-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, eaque. Sint voluptatum vitae et a doloribus, molestias hic itaque tempora.</p>
                        <div>
                            <button className='btn btn-primary mr-5'>Discover More</button>
                            <button className='btn btn-secondary'>Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;