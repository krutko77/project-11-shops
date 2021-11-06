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
         sx={{
            '&:hover': {
               bgcolor: 'transparent',
            },
         }}
         disableRipple
         color="default"
         checkedIcon={<BpCheckedIcon />}
         icon={<BpIcon />}
         {...props}
      />
   );
}

function RadioButtons() {
   return (
      <FormControl component="fieldset">
         <RadioGroup row aria-label="time" name="row-radio-buttons-group">
            <FormControlLabel value="Забрать сегодня" control={<BpRadio />} label="Забрать сегодня" />
            <FormControlLabel value="Забрать в течение недели" control={<BpRadio />} label="Забрать в течение недели" />
         </RadioGroup>
      </FormControl>
   );
}

export default RadioButtons;