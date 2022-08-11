import type { NextPage } from 'next';
import { ColorSwatch } from '../components/colors/color-swatch';

const Home: NextPage = () => <div>
    <h1> Colors generator </h1>
    <ColorSwatch />
</div>;

export default Home;

