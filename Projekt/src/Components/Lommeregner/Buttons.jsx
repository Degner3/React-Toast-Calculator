import style from "./Lommeregner.module.scss"



export const Buttons = ({ value, onClick }) => {


    return (
      <button className={style.buttons} onClick={() => onClick(value)}>
        {value}
      </button>
    );

}