import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fallbackSrc?: string;
  onError?: (e: React.SyntheticEvent<HTMLImageElement>) => void;
}

/**
 * OptimizedImage component that automatically serves AVIF format with fallback
 * 
 * Takes a regular image path and automatically:
 * 1. Generates AVIF version path (.jpg → .avif)
 * 2. Uses <picture> element for modern browsers
 * 3. Falls back to original format for older browsers
 * 4. Handles loading errors gracefully
 * 
 * @param src - Original image path (e.g., "/images/photo.jpg")
 * @param alt - Alt text for accessibility
 * @param fallbackSrc - Optional custom fallback image
 * @param className - CSS classes
 * @param onError - Error handler
 * @param ...props - All other img attributes
 */
export function OptimizedImage({ 
  src, 
  alt, 
  fallbackSrc, 
  className, 
  onError,
  ...props 
}: OptimizedImageProps) {
  const [hasError, setHasError] = useState(false);
  const [avifError, setAvifError] = useState(false);

  // Generate AVIF path by replacing extension
  const getAvifSrc = (originalSrc: string): string => {
    return originalSrc.replace(/\.(jpg|jpeg|png|webp)$/i, '.avif');
  };

  // Handle image loading errors
  const handleError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    setHasError(true);
    if (onError) {
      onError(e);
    }
  };

  // Handle AVIF source errors
  const handleAvifError = () => {
    setAvifError(true);
  };

  // If there's an error and we have a fallback, use it
  const currentSrc = hasError && fallbackSrc ? fallbackSrc : src;
  const avifSrc = getAvifSrc(currentSrc);

  return (
    <picture>
      {/* AVIF source for modern browsers - only if no AVIF error */}
      {!avifError && (
        <source 
          srcSet={avifSrc} 
          type="image/avif"
          onError={handleAvifError}
        />
      )}
      
      {/* Fallback image for older browsers or if AVIF fails */}
      <img
        src={currentSrc}
        alt={alt}
        className={cn(className)}
        onError={handleError}
        {...props}
      />
    </picture>
  );
}

/**
 * Hook to get both AVIF and original image sources
 * Useful for when you need the URLs for other purposes
 */
export function useOptimizedImageSources(src: string) {
  const avifSrc = src.replace(/\.(jpg|jpeg|png|webp)$/i, '.avif');
  
  return {
    avif: avifSrc,
    original: src,
    sources: [
      { srcSet: avifSrc, type: 'image/avif' },
      { srcSet: src, type: `image/${src.split('.').pop()?.toLowerCase()}` }
    ]
  };
}