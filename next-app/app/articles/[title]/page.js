



export default function showArticlePage(props) {
    console.log(props)
    return (
        <div>
            <h1 className="text-center">This is the article page</h1>
            <h1 className="text-center">{props.params.title}</h1>
        </div>
    )
}
