import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FilterableCharacterTable from './components/FilterableCharacterTable/FilterableCharacterTable';
import registerServiceWorker from './registerServiceWorker';

const CHARACTERS = [
  {name: 'Singed', role: 'Top', img: 'https://d1u5p3l4wpay3k.cloudfront.net/lolesports_gamepedia_en/9/96/SingedSquare.png?version=459f5f929a7f56844bfc869e0b3d075e'},
  {name: 'Warwick', role: 'Jungle', img: 'https://d1u5p3l4wpay3k.cloudfront.net/lolesports_gamepedia_en/4/42/WarwickSquare.png?version=2cc44dddc555a3c66fe95f9daeaf3232'},
  {name: 'Jhin', role: 'Mid', img: 'https://d1u5p3l4wpay3k.cloudfront.net/lolesports_gamepedia_en/8/8b/JhinSquare.png?version=3305111d9a0e1d5943d37ada614e4456'},
  {name: 'Ezreal', role: 'Marksman', img: 'https://d1u5p3l4wpay3k.cloudfront.net/lolesports_gamepedia_en/c/c3/EzrealSquare.png?version=89782c7d4a3b3d7346205fbb93a6963f'},
  {name: 'Taric', role: 'Support', img: 'https://d1u5p3l4wpay3k.cloudfront.net/lolesports_gamepedia_en/c/c4/TaricSquare.png?version=c3acaaa0c5d0e3ac6233f144101c0253'},
  {name: 'Fiddlesticks', role: 'Fill', img: 'https://d1u5p3l4wpay3k.cloudfront.net/lolesports_gamepedia_en/7/7c/FiddlesticksSquare.png?version=31051e8677497db3d12ca83a9c2207a3'}
]

ReactDOM.render(<FilterableCharacterTable characters = {CHARACTERS}/>, document.getElementById('root'));
registerServiceWorker();
