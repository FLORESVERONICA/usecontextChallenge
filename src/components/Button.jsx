
import { useTheme } from '../themes/ThemeContext';

const Button = () => {
    const { toggleTheme } = useTheme();

    return (<button onClick={toggleTheme}>Cambiar Tema</button>)
};

export default Button;