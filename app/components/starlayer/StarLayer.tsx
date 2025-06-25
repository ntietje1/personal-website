import './star1_sprite_sheet.css';
import './star2_sprite_sheet.css';

interface Star {
  id: number;
  type: 'star1' | 'star2';
  x: number;
  y: number;
  animationDelay: number;
  animationDuration: number;
}

// Server-side star generation - runs at build time
function generateStars(): Star[] {
  const stars: Star[] = [];
  const totalStars = 250;
  
  for (let i = 0; i < totalStars; i++) {
    const starType = Math.random() < 0.5 ? 'star1' : 'star2';
    
    // Use viewport-relative positioning that should work across browsers
    const x = Math.random() * 100; // 0-100% horizontal
    const y = Math.random() * 100; // 0-100% vertical (relative to the layer's height)
    
    stars.push({
      id: i,
      type: starType,
      x: x,
      y: y,
      animationDelay: 1 + Math.random(),
      animationDuration: 5 + Math.random() * 2,
    });
  }
  
  return stars;
}

// Generate stars at module level for server-side rendering
const stars = generateStars();

export default function StarLayer({ className }: { className?: string }) {
  return (
    <div className={`absolute inset-0 pointer-events-none z-0 ${className}`}>
      {stars.map((star) => (
        <div
          key={star.id}
          className={`absolute ${
            star.type === 'star1' ? 'star1-sprite' : 'star2-sprite'
          }`}
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`, // Use percentage positioning relative to the layer
            animation: `${
              star.type === 'star1' ? 'star1-anim' : 'star2-anim'
            } ${star.animationDuration}s steps(${star.type === 'star1' ? 8 : 7}, end) infinite`,
            animationDelay: `${star.animationDelay}s`,
          }}
        />
      ))}
    </div>
  );
}
