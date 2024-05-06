import React from 'react'

export const BackgroundStyle: React.CSSProperties = {
    position: 'relative',
    display: 'flex',
    alignItems: "center",
    justifyContent: "center",
    height: '100vh',
    overflow: 'hidden'
}

export const VideoBackground: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: 'auto',
    objectFit: 'cover',
    zIndex: -4
}

export const SectiuneTitluFontSX: React.CSSProperties = {
    fontFamily: 'Kanit, sans-serif'
}

export const UnderlineTextSX: React.CSSProperties = {
    width: '100px',
    height: '5px',
    backgroundColor: '#00ADB5',
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    marginTop: '64px'
}

export const DescriereSectiuneSX: React.CSSProperties = {
    fontFamily: 'Kanit, sans-serif',
}

export const Center: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: "center",
    justifyContent: "flex-start",
    height: "auto",
    width: '100%',
}

export const TitluSX: React.CSSProperties = {
    flexGrow: 1,
    color: '#EEEEEE',
    fontFamily: 'Kanit, sans-serif'
}

export const ButtonSX: React.CSSProperties = {
    color: '#EEEEEE',
    marginLeft: '40px',
    '&:hover': {
        background: '#393E46',
    },
    fontFamily: 'Kanit, sans-serif'
}

export const ContainerAcasaSX: React.CSSProperties = {
    pt: { xs: 4, sm: 12 },
    pb: { xs: 8, sm: 16 },
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: { xs: 3, sm: 6 },
}

export const ContainerSX: React.CSSProperties = {
    pt: { xs: 4, sm: 12 },
    pb: { xs: 8, sm: 16 },
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: { xs: 3, sm: 6 },
    backgroundColor:'white'
}

export const BoxInContainerSX: React.CSSProperties = {
    width: { sm: '100%', md: '60%' },
    textAlign: { sm: 'left', md: 'center' },
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 10
}

export const MapsGridSX: React.CSSProperties = {
    marginTop: '64px',
    display: 'grid',
    //gridTemplateColumns: '1fr auto',
    alignItems: 'center', // This centers the content vertically in each grid cell
    justifyContent: 'center', // This centers the content horizontally in each grid cell
}