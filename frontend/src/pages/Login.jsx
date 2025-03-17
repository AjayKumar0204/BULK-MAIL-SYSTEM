import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ users }) => {
    const navigate = useNavigate();
    const [eusername, setEusername] = useState('');
    const [epassword, setEpassword] = useState('');
    const [isUserValid, setIsUserValid] = useState(true);

    const handleUInput = (evt) => setEusername(evt.target.value);
    const handlePInput = (evt) => setEpassword(evt.target.value);

    const checkUser = () => {
        const userFound = users.some(
            (user) => user.username === eusername && user.password === epassword
        );

        if (userFound) {
            console.log('Login Successful');
            navigate('/Landing', { state: { user: eusername } });
        } else {
            console.log('Login Failed');
            setIsUserValid(false); // Show error message
        }
    };

    return (
        <div className="bg-black p-10">
            <div className="bg-[#EFEFEF] p-10 border rounded-md">
                <h1 className="text-3xl font-medium">Hey Hi</h1>
                {isUserValid ? (
                    <p>I help you manage your activities after you log in :)</p>
                ) : (
                    <p className="text-red-400">Please sign up before you log in.</p>
                )}
                <div className="flex flex-col gap-2 my-2">
                    <input
                        type="text"
                        className="w-52 border-black p-1 bg-transparent border rounded-md"
                        placeholder="Username"
                        onChange={handleUInput}
                    />
                    <input
                        type="password"
                        className="w-52 border-black p-1 bg-transparent border rounded-md"
                        placeholder="Password"
                        onChange={handlePInput}
                    />
                    <button
                        className="bg-[#8272DA] w-24 p-1 rounded-md"
                        onClick={checkUser}
                    >
                        Login
                    </button>
                    <p>
                        Don't have an account?{' '}
                        <Link to="/SignUp" className="underline">
                            Sign Up
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
