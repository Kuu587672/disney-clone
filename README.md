# Disney Clone Project (using ReactJS)

This is a project for practice purposes.</br>
It not only focuses on the front-end of the website but also the backend.</br>
All the data for the movies will be fetched dynamically using APIs.</br>
It will be fully responsive for all devices.</br>

## Tech Stack

1. ReactJS</br>
2. Vite</br>
3. TailwindCSS</br>
4. React Icons</br>

## Folder Structure

disney-clone/</br>
│── public/</br>
│── src/</br>
│   ├── assets/</br>
│   │   └── images/</br>
│   ├── components/</br>
│   │   └── Header.jsx</br>
│   │   └── HeaderItem.jsx</br>
│   ├── App.jsx</br>
│   ├── main.jsx</br>
│── package.json</br>
│── README.md</br>

## Version-0

1. Just started a react project named "disney-clone".
2. Created the header section, which contains the logo, navigation(icons used from react-icons), and a dummy profile picture.
3. The navigation tabs when hovered turns grey and also an underline appears from left to right in a smooth manner.

## Version-0.1

1. Added full responsive behavior to the Header component.
2. On medium screens (md:) only 3 primary icons are displayed for a cleaner layout.
3. Implemented a 3-dots toggle button (HiDotsVertical) that reveals the remaining menu items.
4. Toggle menu now supports:</br>
&emsp;1. Smooth appearance/disappearance</br>
&emsp;2. Intuitive mobile/tablet navigation</br>
&emsp;3. Consistent icon + text styling

## Version-0.2

1. Implemented a fully functional Trending Movies Slider using TMDB API data.
2. Added left and right navigation arrows using react-icons (HiChevronLeft, HiChevronRight).
3. Enabled horizontal scroll with smooth animation.
4. Used useRef() to directly control the slider DOM element.
5. Added hover border animation on movie posters.

## Version-0.3

### Genre-Based Movie Sections Added

1. Implemented MovieList component for each genre.
2. Fetching movies dynamically using TMDB’s getMovieByGenreId.
3. Integrated movie posters with smooth horizontal scrolling.
4. Added reusable MovieCard component.

### Smart Horizontal Slider (for genre rows)

1. Added left/right navigation arrows.
2. Smooth scrolling with automatic calculated scroll distance.
3. Improved UX with scroll-snap-like behavior.
4. Fully responsive for mobile and desktop.

### Bug Fixes

1. Fixed repeated TMDB API calls.
2. Fixed duplicate key warnings in lists.
3. Cleaned broken image cases (null backdrop/poster).
4. Production house video hover behavior fixed.

### UI Enhancements

1. Improved hover effects on movie posters.
2. Center-aligned arrow controls for better UX.
3. Cleaner spacing and visuals in genre rows.

## Version-0.4

1. Added separate sizes for the banner and the poster.
2. Basic UI improvements.
3. Basic bug hunting.

## Version-0.5

### Loading States

1. Added section-level loaders for movie lists and sliders.
2. Loader appears while:</br>
&emsp;1. Trending movies are being fetched.</br>
&emsp;2. Movies by genre are loading.
3. Loaders are properly centered and responsive.


### Footer

1. Added a clean, minimal footer section
2. Displays project information and attribution
3. Matches the overall Disney-style dark theme
4. Responsive across all screen sizes

## Version-0.6

### Play Movie Page

1. Added a dedicated Play Movie page to watch trailers.
2. Integrated YouTube iframe for trailer playback using TMDB video data.
3. Trailer autoplay starts muted for better user experience.

### Smart Video Loading Handling

1. Implemented a loader overlay while the trailer iframe is loading.
2. Loader is positioned absolutely over the video area to prevent layout shifts.
3. Video is rendered immediately once trailer data is available.
4. Loader disappears automatically when the iframe onLoad event fires.

### Error-Safe Rendering

1. Video iframe renders only when a valid trailerKey exists.
2. Loader fallback ensures UI does not break if the video takes time to load.
3. Component safely handles missing or delayed trailer data.