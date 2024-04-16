import ContactsContainer from "../components/GeneralUi/ContactsContainer";
import ArchivedPostsUI from "../components/GeneralUi/MainsContent/ArchivedPostUi";
import MenuContainer from "../components/GeneralUi/MenuCotainer";
import Header from "../components/GeneralUi/HeaderContainer";

function ArchivedPosts() {
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
                <ArchivedPostsUI />
                <ContactsContainer />
            </div>
        </div>
    )
}

export default ArchivedPosts;