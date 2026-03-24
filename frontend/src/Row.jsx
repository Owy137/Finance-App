import { useState } from 'react'

function Row({balance, index, changeSelection, setData ,data}){

    const [custAmount, setCustAmount] = useState("");

    const onSelect = (amount) => {
        console.log("Row: ",index, amount);
        changeSelection(index, amount);
    };

    const removeData = () => {
        console.log("Deleting index ", index);
        setData((prevData) => {
            if (!prevData || !prevData.balances) return prevData;
            const newBalances = prevData.balances.filter((_, idx) => idx !== index);
            return { ...prevData, balances: newBalances };
        });
    }

    return(
        <tr className="bg-slate-100 even:bg-slate-200 hover:bg-blue-50 transition-colors">
            <td className="px-4 py-3 border-b border-gray-300">{balance.filename}</td>
            <td className="px-4 py-3 border-b border-gray-300">
              <div className="flex items-center gap-2">
                <span>{balance.balance}</span>
                <input type="radio" name={`select-${index}`} className="w-4 h-4 accent-blue-600" onClick={() => onSelect(balance.balance)}/>
              </div>
            </td>
            <td className="px-4 py-3 border-b border-gray-300">
              <div className="flex items-center gap-2">
                <span>{balance.minimum}</span>
                <input type="radio" name={`select-${index}`} className="w-4 h-4 accent-blue-600" onClick={() => onSelect(balance.minimum)}/>
              </div>
            </td>
            <td className="px-4 py-3 border-b border-gray-300">
              <div className="flex items-center gap-2">
                <input
                    className="w-full rounded-md border border-gray-300 px-2 py-1 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 max-w-60"
                    type="number" step="0.01" min="0" placeholder="Custom amount" value={custAmount} onChange={(e) => setCustAmount(e.target.value)}
                />
                <input type="radio" className="w-4 h-4 accent-blue-600" onClick={() => onSelect(Number(custAmount) || 0)}/>
              </div>
            </td>
            <td className="px-4 py-3 border-b border-gray-300">
              <button
                className="px-3 py-1 rounded-md bg-red-500 text-white hover:bg-red-600 transition"
                onClick={removeData}
              >
                Delete
              </button>
            </td>
        </tr>
    );
}

export default Row