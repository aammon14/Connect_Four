# Project1
### What features did it include?
I was able to create a functioning connect 4 game that checks for a winner. In my game, when a column is clicked, a disc drops to the lowest available space open. The discs alternate colors simulating two players. When one of the two players gets four in a row, a banner appears below the game board notifying the players which color has won.

### Were there any particular pain points or unsolved problems you had to manage? (e.g. technological, timing, content, etc.)
Yes there were a few... The first major pain point was figuring out how to add the click listener so that when you click anywhere on a column, a disc gets dropped into the column clicked on and the disc falls to the lowest open space. This was solved by looping through the clicked on column to see if the lowest space contained the class empty. If it was empty, the disc would fill the empty cell, if the space was not empty the disc would look to see if the next space was empty and so on.
The next major pain point was figuring out the win logic. There are 69 different winning combinations for each player. To make this more manageable I broke it into seperate parts. First I checked each of the 7 rows. For each row there are 4 different winning combinations. I then did the same for each column and both diagonal directions.

### Is there any other information you think might help us understand what you've built?
Basically all there is to this game is 1) build a grid 2) add click listeners to the grid 3) On click have discs drop into the grid and 4) check for win logic

### List the technologies used 
HTML, CSS, and Javascript (plain vanilla)

### Describe the approach taken
