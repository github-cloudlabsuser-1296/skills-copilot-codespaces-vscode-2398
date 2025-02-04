import unittest
from app import add, subtract, multiply, divide, percentage

class TestCalculator(unittest.TestCase):

    def test_add(self):
        self.assertEqual(add(2, 3), 5)
        self.assertEqual(add(-1, 1), 0)
        self.assertEqual(add(-1, -1), -2)

    def test_subtract(self):
        self.assertEqual(subtract(10, 5), 5)
        self.assertEqual(subtract(-1, 1), -2)
        self.assertEqual(subtract(-1, -1), 0)

    def test_multiply(self):
        self.assertEqual(multiply(3, 7), 21)
        self.assertEqual(multiply(-1, 1), -1)
        self.assertEqual(multiply(-1, -1), 1)

    def test_divide(self):
        self.assertEqual(divide(10, 2), 5)
        self.assertEqual(divide(-1, 1), -1)
        self.assertEqual(divide(-1, -1), 1)
        self.assertEqual(divide(5, 0), "Error! Division by zero.")

    def test_percentage(self):
        self.assertEqual(percentage(50, 200), 25)
        self.assertEqual(percentage(1, 100), 1)
        self.assertEqual(percentage(0, 100), 0)

if __name__ == '__main__':
    unittest.main()