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
        <div className="ml-auto">
            <button
                className="px-5 py-2 rounded-xl bg-red-600 text-white font-semibold transition hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400"
                onClick={deleteData}
            >
                Clear
            </button>
        </div>
    );
}
export default Delete