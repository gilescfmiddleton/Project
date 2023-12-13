import React, { useState, useEffect } from "react";
import { router } from "@inertiajs/react";
import image from "/jobs.png";

export default function Edit({ post }) {
    const [values, setValues] = useState({
        // Form fields
        title: post.title,
        location: post.location,
        description: post.description,
        youtubevids: post.youtubevids,
        stuffneeded: post.stuffneeded,
        notes: post.notes,
        whentodo: post.whentodo,
    });

    useEffect(() => {
        const textAreas = document.querySelectorAll(".make-bigger");
        textAreas.forEach((textarea) => {
            textarea.style.height = "1px";
            textarea.style.height = 15 + textarea.scrollHeight + "px";
        });
    }, []);

    function handleChange(e) {
        const key = e.target.id;
        const value = e.target.value;
        setValues((values) => ({
            ...values,
            [key]: value,
        }));
        e.target.style.height = "1px";
        e.target.style.height = 15 + e.target.scrollHeight + "px";
    }

    function handleSubmit(e) {
        e.preventDefault();
        router.put(`/post/${post.id}`, values);
    }

    return (
        <>
            <div style={{ backgroundImage: `url(${image})` }}>
                <div className="max-w-xl mx-auto py-10">
                    <h1 className="bg-green-500 text-white font-bold py-2 px-4 rounded">
                        View/edit Job
                    </h1>

                    <hr />
                    <form
                        className="flex flex-col my-6 gap-4"
                        onSubmit={handleSubmit}
                    >
                        <div class="flex items-start">
                            <label
                                htmlFor="title"
                                class="w-1/4 h-18 bg-green-500 text-white font-bold py-2 px-2 rounded m-0 "
                            >
                                Title:
                            </label>
                            <input
                                id="title"
                                value={values.title}
                                onChange={handleChange}
                                className=" w-3/4 bg-yellow-500 text-white font-bold py-2 px-4 rounded ml-2  "
                            />
                        </div>

                        <div class="flex items-start">
                            <label
                                htmlFor="location"
                                className="w-1/4 bg-green-500 text-white font-bold py-2 px-2 rounded m-0 "
                            >
                                Location:
                            </label>
                            <textarea
                                className="h-10 w-3/4 bg-yellow-500 text-white font-bold py-2 px-4 rounded ml-2 make-bigger "
                                id="location"
                                value={values.location}
                                onChange={handleChange}
                            ></textarea>
                        </div>

                        <div class="flex items-start">
                            <label
                                htmlFor="description"
                                className="w-1/4 bg-green-500 text-white font-bold py-2 px-2 rounded m-0 "
                            >
                                Description:
                            </label>
                            <textarea
                                className="h-10 w-3/4 bg-yellow-500 text-white font-bold py-2 px-4 rounded ml-2 make-bigger "
                                id="description"
                                value={values.description}
                                onChange={handleChange}
                            ></textarea>
                        </div>

                        <div class="flex items-start">
                            <label
                                htmlFor="youtubevids"
                                className="w-1/4 bg-green-500 text-white font-bold py-2 px-2 rounded m-0 "
                            >
                                Youtube vids:
                            </label>
                            <textarea
                                className="h-10 w-3/4 bg-yellow-500 text-white font-bold py-2 px-4 rounded ml-2 make-bigger"
                                id="youtubevids"
                                value={values.youtubevids}
                                onChange={handleChange}
                            ></textarea>
                        </div>

                        <div class="flex items-start">
                            <label
                                htmlFor="stuffneeded"
                                className="w-1/4 bg-green-500 text-white font-bold py-2 px-2 rounded m-0 "
                            >
                                Stuff needed:
                            </label>
                            <textarea
                                className="h-10 w-3/4 bg-yellow-500 text-white font-bold py-2 px-4 rounded ml-2 make-bigger "
                                id="stuffneeded"
                                value={values.stuffneeded}
                                onChange={handleChange}
                            ></textarea>
                        </div>

                        <div class="flex items-start">
                            <label
                                htmlFor="notes"
                                class="w-1/4 bg-green-500 text-white font-bold py-2 px-2 rounded m-0 "
                            >
                                Notes:
                            </label>

                            <textarea
                                className="h-10 w-3/4 bg-yellow-500 text-white font-bold py-2 px-4 rounded ml-2 make-bigger"
                                id="notes"
                                value={values.notes}
                                onChange={handleChange}
                            ></textarea>
                        </div>

                        <div class="flex items-start">
                            <label
                                htmlFor="whentodo"
                                className="w-1/4 bg-green-500 text-white font-bold py-2 px-2 rounded m-0"
                            >
                                When:
                            </label>
                            <textarea
                                className="h-10 w-3/4 bg-yellow-500 text-white font-bold py-2 px-4 rounded ml-2 make-bigger"
                                id="whentodo"
                                value={values.whentodo}
                                onChange={handleChange}
                            ></textarea>
                        </div>

                        <button className="mybutton" type="submit">
                            Update
                        </button>
                    </form>

                    <a href={"/post"} className="mybutton">
                        Home
                    </a>
                </div>
            </div>
        </>
    );
}
