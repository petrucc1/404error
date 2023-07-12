import React from 'react';
import backgroundImg from '../src/assets/error-bg.jpg';

const Error404 = () => {
    const backgroundStyle = {
        backgroundImage: `url(${backgroundImg.default})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    };

    return (
        <div className='flex items-center justify-around min-h-screen'>
            <div className="flex flex-col justify-center items-start max-w-[350px]" style={backgroundStyle}>
                <h1 className="text-4xl font-bold text-white">Ops, esta página não foi encontrada.</h1>
                <p className="text-white py-4">Parece que você se perdeu... Tente voltar para a página anterior ou acessar a home.</p>
                <div className="flex justify-center mt-4">
                    <button className="bg-[#151557] hover:bg-[#BF7BFB] text-white font-bold py-2 px-4 rounded">Voltar</button>
                    <button className="bg-[#151557] hover:bg-[#BF7BFB] text-white font-bold py-2 px-4 rounded ml-4">Ir para a home</button>
                </div>
            </div>
            <div className='flex justify-between items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="81" height="107" viewBox="0 0 81 107" fill="none">
                    <path d="M0.84375 84.9688L13.832 6.74219H33.7969L20.6602 84.9688H0.84375ZM0.84375 84.9688L12.4961 67.082H52.7969V84.9688H0.84375ZM69.3477 84.9688V67.082H81V84.9688H69.3477ZM51.3125 106.195V0.804688H70.832V106.195H51.3125Z" fill="#BF7BFB" />
                </svg>
                <div >
                    <iframe src="https://lottie.host/?file=ab7a5c4d-d0de-4877-be5e-8cffedab2bf1/f7kJBYBWYz.json" style={{ width: '180px', height: '180px' }}></iframe >
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="81" height="107" viewBox="0 0 81 107" fill="none">
                    <path d="M0.84375 84.9688L13.832 6.74219H33.7969L20.6602 84.9688H0.84375ZM0.84375 84.9688L12.4961 67.082H52.7969V84.9688H0.84375ZM69.3477 84.9688V67.082H81V84.9688H69.3477ZM51.3125 106.195V0.804688H70.832V106.195H51.3125Z" fill="#BF7BFB" />
                </svg>
            </div>
        </div >
    );
}

export default Error404;
