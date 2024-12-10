import { Container } from "@mui/material";
import EditStorage from "../../components/watchlist/EditStorage";
import EditMovieList from "../../components/watchlist/EditMovieList";

const WatchListEditPage = () => {
    return (
        <Container>
            <EditStorage />
            <EditMovieList />
        </Container>
    )
}
export default WatchListEditPage;