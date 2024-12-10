import { Container } from "@mui/material";
import MyWatchList from "../../components/mypage/MyWatchList";
import MyFavoriteWatchList from "../../components/mypage/MyFavoriteWatchList";

const MyPage = () => {
    return (
        <Container>
            <MyWatchList />
            <MyFavoriteWatchList />
        </Container>
    )
}
export default MyPage;