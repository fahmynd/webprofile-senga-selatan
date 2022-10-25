export interface NavItemLink {
  display: string
  path?: string
  // exact?: boolean
  children?: NavItemLink[]
  absolute?: boolean
}

const navLinks: NavItemLink[] = [
  { 
    display: 'Beranda', 
    path: '/', 
    // exact: true 
  },
  { 
    display: 'Informasi',
    path: '/informasi',
    children: [
      { display: 'Berkala', path: '/berkala' },
      { display: 'Serta Merta', path: '/serta-merta' },
      { display: 'Setiap Saat', path: '/setiap-saat' },
    ]
  },
  {
    display: 'Tentang',
    children: [
      { display: 'Dasar Hukum PPID', path: '/dasar-hukum' },
      { display: 'Profil Desa', path: window.app.APP_INFO.home_url, absolute: true }
    ]
  }
]


export default navLinks