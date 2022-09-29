    Employee
[   
    /* 1 */
    {
         "_id" : ObjectId("632c03caf7319ecd812c2ad3"),
         "id" : "100001",
        "name" : "Juan Manuel",
        "age" : 25,
        "jobRole" : "Manager",
        "salary" : "50,000/Monthly"
    },

    /* 2 */
    {
        "_id" : ObjectId("632c0492f7319ecd812c2afa"),
        "id" : "123456",
        "name" : "James Evan",
        "age" : 21,
        "jobRole" : "Associate",
        "salary" : "3,000/Weekly"
    },

    /* 3 */
    {
        "_id" : ObjectId("632c0501f7319ecd812c2b0e"),
        "id" : "123457",
        "name" : "Greg Jackson",
        "age" : 20,
        "jobRole" : "Cashier",
        "salary" : "120/Hourly"
    },

    /* 4 */
    {
        "_id" : ObjectId("632c05ccf7319ecd812c2b34"),
        "id" : "123458",
        "name" : "Patrick Fisher",
        "age" : 24,
        "jobRole" : "Senior Cashier",
        "salary" : "120/Hourly"
    },

    /* 5 */
    {
        "_id" : ObjectId("632c061bf7319ecd812c2b4a"),
        "id" : "123459",
        "name" : "Faith Evangelist",
        "age" : 25,
        "jobRole" : "General manager",
        "salary" : "50,000/monthly"
    }

],
    Product 
    [
    /* 1 */
    {
        "_id" : ObjectId("632c079bf7319ecd812c2b83"),
        "id" : "SGD701",
        "Category" : "Processed Meat",
        "price" : "500",
        "quantity" : "1,000",
        "Products" : [ 
            "Sausage",
            "Beef"
        ]
    },

    /* 2 */
    {
        "_id" : ObjectId("632c0838f7319ecd812c2ba2"),
        "id" : "SGD601",
        "Category" : "Beverages",
        "price" : "100",
        "quantity" : "2,000",
        "Products" : [ 
            "Sprite", 
            "Coffee"
        ]
    },

    /* 3 */
    {
        "_id" : ObjectId("632c08c9f7319ecd812c2bba"),
        "id" : "SGD501",
        "Category" : "Treats",
        "price" : "37",
        "quantity" : "30,000",
        "Product" : [ 
            "Chocolate Bar", 
            "Bread Sticks"
        ]
    },

    /* 4 */
    {
        "_id" : ObjectId("632c0a2df7319ecd812c2be6"),
        "id" : "SGD401",
        "Category" : "Sausages",
        "price" : "70",
        "quantity" : "4,000",
        "Product" : [ 
            "Corn Dog", 
            "Cheese Hotdog"
        ]
    },

    /* 5 */
    {
        "_id" : ObjectId("632c0ad4f7319ecd812c2bfd"),
        "id" : "SGD301",
        "name" : "Fresh Meat",
        "price" : "999",
        "quantity" : "60",
        "category" : [ 
            "Whole Chicken", 
            "Beef Ribs", 
            "Lamb Meat"
        ]
    },

    /* 6 */
    {
        "_id" : ObjectId("632c0bcbf7319ecd812c2c1f"),
        "id" : "SGD201",
        "Category" : "Snack",
        "price" : "20",
        "quantity" : "300",
        "Product" : [ 
            "Potato Chips", 
            "French Fries", 
            "Mixed Nuts"
        ]
    },

    /* 7 */
    {
        "_id" : ObjectId("632c0c27f7319ecd812c2c30"),
        "id" : "SGD101",
        "Category" : "Vegetables",
        "price" : "20",
        "quantity" : "200",
        "Product" : [ 
            "Tomato Salad", 
            "Lettuce", 
            "Pumpkin Salad"
        ]
    },

    /* 8 */
    {
        "_id" : ObjectId("632c0d48f7319ecd812c2c54"),
        "id" : "ERB1234",
        "name" : "Rice",
        "price" : "33,000",
        "quantity" : "200,000",
        "category" : [ 
            "sticky Rice", 
            "Smooth Rice", 
            "organic"
        ]
    }
],
    payment
    [
    /* 1 */
    {
        "_id" : ObjectId("632c0e94f7319ecd812c2c8e"),
        "id" : "1001",
        "grossAmount" : "2000",
        "discounts" : "15%",
        "netAmount" : "66.55",
        "date/time" : "2018-02-3 8:30PM"
    },

    /* 2 */
    {
        "_id" : ObjectId("632c0f0bf7319ecd812c2ca5"),
        "id" : "1002",
        "grossAmount" : "23.75",
        "discounts" : "10%",
        "netAmount" : "12.32",
        "date/time" : "2021-03-26 9:30AM"
    },

    /* 3 */
    {
        "_id" : ObjectId("632c100bf7319ecd812c2cc9"),
        "id" : "1003",
        "grossAmount" : "534.123",
        "discounts" : "20%",
        "netAmount" : "244",
        "date/time" : "2021-05-07 11:30AM"
    },

    /* 4 */
    {
        "_id" : ObjectId("632c101af7319ecd812c2ccc"),
        "id" : "1004",
        "grossAmount" : "22",
        "discounts" : "5%",
        "netAmount" : "25",
        "date/time" : "2021-09-09 12:30PM"
    },

    /* 5 */
    {
        "_id" : ObjectId("632c1028f7319ecd812c2ccf"),
        "id" : "1005",
        "grossAmount" : "69.69",
        "discounts" : "7%",
        "netAmount" : "99",
        "date/time" : "2021-01-01 3:30PM"
    },

    /* 6 */
    {
        "_id" : ObjectId("632c103af7319ecd812c2cd4"),
        "id" : "002312021010",
        "grossAmount" : "44.5",
        "discounts" : "2%",
        "netAmount" : "14",
        "date/time" : "2015-03-03 5:00AM"
    }
    ],
    Promo
    [
    /* 1 */
    {
        "_id" : ObjectId("632c11d0f7319ecd812c2d2d"),
        "id" : "DISCOUNT1",
        "name" : "Processed Meat Bundle Promo",
        "period" : 7,
        "Wholesales" : ", 50, 12"
    },

    /* 2 */
    {
        "_id" : ObjectId("632c11f5f7319ecd812c2d3c"),
        "id" : "PROMO1",
        "name" : "christmass Sale",
        "period" : 2,
        "WholeSale" : "120, 200"
    },

    /* 3 */
    {
        "_id" : ObjectId("632c1200f7319ecd812c2d43"),
        "id" : "BUNDLE1",
        "name" : "Treats Bundle",
        "period" : 3,
        "WholeSales" : "101, 205"
    },

    /* 4 */
    {
        "_id" : ObjectId("632c120df7319ecd812c2d4f"),
        "id" : "SALE234",
        "name" : "New Year Sale",
        "period" : 7,
        "WholeSales" : "10, 69, 35, 100, "
    },

    /* 5 */
    {
        "_id" : ObjectId("632c122df7319ecd812c2d5b"),
        "id" : "RECESS1",
        "name" : "Pabaon Sale",
        "period" : 7,
        "WholeSales" : "10, 69, 35, 100, "
    }
]
