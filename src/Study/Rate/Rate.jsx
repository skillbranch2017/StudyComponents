import React, {Component,PropTypes} from 'react';
import cx from 'classnames';
import importcss from 'importcss';

@importcss(require('./Rate.css'))
export default class Rate extends Component {
    
    static propTypes={
       value: PropTypes.number,
    }	
    static defaultProps={
        value: 0,
    }	
    constructor(props){
       super(props);
       this.state={
          value: props.value,
       };
       //this.onClick= this.onClick.bind(this);	    
       	    
    }
    onClick = (e)=>{
	this.setState({value: e.target.dataset.value},()=>{
		console.log(this.state);
	});    
	this.props.onChange && 
            this.props.onChange(e.target.dataset.value);    
    }	
    getRange(){
     return [1,2,3,4,5,6,7,8,9,10];
    }	
    componentWillReceiveProps(props){
       this.setState({
         value: props.value
       });
    }	
    render(){
       	    
       const Links=this.getRange().map(n => 
          (<a  href="#" 
	       	  
	       styleName={'rate__link '+ ((String(n)==this.state.value)?'rate__link__active':'')}
	       key={String(n)} 
	       data-value={n}
               onClick={this.onClick}
		  ></a>)
       );	    
       return (<div styleName={'rate '+ ((this.state.value!=0)?'rate__active':'')}>{Links}</div>);
    }

}
