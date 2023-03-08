<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller as BaseController;

use  App\Models\Article;
use  App\Models\Tag;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Hash;


class Controller extends BaseController
{
    use AuthorizesRequests, ValidatesRequests;

    public function singlearticle($id)
    {
        $single = Article::where('id', '=', $id)->first();
        $tags = Tag::join('article_tag', 'tags.id', '=', 'article_tag.tag_id')->where('article_tag.article_id', '=', $id)->get()->toArray();
        if ($single != null) {
            $single->tags = $tags;
            return $single;
        } else {
            $response['error'] = "Error in the resquest";
            return $response;
        }
    }

    public function allarticle()
    {
        $articles = Article::all();
        return $articles;
    }

    public function bytags($slug)
    {
        $articles = Article::select('articles.id')->join('article_tag', 'articles.id', '=', 'article_tag.article_id')->join('tags', 'article_tag.tag_id', '=', 'tags.id')->where('tags.name', 'LIKE', '%'.$slug.'%')->get();
        $response = [];
        foreach ($articles as $a){
            $response[]=$this->singlearticle($a->id);
        }
        return($response);
    }

    public function byTitle($slug)
    {
        $articles = Article::select('articles.id')->where('title', 'LIKE', '%'.$slug.'%')->get();
        $response = [];
        foreach ($articles as $a){
            $response[]=$this->singlearticle($a->id);
        }
        return($response);
    }

    public function addarticle(Request $request){

        $validatedData = $request->validate([
            'title' => 'required|string',
            'content' => 'required|string',
            'mediaType' => 'required|string',
        ]);

        $article = Article::create([

            'title' => $validatedData['title'],
            'content' => $validatedData['content'],
            'thumbnailURL'=> "/",
            'mediaType' => $validatedData['mediaType'],
            'mediaURL'=> "/",
            'leadStory' => 0,
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        return response()->json([
            'result' => "all good",
        ]);
    }
}
