export function PlayfulShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Top right blob */}
      <svg
        className="absolute -top-20 -right-20 w-64 h-64 text-primary/10"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="currentColor"
          d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.5,90,-16.3,88.5,-0.9C87,14.5,81.4,29,73.1,41.7C64.8,54.4,53.8,65.3,40.7,73.5C27.6,81.7,12.3,87.2,-2.2,90.5C-16.7,93.8,-33.4,94.9,-47.3,88.4C-61.2,81.9,-72.3,67.8,-79.5,52.2C-86.7,36.6,-90,19.3,-89.2,2.5C-88.4,-14.3,-83.5,-28.7,-75.1,-40.8C-66.7,-52.9,-54.8,-62.7,-41.5,-70.4C-28.2,-78.1,-14.1,-83.7,0.6,-84.7C15.3,-85.7,30.6,-83.6,44.7,-76.4Z"
          transform="translate(100 100)"
        />
      </svg>

      {/* Bottom left blob */}
      <svg
        className="absolute -bottom-32 -left-32 w-80 h-80 text-accent/10"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="currentColor"
          d="M39.9,-65.7C51.1,-60.3,59,-48.7,67.3,-36.1C75.6,-23.5,84.3,-9.8,84.5,3.9C84.7,17.6,76.4,31.3,66.4,42.5C56.4,53.7,44.7,62.4,31.8,68.8C18.9,75.2,4.7,79.3,-9.8,79.5C-24.3,79.7,-39.1,76,-51.1,68C-63.1,60,-72.3,47.7,-77.6,33.8C-82.9,19.9,-84.3,4.4,-81.4,-9.8C-78.5,-24,-71.3,-36.9,-61.2,-47.4C-51.1,-57.9,-38.1,-66,-25,-71.5C-11.9,-77,-5.9,-79.9,3.8,-85.8C13.5,-91.7,27,-93.1,39.9,-65.7Z"
          transform="translate(100 100)"
        />
      </svg>

      {/* Center right circles */}
      <div className="absolute top-1/2 right-10 w-4 h-4 rounded-full bg-primary/20" />
      <div className="absolute top-1/2 right-20 mt-10 w-6 h-6 rounded-full bg-accent/20" />
      <div className="absolute top-1/3 right-16 w-3 h-3 rounded-full bg-secondary/30" />
    </div>
  )
}

export function WaveDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`w-full overflow-hidden ${className}`}>
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="w-full h-16 md:h-24"
      >
        <path
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
          className="fill-current"
        />
      </svg>
    </div>
  )
}

export function DotsPattern({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`absolute ${className}`}
      width="100"
      height="100"
      viewBox="0 0 100 100"
    >
      {[...Array(5)].map((_, row) =>
        [...Array(5)].map((_, col) => (
          <circle
            key={`${row}-${col}`}
            cx={10 + col * 20}
            cy={10 + row * 20}
            r="3"
            className="fill-current text-primary/20"
          />
        ))
      )}
    </svg>
  )
}

export function ChildrenIllustration({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Sun */}
      <circle cx="350" cy="50" r="30" className="fill-primary/30" />
      <circle cx="350" cy="50" r="20" className="fill-primary/50" />
      
      {/* Cloud */}
      <ellipse cx="80" cy="40" rx="30" ry="20" className="fill-secondary/30" />
      <ellipse cx="100" cy="35" rx="25" ry="18" className="fill-secondary/30" />
      <ellipse cx="60" cy="35" rx="20" ry="15" className="fill-secondary/30" />
      
      {/* Another cloud */}
      <ellipse cx="250" cy="60" rx="25" ry="15" className="fill-secondary/20" />
      <ellipse cx="270" cy="55" rx="20" ry="12" className="fill-secondary/20" />
      
      {/* Ground */}
      <ellipse cx="200" cy="280" rx="180" ry="30" className="fill-accent/20" />
      
      {/* Tree */}
      <rect x="50" y="180" width="15" height="80" className="fill-secondary/60" />
      <circle cx="57" cy="160" r="40" className="fill-accent/40" />
      <circle cx="40" cy="150" r="30" className="fill-accent/30" />
      <circle cx="75" cy="145" r="35" className="fill-accent/35" />
      
      {/* Building blocks */}
      <rect x="300" y="220" width="40" height="40" className="fill-primary/40" rx="4" />
      <rect x="310" y="190" width="30" height="30" className="fill-accent/40" rx="4" />
      <rect x="295" y="195" width="25" height="25" className="fill-secondary/40" rx="4" />
      
      {/* ABC letters floating */}
      <text x="150" y="100" className="fill-primary/30 text-4xl font-bold">A</text>
      <text x="200" y="80" className="fill-accent/30 text-3xl font-bold">B</text>
      <text x="240" y="110" className="fill-secondary/30 text-4xl font-bold">C</text>
      
      {/* Stars */}
      <path d="M120 130 L122 136 L128 136 L123 140 L125 146 L120 142 L115 146 L117 140 L112 136 L118 136 Z" className="fill-primary/30" />
      <path d="M280 140 L281.5 144 L286 144 L282.5 147 L284 151 L280 148 L276 151 L277.5 147 L274 144 L278.5 144 Z" className="fill-accent/30" />
    </svg>
  )
}
