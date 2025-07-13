import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { createPortal } from "react-dom";
import { OptimizedImage } from "./optimized-image";

export interface GalleryImage {
  id: number | string;
  src: string;
  alt: string;
  caption?: string;
}

interface ImageGalleryProps extends React.HTMLAttributes<HTMLDivElement> {
  images: GalleryImage[];
  layout?: "masonry" | "grid" | "carousel";
  aspectRatio?: "square" | "video" | "auto";
  lightbox?: boolean;
  padding?: "none" | "sm" | "md" | "lg";
  className?: string;
  gap?: "none" | "sm" | "md" | "lg";
  showCaptions?: boolean;
}

export const ImageGallery = React.forwardRef<HTMLDivElement, ImageGalleryProps>(
  (
    {
      className,
      images,
      layout = "masonry",
      padding = "none",
      gap = "sm",
      aspectRatio = "auto",
      lightbox = true,
      showCaptions = true,
      ...props
    },
    ref
  ) => {
    const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
    const [lightboxIndex, setLightboxIndex] = useState<number>(0);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
      setMounted(true);
      return () => setMounted(false);
    }, []);

    const handleImageClick = (image: GalleryImage, index: number) => {
      if (lightbox) {
        setSelectedImage(image);
        setLightboxIndex(index);
        // Prevent scrolling when lightbox is open
        document.body.style.overflow = "hidden";
      }
    };

    const handleLightboxClose = () => {
      setSelectedImage(null);
      // Re-enable scrolling when lightbox is closed
      document.body.style.overflow = "";
    };

    const nextImage = () => {
      setLightboxIndex((prev) => (prev + 1) % images.length);
      setSelectedImage(images[(lightboxIndex + 1) % images.length]);
    };

    const prevImage = () => {
      setLightboxIndex((prev) => (prev - 1 + images.length) % images.length);
      setSelectedImage(images[(lightboxIndex - 1 + images.length) % images.length]);
    };

    // Add keyboard navigation for lightbox
    useEffect(() => {
      const handleKeyDown = (e: KeyboardEvent) => {
        if (!selectedImage) return;
        
        if (e.key === "ArrowRight") {
          nextImage();
        } else if (e.key === "ArrowLeft") {
          prevImage();
        } else if (e.key === "Escape") {
          handleLightboxClose();
        }
      };
      
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }, [selectedImage, lightboxIndex]);

    const getAspectRatioClass = () => {
      switch (aspectRatio) {
        case "square":
          return "aspect-square";
        case "video":
          return "aspect-video";
        default:
          return "";
      }
    };

    const getPaddingClass = () => {
      switch (padding) {
        case "none":
          return "p-0";
        case "sm":
          return "p-2";
        case "md":
          return "p-4";
        case "lg":
          return "p-6";
        default:
          return "p-0";
      }
    };

    const getGapClass = () => {
      switch (gap) {
        case "none":
          return "gap-0";
        case "sm":
          return "gap-2";
        case "md":
          return "gap-4";
        case "lg":
          return "gap-6";
        default:
          return "gap-2";
      }
    };

    const renderMasonryLayout = () => (
      <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ${getGapClass()}`}>
        {images.map((image, index) => (
          <div 
            key={image.id} 
            className="mb-0 break-inside-avoid"
            onClick={() => handleImageClick(image, index)}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0, margin: "200px" }}
              transition={{ duration: 0.15, delay: index * 0.02 }}
              className="relative overflow-hidden rounded-lg shadow-md cursor-pointer group h-full"
            >
              <OptimizedImage
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-105"
              />
              {showCaptions && image.caption && (
                <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {image.caption}
                </div>
              )}
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-150 flex items-center justify-center">
                <Maximize2 className="text-white w-8 h-8" />
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    );

    const renderGridLayout = () => (
      <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ${getGapClass()}`}>
        {images.map((image, index) => (
          <motion.div
            key={image.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0, margin: "200px" }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className={cn(
              "relative overflow-hidden rounded-lg shadow-md cursor-pointer group",
              getAspectRatioClass()
            )}
            onClick={() => handleImageClick(image, index)}
          >
            <OptimizedImage
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {showCaptions && image.caption && (
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                {image.caption}
              </div>
            )}
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <Maximize2 className="text-white w-8 h-8" />
            </div>
          </motion.div>
        ))}
      </div>
    );

    const renderCarouselLayout = () => (
      <div className="relative">
        <div className={`flex overflow-x-auto snap-x snap-mandatory scrollbar-hide ${getGapClass()} pb-4`}>
          {images.map((image, index) => (
            <div
              key={image.id}
              className={cn(
                "flex-shrink-0 snap-center w-full sm:w-2/3 md:w-1/2 cursor-pointer",
                getAspectRatioClass()
              )}
              onClick={() => handleImageClick(image, index)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0, margin: "200px" }}
                transition={{ duration: 0.15 }}
                className="relative h-full overflow-hidden rounded-lg shadow-md group"
              >
                <OptimizedImage
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {showCaptions && image.caption && (
                  <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-2 text-sm">
                    {image.caption}
                  </div>
                )}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Maximize2 className="text-white w-8 h-8" />
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    );

    const renderLayout = () => {
      switch (layout) {
        case "masonry":
          return renderMasonryLayout();
        case "grid":
          return renderGridLayout();
        case "carousel":
          return renderCarouselLayout();
        default:
          return renderMasonryLayout();
      }
    };

    // Lightbox component to be rendered via portal
    const Lightbox = () => {
      if (!selectedImage) return null;
      
      return (
        <div 
          className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-sm flex items-center justify-center"
          onClick={handleLightboxClose}
          style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gold transition-colors z-[10000]"
            onClick={handleLightboxClose}
            aria-label="Close lightbox"
          >
            <X size={32} />
          </button>

          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gold transition-colors z-[10000] bg-black/50 p-2 rounded-full"
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            aria-label="Previous image"
          >
            <ChevronLeft size={32} />
          </button>

          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gold transition-colors z-[10000] bg-black/50 p-2 rounded-full"
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            aria-label="Next image"
          >
            <ChevronRight size={32} />
          </button>

          <div
            className="relative max-w-full max-h-[80vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
            style={{ zIndex: 10000 }}
          >
            <OptimizedImage
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-[70vh] object-contain"
            />
            {showCaptions && selectedImage.caption && (
              <div className="w-full bg-black text-white p-4 text-center mt-2 z-[10001] relative">
                {selectedImage.caption}
              </div>
            )}
          </div>

          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-[10000]">
            {images.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full ${
                  index === lightboxIndex ? "bg-gold" : "bg-white/50"
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIndex(index);
                  setSelectedImage(images[index]);
                }}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      );
    };

    return (
      <>
        <div
          ref={ref}
          className={cn("w-full relative", getPaddingClass(), className)}
          {...props}
        >
          {renderLayout()}
        </div>
        
        {/* Render lightbox with portal to avoid stacking context issues */}
        {mounted && selectedImage && createPortal(<Lightbox />, document.body)}
      </>
    );
  }
);

ImageGallery.displayName = "ImageGallery";
