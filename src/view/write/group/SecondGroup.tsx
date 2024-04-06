import {useEffect, useState} from "react";
import axios from "axios";

function SecondGroup() {

    const [errorTypeData, setErrorTypeData] = useState([]);

    useEffect(() => {
        axios.post("http://localhost:50000/errorTypeData")
            .then(response => {

                setErrorTypeData(response.data);

            })
            .catch(error => {
                console.error(error);
            })
    }, []);

    const SecondGroup = () => {
        return (
            <div className="error-write-board-component-second-group">
                <h2 className="error-write-board-component-kind">2. 에러 종류를 선택해주세요 😏😏</h2>
                <div className="selectBox">
                    <select name="fruits" className="select">
                        { errorTypeData.map((value: any) => <option>{value}</option> )}
                    </select>
                </div>
            </div>
        )
    }

    return <SecondGroup />
}

export default SecondGroup