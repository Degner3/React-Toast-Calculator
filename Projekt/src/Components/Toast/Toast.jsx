import { useEffect, useState } from "react";
import style from "./Toast.module.scss"



export const Toast = ({ message, type, position, duration = 2000 }) => {

    const [visible, setVisible] = useState(true)
    
    useEffect(() => {
        const timer = setTimeout(() => {
          setVisible(false);
        }, duration);
    
        return () => {
          clearTimeout(timer);
        };
      }, [duration]);
    

      return (
        visible && (
          <div className={`toastcontainer type-${type} positon-${position}`}>
            {message}
          </div>
        )
      );

}