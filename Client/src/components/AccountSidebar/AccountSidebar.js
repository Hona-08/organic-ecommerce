import React from 'react'
import {
    ASidebarContainer,
    Header,
    Icon,
    Text,
    Hr,
    Form,
    FormGroup,
    FormRecovery,
    Label,
    Input,
    P,
    Route,
    FormButtonLogin,
    FormButtonCreate
} from './AccountSidebarElement'
import useAccountForm from './useAccountForm';
import ValidateAccountLogic from './ValidateAccountLogic';
import CloseIcon from '@mui/icons-material/Close';
import { bool } from 'prop-types';

const AccountSidebar = ({ setShow, show}) => {    //passing the function

    const {handleInputs, values, handleSubmit, errors} = useAccountForm(ValidateAccountLogic);

    return (
    <ASidebarContainer show={show} >
        <Header>
            <Icon> 
                <CloseIcon onClick={() => setShow(!show)} />
            </Icon>
            <Text>
                Login
            </Text> 
        </Header>
        <Hr />
        <Form onSubmit={handleSubmit} ValidateAccountLogic>
            <FormGroup>
                <Label>Email*</Label>
                <Input 
                    type="email" 
                    name="email" 
                    id="email" 
                    class="input" 
                    value={values.email} 
                    onChange={handleInputs}
                    placeholder="your@email.com" 
                    required="" 
                />
                {errors.email && <P>{errors.email}</P>}
            </FormGroup>
            <FormGroup>
                <Label>Password*</Label>
                <Input 
                    type="password" 
                    name="password" 
                    id="password" 
                    value={values.password} 
                    onChange={handleInputs}
                    placeholder="Your password" 
                    required="" 
                />
                {errors.password && <P>{errors.password}</P>}
            </FormGroup>
            <FormRecovery>
                <Route to='/' id='showRecoverPassword'> Forgot your password? </Route>
            </FormRecovery>
            <FormButtonLogin type='submit'>
                Login
            </FormButtonLogin>
            <FormButtonCreate  to = '/account'>
                Create An Account
            </FormButtonCreate>
        </Form>
    </ASidebarContainer>
    );
}
AccountSidebar.propTypes = {
    show: bool.isRequired,
}
export default AccountSidebar;