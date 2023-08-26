import { Link } from "react-router-dom"
import { DocumentCard, DocumentCardContainer } from "./style"



export const Documents = () => {
    const documents = [
        {
            id: '3478332',
            title: 'documento pessoal',
            about: 'documento de identifição pessoal',
            data_upload: '12/08/2023'
        },
        {
            id: '347833fdaffa2',
            title: 'documento de alguma empresa',
            about: 'despesa da minha empresa',
            data_upload: '11/06/2023'
        }
    ]

    return (
        <div>
            <h1>Meus Documentos</h1>
            
            <span style={{
                fontSize:'0.9rem'
            }}>recentes</span>
            <DocumentCardContainer>
                {documents.map(docs =>
                    <DocumentCard>
                        <Link to={`/app/dashboard/documents/${docs.id}`}>
                            <p>{docs.title}</p>
                            <p>{docs.about}</p>
                            <span>{docs.data_upload}</span>
                        </Link>
                    </DocumentCard>
                )}
            </DocumentCardContainer>
        </div>
    )
}