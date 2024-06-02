# Tic Tac Toe

This is a simple implementation of the classic game Tic Tac Toe.

## Rules

- The game is played on a 3x3 grid.
- Player take turns marking a cell with their respective symbols (usually X and O) against computer.
- The first player to get three of their symbols in a row (horizontally, vertically, or diagonally) wins the game.
- If all cells are filled and no player has won, the game is a draw.

## Known Issues

- After a delay, selectWinner() function to select a winner function does not get called.
- Choosing Player 0 assigns player to Computer instead of Player.
- Winning result does not properly display on mobile and tablet
- Computer does not block open space after two consecutive player moves
- Player input and placeholder width is too large on mobile and tablet display.

## Future Enhancements

- Implement a graphical user interface (GUI) for a more interactive experience.
- Add an AI opponent with different difficulty levels.
- Keep track of game statistics, such as wins, losses, and draws.
- Implement an undo feature to allow players to revert their moves.
