import { useParams } from 'react-router-dom';

export default function CommentCard(props){
const { article_id } = useParams();

    return(
        <>
        <section className="comments-field">
        {props.comments.map(data=>{
            return(
                <li key={data.comment_id} className="single-comment" >{data.article_id === Number(article_id)?data.body:null}</li>
            )
        })}
     </section>
        </>
    )
}