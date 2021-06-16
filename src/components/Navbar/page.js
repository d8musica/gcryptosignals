import Logo from '../Navbar/favicon.ico'

import {Link} from 'react-router-dom'
const Page = () => {
    return (
        <header className = 'bg-gray-100 text-white py-10 px-4'>
            <div className ='container flex justify-between mx-auto px-4'>
                <Link to="/"><img className="h-7"src={Logo} alt=""/></Link>
                <nav>
                    <ul className="list-reset flex items-center">
                        <li className="ml-4"><Link to="/asset-info" className="text-black font-semibold hover:text-yellow-400">Asset info</Link></li>
                        <li className="ml-4"><Link to="/market-movements" className="text-black font-semibold hover:text-yellow-400">Market movements</Link></li>
                        
                    </ul>
                </nav>
                <Link to="/">
                    <button className='p-2 text-black font-semibold rounded-lg bg-yellow-400'>Sign In</button>
                </Link>
            </div>
        </header>
    );
};

export default Page;
