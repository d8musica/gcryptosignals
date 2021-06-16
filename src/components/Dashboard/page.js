import { useDispatch } from "react-redux";
import { signOut } from "../../store/actions/authActions";


const Page = () => {
    const dispatch = useDispatch();
    const handleLogout = () =>{
      dispatch(signOut())
    }

    return (
        <>
        <main className="pb-10 mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">@d8musica's</span>{' '}
                <span className="block text-yellow-400 xl:inline">Crypto trading tool</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Product developed for @d8musica at Globant React.js Bootcamp.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="/"
                    onClick={handleLogout}
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-black bg-yellow-400 hover:bg-yellow-200 md:py-4 md:text-lg md:px-10"
                  >
                    Log out
                  </a>
                </div>
                
              </div>
            </div>
          </main>
        </>
    );
};

export default Page;