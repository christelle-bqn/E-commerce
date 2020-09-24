<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\BankDetailsRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ApiResource()
 * @ORM\Entity(repositoryClass=BankDetailsRepository::class)
 */
class BankDetails
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     * @Groups("bank:read")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups("bank:read")
     * @Groups("address:read_user")
     */
    private $name;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups("bank:read")
     * @Groups("address:read_user")
     */
    private $surname;

    /**
     * @ORM\Column(type="integer")
     * @Groups("bank:read")
     * @Groups("address:read_user")
     */
    private $card_number;

    /**
     * @ORM\Column(type="integer")
     * @Groups("bank:read")
     * @Groups("address:read_user")
     */
    private $month;

    /**
     * @ORM\Column(type="integer")
     * @Groups("bank:read")
     * @Groups("address:read_user")
     */
    private $year;

    /**
     * @ORM\Column(type="integer")
     */
    private $id_user;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getSurname(): ?string
    {
        return $this->surname;
    }

    public function setSurname(string $surname): self
    {
        $this->surname = $surname;

        return $this;
    }

    public function getCardNumber(): ?int
    {
        return $this->card_number;
    }

    public function setCardNumber(int $card_number): self
    {
        $this->card_number = $card_number;

        return $this;
    }

    public function getMonth(): ?int
    {
        return $this->month;
    }

    public function setMonth(int $month): self
    {
        $this->month = $month;

        return $this;
    }

    public function getYear(): ?int
    {
        return $this->year;
    }

    public function setYear(int $year): self
    {
        $this->year = $year;

        return $this;
    }

    public function getIdUser(): ?int
    {
        return $this->id_user;
    }

    public function setIdUser(int $id_user): self
    {
        $this->id_user = $id_user;

        return $this;
    }
}
