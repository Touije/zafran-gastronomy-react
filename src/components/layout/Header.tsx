
import { Link } from 'react-router-dom';
import { Navigation } from '@/components/layout/Navigation';
import zafranLogo from '@/assets/zafran-logo.png';

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container-custom flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img src={zafranLogo} alt="Zafran" className="h-10 w-auto mr-2" />
            <span className="font-serif text-zafran-500 text-2xl font-bold">Zafran</span>
            <span className="font-arabic text-spice-600 text-sm ml-1 mt-3">زعفران</span>
          </Link>
        </div>
        
        <Navigation />
      </div>
    </header>
  );
}
