
import data from '../data'
import Product from '../components/Product'
function ProductFeed() {

   
  
        
    
    
      
    

    
    

  return (
    <div className='grid grid-flow-row-dense ml-20 md:grid-cols-1'>
      <span>{data.products.map(contact =>{
        return(<>
         <Product name={contact.name}
         price={contact.price}
         category={contact.category}
         image={contact.image}
         rating={contact.rating}
         key={contact._id}
         quantity={contact.quantity}
        className=' ' />
          </>
        )
      })}


</span>
 </div>


    
  )
}

export default ProductFeed