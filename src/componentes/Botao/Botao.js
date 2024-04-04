import './Botao.css'

const Botao = ( props ) => {

    return (
        <button className={`botao ${props.estilo}`}>{props.children}</button>
    )
}

export default Botao;