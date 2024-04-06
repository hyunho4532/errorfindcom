import {useEffect, useState} from "react";
import axios from "axios";

function FirstGroup() {

    const [platformData, setPlatformData] = useState([]);

    useEffect(() => {
        axios.post("http://localhost:50000/platformData")
            .then(response => {
                setPlatformData(response.data);
            })
            .catch(error => {
                console.error(error);
            })
        
    }, []);

    const FirstGroup = () => {
        return (
            <div className="error-write-board-component-first-group">
                <h2 className="error-write-board-component-where-title">1. 에러가 어디에서 발생했나요? 🤔🤔</h2>
                <div className="selectBox">
                    <select name="fruits" className="select">
                        { platformData.map((value: any) => <option>{value}</option>) }
                    </select>
                </div>
            </div>
        )
    }

    return <FirstGroup />
}

export default FirstGroup