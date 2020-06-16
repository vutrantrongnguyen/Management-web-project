import React, { Component } from 'react';


class Thongtin extends Component {
  
  render()
{
    
  return (
    <tr>
        <td>1</td>
        <td>Học lập trình</td>
        <td class="text-center">
        <span class="label label-success">Kích Hoạt</span>
         </td>
        <td class="text-center">
         <button type="button" class="btn btn-warning">
        <span class="fa fa-pencil mr-5"></span>Sửa
        </button>
        &nbsp;
        <button type="button" class="btn btn-danger">
        <span class="fa fa-trash mr-5"></span>Xóa
        </button>
        </td>
        </tr>
     
  )

}
}
export default Thongtin;
