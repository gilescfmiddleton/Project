import { router } from "@inertiajs/react";
import image from "/jobs.png";

export default function Index({ posts }) {
    function deletePost(id) {
        router.delete(`/post/${id}`);
        window.location.reload();
    }

    return (
        <>
            <div style={{ backgroundImage: `url(${image})` }}>
                <div className="max-w-7xl mx-auto py-10">
                    <div class="flex mx-20  ">
                        <div class="w-1/5 h-12 bg-green-500 text-white font-bold py-2 px-4 rounded m-1 ">
                            <h1>Jobs</h1>
                        </div>

                        <div class=" h-12  py-2 px-4 rounded m-2   ">
                            <a
                                href={"/post/create"}
                                className=" bg-blue-500 text-white font-bold py-3 px-4 rounded mx-2"
                            >
                                Add job
                            </a>
                        </div>
                    </div>

                    {posts &&
                        posts.map((item) => (
                            <div key={item.id}>
                                <div class="flex mx-20  ">
                                    <div class="w-1/5 h-12 bg-yellow-500 text-white font-bold py-2 px-4 rounded m-1 ">
                                        <h2>{item.title}</h2>
                                    </div>

                                    <div class="w-1/2 h-12 bg-yellow-500 text-white font-bold py-2 px-4 rounded m-1   ">
                                        <p>{item.description}</p>
                                    </div>

                                    <div class="w-1/8 h-12 py-3 px-4 rounded m-1 ">
                                        <a
                                            href={"/post/" + item.id + "/edit"}
                                            className="mybutton"
                                        >
                                            View/edit
                                        </a>
                                    </div>

                                    <div class="w-1/8 h-12  py-0 px-4 rounded m-1   ">
                                        <button
                                            className="mybutton"
                                            onClick={() => deletePost(item.id)}
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </>
    );
}
