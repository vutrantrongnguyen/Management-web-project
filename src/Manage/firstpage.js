import React,{ Component } from 'react';

class Firstpage extends Component{
  constructor(props){
    super(props);
    this.onclick=this.onclick.bind(this);
    this.onHandleGroup=this.onHandleGroup.bind(this)
    this.onHandleSubmit=this.onHandleSubmit.bind(this)
    this.state={
        txtgroup:"",
        txtday:"",
        txttime:""
    };
  }

onclick(){
  
}
onHandleGroup(event){
  var target=event.target;
  var group =target.group;
  var value =target.value;
  this.setState({
    [group]:value
  });
}
onHandleSubmit(event){
  event.preventDefault ();
  console.log(this.state);
}
render()

{
  return (
    <div>
    
    <div class="page-header">
      <h1><center>⾏動計画 新規作成</center>
      </h1>
    </div>
    <form onSubmit={this.onHandleSubmit}>
    
    
      <div class="form-group">
        <label class="col-6 col-sm-4"for="">名称</label>
        <input 
           type="text" 
           placeholder="名称を⼊⼒" 
           group="txtgroup"
           onChange={this.onHandleGroup}
           />  
      </div>
      <div class="form-group">
        <label class="col-6 col-sm-4"for="">ベース⽇ </label>
        <input 
            type="date" 
            min='1050/01/01'
            max='3000/12/31' 
            value='2020/03/28'
            ngay="txtday"
        />
      </div>
      <div class="form-group">
        <label class="col-6 col-sm-4"for="">ベース時刻</label>
        <input 
        id="" 
        type="time"
        min='00:00' 
        max='23:59' 
        value='13:07'
        gio="txttime"
        />
      </div>

       <button type="submit" class="btn btn-primary" onClick= {this.onclick} ><center>OK</center></button>
    </form>
    </div>

  );
}
}
 export default Firstpage;