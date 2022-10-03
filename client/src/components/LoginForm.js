import TextField from '@mui/joy/TextField';
import EmailIcon from '@mui/icons-material/Email';
import PasswordIcon from '@mui/icons-material/Password';

const LoginForm = () => {
    return (
    <div>
        <TextField
        label="Label"
        placeholder="Email"
        startDecorator={<EmailIcon fontSize="small" />}
      />

      <TextField
        label="Label"
        placeholder="Password"
        startDecorator={<PasswordIcon fontSize="small" />}
      />
    </div>
    );
}

export default LoginForm;