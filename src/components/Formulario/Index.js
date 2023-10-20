import './Formulario.css';
import CampoTexto from '../CampoTexto/Index';
import ListaSuspensa from '../ListaSuspensa/Index';
import Botao from '../Botao/Index';

const Formulario = () => {

  const times = [
    'Administrativo',
    'Atendimento',
    'Diretoria',
    'Operação',
    'TI'
  ]
    
  const aoEnviar = (evento) => {
    evento.preventDefault();
  }


  return (
    <section className="formulario">
      <form onSubmit={aoEnviar}>
        <div className='logo'>
          <img src='../imagens/download.png'/>
        </div>
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite seu nome" />
        <CampoTexto obrigatorio={true} label="Cargo" placeholder="Digite seu cargo" />
        <CampoTexto obrigatorio={true} label="Imagem" placeholder="Caminho da imagem" />
        <ListaSuspensa label="Times" itens={times} />
        <Botao>
          Criar card
        </Botao>
      </form>
    </section>
  );
};

export default Formulario;
