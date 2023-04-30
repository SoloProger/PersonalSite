<?php

namespace App\Http\Controllers;

use App\Models\Portfolio;
use Laravel\Lumen\Routing\Controller;
use \App\Http\Resources\PortfolioResources;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Error;

class PortfolioController extends Controller
{

    /**
     *  Get all projects
     *
     * @return mixed
     */
    public function getProjects(): mixed
    {
        return PortfolioResources::collection(Portfolio::projects());
    }

    /**
     * Add a new project.
     *
     * @param  Request  $request
     * @return JsonResponse
     */
    public function addProject(Request $request): JsonResponse
    {
        try {

            $project = [
                "link" => $request->input('link'),
                "title" => $request->input('title'),
                "description" => $request->input('description'),
                "imgPath" => $request->input('imgPath'),
                "isAction" => $request->input('isAction'),
            ];

            Portfolio::addProject($project);

            return response()->json(['status' => 'success'], 201);
        } catch (Error $error) {
            return response()->json(['status' => 'error', 'message' => $error->getMessage()], 500);
        }
    }
}
