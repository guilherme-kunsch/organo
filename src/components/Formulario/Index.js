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
    

  return (
    <section className="formulario">
      <form>
        <div className='logo'>
          <img src='../imagens/download.png'/>
        </div>
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        <CampoTexto label="Nome" placeholder="Digite seu nome" />
        <CampoTexto label="Cargo" placeholder="Digite seu cargo" />
        <CampoTexto label="Imagem" placeholder="Caminho da imagem" />
        <ListaSuspensa label="Times" itens={times} />
        <Botao>
          Criar card
        </Botao>
      </form>
    </section>
  );
};

export default Formulario;
