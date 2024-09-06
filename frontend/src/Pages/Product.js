import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
// import Breadcrumb from '../Components/Breadcrumb/Breadcrumb';
// import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import Breadcrumb from '../Componets/Breadcrum/Breadcrum';
import ProductDisplay from '../Componets/ProductDisplay/ProductDisplay';
import DescripationBox from '../Componets/DescripationBox/DescripationBox';
import RelatedProducts from '../Componets/RelatedProducts/RelatedProducts';

const Product = () => {
    const { all_product } = useContext(ShopContext);
    const { productId } = useParams();
    const product = all_product.find((e) => e.id === Number(productId));


    return (
        <div>
            <Breadcrumb product={product} />
            <ProductDisplay product={product} />
            <DescripationBox/>
            <RelatedProducts/>
        </div>
    )
}

export default Product
