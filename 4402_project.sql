-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: 4402_project
-- ------------------------------------------------------
-- Server version	8.4.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `comments`
--

DROP TABLE IF EXISTS `comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comments` (
  `comment_id` int DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  `post_id` int DEFAULT NULL,
  `content` text,
  `date_commented` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comments`
--

LOCK TABLES `comments` WRITE;
/*!40000 ALTER TABLE `comments` DISABLE KEYS */;
INSERT INTO `comments` VALUES (1,2,1,'\"Looks like fun! Wish I was there.\"','6/2/2023'),(2,3,2,'\"Good luck with the project!\"','6/16/2023'),(3,1,3,'\"What challenge are you working on?\"','7/11/2023'),(4,4,4,'\"Love this! Where did you go?\"','8/2/2023'),(5,5,5,'\"I read the same book! So good!\"','9/6/2023'),(6,6,6,'\"Climbing sounds awesome!\"','6/22/2023'),(7,7,7,'\"That book is amazing!\"','7/6/2023'),(8,8,8,'\"Road trips are the best!\"','8/12/2023'),(9,9,9,'\"I can\'t wait either!\"','9/3/2023'),(10,10,10,'\"Great tips, thanks for sharing!\"','10/5/2023'),(11,11,11,'\"What did you order?\"','7/12/2023'),(12,12,12,'\"Let\'s party!\"','8/13/2023'),(13,13,13,'\"Awesome job today!\"','9/10/2023'),(14,14,14,'\"That game is so fun!\"','6/11/2023'),(15,15,15,'\"I need that recipe!\"','7/23/2023'),(16,16,16,'\"Congratulations on the new place!\"','8/19/2023'),(17,17,17,'\"I\'m so excited too!\"','9/18/2023'),(18,18,18,'\"Coffee is life!\"','10/2/2023'),(19,19,19,'\"I can\'t wait either!\"','6/26/2023'),(20,20,20,'\"Enjoy your new phone!\"','7/9/2023');
/*!40000 ALTER TABLE `comments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `directmessages`
--

DROP TABLE IF EXISTS `directmessages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `directmessages` (
  `dm_id` int DEFAULT NULL,
  `sender_id` int DEFAULT NULL,
  `receiver_id` int DEFAULT NULL,
  `content` text,
  `date_sent` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `directmessages`
--

LOCK TABLES `directmessages` WRITE;
/*!40000 ALTER TABLE `directmessages` DISABLE KEYS */;
INSERT INTO `directmessages` VALUES (1,1,2,'\"Hey! How have you been?\"','6/5/2023'),(2,2,3,'\"Did you finish the project?\"','6/18/2023'),(3,3,4,'\"Hey, want to grab coffee?\"','7/12/2023'),(4,4,5,'\"Have you read that book?\"','9/8/2023'),(5,5,1,'\"Great trip pictures!\"','6/2/2023'),(6,6,7,'\"Climbing tomorrow?\"','6/25/2023'),(7,7,8,'\"Road trip plans?\"','8/5/2023'),(8,8,9,'\"You up for the weekend event?\"','9/1/2023'),(9,9,10,'\"Can I get that blog link?\"','9/15/2023'),(10,10,11,'\"Loved your post on coding!\"','10/2/2023'),(11,11,12,'\"See you at the party!\"','8/10/2023'),(12,12,13,'\"How\'s the workout?\"','7/20/2023'),(13,13,14,'\"What game is that?\"','6/15/2023'),(14,14,15,'\"What\'s the recipe?\"','7/25/2023'),(15,15,16,'\"Congrats on the new house!\"','8/20/2023'),(16,16,17,'\"I need tickets for the concert!\"','9/18/2023'),(17,17,18,'\"Coffee shop this weekend?\"','10/5/2023'),(18,18,19,'\"Excited for the trip!\"','6/28/2023'),(19,19,20,'\"Enjoy your new phone!\"','7/10/2023'),(20,20,1,'\"Let\'s catch up soon!\"','7/20/2023');
/*!40000 ALTER TABLE `directmessages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `emails`
--

DROP TABLE IF EXISTS `emails`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `emails` (
  `email_id` int DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  `email` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `emails`
--

LOCK TABLES `emails` WRITE;
/*!40000 ALTER TABLE `emails` DISABLE KEYS */;
INSERT INTO `emails` VALUES (1,1,'johndoe@example.com'),(2,1,'john.doe@workmail.com'),(3,2,'janedoe@example.com'),(4,3,'mike123@gmail.com'),(5,4,'sarah.smith@outlook.com'),(6,5,'alice92@yahoo.com'),(7,6,'tom.rock@mail.com'),(8,7,'emily89@gmail.com'),(9,8,'george22@outlook.com'),(10,9,'claire_97@aol.com'),(11,10,'andrew_harris@outlook.com'),(12,11,'jessical_lee@icloud.com'),(13,12,'chris_king@mail.com'),(14,13,'olivia.jones@gmail.com'),(15,14,'matthew_brown@yahoo.com'),(16,15,'rachel_roberts@aol.com'),(17,16,'nathan_moore@hotmail.com'),(18,17,'victoria_vance@icloud.com'),(19,18,'jason_williams@gmail.com'),(20,19,'emma.richards@outlook.com');
/*!40000 ALTER TABLE `emails` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `followers`
--

DROP TABLE IF EXISTS `followers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `followers` (
  `follower_id` int DEFAULT NULL,
  `user_id` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `followers`
--

LOCK TABLES `followers` WRITE;
/*!40000 ALTER TABLE `followers` DISABLE KEYS */;
INSERT INTO `followers` VALUES (1,2),(2,3),(3,4),(4,5),(5,6),(6,7),(7,8),(8,9),(9,10),(10,11),(11,12),(12,13),(13,14),(14,15),(15,16),(16,17),(17,18),(18,19),(19,20),(20,1);
/*!40000 ALTER TABLE `followers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `friends`
--

DROP TABLE IF EXISTS `friends`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `friends` (
  `user_id` int DEFAULT NULL,
  `friend_id` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `friends`
--

LOCK TABLES `friends` WRITE;
/*!40000 ALTER TABLE `friends` DISABLE KEYS */;
INSERT INTO `friends` VALUES (1,2),(1,3),(1,4),(2,3),(2,5),(3,4),(3,6),(4,7),(5,8),(5,9),(6,10),(7,11),(8,12),(9,13),(10,14),(11,15),(12,16),(13,17),(14,18),(15,19);
/*!40000 ALTER TABLE `friends` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gcmembers`
--

DROP TABLE IF EXISTS `gcmembers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `gcmembers` (
  `group_id` int DEFAULT NULL,
  `user_id` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gcmembers`
--

LOCK TABLES `gcmembers` WRITE;
/*!40000 ALTER TABLE `gcmembers` DISABLE KEYS */;
INSERT INTO `gcmembers` VALUES (1,1),(1,2),(1,3),(1,6),(2,2),(2,3),(2,5),(3,6),(3,7),(3,12),(4,4),(4,7),(4,8),(5,7),(5,8),(5,9),(6,3),(6,10),(6,11),(7,12),(7,13),(7,14),(8,18),(8,19),(8,20),(9,17),(9,18),(9,20),(10,16),(10,17),(10,19);
/*!40000 ALTER TABLE `gcmembers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `groupchats`
--

DROP TABLE IF EXISTS `groupchats`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `groupchats` (
  `group_id` int DEFAULT NULL,
  `group_name` text,
  `created_by` int DEFAULT NULL,
  `date_created` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `groupchats`
--

LOCK TABLES `groupchats` WRITE;
/*!40000 ALTER TABLE `groupchats` DISABLE KEYS */;
INSERT INTO `groupchats` VALUES (1,'\"Beach Trip Crew\"',1,'6/1/2023'),(2,'\"Project Team\"',2,'6/10/2023'),(3,'\"Rock Climbers\"',6,'6/20/2023'),(4,'\"Weekend Hikers\"',4,'7/1/2023'),(5,'\"Adventure Readers\"',7,'7/5/2023'),(6,'\"Tech Enthusiasts\"',3,'8/15/2023'),(7,'\"Weekend Party\"',12,'8/12/2023'),(8,'\"Coffee Lovers\"',18,'9/1/2023'),(9,'\"Concert Goers\"',17,'9/5/2023'),(10,'\"New Home Owners\"',16,'8/20/2023');
/*!40000 ALTER TABLE `groupchats` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `likes_on_comments`
--

DROP TABLE IF EXISTS `likes_on_comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `likes_on_comments` (
  `like_id` int DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  `post_id` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `likes_on_comments`
--

LOCK TABLES `likes_on_comments` WRITE;
/*!40000 ALTER TABLE `likes_on_comments` DISABLE KEYS */;
INSERT INTO `likes_on_comments` VALUES (1,2,1),(2,3,1),(3,4,3),(4,5,2),(5,6,4),(6,7,5),(7,8,6),(8,9,7),(9,10,8),(10,11,9),(11,12,10),(12,13,11),(13,14,12),(14,15,13),(15,16,14),(16,17,15),(17,18,16),(18,19,17),(19,20,18);
/*!40000 ALTER TABLE `likes_on_comments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `likes_on_posts`
--

DROP TABLE IF EXISTS `likes_on_posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `likes_on_posts` (
  `like_id` int DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  `post_id` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `likes_on_posts`
--

LOCK TABLES `likes_on_posts` WRITE;
/*!40000 ALTER TABLE `likes_on_posts` DISABLE KEYS */;
INSERT INTO `likes_on_posts` VALUES (1,2,1),(2,3,1),(3,4,3),(4,5,2),(5,6,4),(6,7,5),(7,8,6),(8,9,7),(9,10,8),(10,11,9),(11,12,10),(12,13,11),(13,14,12),(14,15,13),(15,16,14),(16,17,15),(17,18,16),(18,19,17),(19,20,18);
/*!40000 ALTER TABLE `likes_on_posts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `posts`
--

DROP TABLE IF EXISTS `posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `posts` (
  `post_id` int DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  `content` text,
  `date_posted` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `posts`
--

LOCK TABLES `posts` WRITE;
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;
INSERT INTO `posts` VALUES (1,1,'\"Had an amazing trip to the beach!\"','6/1/2023'),(2,2,'\"Excited to start a new project.\"','6/15/2023'),(3,3,'\"Working on a new coding challenge.\"','7/10/2023'),(4,4,'\"What a great day for a hike!\"','8/1/2023'),(5,5,'\"Just finished reading a great book!\"','9/5/2023'),(6,6,'\"Time for some rock climbing!\"','6/20/2023'),(7,7,'\"Loving my new adventure book!\"','7/5/2023'),(8,8,'\"It\'s a perfect day for a road trip!\"','8/10/2023'),(9,9,'\"Looking forward to the weekend!\"','9/2/2023'),(10,10,'\"New blog post on coding tips!\"','10/3/2023'),(11,11,'\"Checking out a new restaurant today!\"','7/10/2023'),(12,12,'\"Ready for the weekend party!\"','8/12/2023'),(13,13,'\"Great workout today!\"','9/9/2023'),(14,14,'\"I\'m loving this new game!\"','6/10/2023'),(15,15,'\"Cooking a new recipe today!\"','7/22/2023'),(16,16,'\"Just moved into a new house!\"','8/18/2023'),(17,17,'\"Excited for the concert next week!\"','9/17/2023'),(18,18,'\"Enjoying the coffee shop vibes!\"','10/1/2023'),(19,19,'\"Can\'t wait for the upcoming trip!\"','6/25/2023'),(20,20,'\"Got my new phone today!\"','7/8/2023');
/*!40000 ALTER TABLE `posts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `user_id` int DEFAULT NULL,
  `username` text,
  `name` text,
  `date_joined` text,
  `profile_picture` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'johndoe','John Doe','1/10/2023','john_doe_pic.jpg'),(2,'janedoe','Jane Doe','3/12/2023','jane_doe_pic.jpg'),(3,'mike123','Mike Johnson','2/15/2023','mike_johnson_pic.jpg'),(4,'sarah_s','Sarah Smith','4/2/2023','sarah_smith_pic.jpg'),(5,'alice_92','Alice Brown','5/20/2023','alice_brown_pic.jpg'),(6,'tom_rock','Tom Williams','6/1/2023','tom_williams_pic.jpg'),(7,'emily89','Emily Green','7/15/2023','emily_green_pic.jpg'),(8,'george22','George Taylor','8/10/2023','george_taylor_pic.jpg'),(9,'claire_97','Claire White','9/5/2023','claire_white_pic.jpg'),(10,'andrew_h','Andrew Harris','10/1/2023','andrew_harris_pic.jpg'),(11,'jessicaL','Jessica Lee','2/17/2023','jessica_lee_pic.jpg'),(12,'chris_k','Chris King','3/8/2023','chris_king_pic.jpg'),(13,'oliviaJ','Olivia Jones','5/13/2023','olivia_jones_pic.jpg'),(14,'matthewB','Matthew Brown','6/20/2023','matthew_brown_pic.jpg'),(15,'rachel_R','Rachel Roberts','7/8/2023','rachel_roberts_pic.jpg'),(16,'nathanM','Nathan Moore','8/25/2023','nathan_moore_pic.jpg'),(17,'victoriaV','Victoria Vance','9/22/2023','victoria_vance_pic.jpg'),(18,'jasonW','Jason Williams','10/5/2023','jason_williams_pic.jpg'),(19,'emma_R','Emma Richards','6/30/2023','emma_richards_pic.jpg'),(20,'benjaminF','Benjamin Foster','7/2/2023','benjamin_foster_pic.jpg');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-11-17 21:15:55
