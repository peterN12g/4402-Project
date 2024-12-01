INSERT INTO users (username, full_name, password) VALUES 
('johndoe','John Doe','iodwihad18'),
('janedoe','Jane Doe','12dasdw'),
('mike123','Mike Johnson','d2wadd'),
('sarah_s','Sarah Smith','21ewda'),
('alice_92','Alice Brown','21edad'),
('tom_rock','Tom Williams','199duw98dh'),
('emily89','Emily Green','wdad1'),
('george22','George Taylor','koiaj89'),
('claire_97','Claire White','ijjawd'),
('andrew_h','Andrew Harris','pj8989y'),
('jessicaL','Jessica Lee','oidwahd1'),
('chris_k','Chris King','diaowdw2'),
('oliviaJ','Olivia Jones','dwiaod1'),
('matthewB','Matthew Brown','op89wd'),
('rachel_R','Rachel Roberts','plook9wd8'),
('nathanM','Nathan Moore','dojd92'),
('victoriaV','Victoria Vance','lolsiwd'),
('jasonW','Jason Williams','twhdwhuudwh'),
('emma_R','Emma Richards','asdwad'),
('tvuong','Derek Vuong','derekvuong');

INSERT INTO friends (username1, username2, accepted) VALUES
('johndoe', 'janedoe', TRUE),
('johndoe', 'mike123', FALSE),
('johndoe', 'sarah_s', TRUE),
('janedoe', 'mike123', TRUE),
('janedoe', 'alice_92', FALSE),
('mike123', 'sarah_s', TRUE),
('mike123', 'tom_rock', FALSE),
('sarah_s', 'emily89', FALSE),
('alice_92', 'george22', TRUE),
('alice_92', 'claire_97', FALSE),
('tom_rock', 'andrew_h', TRUE),
('emily89', 'jessicaL', TRUE),
('george22', 'chris_k', FALSE),
('claire_97', 'oliviaJ', FALSE),
('andrew_h', 'matthewB', FALSE),
('jessicaL', 'rachel_R', FALSE),
('chris_k', 'nathanM', TRUE),
('oliviaJ', 'victoriaV', TRUE),
('matthewB', 'jasonW', FALSE),
('rachel_R', 'emma_R', TRUE);

INSERT INTO posts (username, description) VALUES
('mike123','Had an amazing trip to the beach!'),
('tvuong','Excited to start a new project.'),
('janedoe','Working on a new coding challenge.'),
('emily89','What a great day for a hike!'),
('claire_97','Just finished reading a great book!'),
('tom_rock','Time for some rock climbing!'),
('jessicaL','Loving my new adventure book!'),
('andrew_h','It`s a perfect day for a road trip!'),
('victoriaV','Looking forward to the weekend!'),
('oliviaJ','New blog post on coding tips!'),
('rachel_R','Checking out a new restaurant today!'),
('matthewB','Ready for the weekend party!'),
('jasonW','Great workout today!'),
('sarah_s','I`m loving this new game!'),
('george22','Cooking a new recipe today!'),
('alice_92','Just moved into a new house!'),
('nathanM','Excited for the concert next week!'),
('johndoe','Enjoying the coffee shop vibes!'),
('chris_k','Can`t wait for the upcoming trip!'),
('victoriaV','Got my new phone today!');



INSERT INTO comments (post_id, username, text) VALUES
('1','johndoe','Looks like fun! Wish I was there.'),
('2','janedoe','Good luck with the project!'),
('3','mike123','What challenge are you working on?'),
('4','sarah_s','Love this! Where did you go?'),
('5','alice_92','I read the same book! So good!'),
('6','tom_rock','Climbing sounds awesome!'),
('7','emily89','That book is amazing!'),
('8','george22','Road trips are the best!'),
('9','claire_97','I can`t wait either!'),
('10','andrew_h','Great tips, thanks for sharing!'),
('11','jessicaL','What did you order?'),
('12','chris_k','Let`s party!'),
('13','oliviaJ','Awesome job today!'),
('14','matthewB','That game is so fun!'),
('15','rachel_R','I need that recipe!'),
('16','nathanM','Congratulations on the new place!'),
('17','victoriaV','I`m so excited too!'),
('18','jasonW','Coffee is life!'),
('19','emma_R','I can`t wait either!'),
('20','tvuong','Enjoy your new phone!');

INSERT INTO post_likes (post_id, username) VALUES
(1, 'mike123'),
(2, 'tvuong'),
(3, 'janedoe'),
(4, 'emily89'),
(5, 'claire_97'),
(6, 'tom_rock'),
(7, 'jessicaL'),
(8, 'andrew_h'),
(9, 'victoriaV'),
(10, 'oliviaJ'),
(11, 'rachel_R'),
(12, 'matthewB'),
(13, 'jasonW'),
(14, 'sarah_s'),
(15, 'george22'),
(16, 'alice_92'),
(17, 'nathanM'),
(18, 'johndoe'),
(19, 'chris_k'),
(20, 'victoriaV');

INSERT INTO comment_likes (comment_id, username) VALUES
(1, 'johndoe'),
(2, 'rachel_R'),
(3, 'tom_rock'),
(4, 'victoriaV'),
(5, 'mike123'),
(6, 'sarah_s'),
(7, 'claire_97'),
(8, 'nathanM'),
(9, 'jessicaL'),
(10, 'george22'),
(11, 'andrew_h'),
(12, 'jasonW'),
(13, 'tvuong'),
(14, 'emily89'),
(15, 'alice_92'),
(16, 'chris_k'),
(17, 'oliviaJ'),
(18, 'matthewB'),
(19, 'janedoe'),
(20, 'victoriaV');
