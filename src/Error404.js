import React from 'react';

const Error404 = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat bg-error-bg">
            <h1 className="text-4xl font-bold text-white">Ops, esta página não foi encontrada.</h1>
            <p className="text-white">Parece que você se perdeu... Tente voltar para a página anterior ou acessar a home.</p>
        </div>
    );
}

export default Error404;