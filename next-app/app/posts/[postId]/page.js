
import PostDetails from "@/app/components/postDetails";
import { Suspense } from "react";
import LoadinPostDetals from "./loading";
export default async function SinglePostDetails({ params }) {

    const postId = params.postId;

    return (
        <div>
            <h1 style={{ textAlign: "center", marginTop: "40px" }}> Post Details </h1>
            {/* Suspense = use to UI streaming = تستخدم لعرض جزء معين حتي يكتمل باقي الاجزاء ويتم عرضها 
            fallback = Suspense هو الجزء الذي يتم عرضه حتي يكتمل تحميل ماهو بداخل 
            */}
            <Suspense fallback={<LoadinPostDetals/>}>
                <PostDetails postId={postId} />
            </Suspense>
        </div>
    )
}
export const metadata = {
    title: `Post Details`,
};
