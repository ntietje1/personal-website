interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "full";
}

export function Container({
  children,
  className = "",
  maxWidth = "lg",
}: ContainerProps) {
  const maxWidthClasses = {
    sm: "max-w-2xl",
    md: "max-w-3xl",
    lg: "max-w-4xl",
    xl: "max-w-7xl",
    "2xl": "max-w-8xl",
    full: "max-w-full",
  };

  return (
    <div className="px-6 md:px-12 lg:px-24">
      <div className={`mx-auto ${maxWidthClasses[maxWidth]} ${className}`}>
        {children}
      </div>
    </div>
  );
}
