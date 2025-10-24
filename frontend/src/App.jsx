import { StrictMode , useState } from 'react'
import { createRoot } from 'react-dom/client'
import FileTable from './Table.jsx'
import UploadButton from './Button.jsx'

function App(){
    const[totalBalance, setTotalBalance] = useState();
    const[data, setData] = useState();
    return(
        <>
            <UploadButton setData={setData}/>
            <FileTable 
                data = {data}
                totalBalance = {totalBalance}
                setTotalBalance = {setTotalBalance}
            />
        </>
    );
}

export default App