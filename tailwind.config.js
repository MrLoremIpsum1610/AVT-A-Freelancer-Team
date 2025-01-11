/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html","./../*.js"],
  darkMode:"class",
  theme: {
    extend: {
      colors:{
        "main-color":"#05AFE6",
        'secondry-text': '#09BEAD',
        'Cshadow':'#60e9ff45',
        'Ctext':'#333333',
        'BGorange':'#F57F17',
        'BGgreen':'#09BEAD',
      }
    },
    container :false,
    screens:{
      // Mobile MediaQueries
      'min2xl':{min:'1400px'},
      'minxl':{min:'1200px'},
      'minlg':{min:'992px'},
      'minmd':{min:'768px'},
      'minsm':{min:'576px'},
      'minssm':{min:'480px'},
      // Desktop MediaQueries
      '2xl':{max:'1400px'},
      'xl':{max:'1200px'},
      'lg':{max:'992px'},
      'md':{max:'768px'},
      'sm':{max:'576px'},
      'ssm':{max:'480px'},
    },
    fontFamily:{
      'pop-reg':'Poppins Regular',
      'pop-bold' : 'Poppins Bold',
      'pop-md' : 'Poppins Medium',
      'pop-black' : 'Poppins Black',
      'pop-semi' : 'Poppins SemiBold',

    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

