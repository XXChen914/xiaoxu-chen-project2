# Welcome to [Lucy's Sudoku](https://xiaoxu-chen-project2.onrender.com)!
## Walkhthrough Video
See [Video]() here

## Render Link
See my [web in Render](https://xiaoxu-chen-project2.onrender.com)

## Writeup
1. **What were some challenges you faced while making this app?**  
One of the main challenges was designing a clean state-management structure and deciding how different components should interact. Because the game involves many interconnected pieces—like the board, cells, timer, validation rules, and difficulty modes, I needed a centralized place to manage all game logic. I solved this by creating a `SudokuContext` that stores the board state, rules, timer, and helper functions, while keeping components like `SudokuBoard` and `SudokuCell` purely presentational.  
Another challenge was coordinating the component hierarchy so that state flows top-down while user actions flow bottom-up without duplicating logic.  
Overall, the biggest learning experience was designing a clear architecture where each component has a single responsibility and all game logic is centralized in the context.
2. **Given more time, what additional features, functional or design changes would you make?**
- Hint System. Add a button to the game page that says “Hint”.  When a user presses this button, it highlighst a single square that can accept a single, valid answer.
- Auto-Save and Resume. Store the game state in localStorage. On page refresh or browser reopen, the game continues exactly where the player left off.
- Pause Button. Add a pause button to game pages so that users can pause the game and take a break.
3. **What assumptions did you make while working on this assignment?**  
I assumed users would interact with the game through both keyboard and onscreen number buttons, and that invalid inputs (such as letters or numbers outside the allowed range) should be ignored rather than cause errors. I also assumed that game state, including the timer and validation logic, should be centrally managed in context so that all components could rely on consistent behavior. These assumptions helped define clear boundaries for the project and kept the implementation aligned with the assignment's requirements.
4. **How long did this assignment take to complete?**  
Two days

# Attempt for Bonus Points
5. **What bonus points did you accomplish?** Please link to code where relevant and add any required details.   
- 3 Bonus Points: [Backtracking](https://github.com/XXChen914/xiaoxu-chen-project2/blob/eddfc2c7ab8be17b991e6dccf0aa588c88965ba4/src/utils/generator.js#L64C12-L64C16)