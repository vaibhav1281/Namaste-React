import { useEffect, useState } from "react";
import SearchedRestaurentCard from "./SearchedRestaurentCard";
import SearchSuggestion from "./SearchSuggestion";
import { Link,  useNavigate, useSearchParams } from 'react-router-dom';
import { AiOutlineSearch, AiOutlineLeft } from "react-icons/ai";
import { MdOutlineClear } from "react-icons/md";

const Search = () => {

    const [searchText, setSearchText] = useState("");
    const [foods, setFood] = useState([]);
    const [suggestions, setSuggestions] = useState([])
    const [searchByRes, setSearchByRes] = useState([])
    const [isDish, setIsDish] = useState("")

    const navigate = useNavigate();
    const [searchParam] = useSearchParams();
    const searchName = searchParam.get('query')

    const handleClick = (name, type) => {
        setSearchText(name)
        setIsDish(type)
    }
    useEffect(() => {
        getSearchItemFoods()
    }, [])

    const getSearchItemFoods = async () => {
        const data = await fetch('https://corsproxy.org/?https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Flanding%2FPRE_SEARCH%3Flat%3D12.9351929%26lng%3D77.62448069999999');
        const json = await data.json();
        setFood(json?.data?.cards[1]?.card?.card?.imageGridCards?.info)
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            if (searchText.length >= 2) {
                getSearchSuggestions();
            } else {
                setSuggestions([]);
                navigate('/search');
            }
        }, 1000)
        return () => clearInterval(timer);
    }, [searchText])

    const getSearchSuggestions = async () => {
        const data = await fetch(`https://corsproxy.org/?https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Fsearch%2Fsuggest%3Flat%3D12.9351929%26lng%3D77.62448069999999%26str%3D${searchText}%26trackingId`);

        const json = await data.json();
        setSuggestions(json?.data?.suggestions)
    }

    useEffect(() => {
        if (searchName != null && searchText.length > 1) {
            getSearchByRes();
        }
    }, [searchName])

    const getSearchByRes = async () => {
        const data = await fetch(`https://corsproxy.org/?https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Fsearch%2Fv3%3Flat%3D12.9351929%26lng%3D77.62448069999999%26str%3D${searchName}%26trackingId%3D6fc61009-1efb-648d-79db-c0e7563eaaa6%26submitAction%3DENTER%26queryUniqueId%3Da525b536-b346-f2da-c968-3e3a60d24ab1`)
        const json = await data.json();
        if (isDish === 'RESTAURANT') {
            setSearchByRes(json?.data?.cards[1]?.groupedCard?.cardGroupMap?.RESTAURANT)
        }
        else {
            setSearchByRes(json?.data?.cards[1]?.groupedCard?.cardGroupMap?.DISH)
        }
    }

    const foodItems = foods.slice(0, 11)
    const getNameFromPopularCusines = (entityId) => {
        const startIndex = entityId.indexOf('=') + 1; 
        const endIndex = entityId.length;

        const extractedText = entityId.slice(startIndex, endIndex);
        setSearchText(extractedText);
    }

    return (
        <div className="w-full mt-[50px]">
            <div className='sticky top-20 left-0 pb-2 pt-12 bg-white z-2'>
                <div className='w-[70%] mx-auto border-2 border-black sm:w-3/4 h-12 xl:w-[860px] '>
                    <form onSubmit={(e) => { e.preventDefault() }}>
                        <div className='flex justify-center items-center w-full h-12'>
                            {
                                isDish && searchText &&
                                <Link to={'/search'}
                                    className="pl-2"
                                    onClick={() => {
                                        setSearchText("");
                                        setSearchByRes([]);
                                        setIsDish("");
                                    }}
                                >
                                    <AiOutlineLeft size={25} />
                                </Link>
                            }
                            <input
                                type="text"
                                className="w-full border-none outline-none font-medium px-4 leading-relaxed"
                                placeholder="Search for restaurants and food"
                                value={searchText}
                                onChange={(e) => {
                                    setSearchText(e.target.value);
                                }}
                            />
                            {
                                searchText == "" ? (
                                    <button
                                        className="p-2 m-2"
                                    >
                                        <AiOutlineSearch size={25} />
                                    </button>
                                ) :
                                    <Link
                                        to={'/search'}
                                        className="p-2 m-2"
                                        onClick={(e) => {
                                            setSearchText("")
                                        }}
                                    >
                                        <MdOutlineClear size={25} />
                                    </Link>
                            }
                        </div>
                    </form>
                </div>
            </div>
            <div className="w-10/12 mx-auto">
                {searchText === '' ?
                    <div className="w-[70%] mx-auto mt-6">
                        <h1 className='font-extrabold pl-4 text-[1.43rem] text-[#3d4152]'>Popular Cuisines</h1>
                        <div className="grid grid-cols-6 md:flex mt-2 pt-3 pr-4 pl-2 pb-6">
                            {
                                foodItems.map((foodItem) => (
                                    <div key={foodItem.id} className='pr-2 cursor-pointer' onClick={() => getNameFromPopularCusines(foodItem.entityId)}>
                                        <img
                                            src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/${foodItem.imageId}`}
                                            className="border-none"
                                            alt={`Image ${foodItem.id}`}
                                        />
                                    </div>
                                ))
                            }
                        </div>
                    </div> : ("")
                }
                {searchText === "" || searchName === searchText ? ("") :
                    <ul className="w-[70%] mx-auto mt-6">
                        {
                            suggestions.map((suggestion, index) => (
                                <li key={index}>
                                    <Link onClick={() => handleClick(suggestion.text, suggestion.type)} to={"/search?query=" + encodeURIComponent(suggestion.text).replace(/%20/g, '+')}>
                                        <SearchSuggestion {...suggestion} />
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                }</div>
                <div className='mx-8 sm:mx-20 md:mx-28 lg:mx-44 xl:mx-60 pt-3 pl-2'>
                {
                    searchText === searchName && searchText === "" || searchName == null ? ("") :
                        <ul>

                            <div className='flex gap-2 text-sm font-medium mb-1'>
                                <h1 className={isDish === 'RESTAURANT' ? 'bg-black text-white py-2 px-4 rounded-3xl' : 'p-2 border rounded-3xl'}>Restaurants</h1>
                                <h1 className={isDish === 'DISH' ? 'bg-black text-white py-2 px-4 rounded-3xl' : 'p-2 border rounded-3xl'}>Dishes</h1>
                            </div>

                            <div className='bg-gray-100 py-4 px-2 md:px-4 z-2'>
                                {isDish === 'RESTAURANT' && searchByRes !== undefined ? (
                                    <div>
                                        <div className='w-full md:w-1/2'>
                                            {searchByRes.cards && searchByRes.cards[0]?.card?.card?.info ? (
                                                <Link to={"/restraunt/" + searchByRes.cards[0]?.card?.card?.info.id}>
                                                 <SearchedRestaurentCard data={searchByRes.cards[0].card.card.info} />
                                                </Link>
                                                
                                            ) : (
                                                ("")
                                            )}
                                        </div>
                                        <h1 className='font-bold text-lg mt-8'>More Restaurants</h1>
                                        <div className='grid grid-cols-1 md:grid-cols-2 pt-4'>
                                            {searchByRes.cards && searchByRes.cards[1]?.card?.card?.restaurants?.map((res) => (
                                                <Link className='md:pr-2 pb-2' key={res.info.id} to={"/restraunt/" + res.info.id}>
                                                    <SearchedRestaurentCard data={res.info} />
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                ) : (
                                    <div>
                                        <div className='grid grid-cols-1 md:grid-cols-2 pt-4'>
                                            {searchByRes.cards && searchByRes.cards
                                                .slice(1) // Exclude the first item
                                                .filter((card, index, self) => {
                                                    // Filter out duplicates based on restaurant IDs
                                                    const id = card?.card?.card?.restaurant?.info?.id;
                                                    return id && index === self.findIndex((c) => c?.card?.card?.restaurant?.info?.id === id);
                                                }).map((res) => (
                                                    <Link className='pr-2 pb-2' key={res?.card?.card?.restaurant?.info?.id}
                                                        to={"/restraunt/" + res?.card?.card?.restaurant?.info?.id}>
                                                        <SearchedRestaurentCard data={res?.card?.card?.restaurant?.info} />
                                                    </Link>
                                                ))}
                                        </div>
                                    </div>
                                )}
                            </div>

                        </ul>
                }
            </div>

        </div>
    )
}
export default Search;
