import {Card ,Box, Typography} from '@mui/material';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';


function ItemCard(props){
    const [showItem,setItem]=useState(false);
    const {title,list}=props;
    const handleItems=()=>{
        if (showItem) setItem(false);
        else setItem(true)
    }
    return <Box sx={{backgroundColor:"#e6eef9" ,borderStyle:"solid", borderWidth:"1px",borderRadius:"0.2em", width:"90vw",padding:"1em",marginY:"1em"}}>
        <Box sx={{display:"flex",justifyContent:"space-between"}}>
            <Typography>{title}</Typography>
            <>
            {console.log("--------list--------",list)}
           {showItem && <ExpandMoreIcon onClick={handleItems}/>}
           {!showItem && <ExpandLessIcon onClick={handleItems}/>}
            </>

        </Box>
        {showItem &&<>
        {list.map((eachItem)=><Card sx={{padding:"1em",marginY:"1em"}}>{eachItem}


        </Card>)} </>}

    </Box>

}
export default ItemCard;