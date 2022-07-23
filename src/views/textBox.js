import TextareaAutosize from '@mui/material/TextareaAutosize';
import { Button,Box} from '@mui/material';
import { useRef } from 'react';


function AddTask(props){
    const {name,handleTextValue}=props;
    const textValue=useRef();
    return (<Box ><TextareaAutosize
        minRows={5}
        aria-label={`${name} textarea`}
        placeholder={name}
        style={{ width:"95%" }}
        ref={textValue}
      />
      <br/>
      <Box sx={{width:"100%", textAlign:"center"}}>
      <Button color='success' variant='outlined' sx={{margin:"1em"}} onClick={()=>handleTextValue(textValue,name)}>{`+ ${name}`}</Button></Box></Box>)
}


export default AddTask
