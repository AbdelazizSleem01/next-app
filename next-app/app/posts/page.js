import Link from "next/link"
export const metadata = {
    title: 'Post Page',
}

export default async function postPage() {

    const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts',
        {
            //Static Side Generated (SSG)
            // cache: 'force-cache'

            //Server Side Render (SSR)
            // cache: 'no-store'

            // ISG = Incremental Static Generation  = SSR + SSG
            next: {
                // عدد الثوانى الى كل مرة السيرفر بيعمل فيها تحديث للمعلومات
                revalidate: 1
            }
        }
    )

    const posts = await response.json()

    const postMap = posts.map((post) => {
        return (
            <Link href={`/posts/${post.id}`}>
                <div className="Posts">
                    <h2>{post.title} :</h2>
                    <p>{post.body}</p>
                </div>
            </Link>
        )
    })
    // console.log(posts)

    return (
        <>
            <div>
                <h1 className="text-center">Post Page</h1>
                {/*==== POSTS ====*/}
                <h4>
                    {postMap}
                </h4>
            </div>
            <div>
            </div>
        </>
    )
}