import grupoPersonas from '../../assets/images/grupoPersonas.jpg';
import { LoremIpsum } from './LoremIpsum';

export const AboutUs = () => {
  return (
    <div>
      <h1 className='text-center'>
        <strong>FunkoShop</strong>
        <small class='text-muted mx-3'>Grupo-H</small>
      </h1>
      <img src={grupoPersonas} className='float-start me-auto' alt='fotoGrupo' />
      <LoremIpsum />
    </div>
  );
};

export default AboutUs;
