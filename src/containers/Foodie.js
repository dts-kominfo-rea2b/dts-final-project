import { ConstructionOutlined } from "@mui/icons-material";
// import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react"
import zomato from "../apis/zomato";
import FoodCard from "../components/FoodCard";
// import MainFeaturedPost from "../components/MainFeaturedPost";
import Box from "@mui/material/Box";



const Foodie = () => {
    const [foods, setFoods] = useState([]);
    useEffect(() => {
        const fetchFoods = async () => {
            try {
                const fetchedFoods = await zomato.get("search?city_id=74&collection_id=1");
                console.log(fetchedFoods);

                setFoods(fetchedFoods.data.restaurants);
            } catch (error) {
                console.log(error);
            }
        }
        fetchFoods();
    }, []);
    
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
        }}>
                {
                    foods.map(food => (
                        // <div>{food.restaurant.name}</div>
                        // <MainFeaturedPost key={food.title} food={food}></MainFeaturedPost>
                        <FoodCard key={food.title} food={food}></FoodCard>
                    ))
                }
            </Box>
        

    )
}

export default Foodie;