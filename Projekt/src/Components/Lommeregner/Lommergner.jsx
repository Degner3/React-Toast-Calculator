import { Buttons } from "./Buttons";
import style from "./Lommeregner.module.scss"



export const Lommergner = () => {

    

    return (
      <section className={style.lommeregner}>
        <div className={style.display}>
          <div className={style.input}></div>
          <div className={style.result}></div>
        </div>
        <div>
            {/* <Buttons value="AC" /> */}
        </div>
      </section>
    );

}