import React, {useState} from 'react';


const Accordion = ({items}) =>{
    const [activeIndex, setActiveIndex] = useState(null);

    const onTitleClick = (index) => {
        setActiveIndex(index);
    };

    const renderedItems = items.map((item, index) => {
        const active = index === activeIndex? 'active':'';

        return(
        <React.Fragment key={item.title}>   
        
            <div 
                className={`title ${active}`}
                onClick={() => onTitleClick(index)}
                >
                <i className="dropdown icon"></i>
                {item.title}
            </div>
            <div className={`content ${active}`}>
                <p>{item.content}</p>
            </div>
        </React.Fragment>
        );
    });

    return <div className="ui styled accordion">
        {renderedItems}
      
    </div>;
};


export default Accordion;

// line 7:we need to specify a key property for element &
// React.Fragment is given because otherwise if <div> is given ten there form double lines 