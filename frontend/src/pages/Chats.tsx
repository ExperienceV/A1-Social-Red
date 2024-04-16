import ContactsContainer from "../components/GeneralUi/ContactsContainer";
import ChatsUI from "../components/GeneralUi/MainsContent/ChatsUi";
import MenuContainer from "../components/GeneralUi/MenuCotainer";
import Header from "../components/GeneralUi/HeaderContainer";

function Chats() {
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
                <ChatsUI />
                <ContactsContainer />
            </div>
        </div>
    )
}

export default Chats;
