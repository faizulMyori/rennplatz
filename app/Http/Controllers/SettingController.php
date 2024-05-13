<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\User;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class SettingController extends Controller
{
    public function index() {
        // $role = Role::create(['name' => 'admin']);
        // User::where('id', 1)->first()->assignRole('admin');
        $users = User::paginate(
            $perPage = 5, $columns = ['*'], $pageName = 'users'
        );

        $permissions = Permission::paginate(
            $perPage = 5, $columns = ['*'], $pageName = 'permissions'
        );

        $rolePermissions = Role::with('permissions')->paginate(
            $perPage = 5, $columns = ['*'], $pageName = 'rolePermissions'
        );


        return Inertia::render('Settings/Index', [
            "users" => $users,
            "permissions" => $permissions,
            "rolePermissions" => $rolePermissions,
        ]);
    }
}
