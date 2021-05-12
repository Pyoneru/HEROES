<?php

namespace App\DataFixtures;

use App\Entity\Hero;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Faker\Factory;

class AppFixtures extends Fixture
{

    /**
     * @var Faker\Factory
     */
    private $faker;

    /**
     * AppFixtures constructor.
     */
    public function __construct()
    {
        $this->faker = Factory::create();
    }

    public function load(ObjectManager $manager)
    {
        for($i = 0; $i < 15; $i++){
            $hero = new Hero();
            $hero->setName($this->faker->realText(20));
            $manager->persist($hero);
        }

        $manager->flush();
    }
}
