"use client";
import React, { useState } from "react";

interface HoverableCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function HoverableCard({
  children,
  className,
}: HoverableCardProps) {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCursorPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const gradientStyle = isHovered
    ? {
        background: `radial-gradient(circle at ${cursorPos.x}px ${cursorPos.y}px, rgba(255, 100, 200, 0.12), rgba(156, 160, 255, 0.12))`,
      }
    : {};

  return (
    <div
      className={`relative flex group/link group lg:hover:!opacity-100 lg:group-hover/list:opacity-50 ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        style={gradientStyle}
        className="absolute -inset-x-4 -inset-y-4 z-0 p-4 transition-all bg-white/7 shadow-md backdrop-blur rounded-md transition motion-reduce:transition-none lg:-inset-x-6"
      ></div>
      {children}
    </div>
  );
}

// interface CenteredIconCardProps {
//   icon: React.ReactNode;
//   title: string;
//   body: string;
// }

// export function CenteredIconCard({ icon, title, body }: CenteredIconCardProps) {
//   return (
//     <HoverableCard className="mx-2">
//       <div className={`relative items-center justify-center`}>
//         <div className="absolute top-0 left-1/2 pb-8 transform -translate-x-1/2 translate-y-1/8 w-12 h-12 flex items-center justify-center">
//           {icon}
//         </div>
//         <div>
//           <h2 className="text-xl font-bold text-white text-center mt-8">
//             {title}
//           </h2>
//         </div>
//         <div>
//           <p className="text-purple-50/90 text-center text-sm whitespace-pre-line">
//             {body}
//           </p>
//         </div>
//       </div>
//     </HoverableCard>
//   );
// }

// export const CenteredIconCardRow: React.FC<{
//   props: CenteredIconCardProps[];
// }> = ({ props }) => {
//   return (
//     <div className="flex flex-col gap-10 sm:flex-row">
//       {props.map((prop, index) => (
//         <CenteredIconCard key={index} {...prop} />
//       ))}
//     </div>
//   );
// };
