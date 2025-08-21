import '../styles/modal.css'

function Modal({ip, close, data}){
    return <div className="modal">

        <div className="modal_content">
             Your IP is: {ip}

             {
                data && data.map(item=>{
                    return <div>
                        id: {item.id} <br />
                        name: { item.name} <br />
                        score: {item.score}




                    </div>
                })
             }
             
             <button onClick={close}>Close</button>
        </div>

        
         
    </div>
}

export default Modal