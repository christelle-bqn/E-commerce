<?php

namespace App\Repository;

use App\Entity\BankDetails;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method BankDetails|null find($id, $lockMode = null, $lockVersion = null)
 * @method BankDetails|null findOneBy(array $criteria, array $orderBy = null)
 * @method BankDetails[]    findAll()
 * @method BankDetails[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class BankDetailsRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, BankDetails::class);
    }

    // /**
    //  * @return BankDetails[] Returns an array of BankDetails objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('b')
            ->andWhere('b.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('b.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?BankDetails
    {
        return $this->createQueryBuilder('b')
            ->andWhere('b.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
