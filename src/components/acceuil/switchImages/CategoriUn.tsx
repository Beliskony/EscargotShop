import ModernProductShowcase from '../ProductCard';
import { productsData } from '@/data/ProductData';

const CategoriUn = () => {
 
  return (
    <div>
        <ModernProductShowcase products= {productsData} />
    </div>
  )
}

export default CategoriUn