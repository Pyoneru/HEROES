<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class AngularPageController extends AbstractController
{
    /**
     * @Route("/", name="angular_page")
     */
    public function index(): Response
    {
        return $this->render('angular_page/index.html.twig', [
            'title' => 'Heroes App',
        ]);
    }
}
