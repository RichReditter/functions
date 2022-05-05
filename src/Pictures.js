import React,{useState} from 'react';

function Pictures(){
    const [pics,setPics] = useState(['https://www.rd.com/wp-content/uploads/2021/01/GettyImages-1175550351.jpg','https://media.4-paws.org/a/5/3/7/a537f08d227326121b80790ba54036498668c9c8/VIER%20PFOTEN_2016-07-08_011-4993x3455-1920x1329.jpg','https://media.wired.com/photos/5e1e646743940d0008009167/1:1/w_1533,h_1533,c_limit/Science_Cats-84873657.jpg'])
    const [choice, setChoices] = useState(0);
    const[input, setInput] = ('')

    return (
        <React.Fragment>
            
            <select name="select" onChange={(e=>{setInput(e.target.value)} )}> 
                {
                    pics.map( cat => <option selected={cat === pics[choice]} key = {cat}>{cat}</option>)
                }
            </select>
            <img src={pics[choice]}></img>
        </React.Fragment>
    )
}

export default Pictures