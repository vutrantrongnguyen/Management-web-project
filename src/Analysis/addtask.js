import React,{ Component } from 'react';

class Addtask extends Component{

  constructor(props) {
    super(props);
    this.state = {
      so: '',
      time: '',
      bfat: '',
      cv: '',
      id:'',
      
    }
  }
  
  isChange=(event) => {
    
    const name = event.target.name;
    const value = event.target.value;
    this.setState({[name]: value});
  }
  //UNSAFE_componentWillMount=() =>{
      //this.setState({
      //id:this.props.editData.key,
      //so:this.props.editData.so,
      //time:this.props.editData.time,
      //bfat:this.props.editData.bfat,
      //cv:this.props.editData.cv,
      //});
  //}
  saveFunction = () => {
    console.log("du lieu editData: " + JSON.stringify(this.props.editData));
    let editObject = {};
    editObject.so = this.state.so;
    editObject.time = this.state.time;
    editObject.bfat = this.state.bfat;
    editObject.cv = this.state.cv;
    editObject.id = this.state.id;
    
    this.props.sendEditDataToStore(editObject);
    
  }
  onSubmit = (event)=>{
    event.preventDefault();
    this.props.onSubmit(this.state)
}
  render()
{
  return (
    <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                <div class="panel panel-warning">
                    <div class="panel-heading">
                        <h3 class="panel-title"><center>タスク追加</center></h3>
                    </div>
                    <div class="panel-body">
                        <form onSubmit={this.onSubmit}>
                            <div class="form-group">
                                <label>グループ名 :</label>
                                <input 
                                type="text" 
                                class="form-control" 
                                name="so"
                                value={this.state.name}
                                isChange={this.isChange}/>
                                <div class="form-group">
                                  
                                  <div >
                                    <select name="time" id="input" class="form-control" required="required"
                                    value={this.state.time}
                                    isChange={this.isChange}>
                                      <option value={true}>時間</option>
                                      <option value={false}>⽇</option>
                                    </select>
                                  </div>
                                </div>
                            
                                
                                <div >
                                  <select name="bfat" id="input" class="form-control" required="required"
                                  value={this.state.bfat}
                                  isChange={this.isChange}>
                                      <option value={true}>前</option>
                                      <option value={false}>後</option>
                                  </select>
                                  </div>
                                
                                <br/>
                                <div class="form-group">
                                <label>タスク :</label>
                                <input type="text" class="form-control"
                                      name="cv" />
                            </div>
                            </div>
                            
                            <br/>
                            <div class="text-center">
                                <button type="submit" class="btn btn-warning">OK</button>&nbsp;
                                <button type="submit" class="btn btn-danger">CANCEL</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
);
}
}
 export default Addtask;