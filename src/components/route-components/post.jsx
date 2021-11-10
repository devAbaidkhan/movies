import QueryString from "query-string";

const Post = props=>{
    const queryString = QueryString.parse(props.location.search);
    console.log(queryString)
    return(
       <div>
           <h1>Post</h1>
           <h2>Year: {props.match.params.year} , Month: {props.match.params.month}</h2>
       </div>
    );
}
export default Post;