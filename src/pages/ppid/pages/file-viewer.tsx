import React from 'react'
import { Container, Flex, VStack } from '@chakra-ui/react'
import DefaultLayout from '../layouts/Default.tsx'

import { Helmet } from 'react-helmet'
import { useParams } from 'react-router-dom';
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";

export default function FileView() {
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
                    <DocViewer 
                        documents={[{uri: url}]} 
                        pluginRenderers={DocViewerRenderers} 
                        config={{
                            header: {
                                disableHeader: true
                            }
                        }}
                    />          
                </Container>
            </Flex>
        </DefaultLayout>
    )
}