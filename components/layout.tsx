import { Navigation } from "./navigation";

const Layout = ({ children }) => {
    return (
        <>
            <header>
                <h1>Wendy가 말아주는 MovieTailer </h1>
                {/* <nav>
                    <a href="/">Home</a>
                    <a href="/mypage">MyPage</a>
                </nav> */}
                <Navigation></Navigation>
            </header>
            <main>{children}</main>
            <footer>
                <p>나는 푸터에요</p>
            </footer>
        </>
    );
};
export default Layout;
