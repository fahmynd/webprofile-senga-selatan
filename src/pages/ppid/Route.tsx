import React from 'react';
import DasarHukumPage from "./pages/dasar-hukum.tsx";
import IndexPage from "./pages/index.tsx"
import InformationPage from "./pages/informasi.tsx";
import { Routes, Route } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'
import theme from "./themes/index.ts";

interface RouteDefinition {
  path: string
  exact?: boolean
  component?: JSX.Element | null
  children?: RouteDefinition[]
}


const BuildPpidRoutes = () => {
  return (
    <ChakraProvider theme={theme}>
      <Routes >
        <Route path="/" element={<IndexPage />} />
        <Route path='/dasar-hukum' element={<DasarHukumPage />} />
        <Route path='/informasi/*'>
            <Route 
              path='berkala'
              element={<InformationPage 
                title="Informasi Publik secara Berkala"
                subtitle="Informasi yang wajib disediakan dan diumumkan secara berkala."
                id="1"
              />}
            />
            <Route 
              path='serta-merta'
              element={<InformationPage 
                title="Informasi Serta Merta"
                subtitle="Informasi yang dapat mengancam hajat hidup orang banyak dan ketertiban umum."
                id="2"
              />}
            />
            <Route 
              path='setiap-saat'
              element={<InformationPage
                title="Informasi Setiap Saat"
                subtitle="Informasi yang wajib disediakan oleh Badan Publik."
                id="3"
              />}
            />
        </Route>
      </Routes>
    </ChakraProvider>
  )
}

export const routes: RouteDefinition[] = [
  {
    path: '/', exact: true,
    component: <IndexPage/>
  },
  {
    path: '/dasar-hukum',
    component: <DasarHukumPage/>
  },
  {
    path: '/informasi',
    children: [
      {
        path: '/berkala',
        component: <InformationPage 
          title="Informasi Publik secara Berkala"
          subtitle="Informasi yang wajib disediakan dan diumumkan secara berkala."
          id="1"
        />
      },
      {
        path: '/serta-merta',
        component: <InformationPage 
          title="Informasi Serta Merta"
          subtitle="Informasi yang dapat mengancam hajat hidup orang banyak dan ketertiban umum."
          id="2"
        />
      },
      {
        path: '/setiap-saat',
        component: <InformationPage
          title="Informasi Setiap Saat"
          subtitle="Informasi yang wajib disediakan oleh Badan Publik."
          id="3"
        />
      },
    ]
  },
]

// const PpidRoutes = BuildPpidRoutes(routes)
export default BuildPpidRoutes;