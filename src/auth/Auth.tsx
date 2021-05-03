import React, {Component} from 'react';
import Signup from './Signup';
import Login from './Login';

interface IProps {
    updateToken: (newToken: string) => void
}
export default class Auth extends Component <IProps, {}>{
    constructor(props: IProps) {
        super(props)

    }
render() {

    return(
       <div>
                    {/* <Signup updateToken={this.props.updateToken}/> */}
               
                   <Login updateToken={this.props.updateToken}/>
                   </div>
        
    )
}
}
