
export default async function PostDetails({ postId }) {

    await new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, 3000); // simulate loading delay
    })
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}`,
        {
            next: {
                revalidate: 120,
            }
        }
    )
    const posts = await response.json()


    return (
        <div>
            <div className="Post-details">
                <div>
                    <h2>
                        Title: {posts.title}
                    </h2>
                    <hr />
                    <p>
                        Body: {posts.body}
                    </p>
                </div>
            </div>
        </div>
    )
}
export const metadata = {
    title: `Post Details`,
};
