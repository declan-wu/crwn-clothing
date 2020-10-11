import React from "react";
// import SHOP_DATA from "./shop.data.js";
import Restaurants_Data from "./restaurants.data";

import CollectionPreview from "../../components/collection-preview/collection-preview.component";

class ShopPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: Restaurants_Data,
      //   {
      //   id: 1,
      //   title: "Hats",
      //   routeName: "hats",
      //   items: [ {
      //             id: 1,
      //             name: "Brown Brim",
      //             imageUrl: "https://i.ibb.co/ZYW3VTp/brown-brim.png",
      //             price: 25
      //           } ]
      //    }
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
