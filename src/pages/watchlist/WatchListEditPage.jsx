import { Container } from "@mui/material";
import EditStorage from "../../components/watchlistEdit/EditStorage";
import EditMovieList from "../../components/watchlistEdit/EditMovieList";

const WatchListEditPage = () => {
    return (
        <Container>
            <EditStorage />
            <EditMovieList />
        </Container>
    )
}
export default WatchListEditPage;