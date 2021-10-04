// scss
import '../scss/main.scss';

//svg and images loader
const importAll = r => r.keys().forEach(r);
importAll(require.context('../assets/icons', true, /\.svg$/));
importAll(require.context('../assets/img', true, /\.jpg/));

//js
import './navigation';
import './input';
import './occasion';
import './routing';
import './products';
import './news';
import './basketStorage';

//js components
import '../components/home';
import '../components/categoryProducts';
import '../components/userPanel';
import '../components/productPage';
import '../components/basket';
