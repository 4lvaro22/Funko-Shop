import grupoPersonas from '../../assets/images/grupoPersonas.jpg';
import { LoremIpsum } from './LoremIpsum';

export const AboutUs = () => {
  return (
    <div>
      <h1 className='text-center'>
        <strong>FunkoShop</strong>
        <small className='text-muted mx-3'>Grupo-H</small>
      </h1>
      <img src={grupoPersonas} className='float-start me-auto' width='50%' alt='fotoGrupo' />
      <LoremIpsum />
    </div>
  );
};

export default AboutUs;
