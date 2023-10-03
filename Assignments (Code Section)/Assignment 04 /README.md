# Assignment 04 (Code)
```
 Build a Food Ordering App
  -> Think of a cool name for your app
  -> Build a AppLayout
  -> Build a Header Component with Logo & Nav Items & Cart
  -> Build a Body Component
     -> Build RestaurantList Component 
     -> Build RestaurantCard Component
        -> Use static date initially
        -> Make your card dynamic (pass in props)
           -> Props -passing arguments to a function - Use Destructuring & Spread operator ⚫ 
        -> Render your cards with dynamic data of restaurants
        -> Use Array.map to render all the restaurants
```

## Build a AppLayout
```
const AppLayout = () =>{
    return(
        <div>
            
            {/* Build a Header Component with Logo & Nav Items & Cart */}
            <Header />

            {/* Build a Body Component */}
            <Body/>

        </div>
    );
};
```

## Build a Header Component with Logo & Nav Items & Cart
```
const Header =() => {
    return(
        <div className="w-full relative flex flex-wrap">
            <div className="flex  relative justify-between w-[1333px] h-[70px] mx-auto">
                {/* logo */}
                <div className="h-[70px] w-[70px] ml-5 cursor-pointer">
                    <img src={logo}/>
                </div>

                {/* nav Items -Home , About, contact US, Cart */}
                <div className=" ">
                    <ul className="flex items-center space-x-6 m-5">
                        <li className=" font-normal text-lg ">
                            <a className="hover:bg-gray-400 hover:text-white px-3 py-1 rounded-full font-semibold"
                             href="#">Home</a>
                        </li>
                        <li className=" font-normal text-lg ">
                            <a className="hover:bg-gray-400 hover:text-white px-3 py-1 rounded-full font-semibold"
                             href="#">About</a>
                        </li>
                        <li className=" font-normal text-lg ">
                            <a className="hover:bg-gray-400 hover:text-white px-3 py-1 rounded-full font-semibold"
                             href="#">Contact Us</a>
                        </li>
                        {/* cart icon */}
                        
                        <li className="">
                            <a className="group relative"
                            href="#"><AiOutlineShoppingCart className="w-[24px] h-[24px]"/>
                            <div className="absolute w-full h-1 bg-gray-400 -bottom-1 hidden group-hover:block  transition-all duration-200 "></div>
                            </a>
                        </li>

                    </ul>
                </div>

            </div>
        </div>
    );
};
```

## Build a Body Component
```
const Body = () => {
    return (
        <div className="flex flex-wrap w-full">
            {/* shadow-lg border-2 border-gray-400 rounded-xl hover:border-black transition border-opacity-50 duration-300 ease-in-out */}
            {/* Search Bar */}
            <div className="w-full h-10 flex flex-wrap ">
                <div className="flex  items-center justify-center mb-8 w-[1400px] mx-auto relative">
                    <input
                    type="text" 
                    name="" 
                    id="" 
                    placeholder="Search..." 
                    className="shadow-lg border-2 border-gray-400 rounded-full py-2 px-4 w-[45%] mt-4 hover:border-black transition border-opacity-50 duration-300 ease-in-out"/>
                </div>
            </div>
              
            {/* Restaurant card Container */}
            <div className="w-full  mx-auto flex flex-wrap">
              <div className="w-[1200px] flex flex-wrap gap-5 mx-auto mt-14 justify-center items-center">
                {
                  RestaurantList.map((restaurant) => (
                    <RestaurantCard key={restaurant.info.id} restData={restaurant} />
                  ))
                }
              </div>
            </div>
            
            
        </div>
    );
};
```

## Build RestaurantCard Component
```
const RestaurantCard = (props) =>{
    const {restData} = props;
    const {name,costForTwo,cuisines,avgRating,areaName} = restData?.info;
    return(
        <div className="w-[275px] group hover:shadow-lg border-2 border-gray-400 rounded-xl hover:border-black transition border-opacity-50 duration-300 ease-in-out">
          <img 
          className="w-[275px] h-[275px] rounded-xl"
          src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"
           + 
          restData.info.cloudinaryImageId}/>
          <p className="p-3 py-1 text-lg font-bold leading-6 tracking-[-0.3px] text-[#02060CBF]">
          {
            name.length > 25 
            ? `${name.substr(0,25)}...`
            : name
          }
          </p>
          <p className="px-3 py-1 flex items-center gap-1 text-[#02060CBF]"><CiStar className=" bg-green-400 rounded-full"/> {avgRating}</p>
          
          <p className="px-3 py-1 text-[#02060C99] text-base leading-4 tracking-[-0.3px]">
          {
            cuisines.length > 3
              ? `${cuisines.slice(0, 3).join(", ")}...`
              : cuisines.join(", ")
          }
          </p>

          <p className="px-3 pb-2 text-[#02060C99] text-base leading-4 tracking-[-0.3px]">{areaName}</p>
        </div>
    );
};
```

## Build RestaurantList Component
```
const RestaurantList = [
    {
        "info": {
          "id": "65797",
          "name": "Leon's - Burgers & Wings (Leon Grill)",
          "cloudinaryImageId": "r4ufflqojich0r29efvc",
          "locality": "Koramangala",
          "areaName": "Koramangala",
          "costForTwo": "₹300 for two",
          "cuisines": [
            "American",
            "Snacks",
            "Turkish",
            "Portuguese",
            "Continental"
          ],
          "avgRating": 4.3,
          "feeDetails": {
            "restaurantId": "65797",
            "fees": [
              {
                "name": "BASE_DISTANCE",
                "fee": 2800
              },
              {
                "name": "BASE_TIME"
              },
              {
                "name": "ANCILLARY_SURGE_FEE"
              }
            ],
            "totalFee": 2800
          },
          "parentId": "371281",
          "avgRatingString": "4.3",
          "totalRatingsString": "10K+",
          "promoted": true,
          "adTrackingId": "cid=8644162~p=1~eid=0000018a-f582-9109-6a5c-8e7800ee0119~srvts=1696336089353~45995",
          "sla": {
            "deliveryTime": 19,
            "lastMileTravel": 1.4,
            "serviceability": "SERVICEABLE",
            "slaString": "19 mins",
            "lastMileTravelString": "1.4 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2023-10-04 04:00:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "textExtendedBadges": {
                
              },
              "textBased": {
                
              },
              "imageBased": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "20% OFF",
            "subHeader": "UPTO ₹50"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          
        },
        "cta": {
          "link": "swiggy://menu?restaurant_id=65797",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
        }
    },
    {
      "info": {
        "id": "25620",
        "name": "KFC",
        "cloudinaryImageId": "56c9ab92bd79745fd152a30fa2525426",
        "locality": "Intermediate Ring Road",
        "areaName": "Ejipura",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Burgers",
          "Biryani",
          "American",
          "Snacks",
          "Fast Food"
        ],
        "avgRating": 4.1,
        "feeDetails": {
          "restaurantId": "25620",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 3500
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 3500
        },
        "parentId": "547",
        "avgRatingString": "4.1",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 19,
          "lastMileTravel": 1.5,
          "serviceability": "SERVICEABLE",
          "slaString": "19 mins",
          "lastMileTravelString": "1.5 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-10-03 23:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "textBased": {
              
            },
            "imageBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "20% OFF",
          "subHeader": "UPTO ₹50"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "swiggy://menu?restaurant_id=25620",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
      }
    },
    {
      "info": {
        "id": "140887",
        "name": "McDonald's",
        "cloudinaryImageId": "ee5f8e06b300efc07c9fe3f4df40dfc4",
        "locality": "Mantri Avenue",
        "areaName": "Koramangala",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Burgers",
          "Beverages",
          "Cafe",
          "Desserts"
        ],
        "avgRating": 4.4,
        "feeDetails": {
          "restaurantId": "140887",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 2800
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 2800
        },
        "parentId": "630",
        "avgRatingString": "4.4",
        "totalRatingsString": "5K+",
        "sla": {
          "deliveryTime": 19,
          "lastMileTravel": 1.7,
          "serviceability": "SERVICEABLE",
          "slaString": "19 mins",
          "lastMileTravelString": "1.7 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-10-03 23:45:00",
          "opened": true
        },
        "badges": {
          "textExtendedBadges": [
            {
              "iconId": "guiltfree/GF_Logo_android_3x",
              "shortDescription": "options available",
              "fontColor": "#7E808C"
            }
          ]
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {
          
        },
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "textBased": {
              
            },
            "imageBased": {
              
            },
            "textExtendedBadges": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "",
                    "shortDescription": "options available",
                    "fontColor": "#7E808C",
                    "iconId": "guiltfree/GF_Logo_android_3x"
                  }
                }
              ]
            }
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "swiggy://menu?restaurant_id=140887",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
      }
    },
    {
      "info": {
        "id": "41913",
        "name": "Chinita Real Mexican Food",
        "cloudinaryImageId": "hcldbmf9owc3grvbenhx",
        "locality": "Koramangala",
        "areaName": "Koramangala",
        "costForTwo": "₹750 for two",
        "cuisines": [
          "Mexican",
          "Salads",
          "Desserts",
          "Beverages"
        ],
        "avgRating": 4.4,
        "feeDetails": {
          "restaurantId": "41913",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 3500
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 3500
        },
        "parentId": "5064",
        "avgRatingString": "4.4",
        "totalRatingsString": "5K+",
        "sla": {
          "deliveryTime": 19,
          "lastMileTravel": 0.4,
          "serviceability": "SERVICEABLE",
          "slaString": "19 mins",
          "lastMileTravelString": "0.4 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-10-03 23:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "v1669879258/GFF_logo_new_xbycg6.png",
              "description": "gourmet"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "textExtendedBadges": {
              
            },
            "textBased": {
              
            },
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "imageId": "v1669879258/GFF_logo_new_xbycg6.png",
                    "description": "gourmet"
                  }
                }
              ]
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "30% OFF",
          "subHeader": "UPTO ₹75"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "swiggy://menu?restaurant_id=41913",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
      }
    },
    {
      "info": {
        "id": "38634",
        "name": "Third Wave Coffee",
        "cloudinaryImageId": "d96267738c19ec62acb5390e52faba41",
        "locality": "Koramangala",
        "areaName": "Koramangala",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Beverages",
          "Bakery",
          "Continental"
        ],
        "avgRating": 4.4,
        "feeDetails": {
          "restaurantId": "38634",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 2800
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 2800
        },
        "parentId": "274773",
        "avgRatingString": "4.4",
        "totalRatingsString": "5K+",
        "promoted": true,
        "adTrackingId": "cid=8578703~p=2~eid=0000018a-f582-9109-6a5c-8e7900ee0205~srvts=1696336089353~45995",
        "sla": {
          "deliveryTime": 20,
          "lastMileTravel": 0.8,
          "serviceability": "SERVICEABLE",
          "slaString": "20 mins",
          "lastMileTravelString": "0.8 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-10-04 03:00:00",
          "opened": true
        },
        "badges": {
          "textExtendedBadges": [
            {
              "iconId": "guiltfree/GF_Logo_android_3x",
              "shortDescription": "options available",
              "fontColor": "#7E808C"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textExtendedBadges": {
              "badgeObject": [
                {
                  "attributes": {
                    "fontColor": "#7E808C",
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "description": "",
                    "shortDescription": "options available"
                  }
                }
              ]
            },
            "textBased": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "20% OFF",
          "subHeader": "UPTO ₹50"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "swiggy://menu?restaurant_id=38634",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
      }
    },
    {
      "info": {
        "id": "5934",
        "name": "Burger King",
        "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
        "locality": "Koramangala",
        "areaName": "Koramangala",
        "costForTwo": "₹350 for two",
        "cuisines": [
          "Burgers",
          "American"
        ],
        "avgRating": 4.2,
        "feeDetails": {
          "restaurantId": "5934",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 2800
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 2800
        },
        "parentId": "166",
        "avgRatingString": "4.2",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 18,
          "lastMileTravel": 1.4,
          "serviceability": "SERVICEABLE",
          "slaString": "18 mins",
          "lastMileTravelString": "1.4 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-10-04 05:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textExtendedBadges": {
              
            },
            "textBased": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "60% OFF",
          "subHeader": "UPTO ₹120"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "swiggy://menu?restaurant_id=5934",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
      }
    },
    {
      "info": {
        "id": "660675",
        "name": "Cafe Amudham",
        "cloudinaryImageId": "c4314ce3710e1cc462cef8d978a58ffc",
        "locality": "5th Block Kormangala",
        "areaName": "Koramangala",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "South Indian"
        ],
        "avgRating": 4.6,
        "veg": true,
        "feeDetails": {
          "restaurantId": "660675",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 2800
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 2800
        },
        "parentId": "396620",
        "avgRatingString": "4.6",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 17,
          "lastMileTravel": 0.7,
          "serviceability": "SERVICEABLE",
          "slaString": "17 mins",
          "lastMileTravelString": "0.7 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-10-03 23:59:00",
          "opened": true
        },
        "badges": {
          "textExtendedBadges": [
            {
              "iconId": "guiltfree/GF_Logo_android_3x",
              "shortDescription": "options available",
              "fontColor": "#7E808C"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "textBased": {
              
            },
            "imageBased": {
              
            },
            "textExtendedBadges": {
              "badgeObject": [
                {
                  "attributes": {
                    "fontColor": "#7E808C",
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "description": "",
                    "shortDescription": "options available"
                  }
                }
              ]
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "20% OFF",
          "subHeader": "UPTO ₹50"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "swiggy://menu?restaurant_id=660675",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
      }
    },
    {
      "info": {
        "id": "158855",
        "name": "Candice's Gourmet Sandwiches & Wraps",
        "cloudinaryImageId": "hpvifptiufwr5ntqc4x1",
        "locality": "5th Block",
        "areaName": "Koramangala",
        "costForTwo": "₹600 for two",
        "cuisines": [
          "Continental",
          "American",
          "Salads",
          "Desserts",
          "Beverages",
          "Healthy Food"
        ],
        "avgRating": 4.4,
        "feeDetails": {
          "restaurantId": "158855",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 3500
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 3500
        },
        "parentId": "8238",
        "avgRatingString": "4.4",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 20,
          "lastMileTravel": 0.4,
          "serviceability": "SERVICEABLE",
          "slaString": "20 mins",
          "lastMileTravelString": "0.4 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-10-03 23:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "v1669879258/GFF_logo_new_xbycg6.png",
              "description": "gourmet"
            }
          ],
          "textExtendedBadges": [
            {
              "iconId": "guiltfree/GF_Logo_android_3x",
              "shortDescription": "options available",
              "fontColor": "#7E808C"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "imageId": "v1669879258/GFF_logo_new_xbycg6.png",
                    "description": "gourmet"
                  }
                }
              ]
            },
            "textExtendedBadges": {
              "badgeObject": [
                {
                  "attributes": {
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "description": "",
                    "shortDescription": "options available",
                    "fontColor": "#7E808C"
                  }
                }
              ]
            },
            "textBased": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "30% OFF",
          "subHeader": "UPTO ₹75"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "swiggy://menu?restaurant_id=158855",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
      }
    },
    {
      "info": {
        "id": "656392",
        "name": "Subway",
        "cloudinaryImageId": "1ace5fa65eff3e1223feb696c956b38b",
        "locality": "1st Block",
        "areaName": "Koramangala",
        "costForTwo": "₹350 for two",
        "cuisines": [
          "Salads",
          "Snacks",
          "Desserts",
          "Beverages"
        ],
        "avgRating": 4,
        "feeDetails": {
          "restaurantId": "656392",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 2800
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 2800
        },
        "parentId": "2",
        "avgRatingString": "4.0",
        "totalRatingsString": "1K+",
        "promoted": true,
        "adTrackingId": "cid=8657891~p=4~eid=0000018a-f582-9109-6a5c-8e7b00ee0445~srvts=1696336089353~45995",
        "sla": {
          "deliveryTime": 17,
          "lastMileTravel": 1.7,
          "serviceability": "SERVICEABLE",
          "slaString": "17 mins",
          "lastMileTravelString": "1.7 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-10-04 03:00:00",
          "opened": true
        },
        "badges": {
          "textExtendedBadges": [
            {
              "iconId": "guiltfree/GF_Logo_android_3x",
              "shortDescription": "options available",
              "fontColor": "#7E808C"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textExtendedBadges": {
              "badgeObject": [
                {
                  "attributes": {
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "description": "",
                    "shortDescription": "options available",
                    "fontColor": "#7E808C"
                  }
                }
              ]
            },
            "textBased": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "50% OFF",
          "subHeader": "UPTO ₹100"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "swiggy://menu?restaurant_id=656392",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
      }
    },
    {
      "info": {
        "id": "437907",
        "name": "Gopaljee Cafe",
        "cloudinaryImageId": "rp5nc2bsvkpvy1ts8vug",
        "locality": "Koramangala",
        "areaName": "Koramangala",
        "costForTwo": "₹350 for two",
        "cuisines": [
          "North Indian",
          "Snacks",
          "Beverages"
        ],
        "avgRating": 4.3,
        "veg": true,
        "feeDetails": {
          "restaurantId": "437907",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 2800
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 2800
        },
        "parentId": "89083",
        "avgRatingString": "4.3",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 19,
          "lastMileTravel": 1.6,
          "serviceability": "SERVICEABLE",
          "slaString": "19 mins",
          "lastMileTravelString": "1.6 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-10-03 23:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "textExtendedBadges": {
              
            },
            "textBased": {
              
            },
            "imageBased": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "20% OFF",
          "subHeader": "UPTO ₹50"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "swiggy://menu?restaurant_id=437907",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
      }
    },
    {
      "info": {
        "id": "690730",
        "name": "Omm Nom Nomm",
        "cloudinaryImageId": "0b6ccedf0af57a82ecea2910397bb947",
        "locality": "BTM Layout",
        "areaName": "Koramangala",
        "costForTwo": "₹600 for two",
        "cuisines": [
          "Ice Cream",
          "Desserts"
        ],
        "avgRating": 4.8,
        "feeDetails": {
          "restaurantId": "690730",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 3500
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 3500
        },
        "parentId": "21184",
        "avgRatingString": "4.8",
        "totalRatingsString": "100+",
        "sla": {
          "deliveryTime": 15,
          "lastMileTravel": 1.1,
          "serviceability": "SERVICEABLE",
          "slaString": "15 mins",
          "lastMileTravelString": "1.1 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-10-03 23:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {
          
        },
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textExtendedBadges": {
              
            },
            "textBased": {
              
            }
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "swiggy://menu?restaurant_id=690730",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
      }
    },
    {
      "info": {
        "id": "168849",
        "name": "Mizo kitchen",
        "cloudinaryImageId": "kgxafdlrmmtcysmqfdru",
        "locality": "5th A  block",
        "areaName": "Koramangala",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "Fast Food",
          "Beverages",
          "Chinese"
        ],
        "avgRating": 4.4,
        "feeDetails": {
          "restaurantId": "168849",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 2800
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 2800
        },
        "parentId": "21279",
        "avgRatingString": "4.4",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 19,
          "lastMileTravel": 0.7,
          "serviceability": "SERVICEABLE",
          "slaString": "19 mins",
          "lastMileTravelString": "0.7 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-10-03 22:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {
          
        },
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textExtendedBadges": {
              
            },
            "textBased": {
              
            }
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "swiggy://menu?restaurant_id=168849",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
      }
    },
    {
      "info": {
        "id": "408386",
        "name": "NOTO - Healthy Ice Cream",
        "cloudinaryImageId": "544f9e6dce1efb7054e4ac5d98aba049",
        "locality": "Ejipura",
        "areaName": "Koramangla",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "Ice Cream"
        ],
        "avgRating": 4.4,
        "veg": true,
        "feeDetails": {
          "restaurantId": "408386",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 3500
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 3500
        },
        "parentId": "7158",
        "avgRatingString": "4.4",
        "totalRatingsString": "1K+",
        "promoted": true,
        "adTrackingId": "cid=8721603~p=5~eid=0000018a-f582-9109-6a5c-8e7c00ee0518~srvts=1696336089353~45995",
        "sla": {
          "deliveryTime": 12,
          "lastMileTravel": 0.7,
          "serviceability": "SERVICEABLE",
          "slaString": "12 mins",
          "lastMileTravelString": "0.7 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-10-04 05:55:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ],
          "textExtendedBadges": [
            {
              "iconId": "guiltfree/GF_Logo_android_3x",
              "shortDescription": "brand",
              "fontColor": "#7E808C"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "textBased": {
              
            },
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "imageId": "v1695133679/badges/Pure_Veg111.png",
                    "description": "pureveg"
                  }
                }
              ]
            },
            "textExtendedBadges": {
              "badgeObject": [
                {
                  "attributes": {
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "description": "",
                    "shortDescription": "brand",
                    "fontColor": "#7E808C"
                  }
                }
              ]
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "50% OFF",
          "subHeader": "UPTO ₹100"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "swiggy://menu?restaurant_id=408386",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
      }
    },
    {
      "info": {
        "id": "662918",
        "name": "Kanti Sweets",
        "cloudinaryImageId": "4eec9e19d5b7b41a5095b5a8a531a0db",
        "locality": "BTM Layout",
        "areaName": "Kormangala 6Th Block",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "Sweets"
        ],
        "avgRating": 4.4,
        "veg": true,
        "feeDetails": {
          "restaurantId": "662918",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 2800
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 2800
        },
        "parentId": "4700",
        "avgRatingString": "4.4",
        "totalRatingsString": "500+",
        "sla": {
          "deliveryTime": 11,
          "lastMileTravel": 0.1,
          "serviceability": "SERVICEABLE",
          "slaString": "11 mins",
          "lastMileTravelString": "0.1 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-10-03 23:15:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {
          
        },
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textExtendedBadges": {
              
            },
            "textBased": {
              
            }
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "swiggy://menu?restaurant_id=662918",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
      }
    },
    {
      "info": {
        "id": "232",
        "name": "The Hole in the Wall Cafe",
        "cloudinaryImageId": "q74rmwr7qeyr7q4sydbb",
        "locality": "Koramangala",
        "areaName": "Koramangala",
        "costForTwo": "₹257 for two",
        "cuisines": [
          "American"
        ],
        "avgRating": 4.3,
        "feeDetails": {
          "restaurantId": "232",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 2800
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 2800
        },
        "parentId": "11538",
        "avgRatingString": "4.3",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 16,
          "lastMileTravel": 0.4,
          "serviceability": "SERVICEABLE",
          "slaString": "16 mins",
          "lastMileTravelString": "0.4 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-10-03 20:30:00",
          "opened": true
        },
        "badges": {
          "textExtendedBadges": [
            {
              "iconId": "guiltfree/GF_Logo_android_3x",
              "shortDescription": "options available",
              "fontColor": "#7E808C"
            }
          ]
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {
          
        },
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "textExtendedBadges": {
              "badgeObject": [
                {
                  "attributes": {
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "description": "",
                    "shortDescription": "options available",
                    "fontColor": "#7E808C"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "imageBased": {
              
            }
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "swiggy://menu?restaurant_id=232",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
      }
    },
    {
      "info": {
        "id": "592285",
        "name": "Shyamji's Chole Bhature",
        "cloudinaryImageId": "ugxnshnc5dctksihttvq",
        "locality": "5th Block",
        "areaName": "Koramangala",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "North Indian",
          "Beverages",
          "Snacks"
        ],
        "avgRating": 4.3,
        "veg": true,
        "feeDetails": {
          "restaurantId": "592285",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 2800
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 2800
        },
        "parentId": "255424",
        "avgRatingString": "4.3",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 12,
          "lastMileTravel": 0.4,
          "serviceability": "SERVICEABLE",
          "slaString": "12 mins",
          "lastMileTravelString": "0.4 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-10-03 20:45:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {
          
        },
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "textBased": {
              
            },
            "imageBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "swiggy://menu?restaurant_id=592285",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
      }
    }
];
```
