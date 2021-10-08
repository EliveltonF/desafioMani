import React from 'react';
import { Lista } from './design/style-listaBotoes'

export default (props) => {
    return (
        <Lista>

            <h1>{props.title}</h1>
            <div >
                <button id="um">{'<'}</button>
                <button>{'>'}</button>
                <button>Ver Tudo</button>
            </div>


        </Lista>
    );
}