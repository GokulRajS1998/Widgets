import React from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';


const items=[
    {
        title: 'What is React?',
        content: 'React is a front-end javascript framework'
    },
    {
        title: 'Why use React?',
        content: 'React is a favourite JS library amoung engineers'
    },
    {
        title: 'How do use React?',
        content: 'You use react by creating components'
    },

];


export default ()=> {
    return(
        <div>
            
        <Search/>
        </div>
    );
    
};
