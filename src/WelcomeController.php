<?php

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;

class WelcomeController extends Controller
{
    public function indexAction(Request $request)
    {
        $name = $request->query->get('name');
        if (!$name) $name = 'World';
        return $this->render('index.html.twig', ['name' => $name]);
    }
}
