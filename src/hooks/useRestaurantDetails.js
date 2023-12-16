import {useState, useEffect} from 'react'
import { CORS_PROXY_URL } from '../utils/constants';

const useRestaurantDetails = (resId) => {
    const [restaurantData, setRestaurantData] = useState(null);
    // const { lat, lng } = JSON.parse(localStorage.getItem("swgy_userLocation"));

    useEffect(() => {
        fetchRestaurantsInfo()
    }, []);

    const fetchRestaurantsInfo = async () => {
        // const res = await fetch(
        //     `${CORS_PROXY_URL}https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${lat}&lng=${lng}&restaurantId=${resId}&submitAction=ENTER`
        // )
        
        // const {data} = await res.json()
        
        const data = {
              "statusMessage": "done successfully",
              "cards": [
                {
                  "card": {
                    "card": {
                      "info": {
                        "name": "Burger King",
                        "city": "Bangalore",
                        "cuisines": [
                          "Burgers",
                          "American"
                        ],
                        "logo": "rng/md/carousel/production/pkcgpsd4df6i5ud3eyuk"
                        }
                    }
                  }
                },
                {
                  "groupedCard": {
                    "cardGroupMap": {
                      "REGULAR": {
                        "cards": [
                          {
                            "card": {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                                "title": "Sandwiches",
                                "itemCards": [
                                  {
                                    "card": {
                                      "info": {
                                        "id": 1,
                                        "name": "Crispy spicy chicken sandwich",
                                        "imageId":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLVj3_TrdH-AD8QDaQZS35MpJ4zJdWY6azqA&usqp=CAU",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "price": 7.99,
                                        "itemAttribute": {
                                          "vegClassifier": "VEG"
                                        },
                                        // "defaultPrice": 16000,
                                      },
                                    }
                                  },
                                  {
                                    "card": {
                                      "info": {
                                        "id": 2,
                                        "name": "Heart Attack and Fries Combo",
                                        "imageId":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLVj3_TrdH-AD8QDaQZS35MpJ4zJdWY6azqA&usqp=CAU",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "price": 11.99,
                                        "itemAttribute": {
                                          "vegClassifier": "VEG"
                                        },
                                      },
                                    }
                                  },
                                  {
                                    "card": {
                                      "info": {
                                        "id": 3,
                                        "name": "Chicken Cheesesteak Sandwich",
                                        "imageId":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLVj3_TrdH-AD8QDaQZS35MpJ4zJdWY6azqA&usqp=CAU",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "price": 9.99,
                                        "itemAttribute": {
                                          "vegClassifier": "VEG"
                                        },
                                      },
                                    }
                                  },
                                  {
                                    "card": {
                                      "info": {
                                        "id": 4,
                                        "name": "Fish Sandwich",
                                        "imageId":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLVj3_TrdH-AD8QDaQZS35MpJ4zJdWY6azqA&usqp=CAU",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "price": 7.99,
                                        "itemAttribute": {
                                          "vegClassifier": "VEG"
                                        },
                                      },
                                    }
                                  },
                                  {
                                    "card": {
                                      "info": {
                                        "id": 5,
                                        "name": "Fried Chicken Sandwich",
                                        "imageId":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLVj3_TrdH-AD8QDaQZS35MpJ4zJdWY6azqA&usqp=CAU",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "price": 8.99,
                                        "itemAttribute": {
                                          "vegClassifier": "VEG"
                                        },
                                      },
                                    }
                                  },
                                  {
                                    "card": {
                                      "info": {
                                        "id": 6,
                                        "name": "NY Style Chopped Cheese ",
                                        "imageId":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLVj3_TrdH-AD8QDaQZS35MpJ4zJdWY6azqA&usqp=CAU",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "price": 9.99,
                                        "itemAttribute": {
                                          "vegClassifier": "VEG"
                                        },
                                      },
                                    }
                                  },
                                  {
                                    "card": {
                                      "info": {
                                        "id": 7,
                                        "name": "Double Cheeseburger",
                                        "imageId":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLVj3_TrdH-AD8QDaQZS35MpJ4zJdWY6azqA&usqp=CAU",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "price": 11.99,
                                        "itemAttribute": {
                                          "vegClassifier": "VEG"
                                        },
                                      },
                                    }
                                  },
                                  {
                                    "card": {
                                      "info": {
                                        "id": 8,
                                        "name": "Cheeseburger",
                                        "imageId":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLVj3_TrdH-AD8QDaQZS35MpJ4zJdWY6azqA&usqp=CAU",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "price": 11.99,
                                        "itemAttribute": {
                                          "vegClassifier": "VEG"
                                        },
                                      },
                                    }
                                  },
                                  {
                                    "card": {
                                      "info": {
                                        "id": 9,
                                        "name": "Philly Cheesesteak Sandwich",
                                        "imageId":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLVj3_TrdH-AD8QDaQZS35MpJ4zJdWY6azqA&usqp=CAU",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "price": 9.99,
                                        "itemAttribute": {
                                          "vegClassifier": "VEG"
                                        },
                                      },
                                    }
                                  }
                                ],
                                "type": "CATEGORY_TYPE_RECOMMENDED"
                              }
                            }
                          },
                          {
                            "card": {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                                "title": "Platter",
                                "itemCards": [
                                  {
                                    "card": {
                                      "info": {
                                        "id": 10,
                                        "name": "3pcs Tenders Platter Over Rice",
                                        "imageId":"https://cadryskitchen.com/wp-content/uploads/2015/12/falafel-bowl-hummus.jpg",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "price": 12.99,
                                        "itemAttribute": {
                                          "vegClassifier": "VEG"
                                        },
                                        // "defaultPrice": 16000,
                                      },
                                    }
                                  },
                                  {
                                    "card": {
                                      "info": {
                                        "id": 11,
                                        "name": "Falafel Platter Over Rice",
                                        "imageId":"https://cadryskitchen.com/wp-content/uploads/2015/12/falafel-bowl-hummus.jpg",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "price": 12.99,
                                        "itemAttribute": {
                                          "vegClassifier": "VEG"
                                        },
                                      },
                                    }
                                  },
                                  {
                                    "card": {
                                      "info": {
                                        "id": 12,
                                        "name": "Chicken Cheesesteak Sandwich",
                                        "imageId":"https://cadryskitchen.com/wp-content/uploads/2015/12/falafel-bowl-hummus.jpg",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "price": 12.99,
                                        "itemAttribute": {
                                          "vegClassifier": "VEG"
                                        },
                                      },
                                    }
                                  },
                                  {
                                    "card": {
                                      "info": {
                                        "id": 13,
                                        "name": "Fish Platter Over Rice",
                                        "imageId":"https://cadryskitchen.com/wp-content/uploads/2015/12/falafel-bowl-hummus.jpg",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "price": 12.99,
                                        "itemAttribute": {
                                          "vegClassifier": "VEG"
                                        },
                                      },
                                    }
                                  },
                                  {
                                    "card": {
                                      "info": {
                                        "id": 14,
                                        "name": "Lamb Platter Over Rice",
                                        "imageId":"https://cadryskitchen.com/wp-content/uploads/2015/12/falafel-bowl-hummus.jpg",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "price": 12.99,
                                        "itemAttribute": {
                                          "vegClassifier": "VEG"
                                        },
                                      },
                                    }
                                  },
                                  {
                                    "card": {
                                      "info": {
                                        "id": 15,
                                        "name": "Chicken Platter Over Rice",
                                        "imageId":"https://cadryskitchen.com/wp-content/uploads/2015/12/falafel-bowl-hummus.jpg",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "price": 18.99,
                                        "itemAttribute": {
                                          "vegClassifier": "VEG"
                                        },
                                      },
                                    }
                                  },
                                  {
                                    "card": {
                                      "info": {
                                        "id": 16,
                                        "name": "Mix Platter Over Rice",
                                        "imageId":"https://cadryskitchen.com/wp-content/uploads/2015/12/falafel-bowl-hummus.jpg",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "price": 12.99,
                                        "itemAttribute": {
                                          "vegClassifier": "VEG"
                                        },
                                      },
                                    }
                                  }
                                ],
                                "type": "CATEGORY_TYPE_RECOMMENDED"
                              }
                            }
                          },
                          {
                            "card": {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                                "title": "Combos",
                                "itemCards": [
                                  {
                                    "card": {
                                      "info": {
                                        "id": 17,
                                        "name": "2 Pieces of Fish and Fries",
                                        "imageId":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShaun4JnpfgQHkjYgc7tNUM87tluNjUfmu-w&usqp=CAU",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "price": 12.99,
                                        "itemAttribute": {
                                          "vegClassifier": "VEG"
                                        },
                                        // "defaultPrice": 16000,
                                      },
                                    }
                                  },
                                  {
                                    "card": {
                                      "info": {
                                        "id": 18,
                                        "name": "Chicken Cheesesteak and Fries Combo",
                                        "imageId":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShaun4JnpfgQHkjYgc7tNUM87tluNjUfmu-w&usqp=CAU",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "price": 13.99,
                                        "itemAttribute": {
                                          "vegClassifier": "VEG"
                                        },
                                      },
                                    }
                                  },
                                  {
                                    "card": {
                                      "info": {
                                        "id": 19,
                                        "name": "Double Cheeseburger and Fries Combo",
                                        "imageId":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShaun4JnpfgQHkjYgc7tNUM87tluNjUfmu-w&usqp=CAU",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "price": 12.99,
                                        "itemAttribute": {
                                          "vegClassifier": "VEG"
                                        },
                                      },
                                    }
                                  },
                                  {
                                    "card": {
                                      "info": {
                                        "id": 20,
                                        "name": "Chicken Sandwich and Fries Combo",
                                        "imageId":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShaun4JnpfgQHkjYgc7tNUM87tluNjUfmu-w&usqp=CAU",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "price": 13.99,
                                        "itemAttribute": {
                                          "vegClassifier": "VEG"
                                        },
                                      },
                                    }
                                  },
                                  {
                                    "card": {
                                      "info": {
                                        "id": 21,
                                        "name": "Fish Sandwich and Fries Combo",
                                        "imageId":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShaun4JnpfgQHkjYgc7tNUM87tluNjUfmu-w&usqp=CAU",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "price": 9.99,
                                        "itemAttribute": {
                                          "vegClassifier": "VEG"
                                        },
                                      },
                                    }
                                  },
                                  {
                                    "card": {
                                      "info": {
                                        "id": 22,
                                        "name": "Cheeseburger and Fries Combo",
                                        "imageId":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShaun4JnpfgQHkjYgc7tNUM87tluNjUfmu-w&usqp=CAU",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "price": 10.99,
                                        "itemAttribute": {
                                          "vegClassifier": "VEG"
                                        },
                                      },
                                    }
                                  },
                                  {
                                    "card": {
                                      "info": {
                                        "id": 23,
                                        "name": "NY Style Chopped Cheese and Fries Combo",
                                        "imageId":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShaun4JnpfgQHkjYgc7tNUM87tluNjUfmu-w&usqp=CAU",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "price":  13.99,
                                        "itemAttribute": {
                                          "vegClassifier": "VEG"
                                        },
                                      },
                                    }
                                  },
                                  {
                                    "card": {
                                      "info": {
                                        "id": 24,
                                        "name": "Philly Cheesesteak and Fries Combo",
                                        "imageId":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShaun4JnpfgQHkjYgc7tNUM87tluNjUfmu-w&usqp=CAU",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "price":  13.99,
                                        "itemAttribute": {
                                          "vegClassifier": "VEG"
                                        },
                                      },
                                    }
                                  },
                                  {
                                    "card": {
                                      "info": {
                                        "id": 25,
                                        "name": "Crispy spicy chicken sandwich combo",
                                        "imageId":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShaun4JnpfgQHkjYgc7tNUM87tluNjUfmu-w&usqp=CAU",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "price":  13.99,
                                        "itemAttribute": {
                                          "vegClassifier": "VEG"
                                        },
                                      },
                                    }
                                  }
                                ],
                                "type": "CATEGORY_TYPE_RECOMMENDED"
                              }
                            }
                          },
                          {
                            "card": {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                                "title": "Salads",
                                "itemCards": [
                                  {
                                    "card": {
                                      "info": {
                                        "id": 26,
                                        "name": "Fish Salad",
                                        "imageId":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmglESoehFJXMDr2mNvtBQVVu4W5RkEs3XuA&usqp=CAU",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "price": 11.99,
                                        "itemAttribute": {
                                          "vegClassifier": "VEG"
                                        },
                                        // "defaultPrice": 16000,
                                      },
                                    }
                                  },
                                  {
                                    "card": {
                                      "info": {
                                        "id": 28,
                                        "name": "Garden Salad",
                                        "imageId":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmglESoehFJXMDr2mNvtBQVVu4W5RkEs3XuA&usqp=CAU",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "price": 8.99,
                                        "itemAttribute": {
                                          "vegClassifier": "VEG"
                                        },
                                      },
                                    }
                                  },
                                  {
                                    "card": {
                                      "info": {
                                        "id": 29,
                                        "name": "Grill Chicken Salad",
                                        "imageId":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmglESoehFJXMDr2mNvtBQVVu4W5RkEs3XuA&usqp=CAU",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "price": 11.99,
                                        "itemAttribute": {
                                          "vegClassifier": "VEG"
                                        },
                                      },
                                    }
                                  },
                                  {
                                    "card": {
                                      "info": {
                                        "id": 30,
                                        "name": "Lamb Salad",
                                        "imageId":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmglESoehFJXMDr2mNvtBQVVu4W5RkEs3XuA&usqp=CAU",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "price": 11.99,
                                        "itemAttribute": {
                                          "vegClassifier": "VEG"
                                        },
                                      },
                                    }
                                  },
                                  {
                                    "card": {
                                      "info": {
                                        "id": 31,
                                        "name": "Mix Chicken and Lamb Salad",
                                        "imageId":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmglESoehFJXMDr2mNvtBQVVu4W5RkEs3XuA&usqp=CAU",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "price": 11.99,
                                        "itemAttribute": {
                                          "vegClassifier": "VEG"
                                        },
                                      },
                                    }
                                  }
                                ],
                                "type": "CATEGORY_TYPE_RECOMMENDED"
                              }
                            }
                          },
                          {
                            "card": {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                                "title": "Sides",
                                "itemCards": [
                                  {
                                    "card": {
                                      "info": {
                                        "id": 32,
                                        "name": "Falafel Balls",
                                        "imageId":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTV6Z0NRKDqPEzkahveHIuCfzgOsqiSjsu4g&usqp=CAU",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "price": 1.75,
                                        "itemAttribute": {
                                          "vegClassifier": "VEG"
                                        },
                                        // "defaultPrice": 16000,
                                      },
                                    }
                                  },
                                  {
                                    "card": {
                                      "info": {
                                        "id": 33,
                                        "name": "Onion Ring",
                                        "imageId":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTurSEHidYZ8LkO7zZYrRJwXwdgHkqnMgCcVg&usqp=CAU",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "price": 4.99,
                                        "itemAttribute": {
                                          "vegClassifier": "VEG"
                                        },
                                      },
                                    }
                                  },
                                  {
                                    "card": {
                                      "info": {
                                        "id": 34,
                                        "name": "Mac N Cheese Bites",
                                        "imageId":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu05oJzaxM8p3KGRnTXqtMRlCu--ONxqJS6w&usqp=CAU",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "price": 6.99,
                                        "itemAttribute": {
                                          "vegClassifier": "VEG"
                                        },
                                      },
                                    }
                                  },
                                  {
                                    "card": {
                                      "info": {
                                        "id": 35,
                                        "name": "Seasoned Fries",
                                        "imageId":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9orIJR7zMICOYAZ3bZ_Y9IGKJmDrD4Zk9Dw&usqp=CAU",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "price": 4.99,
                                        "itemAttribute": {
                                          "vegClassifier": "VEG"
                                        },
                                      },
                                    }
                                  },
                                  {
                                    "card": {
                                      "info": {
                                        "id": 36,
                                        "name": "Cheese Fries",
                                        "imageId":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9orIJR7zMICOYAZ3bZ_Y9IGKJmDrD4Zk9Dw&usqp=CAU",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "price": 5.99,
                                        "itemAttribute": {
                                          "vegClassifier": "VEG"
                                        },
                                      },
                                    }
                                  },
                                  {
                                    "card": {
                                      "info": {
                                        "id": 37,
                                        "name": "Mozzarella Sticks",
                                        "imageId":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0kvb-jYJ0wsHcii5Uvz-fjemq6_S7cMoXXw&usqp=CAU",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "price": 8.99,
                                        "itemAttribute": {
                                          "vegClassifier": "VEG"
                                        },
                                      },
                                    }
                                  }
                                ],
                                "type": "CATEGORY_TYPE_RECOMMENDED"
                              }
                            }
                          },
                          {
                            "card": {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                                "title": "Mains",
                                "itemCards": [
                                  {
                                    "card": {
                                      "info": {
                                        "id": 38,
                                        "name": "Wings",
                                        "imageId":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBBkCtF3YkVP4WLcyWOEf1AL8-EbE1KXwprvFyI_G2aQ6Z6nrNLg3e0FTwJ1257edvxoI&usqp=CAU",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "price": 9.99,
                                        "itemAttribute": {
                                          "vegClassifier": "VEG"
                                        },
                                        // "defaultPrice": 16000,
                                      },
                                    }
                                  },
                                ],
                                "type": "CATEGORY_TYPE_RECOMMENDED"
                              }
                            }
                          },
                          {
                            "card": {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                                "title": "Gyro",
                                "itemCards": [
                                  {
                                    "card": {
                                      "info": {
                                        "id": 39,
                                        "name": "Falafel Gyro",
                                        "imageId":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoFO7Tumhmforq8tLTo4UYwnMnX3ILCB_cjA&usqp=CAU",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "price": 10.99,
                                        "itemAttribute": {
                                          "vegClassifier": "VEG"
                                        },
                                        // "defaultPrice": 16000,
                                      },
                                    }
                                  },
                                  {
                                    "card": {
                                      "info": {
                                        "id": 40,
                                        "name": "Chicken Kofta Gyro",
                                        "imageId":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoFO7Tumhmforq8tLTo4UYwnMnX3ILCB_cjA&usqp=CAU",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "price": 10.99,
                                        "itemAttribute": {
                                          "vegClassifier": "VEG"
                                        },
                                      },
                                    }
                                  },
                                  {
                                    "card": {
                                      "info": {
                                        "id": 41,
                                        "name": "Mix Gyro",
                                        "imageId":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoFO7Tumhmforq8tLTo4UYwnMnX3ILCB_cjA&usqp=CAU",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "price": 10.99,
                                        "itemAttribute": {
                                          "vegClassifier": "VEG"
                                        },
                                      },
                                    }
                                  },
                                  {
                                    "card": {
                                      "info": {
                                        "id": 42,
                                        "name": "Chicken Gyro",
                                        "imageId":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoFO7Tumhmforq8tLTo4UYwnMnX3ILCB_cjA&usqp=CAU",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "price": 10.99,
                                        "itemAttribute": {
                                          "vegClassifier": "VEG"
                                        },
                                      },
                                    }
                                  },
                                  {
                                    "card": {
                                      "info": {
                                        "id": 43,
                                        "name": "Lamb Gyro",
                                        "imageId":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoFO7Tumhmforq8tLTo4UYwnMnX3ILCB_cjA&usqp=CAU",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "price": 10.99,
                                        "itemAttribute": {
                                          "vegClassifier": "VEG"
                                        },
                                      },
                                    }
                                  }
                                ],
                                "type": "CATEGORY_TYPE_RECOMMENDED"
                              }
                            }
                          },
                          {
                            "card": {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                                "title": "Tenders",
                                "itemCards": [
                                  {
                                    "card": {
                                      "info": {
                                        "id": 44,
                                        "name": "Tenders",
                                        "imageId":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBBkCtF3YkVP4WLcyWOEf1AL8-EbE1KXwprvFyI_G2aQ6Z6nrNLg3e0FTwJ1257edvxoI&usqp=CAU",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "price": 7.99,
                                        "itemAttribute": {
                                          "vegClassifier": "VEG"
                                        },
                                        // "defaultPrice": 16000,
                                      },
                                    }
                                  },
                                ],
                                "type": "CATEGORY_TYPE_RECOMMENDED"
                              }
                            }
                          },
                          {
                            "card": {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                                "title": "Nuggets",
                                "itemCards": [
                                  {
                                    "card": {
                                      "info": {
                                        "id": 45,
                                        "name": "Nuggets",
                                        "imageId":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHB_PEFwdzuaWXL9Yo81zKiKK3XEsJQfXmLQ&usqp=CAU",
                                        "inStock": 1,
                                        "isVeg": 0,
                                        "price": 4.99,
                                        "itemAttribute": {
                                          "vegClassifier": "VEG"
                                        },
                                        // "defaultPrice": 16000,
                                      },
                                    }
                                  },
                                ],
                                "type": "CATEGORY_TYPE_RECOMMENDED"
                              }
                            }
                          },
                          {
                            "card": {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                                "title": "Beverages",
                                "itemCards": [
                                  {
                                    "card": {
                                      "info": {
                                        "id": 46,
                                        "name": "Snapple",
                                        "imageId":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmglESoehFJXMDr2mNvtBQVVu4W5RkEs3XuA&usqp=CAU",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "price": 2.99,
                                        "itemAttribute": {
                                          "vegClassifier": "VEG"
                                        },
                                        // "defaultPrice": 16000,
                                      },
                                    }
                                  },
                                  {
                                    "card": {
                                      "info": {
                                        "id": 47,
                                        "name": "Water",
                                        "imageId":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmglESoehFJXMDr2mNvtBQVVu4W5RkEs3XuA&usqp=CAU",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "price": 1.99,
                                        "itemAttribute": {
                                          "vegClassifier": "VEG"
                                        },
                                      },
                                    }
                                  },
                                  {
                                    "card": {
                                      "info": {
                                        "id": 48,
                                        "name": "Soda",
                                        "imageId":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmglESoehFJXMDr2mNvtBQVVu4W5RkEs3XuA&usqp=CAU",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "price": 1.99,
                                        "itemAttribute": {
                                          "vegClassifier": "VEG"
                                        },
                                      },
                                    }
                                  }
                                ],
                                "type": "CATEGORY_TYPE_RECOMMENDED"
                              }
                            }
                          },
                          {
                            "card": {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                                "title": "Desserts",
                                "itemCards": [
                                  {
                                    "card": {
                                      "info": {
                                        "id": 49,
                                        "name": "Kulfi (Homemade Ice Cream",
                                        "imageId":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8v4VZYUMYo1tUwpNJuhlVPNVoFAoy9hSGAw&usqp=CAU",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "price": 4.99,
                                        "itemAttribute": {
                                          "vegClassifier": "VEG"
                                        },
                                        // "defaultPrice": 16000,
                                      },
                                    }
                                  },
                                  {
                                    "card": {
                                      "info": {
                                        "id": 50,
                                        "name": "Chocolate Fudge Cake",
                                        "imageId":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8v4VZYUMYo1tUwpNJuhlVPNVoFAoy9hSGAw&usqp=CAU",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "price": 4.99,
                                        "itemAttribute": {
                                          "vegClassifier": "VEG"
                                        },
                                      },
                                    }
                                  },
                                  {
                                    "card": {
                                      "info": {
                                        "id": 51,
                                        "name": "Red Velvet Cake ",
                                        "imageId":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8v4VZYUMYo1tUwpNJuhlVPNVoFAoy9hSGAw&usqp=CAU",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "price": 4.99,
                                        "itemAttribute": {
                                          "vegClassifier": "VEG"
                                        },
                                      },
                                    }
                                  },
                                  {
                                    "card": {
                                      "info": {
                                        "id": 52,
                                        "name": "Carrot Cake ",
                                        "imageId":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8v4VZYUMYo1tUwpNJuhlVPNVoFAoy9hSGAw&usqp=CAU",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "price": 4.99,
                                        "itemAttribute": {
                                          "vegClassifier": "VEG"
                                        },
                                      },
                                    }
                                  },
                                  {
                                    "card": {
                                      "info": {
                                        "id": 53,
                                        "name": "Tres Leche",
                                        "imageId":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8v4VZYUMYo1tUwpNJuhlVPNVoFAoy9hSGAw&usqp=CAU",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "price": 4.99,
                                        "itemAttribute": {
                                          "vegClassifier": "VEG"
                                        },
                                      },
                                    }
                                  }
                                ],
                                "type": "CATEGORY_TYPE_RECOMMENDED"
                              }
                            }
                          },
                          {
                            "card": {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                                "title": "Extra Cups of Sauce",
                                "itemCards": [
                                  {
                                    "card": {
                                      "info": {
                                        "id": 54,
                                        "name": "Chipotle",
                                        "imageId":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOhZdBSlj8Jm1o5oOOsBKVbV3eI_jueNFdxQ&usqp=CAU",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "price": 0.50,
                                        "itemAttribute": {
                                          "vegClassifier": "VEG"
                                        },
                                        // "defaultPrice": 16000,
                                      },
                                    }
                                  },
                                  {
                                    "card": {
                                      "info": {
                                        "id": 55,
                                        "name": "Honey Mustard",
                                        "imageId":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOhZdBSlj8Jm1o5oOOsBKVbV3eI_jueNFdxQ&usqp=CAU",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "price": 0.50,
                                        "itemAttribute": {
                                          "vegClassifier": "VEG"
                                        },
                                        // "defaultPrice": 16000,
                                      },
                                    }
                                  },
                                  {
                                    "card": {
                                      "info": {
                                        "id": 56,
                                        "name": "Ranch",
                                        "imageId":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOhZdBSlj8Jm1o5oOOsBKVbV3eI_jueNFdxQ&usqp=CAU",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "price": 0.50,
                                        "itemAttribute": {
                                          "vegClassifier": "VEG"
                                        },
                                        // "defaultPrice": 16000,
                                      },
                                    }
                                  },
                                  {
                                    "card": {
                                      "info": {
                                        "id": 57,
                                        "name": "BBQ Sauce",
                                        "imageId":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOhZdBSlj8Jm1o5oOOsBKVbV3eI_jueNFdxQ&usqp=CAU",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "price": 0.50,
                                        "itemAttribute": {
                                          "vegClassifier": "VEG"
                                        },
                                        // "defaultPrice": 16000,
                                      },
                                    }
                                  },
                                  {
                                    "card": {
                                      "info": {
                                        "id": 58,
                                        "name": "Hot Sauce",
                                        "imageId":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOhZdBSlj8Jm1o5oOOsBKVbV3eI_jueNFdxQ&usqp=CAU",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "price": 0.50,
                                        "itemAttribute": {
                                          "vegClassifier": "VEG"
                                        },
                                        // "defaultPrice": 16000,
                                      },
                                    }
                                  },
                                  {
                                    "card": {
                                      "info": {
                                        "id": 59,
                                        "name": "Blue Cheese",
                                        "imageId":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOhZdBSlj8Jm1o5oOOsBKVbV3eI_jueNFdxQ&usqp=CAU",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "price": 0.50,
                                        "itemAttribute": {
                                          "vegClassifier": "VEG"
                                        },
                                        // "defaultPrice": 16000,
                                      },
                                    }
                                  },
                                  {
                                    "card": {
                                      "info": {
                                        "id": 60,
                                        "name": "Green Sauce",
                                        "imageId":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOhZdBSlj8Jm1o5oOOsBKVbV3eI_jueNFdxQ&usqp=CAU",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "price": 0.50,
                                        "itemAttribute": {
                                          "vegClassifier": "VEG"
                                        },
                                        // "defaultPrice": 16000,
                                      },
                                    }
                                  },
                                  {
                                    "card": {
                                      "info": {
                                        "id": 61,
                                        "name": "White Sauce",
                                        "imageId":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOhZdBSlj8Jm1o5oOOsBKVbV3eI_jueNFdxQ&usqp=CAU",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "price": 0.50,
                                        "itemAttribute": {
                                          "vegClassifier": "VEG"
                                        },
                                        // "defaultPrice": 16000,
                                      },
                                    }
                                  },
                                ],
                                "type": "CATEGORY_TYPE_RECOMMENDED"
                              }
                            }
                          },
                          // {
                          //   "card": {
                          //     "card": {
                          //       "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                          //       "title": "Nuggets",
                          //       "itemCards": [
                          //         {
                          //           "card": {
                          //             "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                          //             "info": {
                          //               "id": "110844082",
                          //               "name": "2 Med Fries.",
                          //               "category": "Rs 129 Deal Of The Day",
                          //               "description": "The perfect crispy partner.",
                          //               "imageId": "vhhodglyalty92qtkobl",
                          //               "inStock": 1,
                          //               "isVeg": 1,
                          //               "price": 23000,
                          //               // "finalPrice": 12900,
                          //               // "variants": {},
                          //               // "variantsV2": {},
                          //               // "itemAttribute": {
                          //               //   "vegClassifier": "VEG"
                          //               // },
                          //               // "defaultPrice": 23000,
                          //               // "ribbon": {},
                          //               // "type": "ITEM",
                          //               // "offerTags": [
                          //               //   {}
                          //               // ],
                          //               // "itemBadge": {},
                          //               // "badgesV2": {},
                          //               // "itemNudgeType": "FinalPrice",
                          //               // "ratings": {
                          //               //   "aggregatedRating": {
                          //               //     "rating": "3.9",
                          //               //     "ratingCount": "104 ratings",
                          //               //     "ratingCountV2": "104"
                          //               //   }
                          //               // }
                          //             },
                          //           }
                          //         },
                          //       ],
                          //       "type": "CATEGORY_TYPE_RECOMMENDED"
                          //     }
                          //   }
                          // },
                        ]
                      }
                    }
                  }
                }
              ],
              "firstOffsetRequest": true,
              "isQCLink": false
            }
          
        setRestaurantData(data);
    }

    return restaurantData;
}

export default useRestaurantDetails;