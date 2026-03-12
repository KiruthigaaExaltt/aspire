import React, { type ImgHTMLAttributes } from "react";
import { motion } from "motion/react";

interface PictureSrc {
  img?: { src: string; w?: number; h?: number };
  fallback?: { src: string };
  sources?: Record<string, string>;
}

export interface MyImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string | PictureSrc | any;
  alt: string;
}

export const MyImage = React.forwardRef<HTMLImageElement, MyImageProps>(
  ({ src, alt, className, style, ...props }, ref) => {
    if (!src || typeof src === "string") {
      const imgSrc =
        typeof src === "string"
          ? src
          : (src as any)?.img?.src || (src as any)?.fallback?.src;

      return (
        <img
          ref={ref}
          src={imgSrc}
          alt={alt}
          className={className}
          style={style}
          {...props}
        />
      );
    }

    const sources = src.sources || {};
    const imgSrc = src.img?.src || src.fallback?.src;
    const placeholder = (src as any).placeholder;

    return (
      <picture>
        {Object.entries(sources).map(([format, srcset]) => (
          <source
            key={format}
            srcSet={srcset as string}
            type={`image/${format.replace('jpg', 'jpeg')}`}
          />
        ))}
        <img
          ref={ref}
          src={imgSrc}
          alt={alt}
          className={className}
          style={{
            ...(placeholder ? {
              backgroundImage: `url(${placeholder})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            } : {}),
            ...style
          }}
          {...props}
        />
      </picture>
    );
  }
);

MyImage.displayName = "MyImage";

// Create a motion-enabled MyImage component
export const MotionMyImage = motion(MyImage);
