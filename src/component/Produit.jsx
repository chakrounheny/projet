import React,{useState,useEffect} from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function Produit() {
    const {products} = useSelector(state => state)
    const [category, setCategory] = useState('')
    const filteredProd = products.filter(el=>el.cat.includes(category))
    console.log(products);
    // const[data,setData]=useState([])
    // const[filter,setFilter]=useState(data)
    // const[loading,setLoading]=useState(false)
    // const filterproduct = (cat) => {
    //     const updatedList = reducer.filter((x) => x.category ===cat) ;
    //     setFilter(updatedList);
    // }
    // let componentMounted=true;

    // useEffect(() => {
    //     const getproduit = async() =>{
    //         await setLoading(true) ;
            
    //         }
    //         return () => {
    //             componentMounted=false;
    //         }
    //     } 
    //     getproduit();
        
    // }, []);

    

    return (
        <div>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h1 className='display-6 fw-bolder text-center'>Dernière Produit</h1>
 <hr/>
 
                    </div>
                </div>
                <div className="row justify-content-center">
                <div className="button d-flex justify-content-center mb-5 pb-5">
            <button  onClick={()=>setCategory('')} className="btn btn-outline-dark me-2"  >TOUS</button>
            <button onClick={()=>setCategory('epice')} className="btn btn-outline-dark me-2">Epice</button>
            <button onClick={()=>setCategory('saveur')} className="btn btn-outline-dark me-2" >Saveur</button>
        </div>
        {
            filteredProd.map(el=>
                <div className="col-md-3">
                <div class="card h-100 text-conter p-4"key={el.id} >
  <img src={el.img} class="card-img-top" alt="{produit.titre}"/>
  <div class="card-body">
    <h5 class="card-title mb-0">{el.des}</h5>
    <p class="card-text">{el.price}DT</p>
    <Link to={`/product/${el.id}`} class="btn btn-primary">commander</Link>
  </div>
</div>
</div>
                )
        }
                </div>
            </div>
            
        </div>
    )
}
