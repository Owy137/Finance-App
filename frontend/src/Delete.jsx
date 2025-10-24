import './buttons.css'

function Delete ({setData}){

    const deleteData = async() =>{
        setData(null);
        const res = await fetch("http://127.0.0.1:5000/delete", {method: "POST"});
        console.log("Sent request to server");
        const data = await res.json();
        console.log("Response received from server");
        if(res.ok){
            {data.status ? alert("Successfuly deleted uploads") : alert("Failed to delete uploads")};
        }
    }

    return(
        <div className="delete">
            <button className="delButton" onClick={deleteData}>Clear</button>
        </div>
    );
}
export default Delete