import numpy as np

rounds = 22

vals = np.zeros(rounds+1, dtype=np.int64)

for i in range(1, rounds+1):
    if (i == 1):
        vals[i] = 1
    elif(vals[i-1] < 0x80):
        vals[i] = vals[i-1] << 1
    else:
        vals[i] = (vals[i-1] << 1) ^ 0x11b

for i in vals:
    print("[", end="")
    print(hex(i), end=", ")
    print("0x00, 0x00, 0x00], ", end="")
print()