import ContactsContainer from "../components/GeneralUi/ContactsContainer";
import PostUi from "../components/GeneralUi/MainsContent/PostUi";
import MenuContainer from "../components/GeneralUi/MenuCotainer";
import Header from "../components/GeneralUi/HeaderContainer";

function Home() {
    const homeStyle: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'column', 
        height: '100vh',
        backgroundColor: '#000',
        overflow: 'hidden',
    };

    const contentStyle: React.CSSProperties = {
        display: 'flex',
        height: 'calc(100vh - 60px)',
        justifyContent: 'space-between',
    };

    return (
        <div style={homeStyle}>
            <Header />
            <div style={contentStyle}>
                <MenuContainer />
                <PostUi />
                <ContactsContainer />
            </div>
        </div>
    )
}

export default Home;