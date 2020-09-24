<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\CountryRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @ApiResource()
 * @ORM\Entity(repositoryClass=CountryRepository::class)
 */
class Country
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string")
     * @Assert\NotBlank(message="La valeur 'name' est obligatoire.")
     * @Assert\Type("string")
     */
    private $name;

    /**
     * @ORM\Column(type="string")
     * @Assert\NotBlank(message="La valeur 'zone_shipping' est obligatoire.")
     * @Assert\Type("string")
     */
    private $zone_shipping;

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

    public function getZoneShipping(): ?string
    {
        return $this->zone_shipping;
    }

    public function setZoneShipping(string $zone_shipping): self
    {
        $this->zone_shipping = $zone_shipping;

        return $this;
    }
}
