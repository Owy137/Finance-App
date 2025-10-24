import { StrictMode , useState } from 'react'
import { createRoot } from 'react-dom/client'
import FileTable from './Table.jsx'
import UploadButton from './UploadButton.jsx'
import Delete from './Delete.jsx'
import './buttons.css'

function App(){
    const[totalBalance, setTotalBalance] = useState();
    const[data, setData] = useState();
    return(
        <>
            <div className="ButtonRow">
                <UploadButton setData={setData}/>
                <Delete 
                    setData = {setData}
                />
            </div>
            <FileTable 
                data = {data}
                totalBalance = {totalBalance}
                setTotalBalance = {setTotalBalance}
            />
        </>
    );
}

export default App