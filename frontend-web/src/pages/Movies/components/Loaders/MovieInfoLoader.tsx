import React from 'react';
import ContentLoader from 'react-content-loader';

const MovieInfoLoader = () => (
  <ContentLoader 
    speed={1}
    width="100%"
    height={440}
    backgroundColor="#ecebeb"
    foregroundColor="#d6d2d2"
  >
    <rect x="0" y="0" rx="2" ry="2" width="1200" height="400" /> 
  </ContentLoader>
)

export default MovieInfoLoader;