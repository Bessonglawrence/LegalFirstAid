import React, {Component} from 'react';
import Navigation from './route/Navigation';



global._obj2Arr = (obj) => {
    let data = [];
    for (var k in obj) {
        if (obj.hasOwnProperty(k)) {
            let tObj = obj[k]; 
            tObj.obj_id = k;
            data.push(tObj);
        }
    }

    return data; 
}

export default class App extends Component {
	render(){
		return(
			<Navigation />
			);
	}
}
