let listofjokes = [
    `Why did the melon jump into the lake? It wanted to be a water-melon.`,
    `What did the duck say when it bought lipstick? “Put it on my bill.”`,
    `What do you call a pig that does karate? A pork chop.`,
    `What has a bed that you can’t sleep in? A river.`,
    `Why were the teacher’s eyes crossed? She couldn’t control her pupils.`,
    `What starts with E, ends with E, and has only 1 letter in it? An Envelope.`,
    `How does the ocean say hello? It waves.`,
    `What lights up a soccer stadium? A soccer match.`,
    `What creature is smarter than a talking parrot? A spelling bee.`,
    `Which U.S. state has the smallest soft drinks? Minnesota (as in, “mini-soda”).`,
    `Why couldn’t the leopard play hide and seek? Because he was always spotted.`,
    `Apparently, you can’t use “beef stew” as a password. It’s not stroganoff.`,
    `Why did the drum take a nap? It was beat.`,
    `Where do hamburgers go dancing?  They go to the meat-ball.`,
    `Why did the tomato turn red?  It saw the salad dressing.`,
    `Why shouldn’t you write with a broken pencil? Because it’s pointless.`,
    `What do you call two monkeys that share an Amazon account? Prime mates.`,
    `Why are teddy bears never hungry? Because they’re always stuffed!`,
    `Why did the tree go to the dentist? It needed a root canal.`,
    `If athletes get athlete’s foot, what do elves get? Mistle-toes.`,
    `Why couldn’t the pony sing? Because she was a little hoarse.`,
    `Where do cows go for entertainment? The mooooo-vies!`,
    `What do you call a pig that does karate? A pork chop.`,
    `How does NASA organize a party? They planet.`,
    `Why did Adele cross the road?  To sing, “Hello from the other side!`,
    `What runs around a yard without actually moving? A fence.`,
    `What’s an astronaut’s favorite candy? A Mars bar.`,
    `Where do sheep go to get their hair cut?  The baa-baa shop.`,
    `Why are there gates around cemeteries? Because people are dying to get in.`,
    `What do you get when you cross a snake with a pie? A pie-thon!`,
    `Why is Peter Pan always flying? He Neverlands.`,
    `What’s the most musical part of the chicken? The drumstick.`,
    `man holding laughing emoji in front of his face`,
    `34. Why do seagulls fly over the sea? Because if they flew over a bay, they would be bagels.`,
    `35. How do you know when the moon has had enough to eat? When it’s full.`,
    `36. What kind of music do planets like? Neptunes.`,
    `37. Why can’t you trust an atom? Because they make up everything.`,
    `38. What do you call a group of disorganized cats? A cat-tastrophe.`,
    `39. Why do bees have sticky hair? Because they use honeycombs.`,
    `40. Where do you learn to make banana splits? At sundae school.`,
    `41. How do you tell if a vampire is sick? By how much he is coffin.`,
    `42. Why are ghosts good cheerleaders?  Because they have a lot of spirit!`,
    `43. What happens to a frog’s car when it breaks down? It gets toad away.`,
    `44. Why did the witches’ team lose the baseball game?  Their bats flew away.`,
    `45. Why did the school kids eat their homework? Because their teacher told them it was a piece of cake.`,
    `46. Why are hairdressers never late for work?  Because they know all the short cuts!`,
    `47. What is the difference between a teacher and a train? One says, “Spit out your gum,” and the other says, “Choo choo choo!”`,
    `48. Why does Humpty Dumpty love autumn?  Because Humpty Dumpty had a great fall.`,
    `49. How do you make a tissue dance? Put a little boogie in it.`,
    `50. What is the tallest building in the entire world?  The library, because it has so many stories.`,
    `51. How do trees access the internet? They log in.`,
    `52. What do you get when you cross a fish and an elephant?  Swimming trunks.`,
    `53. Why did the painting go to jail?  It was framed.`,
    `54. Why did Cinderella get kicked off the soccer team? Because she ran away from the ball.`,
    `55. Why do we tell actors to break a leg?  Because every play has a cast.`,
    `56. Helvetica and Times New Roman walk into a bar. The bartender says, “We don’t serve your type.”`,
    `57. Why wouldn’t the shrimp share his treasure? Because he was a little shellfish.`,
    `58. Why should you knock on the refrigerator before opening the door? In case there is a salad dressing`,
    `59. When is a door not a door? When it is ajar`,
    `60. What did the fish say when he swam into a wall? Dam.`,
    `61. Did you hear about the Italian chef who died? He pasta-way.`,
    `man and woman laughing at jokes`,
    `62. I sold my vacuum the other day. All it was doing was collecting dust.`,
    `63. What is Forrest Gump’s email password? 1forrest1.`,
    `64. Did you hear about the fire in the shoe factory? 10,000 soles were lost. The police said some heels started it.`,
    `65. What’s the difference between a rabbit and a plum? They’re both purple except for the rabbit.`,
    `66. I like elephants. Everything else is irrelephant.`,
    `67. What’s red and bad for your teeth? A brick.`,
    `68. Two guys walk into a bar. The third guy ducks.`,
    `69. Do you want to hear a construction joke? Sorry, I’m still working on it.`,
    `70. Why should you never trust stairs? They’re always up to something.`,
    `71. Why did the bullet end up losing his job? He got fired.`,
    `72. How do you measure a snake? In inches—they don’t have feet.`,
    `73. What does a house wear? Address!`,
    `74. The first rule of the Alzheimer’s club is… Wait, where are we again?`,
    `75. Did you hear about the cheese factory that exploded in France? There was nothing left but de Brie.`,
    `76. Where should you go in the room if you’re feeling cold? The corner—they’re usually 90 degrees.`,
    `77. What did the Buddhist ask the hot dog vendor? “Make me one with everything.”`,
    `78. Why don’t blind people skydive? Because it scares their dogs.`,
    `79. What’s the difference between an oral thermometer and a rectal thermometer? The taste, mostly.`,
    `80. I stayed up all night and tried to figure out where the sun was. Then it dawned on me.`,
    `81. How much space will be freed in the EU after Brexit? Approximately 1 GB.`,
    `82. What do you call malware on a Kindle? A bookworm.`,
    `83. What did the tie say to the hat? You go on ahead. I’ll hang around.`,
    `84. What do you call a musician with problems? A trebled man.`,
    `85. What washes up on very small beaches? Micro-waves.`,
    `86. What do you call a belt with a watch on it? A waist of time.`,
    `87. What did the grape do when it got stepped on? It let out a little wine.`,
    `88. What did the snail who was riding on the turtle’s back say? Wheeeee!`,
    `89. What do you call a lazy kangaroo? A pouch potato.`,
    `90. What does a pig put on dry skin? Oinkment.`,
    `man with a clown nose on a bench`,
    `91. What do you call it when a snowman throws a tantrum? A meltdown.`,
    `92. How do you open a banana? With a mon-key.`,
    `93. Why do oranges wear sunscreen? So they don’t peel.`,
    `94. What did the mama tomato say to the baby tomato? Catch up!`,
    `95. How did the pig get to the hogspital? In a hambulance.`,
    `96. Why does Humpty Dumpty love autumn? Because he had a great fall.`,
    `97. What do you call a pudgy psychic? A four-chin teller.`,
    `98. What do you get when you mix a cocker spaniel, a poodle, and a ghost? A cocker-poodle boo.`,
    `99. How do celebrities stay cool? They have many fans.`,
    `100. How much money does a pirate pay for corn? A buccaneer.`]
    
    
    
    

const randjoke = (a)=>{
    return a[Math.floor(Math.random()*a.length)]
}
let element = document.body.innerHTML = randjoke(listofjokes)