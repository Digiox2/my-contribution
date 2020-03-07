import React from 'react';


import NoProjects from './NoProjects';


  

const OSPList = (props) => {
   
console.log(props.datas.length)
    return (
        <div>
            {
            props.datas.length < 1 ?  <NoProjects /> : <h1>test</h1>
        }
        </div>
    );
}

export default OSPList;