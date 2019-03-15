import sys, bisect

blks=[0,1] # start indices for i=0,1,...
blkpos=2   # insertion position / current length of prefix+1
blkidx=1   # current block
blksize=1  # current block size
blkstr="1"
while blkpos < 10**9: 
    blkidx += 1
    blkstr += str(blkidx)
    blks.append(blkpos)
    blksize += len(str(blkidx)) # slighly slower than math.log10(blkidx) but safer
    blkpos += blksize

n = int(sys.stdin.readline())
for loop in range(n):
    i = int(sys.stdin.readline())
    j = bisect.bisect_right(blks,i)-1
    print(blkstr[i-blks[j]])
