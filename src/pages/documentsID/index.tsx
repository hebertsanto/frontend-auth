import { useParams} from "react-router-dom"

export const DocumentId = () => {
    const {id} = useParams();
    return(
        <div>
            about especific document {id}
        </div>
    )
}