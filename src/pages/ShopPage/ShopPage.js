import React, {useState} from 'react'
import {SHOP_DATA} from './shop.data'
import CollectionPreview
  from '../../components/CollectionPreview/CollectionPreview'

const ShopPage = () => {
  const [collections] = useState(SHOP_DATA)

  return (
    <div className='shop-page'>
      {
        collections.map(({id, ...restCollectionsProps}) => (
          <CollectionPreview key={id} {...restCollectionsProps} />
        ))
      }
    </div>
  )
}

export default ShopPage
