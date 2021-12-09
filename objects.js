const customers = [
    {
        id: 1,
        name: "Kristóf",
        favouriteProducts: [
            {
                category: "TV",
                color: "black"
            }
        ]
    },
    {
        id: 2,
        name: "Ferenc",
        favouriteProducts: [
            {
                category: "headphone",
                color: "grey"
            },
            {
                category: "camera",
                color: "white"
            }
        ]
    }
]

const products = [
    {
        id: 1,
        category: "camera",
        color: "white"
    },
    {
        id: 2,
        category: "camera",
        color: "black"
    },
    {
        id: 3,
        category: "TV",
        color: "black"
    },
    {
        id: 4,
        category: "TV",
        color: "white"
    },
    {
        id: 5,
        category: "headphone",
        color: "grey"
    },
    {
        id: 6,
        category: "headphone",
        color: "white"
    }
]

const findFavouriteProductsID = (prods, custs) => {
    const result = [];
    for (const prod of prods) {
        for (const cust of custs) {
            for (const fav of cust.favouriteProducts){
                if (fav.category === prod.category && fav.color === prod.color){
                    //console.log("njgdf");
                    result.push({
                        customerName: cust.name,
                        productID: prod.id
                    });
                }
            }
            
        }
    }
    return result;

}

console.log(findFavouriteProductsID(products, customers));