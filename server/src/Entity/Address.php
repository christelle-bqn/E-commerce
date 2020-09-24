<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\AddressRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ApiResource()
 * @ORM\Entity(repositoryClass=AddressRepository::class)
 */
class Address
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     * @Groups("address:read")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups("address:read")
     * @Groups("address:read_user")
     */
    private $name;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups("address:read")    
     * @Groups("address:read_user")
     */
    private $surname;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups("address:read")
     * @Groups("address:read_user")
     */
    private $phone;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups("address:read")
     * @Groups("address:read_user")
     */
    private $street;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups("address:read")
     * @Groups("address:read_user")
     */
    private $city;

    /**
     * @ORM\Column(type="integer")
     * @Groups("address:read")
     * @Groups("address:read_user")
     */
    private $zipcode;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups("address:read")
     * @Groups("address:read_user")
     */
    private $country;

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

    public function getPhone(): ?string
    {
        return $this->phone;
    }

    public function setPhone(string $phone): self
    {
        $this->phone = $phone;

        return $this;
    }

    public function getStreet(): ?string
    {
        return $this->street;
    }

    public function setStreet(string $street): self
    {
        $this->street = $street;

        return $this;
    }

    public function getCity(): ?string
    {
        return $this->city;
    }

    public function setCity(string $city): self
    {
        $this->city = $city;

        return $this;
    }

    public function getZipcode(): ?int
    {
        return $this->zipcode;
    }

    public function setZipcode(int $zipcode): self
    {
        $this->zipcode = $zipcode;

        return $this;
    }

    public function getCountry(): ?string
    {
        return $this->country;
    }

    public function setCountry(string $country): self
    {
        $this->country = $country;

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
