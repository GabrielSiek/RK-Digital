import './Botao.css'

const Botao = ( {estilo, onClick, children} ) => {


    return (
        <button onClick={onClick} className={`botao ${estilo}`}>{children}</button>
    )
}

const BotaoContato = ( {estilo, children} ) => {

    
    return (
        <button className={`botao ${estilo}`}>
            <a className='botao-link' href='https://wa.me/555193246493/?text=Olá!%20Tudo%20bem?%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20da%20RK%20Digital!' target='_blank'>{children}</a>
        </button>
    )
}

export {Botao, BotaoContato};