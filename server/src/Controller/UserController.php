<?php

namespace App\Controller;

use App\Entity\User;
use App\Form\UserType;
use App\Repository\UserRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\AddressRepository;
use App\Repository\BankDetailsRepository;
use Symfony\Component\HttpFoundation\Cookie;


/**
 * @Route("/user")
 */
class UserController extends AbstractController
{
    /**
     * @Route("/", name="user_index", methods={"GET"})
     */
    public function index(UserRepository $userRepository): Response
    {
        return $this->render('user/index.html.twig', [
            'users' => $userRepository->findAll(),
        ]);
    }

    /**
     * @Route("/new", name="user_new", methods={"GET","POST"})
     */
    public function new(Request $request): Response
    {
        $user = new User();
        $form = $this->createForm(UserType::class, $user);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($user);
            $entityManager->flush();

            return $this->redirectToRoute('user_index');
        }

        return $this->render('user/new.html.twig', [
            'user' => $user,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="user_show", methods={"GET"})
     */
    public function show(User $user): Response
    {
        return $this->render('user/show.html.twig', [
            'user' => $user,
        ]);
    }

    /**
     * @Route("/login", name="user_login", methods={"POST"})
     */
    public function login(Request $request, UserRepository $userRepository): Response
    {
        $email = $request->request->get('email');
        $password = $request->request->get('password');
        $userId = $userRepository->findOneBy(["email" => $email, "password" => sha1($password . "wacommerce")]);
        if ($userId != NULL) {
            return $this->json(["email" => $email, "token" => $userId->getId() . "|" . sha1($email . "cookieSession")]);
        } else {
            return $this->json(["error" => "invalid credentials"]);
        }
    }

    /**
     * @Route("/{id}/edit", name="user_edit", methods={"GET","POST"})
     */
    public function edit(Request $request, User $user): Response
    {
        $form = $this->createForm(UserType::class, $user);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('user_index');
        }

        return $this->render('user/edit.html.twig', [
            'user' => $user,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="user_delete", methods={"DELETE"})
     */
    public function delete(Request $request, User $user): Response
    {
        if ($this->isCsrfTokenValid('delete' . $user->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($user);
            $entityManager->flush();
        }

        return $this->redirectToRoute('user_index');
    }
    // CODE CHRISTELLE 

    /**
     * @Route("/profile/{id}", name="profile", methods={"GET"})
     */
    public function profile(
        $id,
        BankDetailsRepository $bankDetailsRepository,
        AddressRepository $addressRepository,
        UserRepository $userRepository
    ): Response {
        $user = $userRepository->find(['id' => $id]);
        $user_email = $user->getEmail();
        $user_bank = $bankDetailsRepository->findBy(['id_user' => $id]);
        $user_address = $addressRepository->findBy(['id_user' => $id]);

        return $this->json(['user_email' => $user_email, 'user_address' => $user_address, 'user_bank' => $user_bank], 200, []);
    }
}
