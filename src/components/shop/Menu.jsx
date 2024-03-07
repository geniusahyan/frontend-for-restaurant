import React, { useEffect, useState } from 'react'
import Card from '../Card';
import { getMenu } from '../../api/route';
    

const Menu = () => {

    const [menu, setmenu] = useState([]);
    const [filter, setfilter] = useState([]);
    const [category, setCategory] = useState('all');
    const [sortOption, setSortOption] = useState('default');
    const [currentPage, setCurrentPage] = useState(1);
    const [ItemPerPage, setItemPerPage] = useState(8)

    useEffect(() => {
        const fetchData = async () => {
            const data = await getMenu();
            setmenu(data);
            setfilter(data);
        }
        fetchData();
    }, [])
    

    const filtered = (category) =>{
        let filteredItem = null;
        if(category === 'all'){
            filteredItem = menu;
        }
        else{
            filteredItem = menu.filter(item => item.category === category);
        }
        setfilter(filteredItem);
        setCategory(category)
        setCurrentPage(1)
    }

    const showAll = ()=>{
        setfilter(menu);
        setCategory('all');
        setCurrentPage(1)
    }

    // sorting based on A-Z , Z-A, Low-High pricing;
    const sortListing =(option)=>{
        setSortOption(option);
        let sorted;
        
        switch(option){
            case "az":  
                sorted= filter.sort((a,b)=>(a.name > b.name)?1:-1)  
                break;
            case "za":
                sorted= filter.sort((a,b)=> (a.name < b.name)?1:-1)  
                break; 
            case "lowhigh":
                sorted = filter.sort((a,b)=> a.price - b.price)
                break;
            case "highlow":
                sorted = filter.sort((a,b)=> b.price - a.price)
                break;
            default:
                sorted = filter;
        }
        setfilter(sorted);
        setCurrentPage(1);
    }

    const indexOfLastItem = currentPage * ItemPerPage ;
    const indexOfFirstItem = indexOfLastItem - ItemPerPage;
    const currentItems = filter.slice(indexOfFirstItem, indexOfLastItem);
    const paginate = (pageNumber)=> setCurrentPage(pageNumber);

  return (
    <div>
        <div className=' max-w-screen-2xl mx-auto xl:px-24 px-4 bg-gradient-to-r from-base-300 from-0% to-base-50 to-100% '>
            <div className="py-48 flex justify-center items-center gap-8 ">
                <div className="text-center space-y-7 px-4  ">
                    <h2 className='md:text-5xl text-4xl font-bold md:leading-snug ' >For the Love of Delicious <span className='text-green' >Food</span></h2>
                    <p className='text-xl text-[#4a4a4a] md:w-4/5 mx-auto ' >Come with family & feel the joy of mouthwatering food such as Greek Salad, Lasagne,Butternut Pumpkin, Tokusen Wagyu, Olivas Rellenas and more for a moderate cost</p>
                    <button className='btn bg-green px-12 !h-4 font-semibold text-white rounded-full ' >Order Now</button>
                </div>
            </div>
        </div>
        <div className="menu">
        <ul className="menu bg-base-200 menu-horizontal items-center text-[1rem] flex lg:justify-between justify-center px-12 rounded-box">
            <div className="lg:flex md:flex hidden  ">
                <li>
                    <button onClick={showAll} >All</button>
                </li>
                <li>
                    <button onClick={()=>filtered('salad')} >Salad</button>
                </li>
                <li>
                    <button onClick={()=>filtered('pizza')} >Pizza</button>
                </li>
                <li>
                    <button onClick={()=>filtered('soup')} >Soup</button>
                </li>
                <li>
                    <button onClick={()=>filtered('dessert')} >Desserts</button>
                </li>
                <li>
                    <button onClick={()=>filtered('drinks')} >Drinks</button>
                </li>
            </div>
            <div className="right">
                <select onChange={(e)=>sortListing(e.target.value)} defaultValue="az" className="select options select-success w-full max-w-xs">
                    <option disabled selected>Sort menu by............</option>
                    <option value="az" >A-Z</option>
                    <option value="za" >Z-A</option>
                    <option value="lowhigh" >Low-To-High</option>
                    <option value="highlow" >High-to-Low</option>
                </select>
            </div>
        </ul>
        </div>
        <div className=" max-w-screen flex flex-wrap px-2 gap-2 ">
            {
                currentItems.map((item, index) => {
                    return (
                        <Card key={index} price={item.price} image={item.image} title={item.name} desc={item.category} />
                    )
                })
            }
        </div>
        <div className="flex justify-center items-center gap-2 lg:gap-4 md:gap-4 my-4 ">
            {
                Array.from({length: Math.ceil(filter.length / ItemPerPage )}).map( (_, i)=> (
                    <button 
                    key={i} 
                    onClick={()=> paginate(i + 1)} 
                    className={`w-8 border-2 h-8 lg:w-10 lg:h-10 md:w-10 md:h-10 text-white rounded-full ${currentPage === i+1 ? "bg-red border-green" : "bg-green border-red"}  `} >
                        {i + 1}
                    </button>
                )
                
                )
            }
        </div>
    </div>
  )
}

export default Menu