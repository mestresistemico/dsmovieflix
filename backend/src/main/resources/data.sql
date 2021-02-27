INSERT INTO tb_user (name, email, password) VALUES ('Bob Brown', 'bob@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG');
INSERT INTO tb_user (name, email, password) VALUES ('Ana Green', 'ana@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG');

INSERT INTO tb_role (authority) VALUES ('ROLE_VISITOR');
INSERT INTO tb_role (authority) VALUES ('ROLE_MEMBER');

INSERT INTO tb_user_role (user_id, role_id) VALUES (1, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (2, 2);

INSERT INTO tb_genre (name) VALUES ('Aventura');
INSERT INTO tb_genre (name) VALUES ('Comédia');
INSERT INTO tb_genre (name) VALUES ('Drama');

INSERT INTO tb_movie (title, sub_title, year, img_url, synopsis, genre_id) VALUES ('A Múmia', 'A lenda você conhece. A aventura você ainda precisa imaginar.', 1999, 'https://www.themoviedb.org/t/p/w500_and_h282_face/xbgzPINakUlas2rUMhuDp1AHFdi.jpg', 'Em 1923, um grupo de arqueólogos exploram o egito. Nessa exploração encontram o corpo mumificado de Imhotep. Quando um deles lê o texto do livro de Amon-Dei, acidentalmente traz Imhoptep de volta a vida. Ele ressurge cheio de ódio e só pensa em reencontrar sua amada e destruir todos que cruzem o seu caminho, trazendo consigo as dez pragas do Egito.', 1);
INSERT INTO tb_movie (title, sub_title, year, img_url, synopsis, genre_id) VALUES ('Mulher-Maravilha 1984', 'Uma nova era de maravilhas começa.', 2020, 'https://www.themoviedb.org/t/p/w500_and_h282_face/srYya1ZlI97Au4jUYAktDe3avyA.jpg', 'Em 1984, Diana Prince entra em conflito com dois inimigos formidáveis, Maxwell Lord e a Mulher-Leopardo, enquanto reencontra misteriosamente com seu antigo interesse amoroso Steve Trevor.', 1);
INSERT INTO tb_movie (title, sub_title, year, img_url, synopsis, genre_id) VALUES ('Arthur e Merlin: Cavaleiros de Camelot', '463 AD. A nation in need of a legend.', 2020, 'https://www.themoviedb.org/t/p/w500_and_h282_face/sFLgXQGrSWxnjmPOpGKPApWNOUH.jpg', 'O Rei Arthur volta para casa após lutar contra o Império Romano. Seu filho ilegítimo corrompeu o trono de Camelot e o Rei Arthur deve se reunir com o mago Merlin e os Cavaleiros da Távola Redonda para lutar para recuperar sua coroa.', 1);
INSERT INTO tb_movie (title, sub_title, year, img_url, synopsis, genre_id) VALUES ('Half Brothers', 'There"s no running from family.', 2020, 'https://www.themoviedb.org/t/p/w500_and_h282_face/umrpNeJooAyfvgPuOutNQHZdJ2p.jpg', 'A story about the complex connection with a brother who is based in Mexico, meant to be a metaphor of the relationship between neighboring countries America and Mexico.', 2);
INSERT INTO tb_movie (title, sub_title, year, img_url, synopsis, genre_id) VALUES ('Space Jam: Um Novo Legado', 'O Jogo do Século', 2021, 'https://www.themoviedb.org/t/p/w500_and_h282_face/wylOzTrkqpuggTEmHRgD31r5uG5.jpg', 'With the help of Bugs Bunny and the Looney Tunes, NBA superstar LeBron James must rescue his missing son Bronny by navigating through movies in the Warner Bros. catalogue as they challenge against the villainous Al-G"s plot to win a basketball game against his team of foes, which will be seen by the entire world.', 2);
INSERT INTO tb_movie (title, sub_title, year, img_url, synopsis, genre_id) VALUES ('Soul', 'Is all this living really worth dying for?', 2020, 'https://www.themoviedb.org/t/p/w500_and_h282_face/kf456ZqeC45XTvo6W9pW5clYKfQ.jpg', 'Joe Gardner é um professor de música de ensino fundamental desanimado por não conseguir alcançar seu sonho de tocar no lendário clube de jazz The Blue Note, em Nova York. Quando um acidente o transporta para fora do seu corpo, fazendo com que ele exista em outra realidade na forma de sua alma, ele se vê forçado a embarcar em uma aventura ao lado da alma de uma criança que ainda está aprendendo sobre si, para aprender o que é necessário para retomar sua vida.', 2);
INSERT INTO tb_movie (title, sub_title, year, img_url, synopsis, genre_id) VALUES ('A Festa', 'One party... can change your life', 2013, 'https://www.themoviedb.org/t/p/w220_and_h330_face/qNDHPwVi1Rf6E7F5vdjmTt9iPLb.jpg', 'Duffy, um ex "rei do campus" tem a última oportunidade de uma noitada antes do seu casamento. Ele terá que sobreviver à massagistas asiáticas, ex namoradas sensuais, campeonato de strip beer pong, travestis peitudas e tentações saídas direto de filmes pornôs.', 2);
INSERT INTO tb_movie (title, sub_title, year, img_url, synopsis, genre_id) VALUES ('Zé do Caixão', 'The life of the man who transformed death into art.', 2015, 'https://www.themoviedb.org/t/p/w220_and_h330_face/fIJlWkVfs3cNKv5DGhDGpGOiCSC.jpg', 'Lançado inicialmente comio uma minissérie, Aborda a vida do cineasta José Mojica Marins e seu famoso personagem, o Zé do Caixão. De forma paralela, a vida pessoal e as grandes obras do artista são retratadas.', 3);
INSERT INTO tb_movie (title, sub_title, year, img_url, synopsis, genre_id) VALUES ('Chatô, O Rei do Brasil', '', 2015, 'https://www.themoviedb.org/t/p/w500_and_h282_face/5EL6iDKz6C9YbvUHJQT77M2SksL.jpg', 'Cinebiografia de Assis Chateaubriand, também conhecido como Chatô. Primeiro magnata das comunicações do Brasil, destacando-se entre o final dos anos 1930 e início dos anos 1960, tinha uma próxima e polêmica relação com o ex-presidente Getúlio Vargas. Baseado em livro homônimo de Fernando Morais.', 3);
INSERT INTO tb_movie (title, sub_title, year, img_url, synopsis, genre_id) VALUES ('A Insustentável Leveza do Ser', 'A lovers" story', 1988, 'https://www.themoviedb.org/t/p/w500_and_h282_face/iySBMiD799KEYQY2jcbdvUQCk42.jpg', 'Em meados dos anos 60, em Praga, Tomas conhece a inocente Tereza e os dois se apaixonam. Porém, o médico também mantém relações com Sabina, uma mulher refinada. Mas a vida deste triângulo amoroso será afetada pelos acontecimentos deste período.', 3);
INSERT INTO tb_movie (title, sub_title, year, img_url, synopsis, genre_id) VALUES ('A Insustentável Leveza do Ser', 'A lovers" story', 1988, 'https://www.themoviedb.org/t/p/w500_and_h282_face/iySBMiD799KEYQY2jcbdvUQCk42.jpg', 'Em meados dos anos 60, em Praga, Tomas conhece a inocente Tereza e os dois se apaixonam. Porém, o médico também mantém relações com Sabina, uma mulher refinada. Mas a vida deste triângulo amoroso será afetada pelos acontecimentos deste período.', 3);
INSERT INTO tb_movie (title, sub_title, year, img_url, synopsis, genre_id) VALUES ('A Insustentável Leveza do Ser', 'A lovers" story', 1988, 'https://www.themoviedb.org/t/p/w500_and_h282_face/iySBMiD799KEYQY2jcbdvUQCk42.jpg', 'Em meados dos anos 60, em Praga, Tomas conhece a inocente Tereza e os dois se apaixonam. Porém, o médico também mantém relações com Sabina, uma mulher refinada. Mas a vida deste triângulo amoroso será afetada pelos acontecimentos deste período.', 3);
INSERT INTO tb_movie (title, sub_title, year, img_url, synopsis, genre_id) VALUES ('A Insustentável Leveza do Ser', 'A lovers" story', 1988, 'https://www.themoviedb.org/t/p/w500_and_h282_face/iySBMiD799KEYQY2jcbdvUQCk42.jpg', 'Em meados dos anos 60, em Praga, Tomas conhece a inocente Tereza e os dois se apaixonam. Porém, o médico também mantém relações com Sabina, uma mulher refinada. Mas a vida deste triângulo amoroso será afetada pelos acontecimentos deste período.', 3);

INSERT INTO tb_review (text, movie_id, user_id) VALUES ('Este filme é muito bom', 1, 2);
INSERT INTO tb_review (text, movie_id, user_id) VALUES ('Eu vi de novo', 1, 2);
INSERT INTO tb_review (text, movie_id, user_id) VALUES ('Morri de rir', 4, 2);
INSERT INTO tb_review (text, movie_id, user_id) VALUES ('Muito chatô', 9, 2);
INSERT INTO tb_review (text, movie_id, user_id) VALUES ('Muito chatô', 9, 2);
INSERT INTO tb_review (text, movie_id, user_id) VALUES ('Muito chatô', 9, 2);
INSERT INTO tb_review (text, movie_id, user_id) VALUES ('Muito chatô', 9, 2);
INSERT INTO tb_review (text, movie_id, user_id) VALUES ('Muito chatô', 9, 2);
INSERT INTO tb_review (text, movie_id, user_id) VALUES ('Muito chatô', 9, 2);
INSERT INTO tb_review (text, movie_id, user_id) VALUES ('Muito chatô', 9, 2);
INSERT INTO tb_review (text, movie_id, user_id) VALUES ('Muito chatô', 9, 2);
INSERT INTO tb_review (text, movie_id, user_id) VALUES ('Muito chatô', 9, 2);
INSERT INTO tb_review (text, movie_id, user_id) VALUES ('Muito chatô', 9, 2);
INSERT INTO tb_review (text, movie_id, user_id) VALUES ('Muito chatô', 9, 2);
INSERT INTO tb_review (text, movie_id, user_id) VALUES ('Muito chatô', 9, 2);
INSERT INTO tb_review (text, movie_id, user_id) VALUES ('Muito chatô', 9, 2);
INSERT INTO tb_review (text, movie_id, user_id) VALUES ('Muito chatô', 9, 2);
INSERT INTO tb_review (text, movie_id, user_id) VALUES ('Muito chatô', 9, 2);