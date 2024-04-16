interface CSSProperties {
  [key: string]: string | number;
}

function MenuContainer() {
  const menuContainerStyle: CSSProperties = {
    width: '25%', 
    height: "100vh",
    padding: '1rem',
    backgroundColor: '#1E1E1E', 
    color: '#FFFFFF',
    display: 'flex',
    flexDirection: 'column', 
    alignItems: 'center',
    justifyContent: 'space-between',
  };

  const menuItemStyle: CSSProperties = {
    flexGrow: 1,
    margin: '10px 0', 
    padding: '10px 15px', 
    backgroundColor: '#121212',
    color: 'white',
    borderRadius: '3px',
    cursor: 'pointer',
    textAlign: 'center',
    width: '90%',
    boxSizing: 'border-box', 
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <aside style={menuContainerStyle}>
      <h1>Menú</h1>
      <ul style={{ listStyle: 'none', padding: 0, width: '100%', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <li style={menuItemStyle}>Home</li>
        <li style={menuItemStyle}>Notifications</li>
        <li style={menuItemStyle}>Profile</li>
        <li style={menuItemStyle}>Options</li>
        <li style={menuItemStyle}>Archived</li>
        <li style={menuItemStyle}>Chats</li>
      </ul>
    </aside>
  );
}

export default MenuContainer;