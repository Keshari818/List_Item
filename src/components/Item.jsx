import styles from "./Item.module.css";
const Item = ({foodItems, bought, handleBuyButton}) => {
    return (
        <li className={`${styles["kg-item"]} list-group-item ${bought && 'active'}`}>
            {foodItems}
            <button className={`${styles.button} btn btn-info`} onClick={handleBuyButton}>Buy</button>
        </li>
    );
};

export default Item;
