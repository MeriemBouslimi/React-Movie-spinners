
import React from 'react';
import './hoc.css';


const Hoc =(WrappedComponent)=>{
    return(
        class Hoc extends React.Component {
            render(){
                return(
                    this.props.isLoding === true ? <div className='loading'></div> : <WrappedComponent {...this.props}/>
                )
            }
        }
    )
}


export default Hoc;
