import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "../config/firebase"

const Home = () => {
    const [user] = useAuthState(auth);
    return (
        <Box sx={{margin: 10}}>
            Welcome to Movies App <br></br>
            Current user: {user.email}
        </Box>
    )
}

export default Home;