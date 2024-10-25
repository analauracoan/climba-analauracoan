import SmallTextField from '@/components/SmallTextField/smalltextfield';
import Form from 'next/form';
import Image from 'next/image';

import ApresentacaoIlustracao from "@/assets/apresentacao_image.png";
import Button from '@/components/Button/button';

export default function ApresentacaoPage({ children }) {
  return (
    <>
      <div className="div-titulo">
        <h1 className="titulo">Apresentação do Candidato</h1>
      </div>
      <div className='div-main'>
        <div className='main-left'>
          <h4 className='main-left-title'>
            Insira seus dados abaixo:
          </h4>
          <Form className='main-left-form'>
            <SmallTextField label="Nome Completo" type="text" name="nome-completo" />
            <SmallTextField label="Idade" type="number" name="idade" />
            <SmallTextField label="Cidade" type="text" name="cidade" />
            <SmallTextField label="Formação" type="text" name="formacao" />
            <Button text="Próximo" />          
          </Form>
        </div>
        <div className='main-right'>
          <Image src={ApresentacaoIlustracao} width={400} alt='Ilustração apresentação'></Image>
        </div>
      </div>
    </>
  );
}