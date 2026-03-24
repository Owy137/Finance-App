import { StrictMode , useState , useEffect} from 'react'
import { createRoot } from 'react-dom/client'
import Row from './Row.jsx'
import UploadButton from './UploadButton.jsx'
import Delete from './Delete.jsx'
import Bubble from './Bubble.jsx'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'

function App(){

    const[data, setData] = useState(null);
    const[selections, setSelections] = useState({});
    const[calendarDate, setCalendarDate] = useState(new Date());
    console.log("Date: ", calendarDate);

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
        <div className="min-h-screen w-full flex flex-col bg-blue-50 text-slate-900 font-sans p-4 box-border">
            <div className="flex justify-center gap-4 mb-4">
                <UploadButton setData={setData}/>
                <Delete setData={setData}/>
            </div>
            <table className="w-full h-full border-collapse rounded-xl overflow-hidden shadow-lg">
                <thead className="bg-blue-700 text-white font-semibold text-left">
                    <tr>
                        <th className="px-4 py-3 text-base border-b-2 border-blue-900">Filename</th>
                        <th className="px-4 py-3 text-base border-b-2 border-blue-900">Balance</th>
                        <th className="px-4 py-3 text-base border-b-2 border-blue-900">Min Payment</th>
                        <th className="px-4 py-3 text-base border-b-2 border-blue-900">Custom Amount</th>
                        <th className="px-4 py-3 text-base border-b-2 border-blue-900">Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.balances.map((balance, index) => {
                        minBalance += balance.minimum;
                        totBalance += balance.balance;
                        return <Row 
                            balance={balance} 
                            index={index}
                            changeSelection={changeSelection}
                            setData={setData}
                            data={data}/>
                    })}
                </tbody>
            </table>
            {data && <Bubble 
                total={Math.round(totBalance*100)/100}
                min={Math.round(minBalance*100)/100}
                selections={selections}
            />}
            <div className="mt-6 self-center bg-blue-100 border border-blue-500 rounded-xl p-5 shadow">
                <h3 className="text-lg font-semibold text-blue-900 mb-4 text-center">Payment Schedule</h3>
                <div className="flex justify-center [&_.react-calendar]:bg-white [&_.react-calendar]:rounded-lg [&_.react-calendar]:border-blue-300 [&_button]:text-slate-700 [&_button:hover]:bg-blue-100 [&_button.react-calendar__tile--active]:bg-blue-600 [&_button.react-calendar__tile--active]:text-white">
                    <Calendar value={calendarDate} onChange={setCalendarDate} />
                </div>
            </div>

        </div>
    );
}

export default App