<?php

namespace App\Http\Controllers\Strorage_Areas;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class StorageAreaDashboardController extends Controller
{
    /**
     * Show the Storage Area Dashboard view.
     */
    public function show(): Response
    {
        return Inertia::render('Storage_Areas/StorageAreaDashboard');
    }
}
