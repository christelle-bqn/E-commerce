<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\ShippingRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @ApiResource()
 * @ORM\Entity(repositoryClass=ShippingRepository::class)
 */
class Shipping
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="integer")
     * @Assert\NotBlank(message="La valeur 'cost' est obligatoire.", groups={"new"})
     * @Assert\Type("integer")
     */
    private $cost;

    /**
     * @ORM\Column(type="integer")
     * @Assert\NotBlank(message="La valeur 'min_weight' est obligatoire.", groups={"new"})
     * @Assert\Type("integer")
     */
    private $min_weight;

    /**
     * @ORM\Column(type="integer")
     * @Assert\NotBlank(message="La valeur 'max_weight' est obligatoire.", groups={"new"})
     * @Assert\Type("integer")
     */
    private $max_weight;

    /**
     * @ORM\Column(type="string")
     * @Assert\NotBlank(message="La valeur 'zone' est obligatoire.", groups={"new"})
     * @Assert\Type("string")
     */
    private $zone;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getCost(): ?int
    {
        return $this->cost;
    }

    public function setCost(int $cost): self
    {
        $this->cost = $cost;

        return $this;
    }

    public function getMinWeight(): ?int
    {
        return $this->min_weight;
    }

    public function setMinWeight(int $min_weight): self
    {
        $this->min_weight = $min_weight;

        return $this;
    }

    public function getMaxWeight(): ?int
    {
        return $this->max_weight;
    }

    public function setMaxWeight(int $max_weight): self
    {
        $this->max_weight = $max_weight;

        return $this;
    }

    public function getZone(): ?string
    {
        return $this->zone;
    }

    public function setZone(string $zone): self
    {
        $this->zone = $zone;

        return $this;
    }
}
