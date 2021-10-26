import React from 'react';
import ReactDom from 'react-dom';

function helloName(name){
  return name.nick;
}

const name = {
  nick : "webstoryboy",
}

const hello = <h1>hello {helloName(name)}</h1>

ReactDom.render(hello, document.getElementById("root"));