import _ from 'lodash';
import printMe from './print';

function component(){
    const element = document.createElement('div');
    const btn = document.createElement('button');
    btn.innerHTML='click me';
    btn.onclick = printMe;
    element.innerHTML = _.join(['hello', 'webpack'], ' ');
    element.appendChild(btn);
    return  element;
}

document.body.appendChild(component());