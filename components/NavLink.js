import Link from 'next/link';
import { useRouter } from 'next/router';

const NavLink = ({ href, children }) => {
    const router = useRouter();
    const isActive = router.pathname === href;
    return (
        <li>
            <Link href={href} className={`rounded-md px-4 transition transition-color duration-500 hover:bg-orange-700 ${isActive ? 'bg-orange-500' : ''}`}>
                {children}
            </Link>
        </li>
    );
};

export default NavLink;