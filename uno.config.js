import { defineConfig, presetUno, presetAttributify, presetIcons } from 'unocss'

export default defineConfig({
  presets: [presetUno()],   
  rules: [
    ['uno-nav-link', {  
      'color': '#000',  
      'padding-bottom': '0.25rem',   
      'transition': 'color 0.2s'  
    }],
  ],
  shortcuts: {
    'uno-nav-link-hover': 'hover:text-red'
  }
})

