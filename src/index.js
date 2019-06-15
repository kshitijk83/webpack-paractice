import _ from 'lodash';
import './style.css';
import Image from './bir.jpg';

function component(){
    const element = document.createElement('div');
    element.innerHTML = _.join(['hello', 'webpack'], ' ');
    element.classList.add('red');
    var img= document.createElement('img');
    img.src=Image;
    element.appendChild(img);
    return  element;
}

document.body.appendChild(component());