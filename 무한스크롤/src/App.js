import Header from './Header.js';
import Input from './Input.js';

console.log('app is running');
export default function App($target) {
  const header = new Header({ $target });
  
  const input = new Input({$target});
}
