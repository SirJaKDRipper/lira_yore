import { Home as HomeLayout } from '@/layouts/Home';
import { NavBar } from '@/components/NavBar';
import { Footer } from '@/components/Footer';

export default function Home() {
    return (
        <div>
            <NavBar />
            <HomeLayout />
            <Footer/>
        </div>
    );
};

