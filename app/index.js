import _ from 'lodash';

function component () {
  var element = document.createElement('div');

  //element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.innerHTML = "asdf";

  return element;
}

document.body.appendChild(component());
