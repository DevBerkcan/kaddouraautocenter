"use client";

import { cn } from "@/lib/utils";
import { HTMLAttributes, forwardRef } from "react";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  variant?: "default" | "dark" | "accent";
  size?: "sm" | "md" | "lg" | "full";
}

const Section = forwardRef<HTMLElement, SectionProps>(
  ({ className, variant = "default", size = "lg", children, ...props }, ref) => {
    const variants = {
      default: "bg-[#fafafa]",
      dark: "bg-[#1a1a1a] text-white",
      accent: "bg-gradient-to-br from-[#c9a227]/10 to-[#c9a227]/5"
    };
    
    const sizes = {
      sm: "py-12 md:py-16",
      md: "py-16 md:py-24",
      lg: "py-20 md:py-32",
      full: "min-h-screen"
    };

    return (
      <section
        ref={ref}
        className={cn(variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </section>
    );
  }
);

Section.displayName = "Section";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg" | "xl" | "full";
}

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, size = "lg", children, ...props }, ref) => {
    const sizes = {
      sm: "max-w-3xl",
      md: "max-w-5xl",
      lg: "max-w-7xl",
      xl: "max-w-[1400px]",
      full: "max-w-full"
    };

    return (
      <div
        ref={ref}
        className={cn("mx-auto px-4 md:px-6 lg:px-8", sizes[size], className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Container.displayName = "Container";

interface SectionHeaderProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
}

export const SectionHeader = forwardRef<HTMLDivElement, SectionHeaderProps>(
  ({ className, title, subtitle, align = "center", ...props }, ref) => {
    const alignments = {
      left: "text-left",
      center: "text-center mx-auto",
      right: "text-right ml-auto"
    };

    return (
      <div
        ref={ref}
        className={cn("max-w-3xl mb-12 md:mb-16", alignments[align], className)}
        {...props}
      >
        <h2 
          className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-wide mb-4"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {title}
        </h2>
        {subtitle && (
          <p className="text-lg md:text-xl text-[#6b6b6b]">
            {subtitle}
          </p>
        )}
      </div>
    );
  }
);

SectionHeader.displayName = "SectionHeader";

export default Section;
