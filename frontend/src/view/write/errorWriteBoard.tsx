import './scss/errorWirteBoard.scss';
import {useEffect, useState} from "react";
import axios from "axios";

function errorWriteBoard() {

    const [errorTypeData, setErrorTypeData] = useState([]);

    useEffect(() => {
        axios.post("http://localhost:50000/fetchData")
            .then(response => {

                setErrorTypeData(response.data);

            })
            .catch(error => {
                console.error(error);
            })

    }, []);

    return (
        <>
            <div className="error-write-board-component-first-group">
                <h2 className="error-write-board-component-where-title">1. 에러가 어디에서 발생했나요? 🤔🤔</h2>
                <div className="selectBox">
                    <select name="fruits" className="select">
                        { errorTypeData.map((value: any) => <option>{value}</option>) }
                    </select>
                    <span className="icoArrow"></span>
                </div>
            </div>

            <div className="error-write-board-component-second-group">
                <h2 className="error-write-board-component-kind">2. 에러 종류를 선택해주세요! 🤔🤔</h2>
            </div>
        </>
    )
}

export default errorWriteBoard;