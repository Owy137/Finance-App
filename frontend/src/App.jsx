import { StrictMode , useState , useEffect} from 'react'
import { createRoot } from 'react-dom/client'
import Row from './Row.jsx'
import UploadButton from './UploadButton.jsx'
import Delete from './Delete.jsx'
import './buttons.css'

function App(){

    const[totalBalance, setTotalBalance] = useState();
    const[data, setData] = useState();
    const[selections, setSelections] = useState({});

    const changeSelection = (index, amount) => {
        console.log("App: ",index, amount);
        setSelections((prev) => ({ ...prev, [index]:amount}));
    }

    useEffect(() => {
        console.log(selections);
    }, [selections]);

    return(
        <>
            <div className="ButtonRow">
                <UploadButton setData={setData}/>
                <Delete setData = {setData}/>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Filename</th>
                        <th>Balance</th>
                        <th>Min Payment</th>
                        <th>Custom Amount</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.balances.map ((balance, index) => {
                        return <Row 
                            balance={balance} 
                            index={index}
                            changeSelection={changeSelection}/>;
                    })}
                </tbody>
            </table>
        </>
    );
}

export default App