import { Grid,Button,Box} from '@mui/material'
import { useState } from 'react';
import AddTask from './views/textBox';
import ItemCard from "./views/itemCard";


function App() {
  const [listA,setListA]=useState([]);
  let [listB,setListB]=useState([]);
  const [showComputedVal,setComputedVal]=useState(false)
  const handleTextValues=(value,name)=>{
    if (name==="list A") {
      let listAArr=Array.from(listA)
      listAArr.push(value.current.value);
      setListA(listAArr)


    }
    else {
      let listBArr=Array.from(listB)
      listBArr.push(value.current.value);
      setListB(listBArr)
    }
    value.current.value="";

  }


  const computeList=(listValA,listValB,operation)=>{
    if (operation==="uniqueListA"){
      const uniqueListA=listValA.filter((eachItem)=> {
        return !listValB.includes(eachItem);
       
      })
      return uniqueListA;
    }
      else if (operation==="uniqueListB"){
        const uniqueListB=listValB.filter((eachItem)=> {
          return !listValA.includes(eachItem);
         
        })
        return uniqueListB;

      }
      else if (operation==="listAAndB"){
        const uniqueListB=listValB.filter((eachItem)=> {
          return listValA.includes(eachItem);
         
        })
        return uniqueListB;

      }
      else{
        const bothList=listValA.concat(listValB)
        const setList=new Set(bothList)
        return [...setList]
      }

      }

      


    
  
  return (
    <Grid sx={{padding:"2em" ,width:"100vw",display:"flex", alignItems:"Center"}} container >
   {!showComputedVal && <> <Grid item xs={12} md={6}  >
      <AddTask name="list A" handleTextValue={handleTextValues}/>
    
  </Grid>
  <Grid item xs={12} md={6}>
    <AddTask name="list B" handleTextValue={handleTextValues}/>
  </Grid>
  <Box sx={{textAlign:"center",width:"100%"}}>
  <Button color="primary" variant="outlined" onClick={()=>setComputedVal(true)}>Compute</Button>
  </Box> </>}
  {showComputedVal && <><ItemCard title=" Items present in only list A" list={computeList(listA,listB,"uniqueListA")}/>
  <ItemCard title=" Items present in only list B" list={computeList(listA,listB,"uniqueListB")}/>
  <ItemCard title=" Items present in both lists" list={computeList(listA,listB,"listAAndB")}/>
  <ItemCard title=" Items present in both lists" list={computeList(listA,listB,"")}/>
  
<Box sx={{width:"90vw",textAlign:"center"}}>
  <Button color="primary" variant="outlined" onClick={()=>setComputedVal(false)}>Back</Button>
</Box>

  </>}
  </Grid>
    
    
  );
}

export default App;
