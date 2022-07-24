import './style.css';
import Logo from '../Logo/Logo';
import SearchBar from '../SearchBar/SearchBar';

const Hero = () => {
    return (
        <>
            <div className='px-4 py-5 mt-0 mb-5 text-center' id='hero'>
                <Logo width='220px' fill='white' />
                <div className='col-lg-6 mx-auto my-5'>
                    <SearchBar />
                </div>
            </div>
        </>
    );
}

export default Hero;