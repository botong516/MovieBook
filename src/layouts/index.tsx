import {Outlet} from 'umi'
 
export default (props) => {
  return <div style={{ padding: 20 }}> 
  <header></header>
    <Outlet/> 
  </div>;
}