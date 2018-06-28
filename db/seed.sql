### Seeds for haiku_type Table:

INSERT INTO haiku_type(form_type) VALUES ('authored');
INSERT INTO haiku_type(form_type) VALUES ('free-form');
INSERT INTO haiku_type(form_type) VALUES ('madlib');
INSERT INTO haiku_type(form_type) VALUES ('auto-generated');


### Seeds for haiku_category Table:
INSERT INTO haiku_category(category) VALUES ('Published');
INSERT INTO haiku_category(category) VALUES ('Funny');
INSERT INTO haiku_category(category) VALUES ('Romantic');
INSERT INTO haiku_category(category) VALUES ('For Fun');
INSERT INTO haiku_category(category) VALUES ('NSFW');


### Seeds for haikus Table:
INSERT INTO poems (poem_type,poem_title,poem_text,poem_author) 
VALUES ('free-form','In A Station of the Metro', 'The apparition of these faces in the crowd;
Petals on a wet, black bough.', 'Ezra Pound');
