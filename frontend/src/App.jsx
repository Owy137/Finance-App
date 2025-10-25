import { StrictMode , useState , useEffect} from 'react'
import { createRoot } from 'react-dom/client'
import Row from './Row.jsx'
import UploadButton from './UploadButton.jsx'
import Delete from './Delete.jsx'
import Bubble from './Bubble.jsx'
import './styling/buttons.css'
import './styling/app.css'

function App(){
    const[data, setData] = useState(null);
    const[selections, setSelections] = useState({});

    var minBalance = 0;
    var totBalance = 0;

    const changeSelection = (index, amount) => {
        console.log("App: ",index, amount);
        setSelections((prev) => ({ ...prev, [index]:amount,}));
    }

    useEffect(() => {
        console.log(selections);
    }, [selections]);

    return(
        <div className="App">
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
                        minBalance += balance.minimum;
                        totBalance += balance.balance;
                        return <Row 
                            balance={balance} 
                            index={index}
                            changeSelection={changeSelection}
                            setData={setData}
                            data={data}/>;
                        })}
                </tbody>
            </table>
            {data && <Bubble 
                total={Math.round(totBalance*100)/100}
                min={Math.round(minBalance*100)/100}
                selections={selections}
            />}
        </div>
    );
}

export default App