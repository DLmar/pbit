/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    screens:{
      'xl':'1536px',
      'lg':'1100px',
      'md':'768px',
      'sm':'640px',
    },
    container:{
      center:true,
      padding:'12px'
    },
    fontSize:{
      xs: ['12px', '16.56px'],
      sm: ['14px', '19.32px'],
      base: ['16px', '22.08px'],
      lg: ['18px', '24.84px'],
      '2xl': ['24px', '30px'],
      '3xl':['32px', '40px'],
      '4xl':['36px', '45px'],
      '5xl':['48px', '60px'],
    },
    extend: {
      colors: {
        'accent_dark':'#17122B',
        'midnight':'#1F1B32',
        'evening':'#252339',
        'accent_evening':'#201A2F',
        'accent_white':'#F7F7F7',
        'accent_yellow':'#FFC700',
        'light_yellow':'#FBD849',
        'accent_gray':'#222222',
        'high_gray':'#2F2F2F',
        'mid_gray':'#666666',
        'light_gray':'#BBBBBB',
        'gray_white':'#EEEEEE',
        'silver_white':'#FDFDFD',
        'custom_white':'#F2F2F2',
        'accent_green':'#3CC13B',
        'accent_pink':'#F03738'

      },
      fontFamily:{
        custom:['MacPaw Fixel Display']
      }
    }
  },
  plugins: [],
}
