import React, { useState, useEffect } from "react";
import { router } from "@inertiajs/react";
import image from "/jobs.png";

export default function Create() {
    const [values, setValues] = useState({
        // Form fields
        title: "",
        location: "",
        description: "",
        youtubevids: "",
        stuffneeded: "",
        notes: "",
        whentodo: "",
    });

    useEffect(() => {
        const textAreas = document.querySelectorAll(".make-bigger");
        textAreas.forEach((textarea) => {
            textarea.style.height = "1px";
            textarea.style.height = 15 + textarea.scrollHeight + "px";
        });
    }, []);

    // We will use function below to get
    // values from form inputs
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

    // This function  will send our form data to
    // store function of PostContoller
    function handleSubmit(e) {
        e.preventDefault();

        if (
            values.title == "" ||
            values.location == "" ||
            values.description == "" ||
            values.youtubevids == "" ||
            values.stuffneeded == "" ||
            values.notes == "" ||
            <values className="whentodo"></values> == ""
        ) {
            alert("Fill them all in! You know it makes sense");
            return;
        }

        router.post("/post", values, {
            onSuccess: () => {
                setSuccess(true);
            },
        });

        setValues({
            title: "",
            location: "",
            description: "",
            youtubevids: "",
            stuffneeded: "",
            notes: "",
            whentodo: "",
        });
    }

    return (
        <>
            <div style={{ backgroundImage: `url(${image})` }}>
                <div className="max-w-xl mx-auto py-10">
                    <h1 className="bg-green-500 text-white font-bold py-2 px-4 rounded">
                        Add a new Job
                    </h1>

                    <hr />

                    <form
                        className="flex flex-col my-6 gap-4"
                        onSubmit={handleSubmit}
                    >
                        <div className="flex items-start">
                            <label
                                htmlFor="title"
                                className="w-1/4 h-18 bg-green-500 text-white font-bold py-2 px-2 rounded m-0 "
                            >
                                Title:
                            </label>
                            <input
                                id="title"
                                value={values.title}
                                onChange={handleChange}
                                className=" w-3/4 bg-yellow-500 text-white font-bold py-2 px-4 rounded ml-2 placeholder-blue-500"
                                placeholder="enter title"
                            />
                        </div>

                        <div class="flex items-start">
                            <label
                                htmlFor="location"
                                class="w-1/4 bg-green-500 text-white font-bold py-2 px-2 rounded m-0 "
                            >
                                Location:
                            </label>
                            <textarea
                                className="h-10 w-3/4 bg-yellow-500 text-white font-bold py-2 px-4 rounded ml-2 placeholder-blue-500 make-bigger"
                                placeholder="location"
                                id="location"
                                value={values.location}
                                onChange={handleChange}
                            ></textarea>
                        </div>

                        <div class="flex items-start">
                            <label
                                htmlFor="description"
                                class="w-1/4 bg-green-500 text-white font-bold py-2 px-2 rounded m-0 "
                            >
                                Description:
                            </label>
                            <textarea
                                className="h-10 w-3/4 bg-yellow-500 text-white font-bold py-2 px-4 rounded ml-2 placeholder-blue-500 make-bigger"
                                placeholder="description"
                                id="description"
                                value={values.description}
                                onChange={handleChange}
                            ></textarea>
                        </div>

                        <div class="flex items-start">
                            <label
                                htmlFor="youtubevids"
                                class="w-1/4 bg-green-500 text-white font-bold py-2 px-2 rounded m-0 "
                            >
                                Youtube vids:
                            </label>
                            <input
                                type="url"
                                className="h-10 w-3/4 bg-yellow-500 text-white font-bold py-2 px-4 rounded ml-2 placeholder-blue-500 make-bigger"
                                placeholder="insert links to youtube vids"
                                id="youtubevids"
                                value={values.youtubevids}
                                onChange={handleChange}
                            ></input>
                        </div>

                        <div class="flex items-start">
                            <label
                                htmlFor="stuffneeded"
                                class="w-1/4 bg-green-500 text-white font-bold py-2 px-2 rounded m-0 "
                            >
                                Stuff needed:
                            </label>
                            <textarea
                                className="h-10 w-3/4 bg-yellow-500 text-white font-bold py-2 px-4 rounded ml-2 placeholder-blue-500 make-bigger"
                                placeholder="materials, tools and PPE"
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
                                className="h-10 w-3/4 bg-yellow-500 text-white font-bold py-2 px-4 rounded ml-2 placeholder-blue-500 make-bigger "
                                placeholder="notes"
                                id="notes"
                                value={values.notes}
                                onChange={handleChange}
                            ></textarea>
                        </div>

                        <div class="flex items-start">
                            <label
                                htmlFor="whentodo"
                                class="w-1/4 bg-green-500 text-white font-bold py-2 px-2 rounded m-0 "
                            >
                                When:
                            </label>
                            <textarea
                                className="h-10 w-3/4 bg-yellow-500 text-white font-bold py-2 px-4 rounded ml-2 placeholder-blue-500 make-bigger "
                                placeholder="date, frequency or trigger"
                                id="whentodo"
                                value={values.whentodo}
                                onChange={handleChange}
                            ></textarea>
                        </div>

                        <button className="mybutton" type="submit">
                            Create
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
