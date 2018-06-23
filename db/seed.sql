### Seeds for poem_type Table:

INSERT INTO poem_type(category) VALUES ('free-form');
INSERT INTO poem_type(category) VALUES ('madlib');
INSERT INTO poem_type(category) VALUES ('auto-generated');


### Seeds for poems Table:
INSERT INTO poems (poem_type,poem_title,poem_text,poem_author) 
VALUES ('free-form','In A Station of the Metro', 'The apparition of these faces in the crowd;
Petals on a wet, black bough.', 'Ezra Pound');
