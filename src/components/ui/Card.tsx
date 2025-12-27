"use client";

import { cn } from "@/lib/utils";
import { HTMLAttributes, forwardRef } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "elevated" | "glass";
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = "default", children, ...props }, ref) => {
    const variants = {
      default: "bg-white border border-gray-100",
      elevated: "bg-white shadow-xl shadow-black/5",
      glass: "bg-white/10 backdrop-blur-lg border border-white/20"
    };

    return (
      <div
        ref={ref}
        className={cn(
          "rounded-2xl overflow-hidden transition-all duration-500",
          variants[variant],
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

interface CardImageProps extends HTMLAttributes<HTMLDivElement> {
  src: string;
  alt: string;
  aspectRatio?: "video" | "square" | "wide";
}

export const CardImage = forwardRef<HTMLDivElement, CardImageProps>(
  ({ className, src, alt, aspectRatio = "video", ...props }, ref) => {
    const aspectRatios = {
      video: "aspect-video",
      square: "aspect-square",
      wide: "aspect-[16/9]"
    };

    return (
      <div
        ref={ref}
        className={cn("relative overflow-hidden", aspectRatios[aspectRatio], className)}
        {...props}
      >
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
          style={{ backgroundImage: `url(${src})` }}
          role="img"
          aria-label={alt}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>
    );
  }
);

CardImage.displayName = "CardImage";

interface CardContentProps extends HTMLAttributes<HTMLDivElement> {}

export const CardContent = forwardRef<HTMLDivElement, CardContentProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("p-6", className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

CardContent.displayName = "CardContent";

export default Card;
