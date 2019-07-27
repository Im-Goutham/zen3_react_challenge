import React, { Component } from 'react';
import './App.css';
import Input from './Components/Input';
import Row from './Components/Row';
import Box from './Components/Box';

class App extends Component {

state = {
    no_of_rows: null,
    columns_string: '',
    gutter_row: null,
    gutter_col: null
}


handleInputChange=(e)=>{
     this.setState({[e.target.name]: e.target.value});
}

  render() {
    let {no_of_rows, columns_string, gutter_row, gutter_col} = this.state;
    let columns_arr=  columns_string.split(',');
    return (
      <div className="App">
           <Input 
               type='number'
               min={0}
               name="no_of_rows" 
               placeholder="No. of Rows" 
               value={no_of_rows} 
               onChange={this.handleInputChange}/>
           <Input 
               type='text'
               name="columns_string" 
               placeholder="Columns string" 
               value={columns_string} 
               onChange={this.handleInputChange}/>
           <Input 
               type='number'
               min={0}
               name="gutter_row" 
               placeholder="Space between rows" 
               value={gutter_row} 
               onChange={this.handleInputChange}/>
           <Input 
               type='number'
               min={0}
               name="gutter_col" 
               placeholder="Space between boxes" 
               value={gutter_col} 
               onChange={this.handleInputChange}/>
           <br/> {
               no_of_rows ? ([...Array(parseInt(no_of_rows))].map((data,index)=>{
                 let num_of_cols = parseInt(columns_arr[index]);
                 if(num_of_cols){
                  let width =  Math.floor((100 / num_of_cols) * 100);
                  return   <Row key={index} style={{margin: `${gutter_row/2}px 0px` }}>
                        {
                          num_of_cols &&  [...Array(num_of_cols)].map((colData,key)=>{
                                return <Box key={key} style={{width,margin: `0px ${gutter_col/2}px` }}/>
                          })
                        }     
                    </Row> 
                 }
                 else {
                      return <p class="error">Please enter number of columns for row {index+1}.</p>
                 }  
               })
          ) : <p class="error">Please enter number of rows.</p>
        }
      </div>
    );
  }
}

export default App;
