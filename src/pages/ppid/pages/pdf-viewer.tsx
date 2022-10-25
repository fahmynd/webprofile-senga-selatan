import React from 'react'
import { Container, Flex, VStack } from '@chakra-ui/react'
import DefaultLayout from '../layouts/Default.tsx'
import { Helmet } from 'react-helmet'
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { useParams } from 'react-router-dom';
// import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

import '@react-pdf-viewer/core/lib/styles/index.css';

// const defaultLayoutPluginInstance = defaultLayoutPlugin();

export default function PdfViewer() {
    const { fileId } = useParams();
    const url = window.app.BASE_API_URL + `/download/${fileId}`
    return (
        <DefaultLayout>
            <Helmet>
                <title>Dasar Hukum | Website PPID Desa</title>
            </Helmet>
            <Flex
                as="main"
                py={16}
                minH="80vh"
            >
                <Container as={VStack} minH="50vh" spacing={10} maxW="container.lg">
                    <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.15.349/build/pdf.worker.js">
                        <div style={{ height: '750px', width:"100%" }}>
                            <Viewer
                                fileUrl={url}
                                
                            />
                        </div>
                    </Worker>
                </Container>
            </Flex>
        </DefaultLayout>
    )
}