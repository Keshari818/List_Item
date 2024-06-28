import FoodItems from "./FoodItems";

const Errormessage = ({items}) => {
    return(<>
        {items.length === 0 && <h1>I am Still Hungry.</h1>}
         </>
    );
};

export default Errormessage;