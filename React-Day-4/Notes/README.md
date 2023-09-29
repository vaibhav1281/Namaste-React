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

        // Passing Props to RestaurantCard component

        name="Meghana Foods" 
        cuisines="Biriyani,North Indian,Asian" 
        stars="4.4 " 
        time="34"/>
        <RestaurantCard  

        // Passing Props to RestaurantCard component

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
const RestaurantCard = (props) =>{
  return(
    <div className="w-[200px]  border hover:shadow-lg hover:border-black p-1 bg-[#f1f0f0] cursor-pointer rounded-xl">
      <img className="w-[200px] h-[200px] rounded-xl" src="https://"/>
      
      <h3 className="">{props.name}</h3>
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

        // Passing Props to RestaurantCard component
        name="Meghana Foods" 
        cuisines="Biriyani,North Indian,Asian" 
        stars="4.4 " 
        time="34"/>
        <RestaurantCard  

        // Passing Props to RestaurantCard component
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
const RestaurantCard = ({name,cuisines,stars,time}) =>{
  return(
    <di>

      <!-- This is how we change the data Dynamically -->

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
const RestaurantCard = ({name,cuisines,stars,time}) =>{
  return(
    <div className="w-[200px]  border hover:shadow-lg hover:border-black p-1 bg-[#f1f0f0] cursor-pointer rounded-xl">
      <img className="w-[200px] h-[200px] rounded-xl" src="https://"/>
      
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

        // Passing Props to RestaurantCard component
        name="Meghana Foods" 
        cuisines="Biriyani,North Indian,Asian" 
        stars="4.4 " 
        time="34"/>
        <RestaurantCard  

        // Passing Props to RestaurantCard component
        name="KFC" 
        cuisines="Burgers,Fries,Chicken wings" 
        stars="4.5" 
        time="10"/>
        
      </div>

    </div>
  );
};

```

<p></p>

