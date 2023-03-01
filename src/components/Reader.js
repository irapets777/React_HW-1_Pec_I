import React from 'react';

const Header = () => {
  const headerStyle = {
    padding: '20px 0',
    lineHeight: '1.2',
  };

  return (
    <header style={headerStyle}>
      <h1
        style={{
          fontSize: '48px',
          fontWeight: '600',
          marginBottom: '40px',
          color: '#282828',
          textAlign: 'center',
        }}
      >
        LIST
      </h1>
    </header>
  );
};

export default Header;
