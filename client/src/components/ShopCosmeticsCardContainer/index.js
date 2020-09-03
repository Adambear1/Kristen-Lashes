import React from "react";
import ShopCosmeticsCards from "../ShopCosmeticsCards";

function ShopCosmeticsCardContainer() {
  let product = [
    {
      index: 0,
      name: "Elf Makeup Pallet",
      price: "$15.00",
      image:
        "data:image/jpeg;base64,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",
      sale: false,
    },
    {
      index: 1,
      name: "Elf Makeup Brushes",
      price: "$25.00",
      image:
        "https://images.ulta.com/is/image/Ulta/2538871?op_sharpen=1&resMode=bilin&qlt=85&wid=800&hei=800&fmt=jpg",
      sale: false,
    },
    {
      index: 2,
      name: "Jeffree Star Col.",
      price: "$45.00",
      image:
        "https://cdn.shopify.com/s/files/1/0673/2291/products/blood_sugar_full_side_1024x1024.jpg?v=1578078386",
      sale: false,
    },
    {
      index: 3,
      name: "Kiko Collection",
      price: "$50.00",
      image:
        "https://www.byrdie.com/thmb/EwOCySfCkaY6s4_sgwLGPC3wTWw=/700x700/smart/filters:no_upscale()/cdn.cliqueinc.com__cache__posts__180858__this-makeup-brand-is-like-the-mac-of-milan-1612398-1451962001.700x0c-23539f0e8cda46d9a86d6ae879467bd2.jpg",
      sale: false,
    },
    {
      index: 4,
      name: "Simply Me Collection",
      price: "$45.00",
      image:
        "https://shelbyreport.nyc3.cdn.digitaloceanspaces.com/wp-content/uploads/2017/11/7-Eleven-makeup.jpg",
      sale: false,
    },
    {
      index: 5,
      name: "Diego Dalla Lip Stick Collection",
      price: "$55.00",
      image:
        "https://lh3.googleusercontent.com/proxy/KTjFZWZFUg5eG3Q9luGCsLS8TbPWMmWxWTh-Bc3dUNmrj_-C7ba8h10sdrf_j3IwkWPH5JxPl_plt2Qb3OnB10W_COtDLqWfFE_FcaWphXCm95p6GVSrx1JIM04EOVz-9MrHublvZ0Hc1awOf1PC0END4FPCOFOucq5CATfCgFHi3g",
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
                  <ShopCosmeticsCards
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
                  <ShopCosmeticsCards
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

export default ShopCosmeticsCardContainer;
