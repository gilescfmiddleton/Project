<?php


namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        return Inertia::render('Index', [
            'posts' => Post::all()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Create');
     
        
    }


        //
    

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        Post::create([
            'title' => $request->title,
            'location' => $request->location,
            'description'=> $request->description,
            'youtubevids'=> $request->youtubevids,
            'stuffneeded'=> $request->stuffneeded,
            'notes'=> $request->notes,
            'whentodo'=>$request->whentodo
        ]);

        return redirect()->back();
    }
        //
    

    /**
     * Display the specified resource.
     */
    public function show(Post $post)
    {
        return Inertia::render('Show', [
            'post' => $post
        ]);
    }


    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Post $post)
    {
        return Inertia::render('Edit', [
            'post' => $post
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Post $post, Request $request )
    {


        $post->update([
            'title' => $request->title,
            'location' => $request->location,
            'description'=> $request->description,
            'youtubevids'=> $request->youtubevids,
            'stuffneeded'=> $request->stuffneeded,
            'notes'=> $request->notes,
           'whentodo'=>$request->whentodo


        ]);
        return redirect()->back();

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Post $post)
    {
        $post->delete();
    }
}
