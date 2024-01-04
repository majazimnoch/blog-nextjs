import Image, { ImageLoader } from 'next/image';
import React from 'react';

interface ContentfulImageProps {
    src: string;
    width: number;
    quality?: number;
    alt: string;
}

const contentfulLoader: ImageLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`;
};

const ContentfulImage: React.FC<ContentfulImageProps> = ({ alt, ...props }) => {
    return <Image loader={contentfulLoader} alt={alt} {...props} />
}


export default ContentfulImage