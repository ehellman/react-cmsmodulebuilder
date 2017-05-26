const sizes = {
  spacing: {
    medium: '20px',
    large: '30px'
  },
  pageWidth: '1200px',
  nav: {
    height: '70px'
  }
}

const zindex = {
  master: '999999999',
  header: {
    base: '500'
  },
  modal: {
    overlay: '999999',
    content: '1000000'
  }
}

const colors = {
  gray: {
    dark: '#333',
    light: '#f3f3f3'
  },
  white: '#fff'
}

const font = {
  headings: {
    fontFamily: 'BlinkMacSystemFont',
    fontWeight: '700'
  },
  body: {
    fontFamily: 'BlinkMacSystemFont',
    fontWeight: '300'
  },
  color: {
    body: colors.gray.dark
  }
}



const templates = {
  boxCard: {
    backgroundColor: colors.white,
    padding: '40px',
    boxShadow: '0px 1px 4px rgba(0,0,0,.1)'
  }
}

export default {
  sizes,
  zindex,
  font,
  colors,
  templates
}
