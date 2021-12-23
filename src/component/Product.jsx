import React,{useState,useEffect} from 'react'; 
import { useSelector } from 'react-redux';

import reducer from '../redux/reducer';


const Product =(props) =>{
    console.log(props);
    const {products} = useSelector(state => state )
    console.log(products);
    const product = products.find(el=>el.id===Number(props.match.params.id))
    console.log(product);
    return (
        <div>
            <div className='container'>
                <div className='row'>
                     
                     <h1 className='display-5'>
                         <h4   height="400px" width="400px" >{product.des}</h4>
                     </h1>
                     <div className='col-md-6'>
                         <img src={product.img} alt="" />
                     </div>


                     

                </div>
            </div>

        </div>
    );
}
export default Product ;  