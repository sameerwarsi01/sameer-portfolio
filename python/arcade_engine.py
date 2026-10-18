"""
Dual Arcade System Prototype
Game 01: SNAKE (20x20 Vector Matrix)
Game 02: BREACH (Algorithmic Grid Sequence Hacker)
"""

import os
import random
import time
import sys

# Cross-platform non-blocking key capture
if os.name == 'nt':
    import msvcrt
    def get_input():
        if msvcrt.kbhit():
            ch = msvcrt.getch()
            if ch in (b'\x00', b'\xe0'):
                ch = msvcrt.getch()
                if ch == b'H': return 'UP'
                if ch == b'P': return 'DOWN'
                if ch == b'K': return 'LEFT'
                if ch == b'M': return 'RIGHT'
            try:
                return ch.decode('utf-8').lower()
            except UnicodeDecodeError:
                return None
        return None
else:
    import select
    def get_input():
        dr, _, _ = select.select([sys.stdin], [], [], 0)
        if dr:
            return sys.stdin.read(1).lower()
        return None


# ==========================================
# 1. GAME 01: SNAKE
# ==========================================
class SnakeGame:
    def __init__(self, size=20):
        self.size = size
        self.best_score = 0
        self.reset()

    def reset(self):
        mid = self.size // 2
        self.snake = [(mid, mid), (mid - 1, mid), (mid - 2, mid)]
        self.dir = 'RIGHT'
        self.score = 0
        self.game_over = False
        self.food = self._spawn_food()

    def _spawn_food(self):
        while True:
            pt = (random.randint(0, self.size - 1), random.randint(0, self.size - 1))
            if pt not in self.snake:
                return pt

    def update_dir(self, new_dir):
        opposites = {'UP': 'DOWN', 'DOWN': 'UP', 'LEFT': 'RIGHT', 'RIGHT': 'LEFT'}
        if new_dir in opposites and opposites[new_dir] != self.dir:
            self.dir = new_dir

    def tick(self):
        if self.game_over:
            return

        hx, hy = self.snake[0]
        dx, dy = {'UP': (0, -1), 'DOWN': (0, 1), 'LEFT': (-1, 0), 'RIGHT': (1, 0)}[self.dir]
        new_head = (hx + dx, hy + dy)

        # Boundary & self check
        if not (0 <= new_head[0] < self.size and 0 <= new_head[1] < self.size) or new_head in self.snake:
            self.game_over = True
            return

        self.snake.insert(0, new_head)
        if new_head == self.food:
            self.score += 10
            if self.score > self.best_score:
                self.best_score = self.score
            self.food = self._spawn_food()
        else:
            self.snake.pop()


# ==========================================
# 2. GAME 02: BREACH (Cyber Stream Hacker)
# ==========================================
class BreachGame:
    def __init__(self, grid_dim=4):
        self.dim = grid_dim
        self.best_score = 0
        self.reset()

    def reset(self):
        self.score = 0
        self.cursor_pos = [0, 0]
        self.game_over = False
        self.level = 1
        self._new_round()

    def _new_round(self):
        self.hex_grid = [
            [f"{random.choice('123456789ABCDEF')}{random.choice('123456789ABCDEF')}" for _ in range(self.dim)]
            for _ in range(self.dim)
        ]
        # Target sequence to match
        seq_len = min(2 + self.level // 2, 5)
        self.target_seq = [random.choice(random.choice(self.hex_grid)) for _ in range(seq_len)]
        self.player_seq = []
        self.time_left = 15.0  # seconds

    def move_cursor(self, direction):
        if self.game_over:
            return
        r, c = self.cursor_pos
        if direction == 'UP': self.cursor_pos[0] = max(0, r - 1)
        elif direction == 'DOWN': self.cursor_pos[0] = min(self.dim - 1, r + 1)
        elif direction == 'LEFT': self.cursor_pos[1] = max(0, c - 1)
        elif direction == 'RIGHT': self.cursor_pos[1] = min(self.dim - 1, c + 1)

    def select(self):
        if self.game_over:
            return
        r, c = self.cursor_pos
        picked = self.hex_grid[r][c]
        expected = self.target_seq[len(self.player_seq)]

        if picked == expected:
            self.player_seq.append(picked)
            self.score += 25
            if self.score > self.best_score:
                self.best_score = self.score

            # Completed sequence
            if len(self.player_seq) == len(self.target_seq):
                self.level += 1
                self._new_round()
        else:
            # Breach protocol failure
            self.game_over = True

    def tick(self, delta=0.1):
        if not self.game_over:
            self.time_left -= delta
            if self.time_left <= 0:
                self.game_over = True


# ==========================================
# 3. CONSOLE DISPLAY & CONTROL ENGINE
# ==========================================
def run_arcade():
    active_tab = 1  # 1 = Snake, 2 = Breach
    snake = SnakeGame(20)
    breach = BreachGame(4)
    tick_rate = 0.1

    while True:
        key = get_input()
        if key in ('q', 'Q'):
            break
        elif key == '1':
            active_tab = 1
        elif key == '2':
            active_tab = 2
        elif key in ('r', 'R'):
            if active_tab == 1: snake.reset()
            else: breach.reset()

        # Handle Tab 1: Snake
        if active_tab == 1:
            if key in ('w', 'UP'): snake.update_dir('UP')
            elif key in ('s', 'DOWN'): snake.update_dir('DOWN')
            elif key in ('a', 'LEFT'): snake.update_dir('LEFT')
            elif key in ('d', 'RIGHT'): snake.update_dir('RIGHT')
            snake.tick()

        # Handle Tab 2: Breach
        elif active_tab == 2:
            if key in ('w', 'UP'): breach.move_cursor('UP')
            elif key in ('s', 'DOWN'): breach.move_cursor('DOWN')
            elif key in ('a', 'LEFT'): breach.move_cursor('LEFT')
            elif key in ('d', 'RIGHT'): breach.move_cursor('RIGHT')
            elif key == ' ': breach.select()
            breach.tick(tick_rate)

        # Draw Terminal UI
        os.system('cls' if os.name == 'nt' else 'clear')

        # Header Tabs
        tab1_style = "\033[38;2;200;233;138m[ 01 SNAKE ]\033[0m" if active_tab == 1 else "  01 SNAKE  "
        tab2_style = "\033[38;2;200;233;138m[ 02 BREACH ]\033[0m" if active_tab == 2 else "  02 BREACH  "
        print(f"{tab1_style}    {tab2_style}    (Press 1 or 2 to switch)")
        print("\033[38;2;30;32;24m" + "─" * 52 + "\033[0m")

        if active_tab == 1:
            # Render Snake
            status = "FINISHED" if snake.game_over else "ACTIVE"
            print(f"\033[38;2;120;122;112m■  SNAKE / 001                      {status}\033[0m")
            print("\033[38;2;120;122;112mSCORE        PERSONAL BEST\033[0m")
            print(f"\033[38;2;200;233;138m{snake.score:03d}          {snake.best_score:03d}\033[0m")
            print()

            for y in range(snake.size):
                row_str = " "
                for x in range(snake.size):
                    if (x, y) == snake.snake[0]:
                        row_str += "\033[38;2;245;245;240m■ \033[0m"
                    elif (x, y) in snake.snake:
                        row_str += "\033[38;2;168;204;114m□ \033[0m"
                    elif (x, y) == snake.food:
                        row_str += "\033[38;2;200;233;138m◆ \033[0m"
                    else:
                        row_str += "\033[38;2;45;48;36m· \033[0m"
                print(row_str)

            print()
            if snake.game_over:
                print("\033[38;2;200;233;138mGame Over!\033[0m Press 'R' to play again.")
            else:
                print("\033[38;2;120;122;112mControls: WASD / Arrows. 'Q' to quit.\033[0m")

        else:
            # Render Breach
            status = "BREACH FAILED" if breach.game_over else f"TIMER: {breach.time_left:.1f}s"
            print(f"\033[38;2;120;122;112m■  BREACH / 002 (LVL {breach.level})             {status}\033[0m")
            print("\033[38;2;120;122;112mSCORE        PERSONAL BEST\033[0m")
            print(f"\033[38;2;200;233;138m{breach.score:03d}          {breach.best_score:03d}\033[0m")
            print()

            print("\033[38;2;120;122;112mTARGET BUFFER SEQUENCE:\033[0m")
            seq_display = " ".join([
                f"\033[38;2;200;233;138m[{tok}]\033[0m" if idx < len(breach.player_seq) else f"\033[38;2;120;122;112m{tok}\033[0m"
                for idx, tok in enumerate(breach.target_seq)
            ])
            print("  " + seq_display)
            print()

            print("\033[38;2;120;122;112mCODE MATRIX GRID:\033[0m")
            for r in range(breach.dim):
                row_str = "  "
                for c in range(breach.dim):
                    val = breach.hex_grid[r][c]
                    is_cur = breach.cursor_pos == [r, c]
                    if is_cur:
                        row_str += f"\033[48;2;200;233;138m\033[38;2;8;9;6m {val} \033[0m "
                    else:
                        row_str += f"\033[38;2;220;222;210m {val} \033[0m "
                print(row_str)

            print()
            if breach.game_over:
                print("\033[38;2;230;80;80mBreach Protocol Terminated.\033[0m Press 'R' to retry.")
            else:
                print("\033[38;2;120;122;112mNavigate: WASD/Arrows. Lock-in buffer: Spacebar.\033[0m")

        time.sleep(tick_rate)


if __name__ == "__main__":
    run_arcade()