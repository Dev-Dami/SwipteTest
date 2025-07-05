import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const clips = [
  { id: 1, text: '[WIP] Clip Placeholder 1' },
  { id: 2, text: '[WIP] Clip Placeholder 2' },
  { id: 3, text: '[WIP] Clip Placeholder 3' },
];

export default function App() {
  useEffect(() => {
    AOS.init({ duration: 600, once: true });
  }, []);

  return (
    <div className="h-screen w-full overflow-y-scroll snap-y snap-mandatory bg-black text-white">
      {clips.map((clip) => (
        <div
          key={clip.id}
          className="relative snap-start h-screen flex items-center justify-center"
          data-aos="fade-up"
        >
          <div className="w-full h-full bg-zinc-800 flex items-center justify-center">
            <p className="text-2xl font-semibold opacity-40">{clip.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
