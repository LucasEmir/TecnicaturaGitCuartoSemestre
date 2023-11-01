import math
from decimal import Decimal

# NaN (Not a Number)
a = float('NaN')
print(f'a: {a}')

# Módulo math
a = float('NaN')
print(f'Es de tpo NaN(Not a Number)?: {math.isnan(a)}')


# Módulo decimal
a = Decimal('NaN')
print(f'Es de tpo NaN(Not a Number)?: {math.isnan(a)}')