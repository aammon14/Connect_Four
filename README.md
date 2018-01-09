# Project1

### What features did it include?
I was able to create a functioning connect 4 game that checks for a winner. In my game, when a column is clicked, a disc drops to the lowest available space open. The discs alternate colors simulating two players. When one of the two players gets four in a row, a banner appears below the game board notifying the players which color has won.

### Were there any particular pain points or unsolved problems you had to manage? (e.g. technological, timing, content, etc.)
Yes there were a few... The first major pain point was figuring out how to add the click listener so that when you click anywhere on a column, a disc gets dropped into the column clicked on and the disc falls to the lowest open space. This was solved by looping through the clicked on column to see if the lowest space contained the class empty. If it was empty, the disc would fill the empty cell, if the space was not empty the disc would look to see if the next space was empty and so on.
The next major pain point was figuring out the win logic. There are 69 different winning combinations for each player. To make this more manageable I broke it into seperate parts. First I checked each of the 7 rows. For each row there are 4 different winning combinations. I then did the same for each column and both diagonal directions.

### Is there any other information you think might help us understand what you've built?

### List the technologies used 
HTML, CSS, and Javascript (plain vanilla)

### Describe the approach taken
I broke the game down into four major steps.
Step 1)
The first step was to build a grid.  This step was pretty straight forward as I just needed to created a grid of divs with 7 columns and six rows.  I made sure to set the data of each div to its corresponding column.  I knew I would need this for the next step of adding click event listeners.
Step 2)
Next I needed to add the click event listener so that when any cell in one column is clicked on a function is run to drop a disc.
Step 3)
Then I configured my dropDisc function.  After a click this function is activated.  The function looks at the corresponding column and loops through the cells of that column.  It looks first at the bottom cell of that column to see if it contains the class 'empty'.  If that cell is empty it updates it with the corresponding player class.  If the cell is not empty, it looks at the next cell above.  Finally if all of the cells of the column are full, an alert pops up to tell the user to try a different column.  As each disc is dropped, the board is checked for any wins or a draw.
4) check for win logic
This was the most interesting part of the game.  For each player there are 69 different winning combinations on the board.  In order to check for each one, I broke it down by row, column, and diagonals.  For each row there are 4 different wining combinations, for each column there are 3 winning combinations, for diagonals going down to the right there are 12 different win combinations, and for the diagonals going down to the left there are 12 different win combinations.

