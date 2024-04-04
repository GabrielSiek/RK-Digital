import './CardServico.css'
import { IoBagOutline, IoDocumentTextOutline } from "react-icons/io5";
import { BsCameraReels } from "react-icons/bs";
import { MdOutlineWeb } from "react-icons/md";
import { FaRegEye } from "react-icons/fa";


const CardServico = ({icone, titulo, texto}) => {


    let Icone;

    switch(icone) {
        case 'infoprodutos':
            Icone =  IoBagOutline;
            break;

        case 'video':
            Icone =  BsCameraReels;
            break;
        case 'site':
            Icone =  MdOutlineWeb;
            break;
        case 'identidade':
            Icone = FaRegEye;
            break;
        case 'roteiro':
            Icone = IoDocumentTextOutline;
            break;

        

    }
    return (
        
        <section tabindex="0" className='card-servico'>
            {Icone && <Icone className='icone-card-servico'/>}
            <h1 className='titulo-card-servico'>{titulo}</h1>
            <h2 className='texto-card-servico'>{texto}</h2>
        </section>
    )
}

export default CardServico;