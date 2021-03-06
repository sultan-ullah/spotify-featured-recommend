import React from 'react';

const login = (props) => {
    var clientId = '14b4201cd7a14ba09d298bb2b48cc09a'; // Your client id
    var redirectUri = 'https://dazzling-cori-0d0d03.netlify.com/'; // Your redirect uri
    var scope = '';
    var state = '123';  
      
    let url = 'https://accounts.spotify.com/authorize' + 
    '?client_id=' + clientId +
    '&redirect_uri=' + encodeURIComponent(redirectUri) +
    '&scope=' + encodeURIComponent(scope) +
    '&response_type=token' +
    '&states=' + encodeURIComponent(state);

    const containerStyle = {
        padding: '30px',
        margin: '0 auto',
        maxWidth: '600px'
      };
      const titleStyle = {
        marginBottom: '20px',
        textAlign: 'center'
      }
      const buttonStyle = {
        width: '200px',
        border: '2px solid black',
        backgroundColor: 'black',
        color: 'white',
        textAlign: 'center',
        padding: '10px',
        marginBottom: '10px',
        boxSizing: 'border-box',
        margin: '0 auto'
      }

      const linkStyle = {
          textDecoration: 'none'
      }
      let child = {}
    if (!window.location.hash) {
        child = <a style={linkStyle} href={url}><div style={buttonStyle}>Login To Spotify</div></a>;
    } else {
        child = <>{props.children}</>;
    }
    
    return (
        <div style={containerStyle}>
            <h1 style={titleStyle}>DiscoverArtists</h1>
            {child}
        </div>
    );
}

export default login;