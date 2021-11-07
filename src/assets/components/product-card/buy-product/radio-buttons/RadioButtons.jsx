import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { styled } from '@mui/material/styles';

const BpIcon = styled('span')(({ theme }) => ({
   outline: '1px auto rgba(19,124,189,.6)',
   outlineOffset: 3,
   width: 8,
   height: 8
}));

const BpCheckedIcon = styled(BpIcon)({
   backgroundColor: '#137cbd',
   display: 'block',
   width: 8,
   height: 8,
});

function BpRadio(props) {
   return (
      <Radio
         disableRipple
         color="default"
         checkedIcon={<BpCheckedIcon />}
         icon={<BpIcon />}
         {...props}
      />
   );
}

const StyledFormControlLabel = styled(FormControlLabel)({
   'MuiFormControlLabel-root': {
      marginRight: "50px"
      }   
});

// const StyledFormControlLabel = styled('label')(({ theme }) => ({
//    'MuiFormControlLabel-root': {
//       marginRight: "50px"
//       }   
// }));


// function StyledFormControlLabel(props) {
//    return (
//       <FormControlLabel
//          sx={{
//             'MuiFormControlLabel-root': {
//                marginRight: "50px"
//             },
//          }}
//          {...props}
//       />
//    );
// }


function RadioButtons(props) {
   return (
      <FormControl component="fieldset">
         <RadioGroup row aria-label="time" name="row-radio-buttons-group">
            <StyledFormControlLabel value="Забрать сегодня" control={<BpRadio />} label="Забрать сегодня" />
            <StyledFormControlLabel value="Забрать в течение недели" control={<BpRadio />} label="Забрать в течение недели" />
         </RadioGroup>
      </FormControl>
   );
}

export default RadioButtons;