import React, { use, useRef } from 'react'

// Import Images
import disney from './../assets/images/disney.png';
import pixar from './../assets/images/pixar.png';
import marvel from './../assets/images/marvel.png';
import starwars from './../assets/images/starwar.png';
import natgeo from './../assets/images/nationalG.png';

// Import Videos
import disneyVid from './../assets/videos/disney.mp4';
import pixarVid from './../assets/videos/pixar.mp4';
import marvelVid from './../assets/videos/marvel.mp4';
import starwarsVid from './../assets/videos/star-wars.mp4';
import natgeoVid from './../assets/videos/national-geographic.mp4';

function ProductionHouse() {

    // List that contains all the images and videos
    const productionHouseList = [
        { id: 1, image: disney, video: disneyVid },
        { id: 2, image: pixar, video: pixarVid },
        { id: 3, image: marvel, video: marvelVid },
        { id: 4, image: starwars, video: starwarsVid },
        { id: 5, image: natgeo, video: natgeoVid },
    ]

    // refs container for all video elements
    const videoRefs = useRef([]);

    const handleEnter = (index) => {
        const vid = videoRefs.current[index];
        if (!vid) return;

        // if src not set, set it now so browser can fetch & play
        if (!vid.src) {
            vid.src = productionHouseList[index].video;
            // calling load() is optional, but setting src triggers load on play()
            vid.load();
        }

        // try play; catch promise rejection silently
        vid.play().catch(() => {});
    }

    const handleLeave = (index) => {
        const vid = videoRefs.current[index];
        if (!vid) return;

        // pause and remove src to stop network activity and free memory
        vid.pause();

        // remove src only if you want to fully free resources
        vid.removeAttribute('src');
        vid.load();
    }

  return (
    <div className='flex gap-2 md:gap-5 p-2 px-5 md:px-16'>
        {productionHouseList.map((item, idx) => (
            <div 
              key={item.id} 
              className='relative overflow-hidden border-2 border-gray-600 rounded-lg hover:scale-110 
              transition-all duration-300 ease-in cursor-pointer shadow-xl shadow-black'
              onMouseEnter = {() => handleEnter(idx)}
              onMouseLeave={() => handleLeave(idx)}
              onFocus={() => handleEnter(idx)}
              onBlur={() => handleLeave(idx)}
            >
                {/* Video: no src initially, preload none. Use absolute + object-cover */}
                <video
                  ref = {(el) => (videoRefs.current[idx] = el)} 
                  preload='none' 
                  loop 
                  muted 
                  playsInline 
                  disablePictureInPicture 
                  className='absolute top-0 left-0 w-full h-full rounded-md z-0 opacity-0 hover:opacity-50' 
                />
                
                {/* Image as poster */}
                <img src={item.image} className='w-full h-full object-contain md:object-scale-down z-1' />
            </div>
        ))}
    </div>
  )
}

export default ProductionHouse