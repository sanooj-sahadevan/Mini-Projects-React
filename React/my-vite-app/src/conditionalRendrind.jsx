/* eslint-disable no-unused-vars */

const conditionalRendrind = ({data}) => {

    if(data.condition===false){
        return (
            <div>
             <h1>true {data.prob}</h1>
            </div>
          )
    }else{
        return (
            <div>
             <h1>WRONG</h1>
            </div>
          )
    }

  
}

export default conditionalRendrind
