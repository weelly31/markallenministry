
import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0a1022] py-8 text-center">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-white font-bold text-lg tracking-wider mb-2">
          <span className="text-[#d4a853]">Mark Allen</span> U. Andrade
        </p>
        <p className="text-gray-500 text-sm">
          The Living Saviour Christian Fellowship — Binangonan, Rizal
        </p>
        <div className="mt-4 flex items-center justify-center gap-1 text-gray-600 text-xs">
          <span>Serving with</span>
          <Heart className="w-3 h-3 text-[#d4a853] fill-[#d4a853]" />
          <span>for God's glory</span>
        </div>
      </div>
    </footer>
  );
}