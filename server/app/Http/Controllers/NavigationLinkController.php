<?php

namespace App\Http\Controllers;

use App\Models\NavigationLink;
use Laravel\Lumen\Routing\Controller;

class NavigationLinkController extends Controller
{
    public function getLinks()
    {
        $links = NavigationLink::getLinks();
        return $links;
    }
}
