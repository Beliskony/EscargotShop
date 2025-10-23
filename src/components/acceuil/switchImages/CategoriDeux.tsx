import CatePictures from '../ProductCard'
import { productsData } from '@/data/ProductData';

const CategoriDeux = () => {

  return (
    <div>
        <CatePictures products= {productsData} />
    </div>
  )
}

export default CategoriDeux