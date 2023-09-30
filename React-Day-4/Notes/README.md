## Props 
<p>* Prop is short for of Property.</p>
<p>* Props(Properties) are something which we can pass to the Components.</p>
<p>* If we want of pass Data Dynamically to a component, we pass it as "prop".</p>
<p>* Simplly put, Props are argument to the functionn.</p>
<p>Passing prop to a component === Passing some argument to function</p>

<h3>How we can do:</h3>
<p>Below we passed the "props" to RestaurantCard component</p>

```

const Body = () => {
  return(
    <div className="body w-11/10 flex flex-col p-[10px]">
      {/* restaurant Container */}
      <div className=" flex flex-wrap justify-center gap-3">

        <RestaurantCard 

        // Passing Props to RestaurantCard component ⬇️⬇️⬇️⬇️

        name="Meghana Foods" 
        cuisines="Biriyani,North Indian,Asian" 
        stars="4.4 " 
        time="34"/>
        <RestaurantCard  

        // Passing Props to RestaurantCard component⬇️⬇️⬇️⬇️

        name="KFC" 
        cuisines="Burgers,Fries,Chicken wings" 
        stars="4.5" 
        time="10"/>
        
      </div>

    </div>
  );
};


```

<h3>NOw, React will take all the props/properties and warp inside an object and it will pass over to the other component like this:</h3>

```
 //                    ⬇⬇️⬇️⬇
const RestaurantCard = (props) =>{
  return(
    <div>

    <!-- This is how we change the data Dynamically -->

      <h3>{props.name}</h3>
      <h4>{props.cuisines}</h4>
      <h4>{props.stars} stars</h4>
      <h4>{props.time} minutes</h4>
    </div>
  );
};

```

<h3>Complete code with styling</h3>

```

//                    ⬇⬇️⬇️⬇
const RestaurantCard = (props) =>{
  return(
    <div className="w-[200px]  border hover:shadow-lg hover:border-black p-1 bg-[#f1f0f0] cursor-pointer rounded-xl">
      <img className="w-[200px] h-[200px] rounded-xl" src="https://"/>

         // ⬇⬇️⬇️⬇
      <h3>{props.name}</h3>
        //  ⬇⬇️⬇️⬇
      <h4>{props.cuisines}</h4>
        //  ⬇⬇️⬇️⬇
      <h4>{props.stars} stars</h4>
         // ⬇⬇️⬇️⬇
      <h4>{props.time} minutes</h4>
    </div>
  );
};

const Body = () => {
  return(
    <div className="body w-11/10 flex flex-col p-[10px]">

      <div className="w-full h-10 flex items-center justify-center mb-8">
        <input
            type="text" 
            name="" 
            id="" 
            placeholder="Search..." 
            className="border border-gray-500 rounded py-2 px-4 w-[45%] mt-4"
            
        />
      </div>


      {/* restaurant Container */}
      <div className=" flex flex-wrap justify-center gap-3">

        <RestaurantCard 

        // Passing Props to RestaurantCard component ⬇⬇️⬇️⬇
        name="Meghana Foods" 
        cuisines="Biriyani,North Indian,Asian" 
        stars="4.4 " 
        time="34"/>
        <RestaurantCard  

        // Passing Props to RestaurantCard component ⬇⬇️⬇️⬇
        name="KFC" 
        cuisines="Burgers,Fries,Chicken wings" 
        stars="4.5" 
        time="10"/>
        
      </div>

    </div>
  );
};

```
<h2>Or</h2><h3>We can do <code>Destructuring on fly</code> like this:</h3>

```
                      // Destructuring⬇⬇️⬇️⬇
const RestaurantCard = ({name,cuisines,stars,time}) =>{
  return(
    <di>

      <!-- This is how we change the data Dynamically -->
       //⬇⬇️⬇️⬇
      <h3>{name}</h3>
      <h4>{cuisines}</h4>
      <h4>{stars} stars</h4>
      <h4>{time} minutes</h4>

    </di>
  );
};

```

<h3>Complete code with styling using Destructuring</h3>

```
                   //          ⬇⬇️⬇️⬇
const RestaurantCard = ({name,cuisines,stars,time}) =>{
  return(
    <div className="w-[200px]  border hover:shadow-lg hover:border-black p-1 bg-[#f1f0f0] cursor-pointer rounded-xl">
      <img className="w-[200px] h-[200px] rounded-xl" src="https://"/>
       //⬇⬇️⬇️⬇
      <h3>{name}</h3>
      <h4>{cuisines}</h4>
      <h4>{stars} stars</h4>
      <h4>{time} minutes</h4>
    </div>
  );
};

const Body = () => {
  return(
    <div className="body w-11/10 flex flex-col p-[10px]">

      <div className="w-full h-10 flex items-center justify-center mb-8">
        <input
            type="text" 
            name="" 
            id="" 
            placeholder="Search..." 
            className="border border-gray-500 rounded py-2 px-4 w-[45%] mt-4"
            
        />
      </div>


      {/* restaurant Container */}
      <div className=" flex flex-wrap justify-center gap-3">

        <RestaurantCard 

        // Passing Props to RestaurantCard component ⬇⬇️⬇️⬇
        name="Meghana Foods" 
        cuisines="Biriyani,North Indian,Asian" 
        stars="4.4 " 
        time="34"/>
        <RestaurantCard  

        // Passing Props to RestaurantCard component ⬇⬇️⬇️⬇
        name="KFC" 
        cuisines="Burgers,Fries,Chicken wings" 
        stars="4.5" 
        time="10"/>
        
      </div>

    </div>
  );
};

```

<h2>OR Like this</h2>

```
const RestaurantCard = (props) =>{

  <!-- We can also do like this ⬇️ -->

 const {name,cuisines,stars,time} = props; /** ⬅️⬅️*/
  return(
    <div className="w-[200px]  border hover:shadow-lg hover:border-black p-1 bg-[#f1f0f0] cursor-pointer rounded-xl">
      <img className="w-[200px] h-[200px] rounded-xl" src=""/>

        //  ⬇⬇️⬇️⬇ 
      <h3>{props.name}</h3>
      <h4>{props.cuisines}</h4>
      <h4>{props.stars} stars</h4>
      <h4>{props.time} minutes</h4>
    </div>
  );
};

const Body = () => {
  return(
    <div className="body w-11/10 flex flex-col p-[10px]">

      <div className="w-full h-10 flex items-center justify-center mb-8">
        <input
            type="text" 
            name="" 
            id="" 
            placeholder="Search..." 
            className="border border-gray-500 rounded py-2 px-4 w-[45%] mt-4"
            
        />
      </div>


      {/* restaurant Container */}
      <div className=" flex flex-wrap justify-center gap-3">

        <RestaurantCard 
        // Passing Props to RestaurantCard component ⬇⬇️⬇️⬇
        name="Meghana Foods" 
        cuisines="Biriyani,North Indian,Asian" 
        stars="4.4 " 
        time="34"/>
        <RestaurantCard  
        // Passing Props to RestaurantCard component ⬇⬇️⬇️⬇
        name="KFC" 
        cuisines="Burgers,Fries,Chicken wings" 
        stars="4.5" 
        time="10"/>
        
      </div>

    </div>
  );
};

```

<h1>What if we have large amount of data in form of array/list, then how we use it</h1>
<h3>The Data is ⬇️⬇️</h3>

```
const resList = [
  {
    "info": {
      "id": "375041",
      "name": "Andhra Gunpowder",
      "cloudinaryImageId": "byilgyrcfz690ryoasww",
      "locality": "6th Block",
      "areaName": "Koramangala",
      "costForTwo": "₹350 for two",
      "cuisines": [
        "Andhra",
        "Biryani",
        "South Indian"
      ],
      "avgRating": 4.3,
      "feeDetails": {
        "restaurantId": "375041",
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
      "parentId": "10496",
      "avgRatingString": "4.3",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 15,
        "lastMileTravel": 0.1,
        "serviceability": "SERVICEABLE",
        "slaString": "15 mins",
        "lastMileTravelString": "0.1 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-10-01 01:00:00",
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
          "textBased": {
            
          },
          "textExtendedBadges": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "",
                  "fontColor": "#7E808C",
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "options available"
                }
              }
            ]
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹100 OFF",
        "subHeader": "ABOVE ₹299",
        "discountTag": "FLAT DEAL"
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
      "link": "https://www.swiggy.com/restaurants/andhra-gunpowder-6th-block-koramangala-bangalore-375041",
      "type": "WEBLINK"
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
            "fee": 4200
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 4200
      },
      "parentId": "547",
      "avgRatingString": "4.1",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 18,
        "lastMileTravel": 1.5,
        "serviceability": "SERVICEABLE",
        "slaString": "18 mins",
        "lastMileTravelString": "1.5 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-09-30 23:00:00",
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
          "textBased": {
            
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
      "link": "https://www.swiggy.com/restaurants/kfc-intermediate-ring-road-ejipura-bangalore-25620",
      "type": "WEBLINK"
    }
  },

  {/* And more data✅  */}

];
```

<h2>This is how we pass the data in Re-usable Component</h2>

```

//                      ⬇️⬇️
const RestaurantCard = (props) =>{
  const {resData} = props; {/* ⬅️⬅️ */}
  
  return(
    <div className="w-[200px]  border hover:shadow-lg hover:border-black p-1 bg-[#f1f0f0] cursor-pointer rounded-xl">
//                                             ⬇⬇️Here is the CND libk for image, that used in cards and it'll same for every restraCard⬇⬇️
      <img className="w-[200px] h-[200px] rounded-xl" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+ resData.info.cloudinaryImageId}/>
//                                                                                                                                           ⬆️Here is the ID, that's different for every restraCard⬆️
      //                              ⬇️⬇️⬇️⬇️⬇️⬇️
      <h3 className=" font-semibold">{resData.info.name}</h3>
      <h4 className="  font-normal">{resData.info.cuisines.join(", ")}</h4>
      <h4 className=" text-base">{resData.info.avgRating} stars</h4>
      <h4 className=" text-base">{resData.info.sla.deliveryTime} mins</h4>
      <h4 className=" text-base">{resData.info.costForTwo}</h4>
    </div>
  );
};

```

<h2>And this is how we use the Data</h2>

```
const Body = () => {
  return(
    <div className="body w-11/10 flex flex-col p-[10px]">

      <div className="w-full h-10 flex items-center justify-center mb-8">
        <input
            type="text" 
            name="" 
            id="" 
            placeholder="Search..." 
            className="border border-gray-500 rounded py-2 px-4 w-[45%] mt-4"
            
        />
      </div>


      {/* restaurant Container */}
      <div className=" flex flex-wrap justify-center gap-3">

        //                  ⬇️⬇️⬇️⬇️⬇️  This is how we use it
        <RestaurantCard  resData={resList[0]}/>
        <RestaurantCard  resData={resList[1]}/>

          {/* more carde✅ */}
      </div>

    </div>
  );
};

```


<p></p>

