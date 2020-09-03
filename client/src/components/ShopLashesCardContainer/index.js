import React from "react";
import ShopLashesCards from "../ShopLashesCards";

function ShopLashesCardContainer() {
  let product = [
    {
      index: 0,
      name: "Ibiza",
      price: "$35.00",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS3qhf-VqafYj4kZc63BNhrmYq7-7s0NEkhGw&usqp=CAU",
      sale: true,
    },
    {
      index: 1,
      name: "Goddess",
      price: "$20.00",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTBwONwJI42Qxpwr0JB3RPLDo1m5OypJH_tWw&usqp=CAU",
      sale: false,
    },
    {
      index: 2,
      name: "Diamonds",
      price: "$25.00",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQlzFdLFBTx__UWWcscRNmlYkRTvjk1ehKvjA&usqp=CAU",
      sale: false,
    },
    {
      index: 3,
      name: "Luxe",
      price: "$20.00",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS3qhf-VqafYj4kZc63BNhrmYq7-7s0NEkhGw&usqp=CAU",
      sale: true,
    },
    {
      index: 4,
      name: "Doha",
      price: "$30.00",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS3qhf-VqafYj4kZc63BNhrmYq7-7s0NEkhGw&usqp=CAU",
      sale: false,
    },
    {
      index: 5,
      name: "Miami Lite",
      price: "$20.00",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTBwONwJI42Qxpwr0JB3RPLDo1m5OypJH_tWw&usqp=CAU",
      sale: false,
    },
    {
      index: 6,
      name: "Lyla",
      price: "$30.00",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQlzFdLFBTx__UWWcscRNmlYkRTvjk1ehKvjA&usqp=CAU",
      sale: true,
    },
    {
      index: 7,
      name: "Ela",
      price: "$30.00",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS3qhf-VqafYj4kZc63BNhrmYq7-7s0NEkhGw&usqp=CAU",
      sale: false,
    },
  ];
  return (
    <div class="container">
      <div class="row">
        {product.map((item) => {
          return (
            item.index < 3 && (
              <div class="col-sm-12 col-md-4 col-lg-4">
                <div class="card-group">
                  <ShopLashesCards
                    name={item.name}
                    image={item.image}
                    price={item.price}
                    sale={item.sale}
                  />
                </div>
              </div>
            )
          );
        })}
      </div>
      <div class="row">
        {product.map((item) => {
          return (
            item.index > 4 &&
            item.index < 8 && (
              <div class="col-sm-12 col-md-4 col-lg-4">
                <div class="card-group">
                  <ShopLashesCards
                    name={item.name}
                    image={item.image}
                    price={item.price}
                    sale={item.sale}
                  />
                </div>
              </div>
            )
          );
        })}
      </div>
    </div>
  );
}

export default ShopLashesCardContainer;
