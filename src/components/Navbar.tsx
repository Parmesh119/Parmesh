import { Download, Grip, Search } from 'lucide-react';
import { FC } from 'react';
import Button from './ui/Button';
import SearchBar from './navbar/SearchBar';

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
    return (
        <nav className="flex sticky top-0 z-20 bg-body p-5 text-info justify-between">
            <SearchBar />
            <div className="flex items-center gap-5">
                <Button>
                    Download CV <Download size={18} />
                </Button>
                <Grip className="cursor-pointer hover:text-primary transition-colors" />
            </div>
        </nav>
    );
};

export default Navbar;
